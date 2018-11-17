import { Injectable } from '@angular/core';
import { Note } from './model/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: Array<Note> = [
    new Note('Hakatą', 'Szewa', 'co to jest', 'dzisiaj'),
    new Note('PKP', 'Konduktor', 'bileciki do kontroli', 'jutro') 
  ]
  currentNote: Note;

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
  }

  addNote(note: Note): void {
    this.notes.push(note);
  }
}
