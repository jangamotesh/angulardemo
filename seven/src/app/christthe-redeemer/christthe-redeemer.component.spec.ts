import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristtheRedeemerComponent } from './christthe-redeemer.component';

describe('ChristtheRedeemerComponent', () => {
  let component: ChristtheRedeemerComponent;
  let fixture: ComponentFixture<ChristtheRedeemerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChristtheRedeemerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChristtheRedeemerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
