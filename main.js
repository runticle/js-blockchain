const SHA256 = require('crypto-js/sha256')

class Block {
  constructor(timestamp, data) {
    this.index = 0
    this.timestamp = timestamp
    this.data = data
    this.previousHash = "0"
    this.hash = this.calculateHash()
    this.nonce = 0
  }

  calculateHash() {
    return SHA256(this.index + this.previousHash + this.timestamp + this.data + this.nonce).toString()
  }

  mineBlock(difficulty) {

  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesis()]
  }

  createGenesis() {
    return new Block(0, "01/01/2019", "My first Blockchain!", "0")
  }

  latestBlock() {
    return this.chain[this.chain.length - 1]
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.latestBlock().hash
    newBlock.hash = newBlock.calculateHash()
    this.chain.push(newBlock)
  }

  checkValid() {
    for(let i=1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i]
      const previousBlock = this.chain[i - 1]

      if(currentBlock.hash !== currentBlock.calculateHash()) {
        return false
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false
      }

    }

    return true
  }
}

let alfChain = new Blockchain()
alfChain.addBlock(new Block("02/01/2019", {message: "This is a mad ting!"}))
alfChain.addBlock(new Block("03/01/2019", {message: "I'm another block!"}))

console.log(JSON.stringify(alfChain, null, 4))
console.log("Is Blockchain valid? " + alfChain.checkValid())
