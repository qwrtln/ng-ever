import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotepadComponent} from './notepad/notepad.component';

const routes: Routes = [
  {path: '', component: NotepadComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class NotepadRoutingModule { }
