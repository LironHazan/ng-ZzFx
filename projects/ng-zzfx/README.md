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


This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

## Code scaffolding

Run `ng generate component component-name --project ng-zzFx` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ng-zzFx`.
> Note: Don't forget to add `--project ng-zzFx` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ng-zzFx` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ng-zzFx`, go to the dist folder `cd dist/ng-zzfx` and run `npm publish`.

## Running unit tests

Run `ng test ng-zzFx` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
