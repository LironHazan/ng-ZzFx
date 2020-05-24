import * as zzfx from './source/zzfx';

export class Zoundfx {

 static start(vol: number)  {
    const zzfxFn = zzfx.ZZFX(vol);
    return (sound: number[]) => {
     zzfxFn(...sound);
   };
  }
}
