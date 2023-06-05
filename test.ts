// 用DFA算法过滤敏感词
// 使用方法：import { DFA } from './test.ts'
// const dfa = new DFA()
// dfa.init()
// dfa.isContain('敏感词')
// dfa.replace('敏感词')
// dfa.replace('敏感词', '*')

export class DFA {
  private tree: any
  private replaceSymbol: string

  constructor() {
    this.tree = {}
    this.replaceSymbol = '*'
  }

  init() {
    // const words = require('./words.json')
     const words = "敏感词"
    for (const word of words) {
      this.add(word)
    }
  }

  add(word: string) {
    let node = this.tree
    for (const char of word) {
      if (!node[char]) {
        node[char] = {}
      }
      node = node[char]
    }
    node.isEnd = true
  }

  isContain(word: string) {
    let node = this.tree
    for (const char of word) {
      if (node[char]) {
        node = node[char]
        if (node.isEnd) {
          return true
        }
      } else {
        break
      }
    }
    return false
  }

  replace(word: string, replaceSymbol?: string) {
    let node = this.tree
    let index = 0
    let result = ''
    for (const char of word) {
      if (node[char]) {
        node = node[char]
        if (node.isEnd) {
          result += replaceSymbol || this.replaceSymbol
          index++
          node = this.tree
        } else {
          result += char
          index++
        }
      } else {
        result += word[index]
        index++
        node = this.tree
      }
    }
    return result
  }
}
const dfa = new DFA()
dfa.init()
dfa.isContain('敏感词')
dfa.replace('敏感词')
dfa.replace('敏感词', '1')