import { greet } from '../src/index.js'
if (greet('x') !== 'Hello, x') { throw new Error('fail') }
console.log('ok')
