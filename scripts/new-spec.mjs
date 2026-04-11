import fs from 'node:fs'
import path from 'node:path'

const cwd = process.cwd()
const args = process.argv.slice(2)

const getArgValue = (flag) => {
  const direct = args.find((arg) => arg.startsWith(`${flag}=`))
  if (direct) {
    return direct.slice(flag.length + 1)
  }

  const index = args.indexOf(flag)
  if (index >= 0) {
    return args[index + 1]
  }

  return undefined
}

const hasFlag = (flag) => args.includes(flag)

const rawName = getArgValue('--name') || args.find((arg) => !arg.startsWith('--'))
if (!rawName) {
  console.error('Usage: npm run new:spec -- <feature-name> [--type feature|revamp] [--delivery]')
  process.exit(1)
}

const type = getArgValue('--type') || 'feature'
if (!['feature', 'revamp'].includes(type)) {
  console.error(`Unsupported type "${type}". Use "feature" or "revamp".`)
  process.exit(1)
}

const includeDelivery = hasFlag('--delivery')
const slug = rawName
  .trim()
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '')

if (!slug) {
  console.error('Feature name must contain letters or numbers.')
  process.exit(1)
}

const title = slug
  .split('-')
  .filter(Boolean)
  .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
  .join(' ')

const readTemplate = (relativePath) => {
  return fs.readFileSync(path.join(cwd, relativePath), 'utf8')
}

const writeIfMissing = (relativePath, content) => {
  const targetPath = path.join(cwd, relativePath)
  if (fs.existsSync(targetPath)) {
    console.warn(`skip ${relativePath} (already exists)`)
    return
  }

  fs.mkdirSync(path.dirname(targetPath), { recursive: true })
  fs.writeFileSync(targetPath, content)
  console.log(`create ${relativePath}`)
}

const renderTemplate = (template, heading) => {
  return template.replace(/^# .*/u, `# ${heading}`)
}

const researchTemplate =
  type === 'revamp'
    ? readTemplate('templates/revamp-init.md')
    : readTemplate('templates/feature-init.md')

const specTemplate = readTemplate('templates/product-design.md')
const prdTemplate = readTemplate('templates/external-prd.md')
const testTemplate = readTemplate('templates/test-strategy.md')

writeIfMissing(`research/${slug}.md`, renderTemplate(researchTemplate, `${title} ${type === 'revamp' ? 'Revamp Init' : 'Feature Init'}`))
writeIfMissing(`specs/${slug}.md`, renderTemplate(specTemplate, `${title} Product Design`))

if (includeDelivery) {
  writeIfMissing(`delivery/${slug}_prd.md`, renderTemplate(prdTemplate, `${title} External PRD`))
  writeIfMissing(`delivery/${slug}_test-strategy.md`, renderTemplate(testTemplate, `${title} Test Strategy`))
}

console.log('')
console.log('Next steps:')
console.log(`1. Fill research/${slug}.md`)
console.log(`2. Refine specs/${slug}.md`)
if (includeDelivery) {
  console.log(`3. Update delivery/${slug}_prd.md and delivery/${slug}_test-strategy.md when handoff is needed`)
}
