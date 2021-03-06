import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user$ = this.authService.userSubject$;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.logout();
  }

}
