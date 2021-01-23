import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheRomanColosseumComponent } from './the-roman-colosseum.component';

describe('TheRomanColosseumComponent', () => {
  let component: TheRomanColosseumComponent;
  let fixture: ComponentFixture<TheRomanColosseumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheRomanColosseumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheRomanColosseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
