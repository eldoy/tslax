function hello(user: User): string {
  console.log('hello')
  return 'hello ' + user.name
}

module.exports = { hello }
