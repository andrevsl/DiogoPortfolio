import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CognitoauthComponent } from './cognitoauth.component';

describe('CognitoauthComponent', () => {
  let component: CognitoauthComponent;
  let fixture: ComponentFixture<CognitoauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CognitoauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CognitoauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
