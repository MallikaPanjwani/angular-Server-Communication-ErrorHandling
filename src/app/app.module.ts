import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";

import { HttpClientModule } from "@angular/common/http";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { CommentService } from "./comment.service";

const routes: Routes = [
  { path: " ", redirectTo: "home" },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "home", component: HomeComponent }
];

@NgModule({
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, AboutComponent, ContactComponent, HomeComponent],
  bootstrap: [AppComponent],
  providers: [CommentService]
})
export class AppModule {}
