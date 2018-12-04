import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ChartistModule } from 'ng-chartist';


import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './shared-service/User/user.service';
import { NewsService } from './shared-service/News/news.service';
import { LostService } from './shared-service/Lost/lost.service';
import { FoundService } from './shared-service/Found/found.service';
import { JobService } from './shared-service/Job/job.service';
import { AwarenessService } from './shared-service/Awareness/awareness.service';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    ChartistModule
  ],
  providers: [UserService,NewsService,LostService,FoundService,JobService,AwarenessService],
  bootstrap: [AppComponent]
})


export class AppModule { }
