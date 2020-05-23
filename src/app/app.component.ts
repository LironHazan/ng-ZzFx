import {Component, OnInit} from '@angular/core';
import { Zoundfx } from '../../projects/ng-zzfx/src/lib/zoundfx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  playSound;

  case1 = [ , , 1675, , .06, .24, 1, 1.82, , , 837, .06];
  case2 = [,,925,.04,.3,.6,1,.3,,6.27,-184,.09,.17];
  case3 = [,,539,0,.04,.29,1,1.92,,,567,.02,.02,,,,.04];
  case4 = [1.5,.5,270,,.1,,1,1.5,,,,,,,,.1,.01];

  async ngOnInit() {
    this.playSound = await Zoundfx.start(0.2);
  }

  // proggrematic
  onClick() {
    this.playSound(this.case4);
  }
}
