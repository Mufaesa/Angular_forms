import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TdformComponent } from './tdform/tdform.component';
import { HeaderComponent } from './header/header.component';
import { ExampleComponent } from './example/example.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TdformComponent,
    HeaderComponent,
    ExampleComponent,
    ReactiveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
