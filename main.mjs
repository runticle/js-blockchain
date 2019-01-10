import Blockchain from './Blockchain'
import Block from './Block'

let alfChain = new Blockchain()
alfChain.addBlock(new Block("02/01/2019", {message: "This is a mad ting!"}))
alfChain.addBlock(new Block("03/01/2019", {message: "I'm another block!"}))

console.log(JSON.stringify(alfChain, null, 4))
console.log("Is Blockchain valid? " + alfChain.checkValid())
