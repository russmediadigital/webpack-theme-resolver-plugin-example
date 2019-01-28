# webpack-theme-resolver-plugin-example
This is a Example Project for the [`webpack-theme-resolver-plugin`](https://github.com/russmediadigital/webpack-theme-resolver-plugin).

As in this Configuration, the Plugin will first look into the `fancy-theme` directory, then in the `default-theme` directory and if nothing found will fallback to the Component in the given Component Library.

So the Components in this Sample Project are loaded from following sources:
- Hello.vue -> defaul-theme
- AwesomeList.vue -> [`webpack-theme-resolver-plugin-example-components`](https://github.com/russmediadigital/webpack-theme-resolver-plugin-example-components)
  - ListEntry.vue -> [`webpack-theme-resolver-plugin-example-components`](https://github.com/russmediadigital/webpack-theme-resolver-plugin-example-components)
    - SimpleButton.vue -> fancy-theme

Basicly every Component can be overwritten

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Vue CLI Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
