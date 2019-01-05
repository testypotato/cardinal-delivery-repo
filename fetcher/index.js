const git = require('git-state')
const fs = require('fs')

const path = '../'
const fileLocation = 'temp.txt'

git.isGit(path, async (exists) => {
    if (!exists) return

    const currentHash = await git.commitSync(path, (err, hash) => {
        if (err) throw err

        return hash
    })
    const lastHash = await fs.readFileSync(fileLocation, (err, buf) => {
        if (err) throw err

        return buf
    }).toString()

    if(currentHash !== lastHash) {
      console.log('script')
    }
    // fs.writeFile(fileLocation, currentHash, (err) => {
    //     if (err) throw err
    // })

})