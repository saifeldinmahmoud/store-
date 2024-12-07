import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZarListComponent } from './zar-list.component';

describe('ZarListComponent', () => {
  let component: ZarListComponent;
  let fixture: ComponentFixture<ZarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZarListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
