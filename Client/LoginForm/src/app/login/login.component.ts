import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  form: FormGroup;
  hidePassword: boolean =true;

  constructor(private fb: FormBuilder, private http: HttpClient){
    this.form = this.fb.group({
      id: [],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  // password visibility 
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  // Submit form 
  onSubmit() {
    if(this.form.valid) {
      const formData = this.form.value;

      this.http.post("http://localhost:8080/api/employee", formData).subscribe(
        response => {
          console.log('Success:', response);
          this.form.reset();
        },
        error => {
          console.error('Error:', error)
        }
      ); 
    }
  }

   
  
  
  
}
