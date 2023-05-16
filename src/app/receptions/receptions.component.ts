import { NgForm } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { ReceptionsListService } from '../receptions-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Editor, Toolbar, toHTML } from 'ngx-editor';
import { Post } from './post.model';

@Component({
  selector: 'app-receptions',
  templateUrl: './receptions.component.html',
  styleUrls: ['./receptions.component.css'],
})
export class ReceptionsComponent implements OnInit, OnDestroy {
  public receptionsItems: {
    name: string;
    ingredients: string;
    imageLink: string;
  }[] = [];

  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  editorContent: string = '';
  title: string = '';
  loadedPosts: Post[] = [];
  error = null;

  constructor(
    private receptionList: ReceptionsListService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onSubmit(form: NgForm) {
    this.receptionList.addReception(form.value.title, form.value.editor);
  }

  getReceptionData(id: number) {
    return this.receptionsItems[id];
  }

  ngOnInit() {
    this.editor = new Editor();
    this.receptionList.fetchPosts().subscribe(
      (posts) => {
        this.loadedPosts = posts;
      },
      (error) => {
        this.error = error.message;
      }
    );
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
