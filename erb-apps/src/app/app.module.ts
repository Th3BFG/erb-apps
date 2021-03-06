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
import { BlogService } from './services/blog/blog.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostEditorComponent } from './blog/post-editor/post-editor.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalService } from './services/modal/modal.service';
import { DomService } from './services/dom/dom.service';
import { LoginComponent } from './user/login/login.component';
import { UserService } from './services/user/user.service';

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
  entryComponents: [AppComponent, LoginComponent, PostEditorComponent],
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogComponent,
    PostEditorComponent,
    DownloadsComponent,
    AboutComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent],
  providers: [BlogService, ModalService, DomService, HttpClient, UserService]
})
export class AppModule { }
