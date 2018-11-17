import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';
import { MatSidenavModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LayoutComponent, HelloComponent],
  imports: [
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
