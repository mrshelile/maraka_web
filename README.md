# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

# Vue.js Web App with Vite

## Table of Contents

* [Installation](#installation)
* [Running the App](#running-the-app)
* [Configuration](#configuration)
* [Troubleshooting](#troubleshooting)
* [License](#license)

## Installation

### Clone the repository

Clone this repository to your local machine using Git:

### Install dependencies

Navigate to the project directory and install the dependencies using npm or yarn:

**Using npm:**

**Using yarn:**

This will install all the dependencies required by the project, including Vue.js and Vite.

## Running the App

### Start the development server

Start the development server using Vite:

**Using npm:**
**Using yarn:**
This will build the app and serve it at `http://localhost:5173`.

### Run the app in production mode

To run the app in production mode, run:

**Using npm:**

**Using yarn:**

This will serve the app at `http://localhost:5173` in production mode.

## Configuration

You can configure the app by modifying the `vite.config.js` file. This file contains settings for Vite, such as the port number and the build output directory.

## Troubleshooting

If you encounter any issues, check the console output for error messages or refer to the Vue.js and Vite documentation for troubleshooting guides.

* [Vue.js Documentation](https://vuejs.org/v2/guide/)
* [Vite Documentation](https://vitejs.dev/guide/)

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
