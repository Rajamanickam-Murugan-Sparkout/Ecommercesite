import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidatorCheck } from 'src/app/constants/validator.check';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!:FormGroup;
  showPassword: boolean=false;
  showConfirmPassword: boolean=false;
  isProcessing:boolean=false;
  
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router){}
  ngOnInit(){
  this.registerForm=this.fb.group({
  name:['',[Validators.required,ValidatorCheck.nameValidator(), Validators.maxLength(20)]],

  email: ['', [Validators.required, Validators.email,ValidatorCheck.customEmailValidator()]],
  password: ['', [Validators.required,ValidatorCheck.strongPassword()]],
  confirmPassword:['', [Validators.required,ValidatorCheck.strongPassword()]]


})
  }

  public onSignupFormSubmitted(){

    this.http.post<any>("http://localhost:3000/signUpUsers",this.registerForm.value).
    subscribe(res=>{

        alert('Successfully sign up');
        this.registerForm.reset();
          this.router.navigate(['login']);

    },
  error=>{
    alert('something went wrong');
  })
    // this.http.post<any>("http://localhost:3000/signUpUsers",this.registerForm.value).subscribe({
      
    // next:(response:any)=>{
      
    //     alert('Successfully sign up');
    //     this.registerForm.reset();
    //       this.router.navigate(['login']);
    //   },
    //   error:(error:any)=>{
    //    alert('something went worng');

    //   }
    // })
  }
  toggleConfirmPasswordVisibility(){
    this.showConfirmPassword = !this.showConfirmPassword;
    const confirmPasswordInput = document.getElementById('hs-toggle-confirm-password') as HTMLInputElement;
    if (this.showConfirmPassword) {
      confirmPasswordInput.type = 'text';
    } else {
      confirmPasswordInput.type = 'password';
    }
  }
  togglePasswordVisibility(){
    this.showPassword = !this.showPassword;
    const passwordInput = document.getElementById('hs-toggle-password') as HTMLInputElement;
    if (this.showPassword) {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }
  get f()
  {
   return  this.registerForm;
  }
}
