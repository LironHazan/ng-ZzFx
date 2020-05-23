import * as zzfx from './source/zzfx';

export class Zoundfx {
  // todo resolve it
  // tslint:disable-next-line:ban-types
 static async start(vol: number): Promise<Function> {
    const zzfxFn = await zzfx.ZZFX(vol);
    return (sound: number[]) => {
     zzfxFn(...sound);
   };
  }
}
