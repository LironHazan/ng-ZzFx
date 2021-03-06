import {AfterViewInit, Directive, ElementRef, Input, Renderer2} from '@angular/core';
import * as zzfx from './source/zzfx';

@Directive({
  selector: '[zoundfx]'
})
export class ZoundfxDirective implements AfterViewInit {
  private zzfxFn; // A blackbox with too many params to type..
  @Input() vol = 0.1; // Number from 0 to 1;
  @Input() trigger = 'click';
  @Input() zound: number[];

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.zzfxFn = zzfx.ZZFX(this.vol);
    this.registerEventListeners();
  }

  registerEventListeners() {
    this.renderer.listen(this.el.nativeElement, this.trigger, () => {
      this.zzfxFn(...this.zound);
    });
  }

}
