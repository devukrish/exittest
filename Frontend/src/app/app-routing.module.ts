import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OtpPageComponent } from './otp-page/otp-page.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"\otp",component: OtpPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
