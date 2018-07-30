#!/usr/bin/env node
const repl = require('repl')
const context = repl.start('$ ').context

const webtoken = require('jsonwebtoken')

function create (data, secret){
    let stuff = {exp: new Date(myDate.setDate(myDate.getDate() + 7)), ...data}
    console.log('Bearer Token: ' + webtoken.sign({...stuff }, secret, { algorithm: 'HS256' }))
}

context.create = create