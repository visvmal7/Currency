import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VdlModule } from './vdl-module';
import 'hammerjs';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconListService } from './icon.service';
import { SupportComponent } from './support/support.component';
import { HardcodeComponent } from './hardcode/hardcode.component';
import { TruncationComponent } from './truncation/truncation.component';
import { CorruptionComponent } from './corruption/corruption.component';
import { DatetimeComponent } from './datetime/datetime.component';
import { OverlappingComponent } from './overlapping/overlapping.component';
import { HomeComponent } from './home/home.component';

// For Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    SupportComponent,
    HardcodeComponent,
    TruncationComponent,
    CorruptionComponent,
    DatetimeComponent,
    OverlappingComponent,
    HomeComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    VdlModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [IconListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
