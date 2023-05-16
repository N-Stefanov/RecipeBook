import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Post } from './receptions/post.model';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReceptionsListService {
  constructor(private http: HttpClient) {}

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>(
        'https://recipe-book-ba788-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError((errorRes) => {
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }

  private onPostData() {
    // this.http
    //   .post(
    //     'https://recipe-book-ba788-default-rtdb.firebaseio.com/posts.json',
    //     this.postData
    //   )
    //   .subscribe((reposnseData) => {});
  }

  addReception(title: string, editor: string) {
    const reception = {
      name: title,
      ingredients: editor,
      imageLink:
        'https://onlinerecepti.eu/wp-content/uploads/2022/07/salata-2-505522-500x334-1.jpg',
    };
    // this.receptionsData.push(reception);
  }
}
