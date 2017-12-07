import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-subject-page',
  templateUrl: './subject-page.component.html',
  styleUrls: ['./subject-page.component.css']
})
export class SubjectPageComponent implements OnInit {

  // subject: { name: string; }
  
  constructor(
   // private route: ActivatedRoute,
  //  private http: HttpClient
  ) { }

  ngOnInit() {
  //  this.route.paramMap.subscribe(m => {
    //  this.http
    //    .get("http://localhost:8080/api/subject/" + m.get("name"))
      //  .subscribe(r => this.subject = r['data'])
    //})
  }

}
