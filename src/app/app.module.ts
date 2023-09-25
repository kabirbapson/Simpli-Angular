import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextcomponentComponent } from './textcomponent/textcomponent.component';
import { ImageComponentComponent } from './image-component/image-component.component';
import { EmpCompComponent } from './emp-comp/emp-comp.component';
import { FormsModule } from '@angular/forms';
import { FormsGroupComponent } from './forms-group/forms-group.component';

@NgModule({
  declarations: [
    AppComponent, 
    TextcomponentComponent,
    ImageComponentComponent,
    EmpCompComponent,
    FormsGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
