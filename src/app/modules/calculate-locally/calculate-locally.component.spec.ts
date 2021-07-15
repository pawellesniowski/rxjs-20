import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateLocallyComponent } from './calculate-locally.component';

describe('CalculateLocallyComponent', () => {
  let component: CalculateLocallyComponent;
  let fixture: ComponentFixture<CalculateLocallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateLocallyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateLocallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
