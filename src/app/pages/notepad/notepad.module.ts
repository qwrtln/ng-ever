import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotepadComponent } from './notepad/notepad.component';
import {NotepadRoutingModule} from './notepad-routing.module';

@NgModule({
  declarations: [NotepadComponent],
  imports: [
    CommonModule,
    NotepadRoutingModule
  ],
  exports: [
  ]
})
export class NotepadModule { }
