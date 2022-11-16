const {Octokit} = require('octokit')


const octokit = new Octokit({
    auth: process.env.GH_LOG
})

class OctoController {

async getUsers(req,res) {
    const {data} = await octokit.request('GET /users/?since={number}', {
        number: req.body
    })

    return res.json({data})
}



    async getUsersDetails(req,res) {
        const {data} = await octokit.request('GET /users/{username}', {
            username: req.body
          })
    
          return res.json({data})
        
    }

    async getRepos(req,res) {
        const {data} = await octokit.request('GET /users/{username}/repos', {
            username: req.body
        })

        return res.json({data})
    }
}

module.exports= OctoController