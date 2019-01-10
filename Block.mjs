import SHA256 from 'crypto-js/sha256'

class Block {
  constructor(index, timestamp, data) {
    this.index = index
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

export default Block
