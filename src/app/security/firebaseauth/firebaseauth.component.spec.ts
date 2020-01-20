import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseauthComponent } from './firebaseauth.component';

describe('FirebaseauthComponent', () => {
  let component: FirebaseauthComponent;
  let fixture: ComponentFixture<FirebaseauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
