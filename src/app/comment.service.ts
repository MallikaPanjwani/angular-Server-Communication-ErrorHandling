import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUser } from "./user";
import "rxjs/add/operator/catch";

@Injectable()
export class CommentService {
  constructor(private _httpClient: HttpClient) {}
  private _url = "https://jsonplaceholder.typicode.com/comments";
  getAllUsers(): Observable<IUser[]> {
    return this._httpClient.get<IUser[]>(this._url).catch(error => {
      return Observable.throw(error);
    });
  }
}