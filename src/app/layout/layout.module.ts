import {NgModule} from '@angular/core';
import {LayoutComponent} from './layout.component';
import {CommonModule} from '@angular/common';
import {MatSidenavModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { PagesModule } from '../pages/pages.module';
import { LayoutRoutingModule } from './layout-routing.module';
import {MenuModule} from './menu/menu.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    LayoutRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    PagesModule,
    MenuModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {

}
