import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataplatformComponent } from './dataplatform.component';

describe('DataplatformComponent', () => {
  let component: DataplatformComponent;
  let fixture: ComponentFixture<DataplatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataplatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataplatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
