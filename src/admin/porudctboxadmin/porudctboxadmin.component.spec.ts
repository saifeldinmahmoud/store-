import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorudctboxadminComponent } from './porudctboxadmin.component';

describe('PorudctboxadminComponent', () => {
  let component: PorudctboxadminComponent;
  let fixture: ComponentFixture<PorudctboxadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorudctboxadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PorudctboxadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
