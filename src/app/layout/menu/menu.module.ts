import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesMenuComponent } from './notes-menu/notes-menu.component';
import { MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [NotesMenuComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    NotesMenuComponent
  ]
})
export class MenuModule { }
