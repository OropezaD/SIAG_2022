import {Component, OnInit} from '@angular/core';
import {SeguimientosService} from "../../service/seguimientos.service";
import {SeguimientosSet} from "../../interfaces/seguimientos.interface";
import {FormBuilder} from "@angular/forms";
import {debounceTime} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  searchPosts = this.fb.control('');
  getPosts: Array<SeguimientosSet> = [];

  constructor(public postsServices: SeguimientosService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    console.log('llegamos a front')
    this.postsServices.getPost('').subscribe((posts) => this.getPosts = posts);
    this.searchPosts.valueChanges
      .pipe(debounceTime(300))
      .subscribe((val) => this.postsServices.getPost(val!).subscribe((posts)=> this.getPosts = posts));


  }

}
