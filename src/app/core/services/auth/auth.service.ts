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
  private pb: PocketBase;

  constructor() {
    this.pb = new PocketBase(environment.authUrl);
  }


  async login(loginDto: LoginDto) {
    const {email, password} = loginDto
    // const pb = new PocketBase(environment.authUrl);
    await this.pb.collection('users').authWithPassword(email, password);
    const res = {isValid: this.pb.authStore.isValid, record: this.pb.authStore!.record! , token: this.pb.authStore.token};
    this.user.set(res);
    return res;
  }


  async register(registerDto: RegisterDto) {
    // const pb = new PocketBase(environment.authUrl);
    return await this.pb.collection('users').create<User>(registerDto)
  }

  async logout() {
    // const pb = new PocketBase(environment.authUrl);
    return this.pb.authStore.clear();
  }


  updateUser() {
    // const pb = new PocketBase(environment.authUrl);
    this.user.set({isValid: this.pb.authStore.isValid, record: this.pb.authStore.record!, token: this.pb.authStore.token});
  }

  public setToken(token: string): void {
    // const pb = new PocketBase(environment.authUrl);
    this.pb.authStore.save(token);
  }

  public isAuthenticated(): boolean {
    // const pb = new PocketBase(environment.authUrl);
    return this.pb.authStore.isValid;
  }
}
