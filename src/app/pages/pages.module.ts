import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesRoutingModule} from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {NotepadModule} from './notepad/notepad.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NotepadModule
  ],
  exports: [PagesComponent]
})
export class PagesModule { }
