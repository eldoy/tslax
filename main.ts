let lib = require('./lib/hello.ts')

let user: User = { name: 'Tekki', email: 'hei@tekki.no' }

let name: string = lib.hello(user)

console.log(name)
