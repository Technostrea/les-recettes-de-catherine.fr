import {Component, inject, output} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import { AuthService } from '@app/core/services/auth/auth.service';
import {ToastrService} from "ngx-toastr";
import {LoginDto} from "@app/shared/models/dto/login-dto";
import {User} from "@app/shared/models/user";

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
export class AuthComponent {
  private authService = inject(AuthService);
  private readonly toastrService = inject(ToastrService);

  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

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

      if (res.isValid) this.router.navigate(['/admin'], {state: {user: res.record as User }}).then(() => {
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
    })
  }
}
