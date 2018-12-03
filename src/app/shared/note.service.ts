import {Injectable, OnInit} from '@angular/core';
import { Note } from './model/note';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService implements OnInit {

  notes: Array<Note> = [
    new Note('Hakatą', 'Szewa', 'co to jest'),
    new Note('PKP', 'Konduktor', 'bileciki do kontroli')
  ];

  currentNote: Note;

  noteSelected = new Subject<Note>();

  ngOnInit(): void {
    this.currentNote = this.notes[0];
  }

  constructor() { }

  getNotes(): Array<Note> {
    return this.notes;
  }

  getNoteById(id: string): Note {
    return this.notes.find(note => note.id === id);
  }

  getCurrentNote(): Note {
    return this.currentNote;
  }

  setCurrentNote(note: Note): void {
    this.currentNote = note;
    this.noteSelected.next(note);
  }

  addNote(note: Note): void {
    this.notes.push(note);
  }
}
