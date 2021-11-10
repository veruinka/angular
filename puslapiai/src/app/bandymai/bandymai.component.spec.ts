import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandymaiComponent } from './bandymai.component';

describe('BandymaiComponent', () => {
  let component: BandymaiComponent;
  let fixture: ComponentFixture<BandymaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandymaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandymaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
