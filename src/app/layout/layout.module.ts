import {NgModule} from '@angular/core';
import {LayoutComponent} from './layout.component';
import {CommonModule} from '@angular/common';
import {HelloComponent} from './hello/hello.component';
import {MatSidenavModule, MatInputModule, MatSelectModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {LayoutRoutingModule} from './layout-routing.module';

@NgModule({
  declarations: [LayoutComponent, HelloComponent],
  imports: [
    LayoutRoutingModule,
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {

}
