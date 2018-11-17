import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesMenuComponent } from './notes-menu/notes-menu.component';

@NgModule({
  declarations: [NotesMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NotesMenuComponent
  ]
})
export class MenuModule { }
