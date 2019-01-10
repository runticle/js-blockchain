class Wallet {
  constructor(){
    this.balance = 0
    this.publicKey = this.createPubKey()
    this.privateKey = this.createPrivKey()
  }

  spend(amount, publicKey) {

  }

  add(amount) {
    this.balance += amount
  }
}

export default Wallet

// tx class? how is the wallet info stored? on every block??
