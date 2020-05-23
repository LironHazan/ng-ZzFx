import * as zzfx from './source/zzfx';

export type ZzFxFn = (sound: number[]) => void;

export class Zoundfx {

 static async start(vol: number): Promise<ZzFxFn> {
    const zzfxFn = await zzfx.ZZFX(vol);
    return (sound: number[]) => {
     zzfxFn(...sound);
   };
  }
}
