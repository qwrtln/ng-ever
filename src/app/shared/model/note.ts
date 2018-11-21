import { v4 as uuid } from 'uuid';

export class Note {
  title: string;
  author: string;
  content: string;
  created: string;
  id: string;

  constructor(title?: string, author?: string, content?: string, created?: string) {
    this.title = title;
    this.author = author;
    this.content = content;
    this.created = created;
    this.id = uuid();
  }
}
