import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";

import { PostsService } from "../posts.service";
import { StateCityService } from "../statecity.service";
import { Post, State, City } from "../post.model";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent implements OnInit {

  post: Post; 
  cities: State[] = [];
  states:City[]=[];

  constructor(
    public Service: PostsService,
    public service: StateCityService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.states=this.service.getStates();
  }

  onChange(e:any){
    this.cities=this.service.getCitites(+(e.target.value.Id)) ;
  }

  onSavePost(form: NgForm) {
    if (form.invalid) {
         return;
    }    
     this.Service.addForm(form.value.Name, form.value.Email, form.value.City, form.value.State);    
    
  }
}
