import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteSelectorComponent } from './note-selector/note-selector.component';
import {NoteSelectorRoutingModule} from './note-selector-routing.module';

@NgModule({
  declarations: [NoteSelectorComponent],
  imports: [
    CommonModule,
    NoteSelectorRoutingModule
  ]
})
export class NoteSelectorModule { }
