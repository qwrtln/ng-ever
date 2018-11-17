import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/shared/note.service';
import { Note } from 'src/app/shared/model/note';

@Component({
  selector: 'ever-note-selector',
  templateUrl: './note-selector.component.html',
  styleUrls: ['./note-selector.component.less']
})
export class NoteSelectorComponent implements OnInit {

  notes: Array<Note>;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.notes = this.noteService.getNotes();
  }

  onSelectNote(note: Note): void {
    this.noteService.setCurrentNote(note);
  }
}
