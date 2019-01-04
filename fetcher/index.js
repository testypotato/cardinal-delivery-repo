var git = require('git-state')
 
var path = '../'
 
git.isGit(path, (exists) => {
  if (!exists) return
 
  git.commit(path, (err, r) => {
    if (err) throw err

    console.log(r)
  })
})