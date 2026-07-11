/*
 * Builds the single-file artifact fragment from dist-artifact/.
 * Run after: ARTIFACT=1 VITE_ROUTER=hash vite build
 *
 * Output is a body fragment (title + style + root + module script) —
 * the artifact host wraps it in its own doctype/head/body skeleton.
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const dist = 'dist-artifact'
const assets = readdirSync(join(dist, 'assets'))
const jsFile = assets.find((f) => f.endsWith('.js'))
const cssFile = assets.find((f) => f.endsWith('.css'))
if (!jsFile || !cssFile) throw new Error('expected one js and one css bundle in dist-artifact/assets')

const js = readFileSync(join(dist, 'assets', jsFile), 'utf8')
  // an inline script must not contain a literal closing tag
  .replaceAll('</script', '<\\/script')
const css = readFileSync(join(dist, 'assets', cssFile), 'utf8')

const fragment = `<title>The Glyptotek of Samveg</title>
<style>
${css}
</style>
<div id="root"></div>
<script type="module">
${js}
</script>
`

const out = join(dist, 'glyptotek.html')
writeFileSync(out, fragment)
console.log(`wrote ${out} (${(fragment.length / 1024 / 1024).toFixed(2)} MB)`)
