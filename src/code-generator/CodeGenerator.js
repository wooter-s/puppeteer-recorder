import domEvents from './dom-events-to-record'
import pptrActions from './pptr-actions'
import Block from './Block'
import transformSelectorToAntdSelctor from './antdCodeTransfer'

// const importPuppeteer = `const puppeteer = require('puppeteer');\n`

const header = `const browser = await puppeteer.launch()
const page = await browser.newPage()`

const footer = `await browser.close()`

// const wrappedHeader = `(async () => {
//   const browser = await puppeteer.launch()
//   const page = await browser.newPage()\n`
//
// const wrappedFooter = `  await browser.close()
// })()`

const wooterHeader = `
import { Base } from "puppeteer-runner";

export const NodeName =  async (base: Base) => {
  const page = base.page;\n
`

const wooterFooter = `};`

export const defaults = {
  wrapAsync: true,
  headless: true,
  waitForNavigation: true,
  waitForSelectorOnClick: true,
  blankLinesBetweenBlocks: true,
  dataAttribute: ''
}

export default class CodeGenerator {
  constructor (options) {
    this._options = Object.assign(defaults, options)
    this._blocks = []
    this._frame = 'page'
    this._frameId = 0
    this._allFrames = {}
    this._screenshotCounter = 1

    this._hasNavigation = false
  }

  generate (events, isDeleteChildIndex = false) {
    return this._getHeader() + this._parseEvents(events, isDeleteChildIndex) + this._getFooter()
  }

  _getHeader () {
    console.debug(this._options)
    let hdr = this._options.wrapAsync ? wooterHeader : header
    hdr = this._options.headless ? hdr : hdr.replace('launch()', 'launch({ headless: false })')
    return hdr
  }

  _getFooter () {
    return this._options.wrapAsync ? wooterFooter : footer
  }

  _displayStringLimit (string) {
    if (!string) {
      return ''
    }
    if (string.length > 50) {
      return `${string.slice(0, 50)} ...`
    }
    return string
  }
  _generatorComment ({ innerText, parentInnerText, placeholder }) {
    if (innerText) {
      return `// 节点内容:${this._displayStringLimit(innerText)}\n`
    }
    if (placeholder) {
      return `// 节点提示:${placeholder}\n`
    }
    if (parentInnerText) {
      return `// 父级内容:${this._displayStringLimit(parentInnerText)}\n`
    }
    return ''
  }
  _parseEvents (events, isDeleteChildIndex) {
    console.debug(`generating code for ${events ? events.length : 0} events`)
    let result = ''

    if (!events) return result

    for (let i = 0; i < events.length; i++) {
      const { action, selector, value, href, keyCode, tagName, frameId, frameUrl, innerText, placeholder, parentInnerText, parentSelector } = events[i]

      // we need to keep a handle on what frames events originate from
      this._setFrames(frameId, frameUrl)

      switch (action) {
        case 'keydown':
          if (keyCode === 9) { // tab key
            this._blocks.push(this._handleKeyDown(selector, value, keyCode))
          }
          break
        case 'click':
          // dbclick delete repeat
          if (events[i + 2] && events[i + 2]['action'] === 'dblclick') {
            i++
            break
          }
          this._blocks.push(this._handleClick(selector, innerText, placeholder, parentSelector, parentInnerText, isDeleteChildIndex, events))
          break
        case 'dblclick':
          this._blocks.push(this._handleDbClick(selector, innerText, placeholder, parentInnerText, isDeleteChildIndex, events))
          break
        case 'change':
          if (tagName === 'SELECT') {
            this._blocks.push(this._handleChange(selector, value))
          }
          break
        case pptrActions.GOTO:
          this._blocks.push(this._handleGoto(href, frameId))
          break
        // case pptrActions.VIEWPORT:
        //   this._blocks.push((this._handleViewport(value.width, value.height)))
        //   break
        case pptrActions.NAVIGATION:
          this._blocks.push(this._handleWaitForNavigation())
          this._hasNavigation = true
          break
        case pptrActions.SCREENSHOT:
          this._blocks.push(this._handleScreenshot(value))
          break
      }
    }

    if (this._hasNavigation && this._options.waitForNavigation) {
      console.debug('Adding navigationPromise declaration')
      const block = new Block(this._frameId, {
        type: pptrActions.NAVIGATION_PROMISE,
        value: 'const navigationPromise = page.waitForNavigation()'
      })
      this._blocks.unshift(block)
    }

    console.debug('post processing blocks:', this._blocks)
    this._postProcess()

    const indent = this._options.wrapAsync ? '  ' : ''
    const newLine = `\n`

    for (let block of this._blocks) {
      const lines = block.getLines()
      for (let line of lines) {
        result += indent + line.value + newLine
      }
    }

    return result
  }

  _setFrames (frameId, frameUrl) {
    if (frameId && frameId !== 0) {
      this._frameId = frameId
      this._frame = `frame_${frameId}`
      this._allFrames[frameId] = frameUrl
    } else {
      this._frameId = 0
      this._frame = 'page'
    }
  }

  _postProcess () {
    // when events are recorded from different frames, we want to add a frame setter near the code that uses that frame
    if (Object.keys(this._allFrames).length > 0) {
      this._postProcessSetFrames()
    }

    if (this._options.blankLinesBetweenBlocks && this._blocks.length > 0) {
      this._postProcessAddBlankLines()
    }
  }

  _handleKeyDown (selector, value) {
    const block = new Block(this._frameId)
    block.addLine({ type: domEvents.KEYDOWN, value: `await ${this._frame}.type('${selector}', '${value}')` })
    return block
  }

