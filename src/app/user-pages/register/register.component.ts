import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
 
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({

      userName: ['', Validators.required],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      zip: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
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
      // this.submitted = true;

      // reset alerts on submit
      // this.alertService.clear();

      // stop here if form is invalid
      if (this.registerForm.invalid) {
        return;
      }

      // this.loading = true;
      this.userService.register(this.registerForm.value)
        .pipe(first())
        .subscribe(
          data => {
            // this.alertService.success('Registration successful', true);
            this.router.navigate(['/login']);
          },
          error => {
            // this.alertService.error(error);
            // this.loading = false;
          });
    }
}
