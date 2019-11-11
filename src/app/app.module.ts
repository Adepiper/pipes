import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { appRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthserviceService } from './service/authservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { MovieListComponent } from './user/movie-list/movie-list.component';
import { MovieThumbnailComponent } from './user/movie-thumbnail/movie-thumbnail.component';
import { UserService } from './user/user.service';
import { TOASTR_TOKEN, Toastr } from './service/toastr.service';
import { MovieDetailsComponent } from './user/movie-details/movie-details.component';
import { ErrorpageComponent } from './user/errorpage/errorpage.component';
import { RouteActivatorService } from './service/route-activator.service';
import { AdminComponent } from './user/admin/admin.component';
import { AdminLoginComponent } from './user/admin/admin-login/admin-login.component';
import { AdminRegisterComponent } from './user/admin/admin-register/admin-register.component';
import { FavoriteComponent } from './user/favorite/favorite.component';
import { FavoriteService } from './service/favorite.service';
import {HttpClientModule} from '@angular/common/http';
import { AuthGuard } from './guard/auth.guard';
import { SearchPipe } from './service/search.pipe';
import { SearchComponent } from './user/search/search.component';
declare let toastr: Toastr;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    MovieListComponent,
    MovieThumbnailComponent,
    MovieDetailsComponent,
    ErrorpageComponent,
    AdminComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    FavoriteComponent,
    SearchPipe,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthserviceService,
    UserService,
    FavoriteService,
    AuthGuard,
   {
     provide: TOASTR_TOKEN, useValue: toastr
   },
    RouteActivatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
