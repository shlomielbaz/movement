import { Component, Input } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CheckboxModule, InputTextModule, ButtonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Input() email: string  = '';
  @Input() password: string  = '';  
  rememberme: boolean = false;
  isValid: boolean = false;

  constructor(private auth: AuthService) {
  
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  
  formValidate() {
    this.isValid = this.email.trim().length > 0 && this.password.trim().length > 0 || false;
  }

  userLogin() {
    
    this.auth.login(this.email, this.password).pipe(
      catchError(this.handleError)
    )
    .subscribe((data: any) => {
      this.auth.signIn(data);
    });
  }
}
