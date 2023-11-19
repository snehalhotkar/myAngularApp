import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  first_name: any;
  last_name: any;
  email: any;
  mobile_number: any;
  isErrorMessage: any;
  isError: Boolean = false;
  isSuccess: Boolean = false;
  isSuccessMessage: any;
  userList: any = [];
  constructor(
    private http: HttpClient,
    private router: Router,
    public globalService: GlobalServiceService
  ) {}

  ngOnInit(): void {
    // const url: string = 'http://localhost:8100/users/userlist';
    // this.globalService.getRequest(url).subscribe((res: any) => {
    //   console.log(res);
    //   this.userList = res.data;
    // });
  }

  submit() {
    console.log(
      this.first_name,
      this.last_name,
      this.mobile_number,
      this.email
    );

    if (this.isValid()) {
      if (this.mobileValid()) {
        if (this.emailValid()) {
          var data = {
            email: this.email,
            first_name: this.first_name,
            last_name: this.last_name,
            mobile_number: this.mobile_number,
          };
          console.log(data);
          var url = this.globalService.apiurl + 'users/saveUser';
          console.log(url);
          this.globalService.postRequest(url, data).subscribe(
            (res: any) => {
              this.isSuccess = true;
              this.isSuccessMessage = res.msg;
              console.log('success', res);
              setTimeout(() => {
                this.isSuccess = false;
                this.isSuccessMessage = '';
                this.router.navigateByUrl('userlist');
                console.log('success', res);
              }, 2000);
            },
            (error: any) => {
              this.isError = true;
              this.isErrorMessage = error.error.msg;
              console.log('oops', error);
              setTimeout(() => {
                this.isError = false;
                this.isErrorMessage = '';
              }, 2000);
            }
          );
        }
      }
    }
  }

  mobileValid() {
    if (this.mobile_number.length != 10) {
      this.isErrorMessage = 'Invalid Mobile Number';
      this.isError = true;
      return false;
    } else {
      return true;
    }
  }

  emailValid() {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (this.email.match(validRegex)) {
      return true;
    } else {
      this.isErrorMessage = 'Invalid Email';
      this.isError = true;
      return false;
    }
  }

  isValid() {
    if (this.first_name == undefined) {
      this.isErrorMessage = 'First Name Required';
      this.isError = true;
      return false;
    } else if (this.last_name == undefined || this.last_name == '') {
      this.isErrorMessage = 'Last Name Required';
      this.isError = true;
      return false;
    } else if (this.email == undefined || this.email == '') {
      this.isErrorMessage = 'Email Required';
      this.isError = true;
      return false;
    } else if (this.mobile_number == undefined || this.mobile_number == '') {
      this.isErrorMessage = 'Mobile Number Required';
      this.isError = true;
      return false;
    } else {
      return true;
    }
  }
}
