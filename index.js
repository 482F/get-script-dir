async function getScriptDir() {
  const fs = require('fs')
  const scriptPath = process.argv[1]
  const scriptRealPath = await new Promise((resolve, reject) =>
    fs.realpath(scriptPath, (err, result) => {
      if (err) reject(err)
      else resolve(result)
    })
  )
  const path = require('path')
  const scriptDirPath = path.dirname(scriptRealPath)
  return scriptDirPath
}

module.exports = {
  getScriptDir,
}
