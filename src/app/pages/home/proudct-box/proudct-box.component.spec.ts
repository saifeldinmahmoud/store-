import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudctBoxComponent } from './proudct-box.component';

describe('ProudctBoxComponent', () => {
  let component: ProudctBoxComponent;
  let fixture: ComponentFixture<ProudctBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProudctBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProudctBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
