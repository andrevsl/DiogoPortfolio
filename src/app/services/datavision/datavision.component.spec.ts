import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatavisionComponent } from './datavision.component';

describe('DatavisionComponent', () => {
  let component: DatavisionComponent;
  let fixture: ComponentFixture<DatavisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatavisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatavisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
