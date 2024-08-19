import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './mainComponent/header/header.component';
import { FooterComponent } from './mainComponent/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { DownloadComponent } from './pages/download/download.component';
import { FaqComponent } from './pages/faq/faq.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DownloadComponent,
    FaqComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
