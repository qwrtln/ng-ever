import { Component, OnInit } from '@angular/core';
import { Note } from '../../../shared/model/note';
import { NoteService } from '../../../shared/note.service';

@Component({
  selector: 'ever-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.less']
})
export class NotepadComponent implements OnInit {

  note: Note;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.note = this.noteService.getCurrentNote();
    this.noteService.noteSelected.subscribe(note => {
      this.note = note;
    });
  }

  updateTime() {
    this.note.updated = new Date();
  }
}
