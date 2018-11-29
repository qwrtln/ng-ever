import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/model/note';
import { NoteService } from 'src/app/shared/note.service';

@Component({
  selector: 'ever-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.less']
})
export class NotepadComponent implements OnInit {

  note: Note;
  noteId: string;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.note = this.noteService.getCurrentNote();
    this.noteService.noteSelected.subscribe(note => {
      this.note = note;
    });
  }

  updateDate(event) {
    console.log(event)
    this.note.created = new Date().toLocaleDateString();
  }
}
