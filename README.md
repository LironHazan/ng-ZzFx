# NgZzFx

Angular API for: ZzFX - Zuper Zmall Zound Zynth - Micro Edition

[ZzFx.js](https://github.com/KilledByAPixel/ZzFX)

[ZzFX Demo](https://codepen.io/KilledByAPixel/pen/BaowKzv)

MIT License - Copyright 2019 Frank Force

Component:

```typescript
  case1 = [ , , 1675, , .06, .24, 1, 1.82, , , 837, .06];
```
Give your element a sound by adding the directive as follows:

Template:

``` 
  <div zoundfx trigger="click" [custom]="case1">💰</div>

```

Or by using the zzfs function wrapper:

```ts

  playSound: ZzFxFn;
  case4 = [1.5,.5,270,,.1,,1,1.5,,,,,,,,.1,.01];

  async ngOnInit() {
    this.playSound = await Zoundfx.start(0.2);
  }

  onClick() {
    this.playSound(this.case4);
  }
````

### API
Directive inputs:
- vol = 0.1; // Number from 0 to 1;
- trigger = 'onclick'; // String, a name of any event you want to react to
- custom: number[]; // [See example](https://codepen.io/KilledByAPixel/pen/BaowKzv)


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
