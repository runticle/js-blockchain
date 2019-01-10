import Block from './Block'

class Blockchain {
  constructor() {
    this.chain = [this.createGenesis()]
    this.nextBlockIndex = 1
  }

  createGenesis() {
    return new Block(0, Date.now(), "My first Blockchain!")
  }

  latestBlock() {
    return this.chain[this.chain.length - 1]
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.latestBlock().hash
    newBlock.hash = newBlock.calculateHash()
    this.chain.push(newBlock)
    this.nextBlockIndex ++
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

export default Blockchain
