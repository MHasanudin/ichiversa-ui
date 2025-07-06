#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const PREFIX = "Cv"; // Ganti prefix sesuai branding lu

const rawName = process.argv[2];
if (!rawName) {
  console.error('Usage: node generate-component.js <ComponentName>');
  process.exit(1);
}

const NAME = rawName.charAt(0).toUpperCase() + rawName.slice(1);
const folderPath = path.join('src', 'components', NAME);
const vuePath = path.join(folderPath, `${PREFIX}${NAME}.vue`);
const indexPath = path.join(folderPath, 'index.ts');
const gitkeepPath = path.join(folderPath, '.gitkeep');

const componentsIndexPath = path.join('src', 'components', 'index.ts');
const exportLine = `export * from './${NAME}'\n`;

// Bikin folder komponen
fs.mkdirSync(folderPath, { recursive: true });

// .gitkeep supaya folder gak ilang
if (!fs.existsSync(gitkeepPath)) {
  fs.writeFileSync(gitkeepPath, '');
}

// File Vue (template awal)
if (!fs.existsSync(vuePath)) {
  fs.writeFileSync(
    vuePath,
`<template>
  <div class="${rawName.toLowerCase()}-root">
    <slot />
  </div>
</template>

<script setup lang="ts">
// Komponen: ${PREFIX}${NAME}
</script>
`
  );
  console.log(`Created: ${vuePath}`);
} else {
  console.log(`Skip (exists): ${vuePath}`);
}

// index.ts untuk export komponen
if (!fs.existsSync(indexPath)) {
  fs.writeFileSync(
    indexPath,
`import ${PREFIX}${NAME} from './${PREFIX}${NAME}.vue'
export { ${PREFIX}${NAME} }
export default ${PREFIX}${NAME}
`
  );
  console.log(`Created: ${indexPath}`);
} else {
  console.log(`Skip (exists): ${indexPath}`);
}

// --- AUTO UPDATE src/components/index.ts ---
let existingIndex = '';
if (fs.existsSync(componentsIndexPath)) {
  existingIndex = fs.readFileSync(componentsIndexPath, 'utf-8');
} else {
  // Bikin file kalau belum ada
  fs.writeFileSync(componentsIndexPath, '', 'utf-8');
}

if (!existingIndex.includes(exportLine)) {
  fs.appendFileSync(componentsIndexPath, exportLine);
  console.log(`Updated: ${componentsIndexPath} (added export for '${NAME}')`);
} else {
  console.log(`Skip (already exported): ${componentsIndexPath}`);
}

console.log(`Komponen '${PREFIX}${NAME}' sudah jadi di ${folderPath}!`);
