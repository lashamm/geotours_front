import { Component, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar';
import { FooterComponent } from './shared/footer/footer';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`main { min-height: 100vh; }`]
})
export class App implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;
  private sub?: Subscription;

  constructor(private router: Router, private zone: NgZone) {}

  ngAfterViewInit() {
    this.setupObserver();
    this.sub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => setTimeout(() => this.setupObserver(), 80));
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    this.sub?.unsubscribe();
  }

  private setupObserver() {
    this.observer?.disconnect();
    this.observer = new IntersectionObserver(
      (entries) => {
        this.zone.run(() => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              this.observer!.unobserve(entry.target);
            }
          });
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.section').forEach(el => {
      if (!el.classList.contains('is-visible')) {
        this.observer!.observe(el);
      }
    });
  }
}
