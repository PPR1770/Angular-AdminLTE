import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {

  show(message: string, type: 'success' | 'error' = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast bg-${type === 'success' ? 'success' : 'danger'} text-white`;
    toast.innerHTML = `
      <div class="toast-body">${message}</div>
    `;
    toast.style.position = 'fixed';
    toast.style.top = '20px';
    toast.style.right = '20px';
    toast.style.zIndex = '1055';

    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }
}
