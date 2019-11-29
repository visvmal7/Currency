import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruncationComponent } from './truncation.component';

describe('TruncationComponent', () => {
  let component: TruncationComponent;
  let fixture: ComponentFixture<TruncationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruncationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruncationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
