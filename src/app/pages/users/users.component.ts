import { Component, OnInit } from '@angular/core';
import { User, UsersService } from 'src/app/shared/services/users.service';
import { AuthService } from '../../auth/auth.service';
import { ToastService } from '../../shared/services/toast.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  filteredUsers: User[] = [];
  selectedUser?: User;

  page = 1;
  pageSize = 5;
  search:any = '';

  showModal = false;

  constructor(
    private service: UsersService,
    public auth: AuthService,
    private toast: ToastService
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.service.getUsers().subscribe(data => {
      this.users = data;
      this.applyFilter();
    });
  }

  applyFilter() {
    this.filteredUsers = this.users
      .filter(u => u.email.toLowerCase().includes(this.search.toLowerCase()))
      .slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
  }

  openAdd() {
    this.selectedUser = undefined;
    this.showModal = true;
  }

  openEdit(user: User) {
    this.selectedUser = { ...user };
    this.showModal = true;
  }

  save(user: User) {
    const action = user.id
      ? this.service.updateUser(user)
      : this.service.addUser(user);

    action.subscribe(() => {
      this.toast.show('User saved');
      this.loadUsers();
      this.showModal = false;
    });
  }

  delete(id: number) {
    if (!confirm('Delete user?')) return;
    this.service.deleteUser(id).subscribe(() => {
      this.toast.show('User deleted', 'error');
      this.loadUsers();
    });
  }
}
