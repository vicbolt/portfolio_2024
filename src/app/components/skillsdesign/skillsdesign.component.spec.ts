import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsdesignComponent } from './skillsdesign.component';

describe('SkillsdesignComponent', () => {
  let component: SkillsdesignComponent;
  let fixture: ComponentFixture<SkillsdesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillsdesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillsdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
