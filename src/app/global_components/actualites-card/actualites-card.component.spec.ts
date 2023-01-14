import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualitesCardComponent } from './actualites-card.component';

describe('ActualitesCardComponent', () => {
  let component: ActualitesCardComponent;
  let fixture: ComponentFixture<ActualitesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualitesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualitesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
