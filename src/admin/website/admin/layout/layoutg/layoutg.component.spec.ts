import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutgComponent } from './layoutg.component';

describe('LayoutgComponent', () => {
  let component: LayoutgComponent;
  let fixture: ComponentFixture<LayoutgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
