import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproudctComponent } from './addproudct.component';

describe('AddproudctComponent', () => {
  let component: AddproudctComponent;
  let fixture: ComponentFixture<AddproudctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddproudctComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddproudctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
