import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HelloComponent} from './hello/hello.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'hello'},
  {path: 'hello', component: HelloComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {

}
