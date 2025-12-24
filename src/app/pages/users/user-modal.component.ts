import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user-modal',
  template: `
<div *ngIf="visible" class="modal fade show d-block">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5>{{user ? 'Edit' : 'Add'}} User</h5>
        <button class="close" (click)="close.emit()">×</button>
      </div>
      <div class="modal-body">
        <app-user-form
          [user]="user"
          (submitForm)="save.emit($event)">
        </app-user-form>
      </div>
    </div>
  </div>
</div>
<div *ngIf="visible" class="modal-backdrop fade show"></div>
`
})
export class UserModalComponent {
  @Input() visible = false;
  @Input() user?: User;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<User>();
}
