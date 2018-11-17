import { Component, OnInit } from '@angular/core';
import {Note} from '../../../shared/model/note';
import {NoteService} from '../../../shared/note.service';

@Component({
  selector: 'ever-notes-menu',
  templateUrl: './notes-menu.component.html',
  styleUrls: ['./notes-menu.component.less']
})
export class NotesMenuComponent implements OnInit {

  notes: Array<Note>;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.notes = this.noteService.getNotes();
  }

  onSelectNote(note: Note): void {
    this.noteService.setCurrentNote(note);
  }
}
