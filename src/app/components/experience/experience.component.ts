import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  public modal = String;

  openModal(){
    const modal = document.getElementById('modalGallery');

    if(modal){
      modal.style.display = 'flex';
    }
  }

  closeModal(){
    const modal = document.getElementById('modalGallery');

    if(modal){
      modal.style.display = 'none';
    }
  }
}
