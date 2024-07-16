import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvLinkedComponent } from './cv-linked.component';

describe('CvLinkedComponent', () => {
  let component: CvLinkedComponent;
  let fixture: ComponentFixture<CvLinkedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CvLinkedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CvLinkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
