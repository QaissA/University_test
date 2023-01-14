import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualitesCardLargeComponent } from './actualites-card-large.component';

describe('ActualitesCardLargeComponent', () => {
  let component: ActualitesCardLargeComponent;
  let fixture: ComponentFixture<ActualitesCardLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualitesCardLargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualitesCardLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
