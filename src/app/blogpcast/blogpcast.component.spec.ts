import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpcastComponent } from './blogpcast.component';

describe('BlogpcastComponent', () => {
  let component: BlogpcastComponent;
  let fixture: ComponentFixture<BlogpcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogpcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogpcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
