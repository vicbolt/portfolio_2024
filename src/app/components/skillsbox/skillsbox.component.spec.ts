import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsboxComponent } from './skillsbox.component';

describe('SkillsboxComponent', () => {
  let component: SkillsboxComponent;
  let fixture: ComponentFixture<SkillsboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillsboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillsboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
