import Block from './Block'
import Transaction from './Transaction'

class Blockchain {
  constructor(genesisNode) {
    this.chain = [this.createGenesisBlock()]
    this.nodes = [+genesisNode]
    this.difficulty = 3
    this.pendingTransactions = []
    this.miningReward = 100
  }

  registerNode(port) {
      if (!this.nodes.includes(port)) {
          this.nodes.push(port);
      }
  }

   retrieveNodes() {
       return this.nodes;
   }

   updateBlockchain(newChain) {
       this.chain = newChain;
   }

  createGenesisBlock() {
    return new Block(Date.parse('11/01/2019'), [], "0")
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1]
  }

  createTransaction(transaction){
    this.pendingTransactions.push(transaction)
  }

  minePendingTransactions(miningRewardAddress){
    let block = new Block(Date.now(), this.pendingTransactions, this.getLatestBlock().hash);
    block.mineBlock(this.difficulty)
    this.chain.push(block)

    console.log("Block Mined!!")

    this.pendingTransactions = [
      new Transaction(null, miningRewardAddress, this.miningReward)
    ]
  }

  getBalanceOfAddress(address){
    let balance = 0

    for(const block of this.chain) {
      for(const trans of block.transactions){
        if(trans.fromAddress === address){
          balance -= trans.amount
        }

        if(trans.toAddress === address){
          balance += trans.amount
        }
      }
    }

    return balance
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
