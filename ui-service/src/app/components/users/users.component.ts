import { Component } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { User } from '../../classes/user';
import { UsersService } from '../../services/users.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [PaginatorModule, TableModule, ButtonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  users!: User[];

  constructor(private service: UsersService) {}

  ngOnInit() {
    // this.service.getCustomersLarge().then((users) => (this.users = users));
    this.service.geyUsers().subscribe((users: any) => {
      this.users = users;
    });
  }
}
