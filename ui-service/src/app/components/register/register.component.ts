import { Component, Input } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../services/auth.service';
import { IUser } from '../../interfaces/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CheckboxModule, InputTextModule, ButtonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  @Input() user: IUser = {};
  isValid: boolean = false;
  password: string = '';

  constructor(private auth: AuthService) {}

  formValidate() {
    this.isValid = this.user.firstName && this.user.firstName.trim().length > 0 &&
    this.user.lastName && this.user.lastName.trim().length > 0 &&
    this.user.email && this.user.email.trim().length > 0 &&
    this.user.password && this.user.password.trim().length > 0 && 
    this.user.password === this.password || false;
  }

  userRegister() {
    this.auth.register(this.user);
  }
}
