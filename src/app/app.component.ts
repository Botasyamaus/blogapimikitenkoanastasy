import { Component } from '@angular/core';
import {Post} from './post.category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public posts: Post[] = [
    new Post('Post', '12.01.18', 'HTML', 'The document object is the root node of the HTML document and the "owner" of all other nodes: (element nodes, text nodes, attribute nodes, and comment nodes). The document object provides properties and methods to access all node objects, from within JavaScript. Tip: The document is a part of the Window object and', 1),
    new Post('Test', '15.01.18', 'JS', 'https://www.w3schools.com/js/js_htmldom.asp\n' +
      'Перевести эту страницу\n' +
      'With the HTML DOM, JavaScript can access and change all the elements of an HTML document. The HTML DOM (Document Object Model). When a web page is loaded, the browser creates a Document Object Model of the page. The HTML DOM model is constructed as a tree of Objects: The HTML DOM Tree of Objects', 2)
  ]

  onAdd(post: Post) {
    this.posts.push(post)

  }
onDelete(post: Post){
    this.posts = this.posts.filter( p => p.id !== post.id)
}
}
