import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitebarComponent } from './sitebar/sitebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SitebarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SitebarComponent,
  ]
})
export class CoreModule { }
