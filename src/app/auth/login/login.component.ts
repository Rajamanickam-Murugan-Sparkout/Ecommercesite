import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { ValidatorCheck } from 'src/app/constants/validator.check';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm !: FormGroup;
  isProcessing:boolean=false;
  isPasswordVisible:boolean=false;
constructor(private fb:FormBuilder,private http:HttpClient,private router:Router){}

  ngOnInit():void{
 
    // initFlowbite();
     this.loginForm = this.fb.group({
       email: ['', [Validators.required, ValidatorCheck.customEmailValidator]],
       password: ['', [Validators.required, ValidatorCheck.strongPassword]]
     });
 
   }
public onLogin(){
this.http.get<any>("http://localhost:3000/signUpUsers").subscribe({
  next:(response:any)=>{
    const user=response.find((a:any)=>{
      return a.email=== this.loginForm.value.email && a.password=== this.loginForm.value.password
    });
    if(user){
    alert('login successfully');
    this.loginForm.reset();
    this.router.navigate(['dashboard']);
  }
  else{
     alert('user not found');
  }
  },
  error:(error:any)=>{
    alert('something went wrong');
  }
})
}
  togglePasswordVisibility(){
    this.isPasswordVisible= !this.isPasswordVisible;
    const passwordInput = document.getElementById('hs-toggle-password') as HTMLInputElement;
    if (this.isPasswordVisible) {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }
   get f()
   {
    return this.loginForm;
   }
}
