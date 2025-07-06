#!/usr/bin/env node

import inquirer from "inquirer";
import fs from "fs";
import path from "path";

// SETTINGS
const PREFIX = "Cv";
const CATEGORY_LIST = [
  "form", "button", "feedback", "navigation", "layout", "data", "icon", "theme"
];
const COMPONENTS_INDEX = path.join("src", "components", "index.ts");

function rmdirRecursive(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
  }
}

// STEP 1: Pilih kategori
const { category } = await inquirer.prompt({
  type: "list",
  name: "category",
  message: "Pilih kategori:",
  choices: CATEGORY_LIST,
});

// STEP 2: Cari komponen yang ada dalam kategori
const categoryFolder = path.join('src', 'components', category);
const komponenFolders = fs.readdirSync(categoryFolder, { withFileTypes: true })
  .filter(f => f.isDirectory())
  .map(f => f.name);

if (!komponenFolders.length) {
  console.log(`Belum ada komponen di kategori ${category}.`);
  process.exit(0);
}

const { componentName } = await inquirer.prompt({
  type: "list",
  name: "componentName",
  message: "Pilih komponen yang ingin dihapus:",
  choices: komponenFolders,
});

const folderPath = path.join(categoryFolder, componentName);

// CONFIRM
const { confirm } = await inquirer.prompt({
  type: "confirm",
  name: "confirm",
  message: `Yakin ingin hapus ${componentName} (${folderPath}) beserta seluruh file di dalamnya?`,
  default: false,
});

if (!confirm) {
  console.log("Aksi dibatalkan.");
  process.exit(0);
}

// Hapus folder komponen
rmdirRecursive(folderPath);
console.log(`Deleted: ${folderPath}`);

// --- Update kategori index.ts
const catIndexPath = path.join(categoryFolder, 'index.ts');
if (fs.existsSync(catIndexPath)) {
  let catIndex = fs.readFileSync(catIndexPath, "utf-8");
  const exportLine = `export * from './${componentName}'\n`;
  catIndex = catIndex.replace(exportLine, '');
  fs.writeFileSync(catIndexPath, catIndex);
  console.log(`Updated: ${catIndexPath} (removed export for '${componentName}')`);
}

// --- Cek apakah kategori kosong, hapus export di src/components/index.ts kalau sudah kosong
const komponenTersisa = fs.readdirSync(categoryFolder, { withFileTypes: true })
  .filter(f => f.isDirectory());
if (komponenTersisa.length === 0 && fs.existsSync(COMPONENTS_INDEX)) {
  let compIndex = fs.readFileSync(COMPONENTS_INDEX, "utf-8");
  const compExportLine = `export * from './${category}'\n`;
  compIndex = compIndex.replace(compExportLine, '');
  fs.writeFileSync(COMPONENTS_INDEX, compIndex);
  console.log(`Updated: ${COMPONENTS_INDEX} (removed export for '${category}')`);
}

console.log("Komponen berhasil dihapus!");
