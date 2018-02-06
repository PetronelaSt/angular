import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ZamestnanciComponent } from './zamestnanci/zamestnanci.component';
import { KonzultantiComponent } from './konzultanti/konzultanti.component';
import { AdminComponent } from './admin/admin.component';
import { ZamestnanciService } from './zamestnanci/zamestnanci.service';
import { KonzultantiService } from './konzultanti/konzultanti.service';


@NgModule({
  declarations: [
    AppComponent,
    ZamestnanciComponent,
    KonzultantiComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ZamestnanciService,
    KonzultantiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
