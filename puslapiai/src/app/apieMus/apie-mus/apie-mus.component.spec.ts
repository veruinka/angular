import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApieMusComponent } from './apie-mus.component';

describe('ApieMusComponent', () => {
  let component: ApieMusComponent;
  let fixture: ComponentFixture<ApieMusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApieMusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApieMusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
