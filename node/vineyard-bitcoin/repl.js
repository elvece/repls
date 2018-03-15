#!/usr/bin/env node
const repl = require('repl')
const context = repl.start('$ ').context
const bitcoin = require('vineyard-bitcoin')
context.bitcoin = bitcoin
const config = { port: 18332, user: 'user', pass: 'pass', host: 'CHANGEME' }
const b = new bitcoin.BitcoinClient(config)
context.b = b
