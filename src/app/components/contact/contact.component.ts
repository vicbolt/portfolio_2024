import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {

  apiURL = 'https://portfolioback2024-e023105753cd.herokuapp.com';

  mensaje = {
    name: '',
    email: '',
    phone: '',
    reason: 'elige',
    msg: ''
  };

  showErrorModal = false;
  errorMessage = '';

  public thanksmodal: HTMLElement | null = null;

  constructor(private http: HttpClient) {
  }

  enviar(form: NgForm) {

    if (form.invalid) { // Si algun dato es invalido
      this.checkForm(form);
    } else { //envio el formulario

      this.http.post<any>(`${this.apiURL}/send-email`, this.mensaje).subscribe(
        (response) => {
          console.log('Correo enviado', response);
          form.resetForm()

          this.thanksmodal = document.getElementById('thanksModal');
          if (this.thanksmodal) {
            this.thanksmodal.style.display = 'flex';
          }

        },
        (error) => {
          console.error('Error al enviar correo', error);
        }
      );
    }
  }

  checkForm(form: NgForm) {
    if (form.invalid) {
      this.errorMessage = this.generateErrorMessage(form);
      this.showErrorModal = true;
    }
  }

  generateErrorMessage(form: NgForm): string {
    let message = '';
    if (form.controls['name'].invalid && form.controls['name'].touched) {
      message += 'Nombre es requerido.\n';
    }
    if (form.controls['email'].invalid && form.controls['email'].touched) {
      message += 'Correo electrónico es requerido y debe ser válido.\n';
    }
    if (form.controls['reason'].invalid && form.controls['reason'].touched) {
      message += 'Razón es requerida.\n';
    }
    if (form.controls['msg'].invalid && form.controls['msg'].touched) {
      message += 'Mensaje es requerido.\n';
    }
    if (form.controls['phone'].invalid && form.controls['phone'].touched) {
      message += 'Teléfono debe contener solo números.\n';
    }
    return message;
  }

  closeErrorModal() {
    this.showErrorModal = false;
  }

  closeThanksModal() {
    this.thanksmodal = document.getElementById('thanksModal');
    if (this.thanksmodal) {
      this.thanksmodal.style.display = 'none';
    }
  }
}
