import {
  Component,
  ViewContainerRef,
  ComponentFactoryResolver,
} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Lazy Loading Components';

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  async loadAdminList() {
    this.viewContainerRef.clear();
    const { AdminListComponent } = await import(
      './admin-list/admin-list.component'
    );

    this.viewContainerRef.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(
        AdminListComponent // <-- Component to load
      ) // <-- Component to load
    );
  }

  async loadUserList() {
    this.viewContainerRef.clear();
    const { UserListComponent } = await import(
      './user-list/user-list.component'
    );

    this.viewContainerRef.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(
        UserListComponent // <-- Component to load
      ) // <-- Component to load
    );
  }
}
