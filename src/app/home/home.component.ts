import { Component, OnInit } from "@angular/core";
import { CommentService } from "../comment.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  users: any;
  errorMessage:string="Loading...";
  constructor(private _commentService: CommentService) {}

  ngOnInit() {
    this._commentService.getAllUsers().subscribe(data => {
      this.users = data;
    },(err)=>{
      this.errorMessage="Something went wrong. Please try again later."
    });
  }
}
