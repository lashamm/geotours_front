import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

// ── AdminGuard ───────────────────────────────────────────────────────────────
// Currently blocks all admin access (no backend yet).
// When auth is ready, replace the body with:
//   const auth = inject(AuthService);
//   return auth.isAdmin() ? true : inject(Router).navigate(['/']);
// ─────────────────────────────────────────────────────────────────────────────
export const AdminGuard: CanActivateFn = () => {
  inject(Router).navigate(['/']);
  return false;
};
