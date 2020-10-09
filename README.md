# ds-webpack-starter

A universal foundation for your next webpack based frontend project.

## Usage

#### Clone the repository
```
git clone https://github.com/ShkredovDmitriy/ds-webpack-starter.git PROJECT-NAME
```

#### Installation
```
npm install
```

#### Start Dev Server
```
npm run start
```

#### Build Prod Version
```
npm run build
```

## Features

* Pug
* Scss
* ES6
* Development server
* Reboot on save changes
* Favicons generation

## Directories

```
build/             #  project build files
dev/
  |_ app/          # javascript files           (js)
  |_ assets/       # images, video, documents   (jpg, png, svg, mp4, pdf)
  |_ blocks/       # large chunks of code       (pug + scss)
  |_ components/   # small pieces of code       (pug + scss)
  |_ elements/     # a, span, button, etc       (pug + scss)
  |_ common        # scss vars, mixins, reset   (scss)
  |_ fonts         # fonts files                (woff, woff2)
  |_ pages         # site pages                 (pug)
  |_ templates     # templates for pages        (pug)
webpack/           # webpack config files

```

## License

This project is under the MIT license.
