import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudetisComponent } from './sudetis.component';

describe('SudetisComponent', () => {
  let component: SudetisComponent;
  let fixture: ComponentFixture<SudetisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SudetisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SudetisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
