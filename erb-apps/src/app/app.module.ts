import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatModule } from './mat.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { BlogService } from './services/blog.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreatePostComponent } from './blog/create-post/create-post.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatModule,
    NgxPaginationModule
  ],
  entryComponents: [AppComponent],
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogComponent,
    CreatePostComponent,
    DownloadsComponent,
    AboutComponent
  ],
  bootstrap: [AppComponent],
  providers: [BlogService, HttpClient]
})
export class AppModule { }
