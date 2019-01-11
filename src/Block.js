import SHA256 from 'crypto-js/sha256'

class Block {
  constructor(timestamp, transactions, previousHash = '') {
    this.timestamp = timestamp
    this.transactions = transactions
    this.previousHash = previousHash
    this.hash = this.calculateHash()
    this.nonce = 0
  }

  calculateHash() {
    return SHA256(this.index + this.previousHash + this.timestamp + this.data + this.nonce).toString()
  }

  mineBlock(difficulty) {
     while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
         this.nonce++;
         this.hash = this.calculateHash();
     }

     console.log("BLOCK MINED: " + this.hash);
  }
}

export default Block
