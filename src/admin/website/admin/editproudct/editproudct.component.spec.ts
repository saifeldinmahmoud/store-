import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditproudctComponent } from './editproudct.component';

describe('EditproudctComponent', () => {
  let component: EditproudctComponent;
  let fixture: ComponentFixture<EditproudctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditproudctComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditproudctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
