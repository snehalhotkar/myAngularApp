import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list.component';
import { EditComponent } from './edit/edit.component';
const routes: Routes = [
  {
    path: '',component: UserListComponent,
    children: [{ path: 'userlist', component: UserListComponent }
  ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserListRoutingModule { }
