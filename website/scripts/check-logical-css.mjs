// Fails if any style uses physical directions (left/right). Use logical properties instead,
// e.g. margin-inline-start, padding-inline-end, inset-inline-start, text-align: start.
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const PHYSICAL = [
  /\b(margin|padding|border|inset|scroll-margin|scroll-padding)-(left|right)\b/,
  /(^|[\s;{])(left|right)\s*:/,
  /\b(text-align|float|clear)\s*:\s*(left|right)\b/,
  /\bborder-(top|bottom)-(left|right)-radius\b/,
]

function files(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) return files(path)
    return /\.(css|tsx?)$/.test(name) ? [path] : []
  })
}

const problems = []
for (const file of files('src')) {
  readFileSync(file, 'utf8')
    .split('\n')
    .forEach((line, index) => {
      if (PHYSICAL.some((rule) => rule.test(line))) problems.push(`${file}:${index + 1}: ${line.trim()}`)
    })
}

if (problems.length) {
  console.error('Physical left/right styles found. Use logical properties instead:\n' + problems.join('\n'))
  process.exit(1)
}
console.log('Logical CSS check passed.')
