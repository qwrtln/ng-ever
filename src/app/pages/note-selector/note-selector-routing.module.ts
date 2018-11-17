import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NoteSelectorComponent} from './note-selector/note-selector.component';

const routes: Routes = [
  {path: '', component: NoteSelectorComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class NoteSelectorRoutingModule { }
