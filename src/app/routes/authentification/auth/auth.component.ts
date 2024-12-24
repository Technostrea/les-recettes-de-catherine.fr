import {Component, inject, OnInit, output} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import { AuthService } from '@app/core/services/auth/auth.service';
import {ToastrService} from "ngx-toastr";
import {LoginDto} from "@app/shared/models/dto/login-dto";
import {User} from "@app/shared/models/user";
import {data} from "autoprefixer";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit{
  private authService = inject(AuthService);
  private readonly toastrService = inject(ToastrService);

  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  loginForm = this.formBuilder.group({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  formSubmitted = output<any>()

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const data = this.loginForm.getRawValue() as LoginDto;

    this.formSubmitted.emit(data);

    this.login(data);

  }

  login(loginDto: LoginDto) {
    this.authService.login(loginDto).then((res) => {

      if (res.isValid) {
        this.router.navigate(['/admin'], {state: {user: res.record as User }}).then(() => {
          const user = res.record as User;
          this.toastrService.success(
            ` Bienvenue ${user.name  ? user.name  : user.email}!`,
            `Connexion`,
            {
              closeButton: true,
              progressAnimation: 'decreasing',
              progressBar: true
            }
          );
        })
      }
    }).catch(reason => {
      this.toastrService.error(
        ` Une erreur s'est produite, vérifier votre connexion ou vos identifiants !`,
        `Connexion`,
        {
          closeButton: true,
          progressAnimation: 'decreasing',
          progressBar: true
        }
      );
    })
  }

  ngOnInit(): void {

    const data = localStorage.getItem('pocketbase_auth');

    if (data ) {

      const {token} = JSON.parse(data!);

      if (token) {
        this.authService.setToken(token);
        if (this.authService.isAuthenticated()) {
          console.log('Connected to PocketBase with valid token');

        } else {
          console.log('Token is invalid or expired');
        }
      } else {
        console.log('No token found');
      }

    }
  }
}
