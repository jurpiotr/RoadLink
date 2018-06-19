import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLocalComponent } from './home-local.component';

describe('HomeLocalComponent', () => {
  let component: HomeLocalComponent;
  let fixture: ComponentFixture<HomeLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
