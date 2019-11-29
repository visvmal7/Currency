import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardcodeComponent } from './hardcode.component';

describe('HardcodeComponent', () => {
  let component: HardcodeComponent;
  let fixture: ComponentFixture<HardcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
