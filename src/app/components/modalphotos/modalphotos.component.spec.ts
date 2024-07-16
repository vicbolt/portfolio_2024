import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalphotosComponent } from './modalphotos.component';

describe('ModalphotosComponent', () => {
  let component: ModalphotosComponent;
  let fixture: ComponentFixture<ModalphotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalphotosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalphotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
