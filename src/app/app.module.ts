import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgZzFxModule} from '../../projects/ng-zz-fx/src/lib/ng-zz-fx.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        NgZzFxModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
