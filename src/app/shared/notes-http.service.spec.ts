import { TestBed } from '@angular/core/testing';

import { NotesHttpService } from './notes-http.service';

describe('NotesHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be updated', () => {
    const service: NotesHttpService = TestBed.get(NotesHttpService);
    expect(service).toBeTruthy();
  });
});
