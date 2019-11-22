import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { MovieDetailsComponent } from './user/movie-details/movie-details.component';
import { ErrorpageComponent } from './user/errorpage/errorpage.component';
import { RouteActivatorService } from './service/route-activator.service';
import { AdminComponent } from './user/admin/admin.component';
import { AdminLoginComponent } from './user/admin/admin-login/admin-login.component';
import { AdminRegisterComponent } from './user/admin/admin-register/admin-register.component';
import { AuthGuard } from './guard/auth.guard';




export const appRoutes: Routes = [
{
  path: 'Home',
  component: HomeComponent
},
{
  path: '', redirectTo: '/Home', pathMatch: 'full'
},
{
  path: '#/Login',
  component: LoginComponent
},
{
  path: '#/join',
  component: RegisterComponent
},
{
  path: '#/movies',
  component: DashboardComponent,
  canActivate: [AuthGuard]
},
{
  path: '#/movies/details/:id',
  component: MovieDetailsComponent,
  canActivate: [RouteActivatorService]
},
{
  path: '#/error',
  component: ErrorpageComponent
},
{
  path: '#/admin/register',
  component: AdminRegisterComponent
},
 {
   path: '#/admin',
   component: AdminLoginComponent
 },
 {
   path: '#/update',
   component: AdminComponent
 }
]
