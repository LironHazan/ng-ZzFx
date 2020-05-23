import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgZzfxModule} from '../../projects/ng-zzfx/src/lib/ng-zzfx.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        NgZzfxModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
