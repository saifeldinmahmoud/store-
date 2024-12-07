import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudctComponent } from './proudct.component';

describe('ProudctComponent', () => {
  let component: ProudctComponent;
  let fixture: ComponentFixture<ProudctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProudctComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProudctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
