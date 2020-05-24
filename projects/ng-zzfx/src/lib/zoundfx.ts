import * as zzfx from './source/zzfx';

export class Zoundfx {

 static async start(vol: number)  {
    const zzfxFn = await zzfx.ZZFX(vol);
    return (sound: number[]) => {
     zzfxFn(...sound);
   };
  }
}
