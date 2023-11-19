import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    children: [{ path: 'userlist', component: UserListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, FormsModule],
})
export class UserListRoutingModule {}
