import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { EditComponent } from './people/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent]
})
export class AppModule { }
