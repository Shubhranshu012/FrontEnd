import { Routes } from '@angular/router';
import { UserList } from './components/user-list/user-list';
import { UserAdd } from './components/user-add/user-add';

export const routes: Routes = [ { path: 'users', component: UserList }, 
    { path: 'users/add', component: UserAdd }];
