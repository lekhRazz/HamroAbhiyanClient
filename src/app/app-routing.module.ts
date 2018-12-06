import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { PostNewsComponent } from './components/post-news/post-news.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { AwarenessComponent } from './components/awareness/awareness.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FooterComponent } from './components/footer/footer.component';
import { LostComponent } from './components/lost/lost.component';
import { FoundComponent } from './components/found/found.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DashboardheaderComponent } from './admin/dashboardheader/dashboardheader.component';
import { TestmeComponent } from './admin/testme/testme.component';
import { ManagenewsComponent } from './admin/managenews/managenews.component';
import { ManageLostComponent } from './admin/manage-lost/manage-lost.component';
import { ManageFoundComponent } from './admin/manage-found/manage-found.component';
import { ManageJobsComponent } from './admin/manage-jobs/manage-jobs.component';
import { ManageAwarenessComponent } from './admin/manage-awareness/manage-awareness.component';
import { ManageAboutUsComponent } from './admin/manage-about-us/manage-about-us.component';
import { NewsdetailsComponent } from './components/newsdetails/newsdetails.component';
import { LostdetailsComponent } from './components/lostdetails/lostdetails.component';
import { FounddetailsComponent } from './components/founddetails/founddetails.component';
import { JobdetailsComponent } from './components/jobdetails/jobdetails.component';
import { AwarenessdetailsComponent } from './components/awarenessdetails/awarenessdetails.component';
import { ManageNewsDetailsComponent } from './admin/manage-news-details/manage-news-details.component';
import { ManageLostDetailsComponent } from './admin/manage-lost-details/manage-lost-details.component';
import { ManageFoundDetailsComponent } from './admin/manage-found-details/manage-found-details.component';
import { ManageJobDetailsComponent } from './admin/manage-job-details/manage-job-details.component';
import { ManageAwarenessDetailsComponent } from './admin/manage-awareness-details/manage-awareness-details.component';






const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'news',component:PostNewsComponent},
  {path:'news/:id',component:NewsdetailsComponent},
  {path:'lost',component:LostComponent},
  {path:'lost/:id',component:LostdetailsComponent},
  {path:'found',component:FoundComponent},
  {path:'found/:id',component:FounddetailsComponent},
  {path:'jobs',component:JobsComponent},
  {path:'jobs/:id',component:JobdetailsComponent},
  {path:'awareness',component:AwarenessComponent},
  {path:'awareness/:id',component:AwarenessdetailsComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'signup',component:SignUpComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'testme',component:TestmeComponent},
  {path:'admin/news',component:ManagenewsComponent},
  {path:'admin/news/:id',component:ManageNewsDetailsComponent},
  {path:'admin/lost',component:ManageLostComponent},
  {path:'admin/lost/:id',component:ManageLostDetailsComponent},
  {path:'admin/found',component:ManageFoundComponent},
  {path:'admin/found/:id',component:ManageFoundDetailsComponent},
  {path:'admin/jobs',component:ManageJobsComponent},
  {path:'admin/jobs/:id',component:ManageJobDetailsComponent},
  {path:'admin/awareness',component:ManageAwarenessComponent},
  {path:'admin/awareness/:id',component:ManageAwarenessDetailsComponent},
  {path:'admin/aboutus',component:ManageAboutUsComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,
                                LoginComponent,
                                PageNotFoundComponent,
                                HeaderComponent,
                                PostNewsComponent,
                                LostComponent,
                                FoundComponent,
                                JobsComponent,
                                AwarenessComponent,
                                AboutUsComponent,
                                SignUpComponent,
                                FooterComponent,
                                DashboardComponent,
                                DashboardheaderComponent,
                                TestmeComponent,
                                ManagenewsComponent,
                                ManageLostComponent,
                                ManageFoundComponent,
                                ManageJobsComponent,
                                ManageAwarenessComponent,
                                ManageAboutUsComponent,
                                NewsdetailsComponent,
                                LostdetailsComponent,
                                FounddetailsComponent,
                                JobdetailsComponent,
                                AwarenessdetailsComponent,
                                ManageNewsDetailsComponent,
                                ManageLostDetailsComponent,
                                ManageFoundDetailsComponent,
                                ManageJobDetailsComponent,
                                ManageAwarenessDetailsComponent
                               ]
