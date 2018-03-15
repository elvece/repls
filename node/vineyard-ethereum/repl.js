#!/usr/bin/env node
const repl = require('repl')
const context = repl.start('$ ').context
const eth = require('vineyard-ethereum')
context.eth = eth
const e = new eth.Web3EthereumClient({ http: 'CHANGEME' })
context.e = e
