import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';
import { NotepadComponent } from './notepad/notepad.component';

@NgModule({
  declarations: [HelloComponent, NotepadComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
