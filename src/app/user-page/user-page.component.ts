import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  user: { id: number; username: string; }
  
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(m => {
      this.http
        .get("http://localhost:8080/api/user/" + m.get("index"))
        .subscribe(r => this.user = r['data'])
    })
  }

}
