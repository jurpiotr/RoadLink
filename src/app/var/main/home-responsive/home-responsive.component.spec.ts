import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeResponsiveComponent } from './home-responsive.component';

describe('HomeResponsiveComponent', () => {
  let component: HomeResponsiveComponent;
  let fixture: ComponentFixture<HomeResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
