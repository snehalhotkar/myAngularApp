import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { GlobalServiceService } from 'src/app/services/global-service.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  profile_image_url: any;
  first_name: any;
  last_name: any;
  email: any;
  mobile_number: any;
  userData: any;
  id: any;
  register_date: any;
  submitted: boolean = false;
  myReactiveForm !: FormGroup;



  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    public globalService: GlobalServiceService,
    private activatedRoute: ActivatedRoute,

  ) {
    this.myReactiveForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      registerDate: ['', Validators.required]

    });

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }
  ngOnInit(): void {

    const url: string = 'http://localhost:8100/users/userdetails/' + this.id;
    this.globalService.getRequest(url).subscribe((res: any) => {
      this.userData = res.data;
      console.log(this.userData);
      // this.profile_image_url = this.userData.profile_image_url;
      // this.first_name = this.userData.first_name;
      // this.last_name = this.userData.last_name;
      // this.email = this.userData.email;
      // this.mobile_number = this.userData.mobile_number;
      // this.register_date = this.getFormatedDate(this.userData.createdAt);
    });


  }

  get myReactive() { return this.myReactiveForm.controls; }

  onUpdate() {
    this.submitted = true;
    if (this.myReactiveForm.invalid) {
      return;
    }
    alert('SUCCESS!!!')
  }

  getFormatedDate(date: any) {
    // var isoDate = '2023-11-16';

    // Create a Date object from the ISO date string
    var dateObject = new Date(date);

    // Extract day, month, and year components
    var day = dateObject.getDate();
    var month = dateObject.getMonth() + 1; // Months are zero-based, so add 1
    var year = dateObject.getFullYear();

    // Ensure the day and month are two digits
    day < 10 ? '0' + day : day;
    month < 10 ? '0' + month : month;

    // Format the date as dd-mm-yyyy
    var formattedDate = day + '-' + month + '-' + year;
    return formattedDate;
  }
}
