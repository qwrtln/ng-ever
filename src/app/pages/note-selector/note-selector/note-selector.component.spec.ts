import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteSelectorComponent } from './note-selector.component';

describe('NoteSelectorComponent', () => {
  let component: NoteSelectorComponent;
  let fixture: ComponentFixture<NoteSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
