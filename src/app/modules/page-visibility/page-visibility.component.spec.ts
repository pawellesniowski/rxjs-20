import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVisibilityComponent } from './page-visibility.component';

describe('PageVisibilityComponent', () => {
  let component: PageVisibilityComponent;
  let fixture: ComponentFixture<PageVisibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageVisibilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
