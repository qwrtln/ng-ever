import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotepadComponent } from './notepad/notepad.component';
import {NotepadRoutingModule} from './notepad-routing.module';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [NotepadComponent],
  imports: [
    CommonModule,
    NotepadRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
  ]
})
export class NotepadModule { }
