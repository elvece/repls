#!/usr/bin/env node
const repl = require('repl')
const context = repl.start('$ ').context

const Web3 = require('web3')
const web3 = new Web3()
web3.setProvider(new web3.providers.HttpProvider('https://mainnet.infura.io/9ag7ZLZ61YZcHMP3Fco1'))

context.web3 = web3
