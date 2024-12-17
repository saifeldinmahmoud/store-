import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,

  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router) {}
  LOGIN: any = {
    username: '',
    pasword: '',
  };
  loginaccpet() {
    if (this.LOGIN.username == 'admin' && this.LOGIN.pasword == '12345') {
      this.router.navigateByUrl('/admin');
    } else {
      this.router.navigateByUrl('/pay');
    }
  }
}
