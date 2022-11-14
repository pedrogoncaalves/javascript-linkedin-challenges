
const username = Symbol('username')
const password = Symbol('passowrd')



const user = {
    
    [username]: 'pedrinho o brabo',
    [password]: 'senhadificil',
    age: 21

}

console.log(user.username)

