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

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.note = this.noteService.getCurrentNote();
  }

}
