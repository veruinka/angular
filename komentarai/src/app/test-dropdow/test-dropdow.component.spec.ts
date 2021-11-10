import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDropdowComponent } from './test-dropdow.component';

describe('TestDropdowComponent', () => {
  let component: TestDropdowComponent;
  let fixture: ComponentFixture<TestDropdowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDropdowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDropdowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
