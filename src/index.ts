import './greet.js?world' // first let's greet the world
import './greet.js?world' // this is a no-op. we've already greeted the world!
import './greet.js?moon' // let's be nice to the moon too

// we can also use dynamic imports to have interactive programs:
import readline from 'node:readline'

const cli = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

cli.question(`What's your name? `, name => {
  import(`./greet.js?${name}`)
  cli.close()
})
