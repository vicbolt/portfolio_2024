import { Component } from '@angular/core';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrl: './studies.component.scss'
})
export class StudiesComponent {
  transform1 = 'translateX(0px)';
  transform2 = 'translateX(0px)';
  transform3 = 'translateX(0px)';
  transform = 'translateX(0px)';

  onMouseEnter() {
    this.transform = 'translateX(50px)';
    this.transform1 = 'translateX(100px)';
    this.transform2 = 'translateX(150px)';
    this.transform3 = 'translateX(200px)';
  }

  onMouseLeave() {
    this.transform = 'translateX(0px)';
    this.transform1 = 'translateX(0px)';
    this.transform2 = 'translateX(0px)';
    this.transform3 = 'translateX(0px)';
  }
}
