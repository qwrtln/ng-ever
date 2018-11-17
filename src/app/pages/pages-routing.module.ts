import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import {NotepadModule} from './notepad/notepad.module';
import {NotepadComponent} from './notepad/notepad/notepad.component';

const routes: Routes = [
  {path: 'note-selector', loadChildren: './note-selector/note-selector.module#NoteSelectorModule'},
  {path: 'notepad', loadChildren: './notepad/notepad.module#NotepadModule'},
  {path: '', redirectTo: 'notepad', pathMatch: 'full'}
  // {path: '', component: NotepadComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
