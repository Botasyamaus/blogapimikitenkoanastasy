import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from '../post.category'
import * as moment from 'moment'

@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.component.html',
  styleUrls: ['./posts-form.component.css']
})
export class PostsFormComponent implements OnInit {

  private id: number = 2
  postTitle: string = ''
  postCategory: string = ''
  postWrite: string = ''
@Output() addPost = new EventEmitter<Post>()

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
if(this.postTitle === '' || this.postCategory === '' || this.postWrite === '') return

    this.id = ++this.id
    const post = new Post(
      this.postTitle,
moment().format('DD.MM.YY'),
this.postCategory,
      this.postWrite,
      this.id

    )

    this.addPost.emit(post)

    this.postTitle = ''
    this.postCategory = ''
    this.postWrite = ''

  }
}
