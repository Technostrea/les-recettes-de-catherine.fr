import {Injectable, signal} from '@angular/core';
import {LoginDto} from "@app/shared/models/dto/login-dto";
import {environment} from "@env/environment";
import PocketBase from 'pocketbase';
import {RegisterDto} from "@app/shared/models/dto/register-dto";
import {User} from "@app/shared/models/user";
import {AuthResponse} from "@app/shared/models/auth-response";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = signal<AuthResponse | undefined>(undefined)

  async login(loginDto: LoginDto) {
    const {email, password} = loginDto
    const pb = new PocketBase(environment.authUrl);
    await pb.collection('users').authWithPassword(email, password);
    const res = {isValid: pb.authStore.isValid, record: pb.authStore!.record! , token: pb.authStore.token};
    this.user.set(res);
    return res;
  }


  async register(registerDto: RegisterDto) {
    const pb = new PocketBase(environment.authUrl);
    return await pb.collection('users').create<User>(registerDto)
  }

  async logout() {
    const pb = new PocketBase(environment.authUrl);
    return pb.authStore.clear();
  }


  updateUser() {
    const pb = new PocketBase(environment.authUrl);
    this.user.set({isValid: pb.authStore.isValid, record: pb.authStore.record!, token: pb.authStore.token});
  }
}
