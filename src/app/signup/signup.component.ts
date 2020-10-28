import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  submitted:boolean=false;
  registerForm: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,

  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({

      userName:new FormControl('',[Validators.required,]),
      email: new FormControl('',[Validators.required,]),
      firstName: new FormControl('',[Validators.required,]),
      lastName: new FormControl('',[Validators.required,]),
      mobile: new FormControl('',[Validators.required,]),
      country: new FormControl('',[Validators.required,]),
      state:new FormControl('',[Validators.required,]),
      city: new FormControl('',[Validators.required,]),
      address: new FormControl('',[Validators.required,]),
      zip: new FormControl('',[Validators.required,]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),//['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // signUp(form: NgForm) {
  //   var userName: string = form.value.userName;
  //   var email: string = form.value.email;
  //   var firstName: string = form.value.firstName;
  //   var lastName: string = form.value.lastName;
  //   var mobile: number = form.value.lastName;
  //   var country: string = form.value.lastName;
  //   var state: string = form.value.lastName;
  //   var city: string = form.value.lastName;
  //   var address: string = form.value.lastName;
  //   var zip: number = form.value.lastName;
  //   var password: string = form.value.lastName;


  //   this._userService.signUp(userName, email, firstName, lastName, mobile, country, state, city, address, zip, password).subscribe(
  //     response => {
  //       console.log('Success!', response)
  //       alert("registered in successfully")
  //       this.router.navigate(['logIn'])
  //     },
  //     error => {
  //       console.error('Error!', error)
  //       alert("fillup all data")
  //       this.router.navigate(['signUp'])
  //     },
  //     // ()=>{
  //     //   this.router.navigate(['logIn'])
  //     //   alert("registered in successfully")
  //     // }
  //   );







  onSubmit() {
    this.submitted =true;
    console.log(this.registerForm)
    // this.submitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value)
    // this.loading = true;
    this.userService.register(this.registerForm.value)
      .subscribe(
        data => {
          console.log(data)
          // this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          // this.alertService.error(error);
          // this.loading = false;
        });
  }
}
