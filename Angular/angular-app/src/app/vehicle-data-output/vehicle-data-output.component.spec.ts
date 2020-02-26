import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDataOutputComponent } from './vehicle-data-output.component';

describe('VehicleDataOutputComponent', () => {
  let component: VehicleDataOutputComponent;
  let fixture: ComponentFixture<VehicleDataOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleDataOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleDataOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
