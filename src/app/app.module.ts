import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PostsFormComponent } from './posts-form/posts-form.component';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [
    AppComponent,
    PostsFormComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
