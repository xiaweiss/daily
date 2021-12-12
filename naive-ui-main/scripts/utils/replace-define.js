const fs = require('fs').promises
const { walk } = require('.')

exports.replaceDefine = async (dirs, defines) => {
  const defineKeys = Object.keys(defines)
  const patterns = {}
  defineKeys.forEach((key) => {
    patterns[key] = new RegExp(key, 'g')
  })
  for (const dir of dirs) {
    for await (const p of walk(dir)) {
      const code = await fs.readFile(p, 'utf-8')
      for (const key of defineKeys) {
        const pattern = patterns[key]
        if (pattern.test(code)) {
          const outCode = code.replace(pattern, defines[key])
          await fs.writeFile(p, outCode)
        }
      }
    }
  }
}
