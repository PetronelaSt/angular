import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KonzultantiComponent } from './konzultanti.component';

describe('KonzultantiComponent', () => {
  let component: KonzultantiComponent;
  let fixture: ComponentFixture<KonzultantiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KonzultantiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KonzultantiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
