import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './model/note';

@Injectable({
  providedIn: 'root'
})
export class NotesHttpService {

  constructor(private httpClient: HttpClient) { }
  
  postNotes(notes: Array<Note>) {
    console.log('Do nienawiści do fajerbejsa');
  }
}
