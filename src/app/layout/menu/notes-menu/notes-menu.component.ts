import { Component, OnInit, Output } from '@angular/core';
import {Note} from '../../../shared/model/note';
import {NoteService} from '../../../shared/note.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'ever-notes-menu',
  templateUrl: './notes-menu.component.html',
  styleUrls: ['./notes-menu.component.less']
})
export class NotesMenuComponent implements OnInit {

  notes: Array<Note>;
  @Output() chosen: EventEmitter<any> = new EventEmitter();

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.notes = this.noteService.getNotes();
  }

  onSelectNote(note: Note): void {
    this.noteService.setCurrentNote(note);
    this.chosen.emit(null);
  }

  onAddNote(): void {
    const note = new Note();
    this.noteService.addNote(note);
    this.noteService.setCurrentNote(note);
    this.chosen.emit(null);
  }

  onCloseMenu(): void {
    this.chosen.emit(null);
  }
}
