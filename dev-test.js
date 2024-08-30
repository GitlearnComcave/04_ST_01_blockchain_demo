// Import
const Block = require("./block");
const Blockchain = require("./blockchain");

/***  Test der Block-Funktionalität  */
// const block = new Block("aktuelle zeit","hash1","hash2","Blockdaten");
// console.log(block.toString());

//console.log(Block.genesis().toString());
// const testBlock = Block.mineBlock(Block.genesis(), "testDaten");
// console.log(testBlock.toString());

/***  Test der Blockchain-Funktionalität  */
const chain = new Blockchain();
console.log(chain);

chain.addBlock("69420€ von Morell");
console.log(chain);
