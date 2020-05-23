# NgZzFx 8bit zound for Angular ;)

[![npm version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&type=6&v=0.1.9&x2=0)](https://www.npmjs.com/package/ng-zzfx)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/LironHazan/ng-ZzFx/blob/master/LICENSE)


Angular API for: ZzFX - Zuper Zmall Zound Zynth - Micro Edition

[ZzFx.js](https://github.com/KilledByAPixel/ZzFX)

[ZzFX Demo](https://codepen.io/KilledByAPixel/pen/BaowKzv)

MIT License - Copyright 2019 Frank Force

In your component:

```typescript
  case1 = [ , , 1675, , .06, .24, 1, 1.82, , , 837, .06];
```
Give your element a sound by adding the directive as follows:

In your template:

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
- vol = 0.1; // Volume % should be a number from 0 to 1;
- trigger = 'onclick'; // String, a name of any event you want to react to
- zound: number[]; // [See example](https://codepen.io/KilledByAPixel/pen/BaowKzv) Or [custom your own sounds](https://zzfx.3d2k.com)