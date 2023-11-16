import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './user-list/edit/edit.component';
import { AddComponent } from './user-list/add/add.component';

const routes: Routes = [
  {
    path: 'userlist',
    loadChildren: () =>
      import(`./user-list/user-list.module`).then((m) => m.UserListModule),
  },
  { path: '', redirectTo: 'userlist', pathMatch: 'full' },
  {
    path: 'userlist/add',
    component: AddComponent,
  },
  {
    path: 'userlist/:id',
    component: EditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
