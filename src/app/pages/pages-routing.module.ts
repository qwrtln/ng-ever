import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'note-selector', loadChildren: './note-selector/note-selector.module#NoteSelectorModule'},
  {path: 'notepad', loadChildren: './notepad/notepad.module#NotepadModule'},
  {path: '', redirectTo: 'notepad', pathMatch: 'full'}
  // {path: '', component: NotepadComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
