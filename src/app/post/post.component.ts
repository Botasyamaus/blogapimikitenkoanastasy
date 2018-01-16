import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Post} from '../post.category';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {

  @Input() post: Post
  @Output() deletePost = new EventEmitter<Post>()

  onDelete() {
this.deletePost.emit(this.post)
  }


}
