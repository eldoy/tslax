import * as lib from './lib/hello.ts'

let user: User = { name: 'Tekki', email: 'hei@tekki.no' }
let name: string = lib.hello(user)

console.log(name)
