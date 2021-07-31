## Tasks

- build-core
  - tokens + icons
- build-platform
  - components, loader, bundles (JS + CSS)
- build-technology (deprecated)
  - Angular-related packages
  - not required for most development
- build-project
  - documentation
- build
  - build-core + build-platform + build-project
- build-all



## Design Systems Hierarchy

[Core](#core) > [Platform](#platform) > [Technology](#technology) > [Project](#project)

- Use the most-specific package for your needs (fall back to more generic package, if needed).
  - If you're building a web app, use a `web-*` Technology package (fallback: `web` Platform package)
  - If you're building a CLI tool, use

### Core
- Defines multi-platform assets.
  - Used by [Platform](#platform) packages.
- Exmples:
  - core-tokens (`.json`)
  - core-images (`.svg`, `.png`, `.bmp`, `.jp(e)g`)
  - core-fonts (`.ttf`, `.otf`, `.woff`, ...)
  - core-adobe (`.aco`, `.ase`, `.act`, etc.)
  - core-figma (`.fig`)
  - core-gtk (`.gpl`, ...)
  - core-kde


### Platform

- Defines platform-specific assets
  - Composed from [Core](#core) assets.
  - Used by [Technology](#technology) packages.
- Examples:
  - native-windows (`.dll`, `.cab`, etc.)
  - native-linux (dotfiles, rc files, etc.)
  - native-macos (`.clr`)
  - native-ios (`.json`)
  - native-android (`.xml`)
  - native-react (`react-native`)
  - web (`.html`, `.css`, `.js`, `.wasm`)
  - node (`.js`, `.mjs`, `.wasm`)
  - shell
    - shell-bash (`.sh`)
    - shell-zsh (`.zsh`)


### Technology
Most assets are anticipated to be defined at this level of the dependency hierarchy.

- Defines technology-specific assets
  - Composed from [Platform](#platform) assets.
  - Used by [Projects](#project)
- Examples:
  - app-sketch (`.sketch`)
  - app-gtk
  - web-styles (`.scss`, `.sass`, `.css`, other preprocessor formats)
  - web-angular (View Engine vs Ivy)
  - web-react (`react-dom`)
  - web-custom-elements (vanilla, LitElement, Stencil, etc.)
  - etc.

### Project
- Defined **externally** by consumers
- Composed from [Technology](#technology) assets.
