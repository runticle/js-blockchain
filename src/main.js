import Blockchain from './Blockchain'
import Block from './Block'
import Wallet from './Wallet'

let alfChain = new Blockchain()
alfChain.addBlock(new Block(alfChain.nextBlockIndex, Date.now(), {message: "This is a mad ting!"}))
alfChain.addBlock(new Block(alfChain.nextBlockIndex, Date.now(), {message: "I'm another block!"}))

console.log(JSON.stringify(alfChain, null, 4))
console.log("Is Blockchain valid? " + alfChain.checkValid())
