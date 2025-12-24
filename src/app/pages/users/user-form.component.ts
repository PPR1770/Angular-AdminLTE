import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user-form',
  template: `
<form [formGroup]="form" (ngSubmit)="submit()">
<div class="form-group">
  <label>Email</label>
  <input class="form-control" formControlName="email">
</div>

<div class="form-group">
  <label>Role</label>
  <select class="form-control" formControlName="role">
    <option>Admin</option>
    <option>User</option>
  </select>
</div>

<button class="btn btn-success" [disabled]="form.invalid">
  Save
</button>
</form>
`
})
export class UserFormComponent implements OnChanges {

  @Input() user?: User;
  @Output() submitForm = new EventEmitter<User>();

  form = this.fb.group({
    id: [0],
    email: ['', [Validators.required, Validators.email]],
    role: ['User', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  ngOnChanges() {
    if (this.user) this.form.patchValue(this.user);
    else this.form.reset({ role: 'User' });
  }

  submit() {
    if (this.form.valid) this.submitForm.emit(this.form.value as User);
  }
}
