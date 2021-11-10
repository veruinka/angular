import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulinisComponent } from './titulinis.component';

describe('TitulinisComponent', () => {
  let component: TitulinisComponent;
  let fixture: ComponentFixture<TitulinisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitulinisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitulinisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
