import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecepieComponent } from './components/recepie/recepie.component';
import { RecepiesComponent } from './components/recepies/recepies.component';

@NgModule({
  declarations: [
    AppComponent,
    RecepieComponent,
    RecepiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
