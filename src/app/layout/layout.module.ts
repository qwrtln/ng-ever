import {NgModule} from '@angular/core';
import {LayoutComponent} from './layout.component';
import {CommonModule} from '@angular/common';
import {HelloComponent} from './hello/hello.component';
import {MatSidenavModule, MatInputModule, MatSelectModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { PagesModule } from '../pages/pages.module';

@NgModule({
  declarations: [LayoutComponent, HelloComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    PagesModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {

}
