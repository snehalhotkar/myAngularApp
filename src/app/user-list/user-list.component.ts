import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { withLatestFrom } from 'rxjs';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { GlobalServiceService } from '../services/global-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  userList: any = [];
  constructor(
    private http: HttpClient,
    private router: Router,
    public globalService: GlobalServiceService
  ) {
    console.log('her aim gggggggggggggggg');
  }
  ngOnInit(): void {
    console.log('her aim ');
    const url: string = 'http://localhost:8100/users/userlist';
    this.globalService.getRequest(url).subscribe((res: any) => {
      console.log(res);
      this.userList = res.data;
    });
  }

  getStyle(width: any) {
    return 'width:' + width;
  }

  goToEdit(id: any) {
    this.router.navigate(['/userlist/' + id]);
  }

  goToAddRoutes() {
    this.router.navigate(['/userlist/add/']);
  }
}
