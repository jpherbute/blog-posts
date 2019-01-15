import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLikes: number;
  @Input() postCreated: Date;

  constructor() { }

  ngOnInit() {
  }

  onUpvote() {
    this.postLikes++;
  }

  onDownvote() {
    this.postLikes--;
  }

}
