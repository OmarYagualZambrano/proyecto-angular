import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CrudForoComponent } from './components/crud-foro/crud-foro.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'foro',component:CrudForoComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'}
];
