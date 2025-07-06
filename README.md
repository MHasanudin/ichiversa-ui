# iChiversa UI

> Modular & modern UI component library for Vue 3 + TailwindCSS 3  
> Scalable, customizable, and developer friendly.

---

**iChiversa UI** is a modular UI component library built with **Vue 3** and **TailwindCSS 3**.  
It is designed for high developer productivity, consistent interfaces, and easy integration with any project — from SPA, SSR, to hybrid Laravel + Vue stacks.  
Focuses on _modularity_, _customizability_, _accessibility_, and ready for teams of any scale.

---

## ✨ Features

- 🔥 **Vue 3 + TailwindCSS 3**
- ⚡ **TypeScript support**
- 🧩 **Modular & tree-shakeable**
- 🌓 **Dark/Light mode switch**
- 🌏 **Internationalization (i18n, EN/ID)**
- 🔒 **Accessibility (a11y) ready**
- 🎨 **Design tokens & theming**
- 🧑‍🎨 **Highly customizable**
- 🔗 **Lucide icons integration**
- 📦 **SSR & SPA ready**
- 🛠️ **Form validation ready** (with external validation)
- 🧪 **Playground/dev ready**
- 📄 **Complete documentation**
- 🔄 **Plugin for global & per-component usage**
- 🏷️ **MIT License** (free for all projects)

---

## 🚀 Installation

### **1. Via NPM** (recommended, coming soon)
npm install ichiversa-ui
# or
yarn add ichiversa-ui

### **2. Via GitHub (manual)**
git clone https://github.com/MHasanudin/ichiversa-ui.git
cd ichiversa-ui
npm install

---

## 🧩 **Usage Example**

### **Import per component**
<script setup lang="ts">
import { CvButton } from 'ichiversa-ui'
</script>

<template>
  <CvButton color="primary">Click Me</CvButton>
</template>

### **Global Registration (Plugin)**
import { createApp } from 'vue'
import iChiversaUI from 'ichiversa-ui'

const app = createApp(App)
app.use(iChiversaUI)
app.mount('#app')

---

## 🛠️ **TailwindCSS Integration**

Add to your tailwind.config.js (so the library's styles are included in your build):

module.exports = {
  content: [
    "./node_modules/ichiversa-ui/**/*.{js,ts,vue}",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: { extend: {} },
  plugins: []
}

---

## 🌏 **Internationalization (i18n Support)**

Default language is English, with Indonesian language support available.  
Use vue-i18n for further integration.

---

## 📝 **Component List**

- Button
- Input, Textarea, Select, Checkbox, Radio, Switch, NumberInput, FileUpload
- Badge, Avatar, Card, Table, Pagination, Progress, Spinner, Skeleton, EmptyState
- Modal/Dialog, Drawer, Tooltip, Popover, Accordion, Collapse, Tabs, Stepper, Breadcrumbs, Menu, DropdownMenu
- Alert, Snackbar/Toast, Dialog/Confirm
- Navbar, Sidebar, Timeline, Divider
- Icon, IconButton, ThemeSwitch, FormGroup, FormLabel, etc.

---

## 📚 **Documentation & Playground**

- Documentation and developer playground coming soon.
- See code samples in /playground and inside each component folder.

---

## 🤝 **Contributing**

Contributions are welcome!  
See CONTRIBUTING.md for contribution guide and style conventions.

---

## 👤 **Author & Team**

- Author: Muhammad Hasan
- Organization/Team: NgodingSkuyyy

---

## 📄 License

MIT License — Free for personal and commercial projects.

---

Stay tuned for the latest updates and releases in this repository!
