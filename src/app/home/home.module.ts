import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { LayoutModule }  from '../layout/layout.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [HomeComponent],
            imports: [
              CommonModule,
              LayoutModule
            ]
          })
export class HomeModule { }
