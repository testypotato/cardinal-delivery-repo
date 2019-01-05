const git = require('git-state')
const shell = require('shelljs');
const fs = require('fs')

const path = '../'
const fileLocation = 'temp.txt'

const saveFile = (location, data) => {
    fs.writeFile(location, data, (err) => {
        if (err) throw err
    })
}

git.isGit(path, async(exists) => {
    if (!exists) return

    try {
        shell.exec('sh ./scripts/git-pull.sh')
        const currentHash = await git.commitSync(path, (err, hash) => {
            if (err) throw err

            return hash
        })
        if (!await fs.existsSync(fileLocation)) {
            saveFile(fileLocation, currentHash)
        }

        const lastHash = await fs.readFileSync(fileLocation, buf => buf).toString()

        if (currentHash !== lastHash) {
            console.log(`Updating | Time: ${new Date().getTime()}`)

            shell.exec('run.sh')
            // saveFile(fileLocation, currentHash)
            // exec('sh server-reload.sh', err => {throw err})
        }
        

    } catch (err) {
        console.log(err)
    }
})