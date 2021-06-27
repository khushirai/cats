import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CatsRoutingModule } from './cats-routing.module';
import { CatsComponent } from './cats.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [CatsComponent],
  imports: [
    NgxPaginationModule,
    CatsRoutingModule,
    CommonModule,
  
  ]
})
export class CatsModule { }
