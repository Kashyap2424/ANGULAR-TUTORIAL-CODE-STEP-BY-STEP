import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a componentName', () => {
    expect(component.componentName).toEqual('users');
  });

  it('should have a sum function', () => {
    expect(component.sum(30, 20)).toEqual(50);
  });

  it('should have a div user-component', () => {
    const collection = fixture.nativeElement;
    expect(collection.querySelector('.user-component').textContent).toContain(
      'Users Component'
    );
  });
});
