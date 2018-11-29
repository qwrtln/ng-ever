import { v4 as uuid } from 'uuid';

export class Note {
  id: string;
  title: string;
  author: string;
  content: string;
  updated: Date;

  constructor(title?: string, author?: string, content?: string) {
    this.title = title;
    this.author = author;
    this.content = content;
    this.updated = new Date();
    this.id = uuid();
  }
}
