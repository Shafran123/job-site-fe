import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TitleComponent } from './title/title.component';



@NgModule({
  declarations: [
    ButtonComponent,
    TitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonComponent,
    TitleComponent
  ]
})
export class ComponentsModule { }
