import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudctsHeaderComponent } from './proudcts-header.component';

describe('ProudctsHeaderComponent', () => {
  let component: ProudctsHeaderComponent;
  let fixture: ComponentFixture<ProudctsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProudctsHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProudctsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
