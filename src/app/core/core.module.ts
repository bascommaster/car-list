import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitebarComponent } from './sitebar/sitebar.component';

@NgModule({
  declarations: [SitebarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SitebarComponent,
  ]
})
export class CoreModule { }
