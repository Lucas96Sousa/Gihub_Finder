const {Octokit} = require('octokit')


const octokit = new Octokit({
    auth: process.env.GH_LOG
})

 getUsers = async() => {
    const listUsers = await octokit.request('GET /users/?since={number}', {
        number: 1
    })

    return console.log(listUsers.data)
}

    getUsersDetails = async () => {
        const getUsersDetail = await octokit.request('GET /users/{username}', {
            username: 'lucas96sousa'
          })
    
          return console.log(getUsersDetails)
        
    }

    getRepos = async () => {
        const repo = await octokit.request('GET /users/{username}/repos', {
            username: 'lucas96sousa'
        })

        return console.log(repo)
    }
getUsersDetails()
getUsersDetails()
getRepos()