  _handleClick (selector, innerText, placeholder, parentSelector, parentInnerText, isDeleteChildIndex) {
    const block = new Block(this._frameId)
    // if (this._options.waitForSelectorOnClick) {
    //   block.addLine({ type: domEvents.CLICK, value: `await ${this._frame}.waitForSelector('${selector}')` })
    // }
    // block.addLine({ type: domEvents.CLICK, value: `await ${this._frame}.click('${selector}')` })

    // if (!isDeleteChildIndex) {
    //   block.addLine({
    //     type: domEvents.CLICK,
    //     value: `// ${selector} | ${innerText}\n  await base.click('${transformSelectorToAntdSelctor(selector)}')`
    //   })
    //   return block
    // }

    const selectorDeleteChildIndex = transformSelectorToAntdSelctor(selector)

    if (innerText) {
      block.addLine({
        type: domEvents.CLICK,
        // value: `// ${selector}\n${this._generatorComment({ innerText })}  await base.click('${selectorDeleteChildIndex}','${innerText}')`,
        value: `${this._generatorComment({ innerText })}  await base.click('${selectorDeleteChildIndex}')`
      })
      return block
    }

    if (placeholder) {
      block.addLine({
        type: domEvents.CLICK,
        value: `${this._generatorComment({ placeholder })}  await base.click('${selectorDeleteChildIndex}[placeholder=${placeholder}]')`
      })
      return block
    }

    if (parentInnerText) {
      block.addLine({
        type: domEvents.CLICK,
        // value: `// ${selector}\n${this._generatorComment({ parentInnerText })}  await base.clickChildWithText('${transformSelectorToAntdSelctor(parentSelector)}', '${parentInnerText}', '${selectorDeleteChildIndex}')`
        value: `${this._generatorComment({ parentInnerText })}  await base.click('${selectorDeleteChildIndex}')`
      })
      return block
    }

    block.addLine({
      type: domEvents.CLICK,
      value: `${this._generatorComment({ innerText, parentInnerText })}  await base.click('${selector}')`
    })
    return block
  }

  _handleDbClick (selector, innerText, placeholder, parentInnerText, isDeleteChildIndex, events) {
    return new Block(this._frameId, {
      type: domEvents.DBLCLICK,
      value: `${this._generatorComment({ innerText, parentInnerText })}  await base.hover('${selector}')`
    })
  }
  // _handleClick (selector) {
  //   const block = new Block(this._frameId)
  //   // if (this._options.waitForSelectorOnClick) {
  //   //   block.addLine({ type: domEvents.CLICK, value: `await ${this._frame}.waitForSelector('${selector}')` })
  //   // }
  //   // block.addLine({ type: domEvents.CLICK, value: `await ${this._frame}.click('${selector}')` })
  //   block.addLine({
  //     type: domEvents.CHANGE,
  //     value: `await base.click('${selector}')`
  //   })
  //   return block
  // }
  _handleChange (selector, value) {
    return new Block(this._frameId, {
      type: domEvents.CHANGE,
      value: `await ${this._frame}.select('${selector}', '${value}')`
    })
  }

  _handleGoto (href) {
    return new Block(this._frameId, { type: pptrActions.GOTO, value: `await ${this._frame}.goto('${href}')` })
  }

  _handleViewport (width, height) {
    return new Block(this._frameId, {
      type: pptrActions.VIEWPORT,
      value: `await ${this._frame}.setViewport({ width: ${width}, height: ${height} })`
    })
  }

  _handleScreenshot (options) {
    let block

    if (options && options.x && options.y && options.width && options.height) {
      // remove the tailing 'px'
      for (let prop in options) {
        if (options.hasOwnProperty(prop) && options[prop].slice(-2) === 'px') {
          options[prop] = options[prop].substring(0, options[prop].length - 2)
        }
      }

      block = new Block(this._frameId, {
        type: pptrActions.SCREENSHOT,
        value: `await ${this._frame}.screenshot({ path: 'screenshot_${this._screenshotCounter}.png', clip: { x: ${options.x}, y: ${options.y}, width: ${options.width}, height: ${options.height} } })`
      })
    } else {
      block = new Block(this._frameId, {
        type: pptrActions.SCREENSHOT,
        value: `await ${this._frame}.screenshot({ path: 'screenshot_${this._screenshotCounter}.png' })`
      })
    }

    this._screenshotCounter++
    return block
  }

  _handleWaitForNavigation () {
    const block = new Block(this._frameId)
    if (this._options.waitForNavigation) {
      block.addLine({ type: pptrActions.NAVIGATION, value: `await navigationPromise` })
    }
    return block
  }

  _postProcessSetFrames () {
    for (let [i, block] of this._blocks.entries()) {
      const lines = block.getLines()
      for (let line of lines) {
        if (line.frameId && Object.keys(this._allFrames).includes(line.frameId.toString())) {
          const declaration = `const frame_${line.frameId} = frames.find(f => f.url() === '${this._allFrames[line.frameId]}')`
          this._blocks[i].addLineToTop(({ type: pptrActions.FRAME_SET, value: declaration }))
          this._blocks[i].addLineToTop({ type: pptrActions.FRAME_SET, value: 'let frames = await page.frames()' })
          delete this._allFrames[line.frameId]
          break
        }
      }
    }
  }

  _postProcessAddBlankLines () {
    let i = 0
    while (i <= this._blocks.length) {
      const blankLine = new Block()
      blankLine.addLine({ type: null, value: '' })
      this._blocks.splice(i, 0, blankLine)
      i += 2
    }
  }
}
