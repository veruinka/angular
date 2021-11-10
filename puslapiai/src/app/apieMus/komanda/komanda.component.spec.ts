import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomandaComponent } from './komanda.component';

describe('KomandaComponent', () => {
  let component: KomandaComponent;
  let fixture: ComponentFixture<KomandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomandaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KomandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
