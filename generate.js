#!/usr/bin/env node

import inquirer from "inquirer";
import fs from "fs";
import path from "path";

const PREFIX = "Cv";
const CATEGORY_LIST = [
  "form", "button", "feedback", "navigation", "layout", "data", "icon", "theme"
];
const COMPONENTS_INDEX = path.join("src", "components", "index.ts");

const { mode } = await inquirer.prompt({
  type: "list",
  name: "mode",
  message: "Apa yang ingin dibuat?",
  choices: [
    { name: "Component (.vue + index)", value: "component" },
    { name: "CSS saja", value: "css" },
    { name: "Component + CSS (all)", value: "all" }
  ]
});

const { category } = await inquirer.prompt({
  type: "list",
  name: "category",
  message: "Pilih kategori (atau ketik kategori baru):",
  choices: CATEGORY_LIST,
});

const { rawName } = await inquirer.prompt({
  type: "input",
  name: "rawName",
  message: "Nama Komponen? (contoh: Input, Alert, Button)",
  validate: v => /^[a-zA-Z][a-zA-Z0-9]*$/.test(v) || "Gunakan huruf & angka tanpa spasi!"
});

const NAME = rawName.charAt(0).toUpperCase() + rawName.slice(1);
const categoryFolder = path.join('src', 'components', category);
const folderPath = path.join(categoryFolder, NAME);
const vueName = `${PREFIX}${NAME}.vue`;
const vuePath = path.join(folderPath, vueName);
const cssName = `${PREFIX}${NAME}.css`;
const cssPath = path.join(folderPath, cssName);
const indexPath = path.join(folderPath, 'index.ts');
const catIndexPath = path.join(categoryFolder, 'index.ts');

fs.mkdirSync(folderPath, { recursive: true });
fs.writeFileSync(path.join(folderPath, '.gitkeep'), '');

const doComponent = mode === "component" || mode === "all";
const doCss = mode === "css" || mode === "all";

if (doComponent) {
  if (!fs.existsSync(vuePath)) {
    fs.writeFileSync(
      vuePath,
`<template>
  <div :class="rootClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineProps<{ variant?: string }>()

const rootClass = computed(() => [
  '${category.toLowerCase()}-${rawName.toLowerCase()}-root',
  // Example Tailwind: "p-2 rounded"
])
</script>
`
    );
    console.log(`Created: ${vuePath}`);
  } else {
    console.log(`Skip (exists): ${vuePath}`);
  }
}

if (doCss) {
  if (!fs.existsSync(cssPath)) {
    fs.writeFileSync(cssPath, `/* CSS khusus untuk komponen ${PREFIX}${NAME} */\n`);
    console.log(`Created: ${cssPath}`);
  } else {
    console.log(`Skip (exists): ${cssPath}`);
  }
}

if (doComponent && !fs.existsSync(indexPath)) {
  fs.writeFileSync(
    indexPath,
`import ${PREFIX}${NAME} from './${PREFIX}${NAME}.vue'
export { ${PREFIX}${NAME} }
export default ${PREFIX}${NAME}
`
  );
  console.log(`Created: ${indexPath}`);
} else if (doComponent) {
  console.log(`Skip (exists): ${indexPath}`);
}

// --- Update kategori index.ts
let catIndex = "";
const catExportLine = `export * from './${NAME}'\n`;
if (fs.existsSync(catIndexPath)) {
  catIndex = fs.readFileSync(catIndexPath, "utf-8");
} else {
  fs.writeFileSync(catIndexPath, '', 'utf-8');
}
if (!catIndex.includes(catExportLine)) {
  fs.appendFileSync(catIndexPath, catExportLine);
  console.log(`Updated: ${catIndexPath} (add export for '${NAME}')`);
} else {
  console.log(`Skip (already exported): ${catIndexPath}`);
}

// --- Update src/components/index.ts
let compIndex = "";
const compExportLine = `export * from './${category}'\n`;
if (fs.existsSync(COMPONENTS_INDEX)) {
  compIndex = fs.readFileSync(COMPONENTS_INDEX, "utf-8");
} else {
  fs.writeFileSync(COMPONENTS_INDEX, '', 'utf-8');
}
if (!compIndex.includes(compExportLine)) {
  fs.appendFileSync(COMPONENTS_INDEX, compExportLine);
  console.log(`Updated: ${COMPONENTS_INDEX} (add export for '${category}')`);
} else {
  console.log(`Skip (already exported): ${COMPONENTS_INDEX}`);
}

console.log(`\nSukses! Komponen modular '${PREFIX}${NAME}' (${mode}) siap di: src/components/${category}/${NAME}/`);
