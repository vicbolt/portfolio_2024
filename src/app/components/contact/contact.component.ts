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

  errors: string[] = [];
  showErrorModal: boolean = false;

  public thanksmodal: HTMLElement | null = null;

  constructor(private http: HttpClient) {
  }

  // ENVIAMOS EL CORREO
  enviar(form: NgForm) {

    // SI HAY ERRORES ->
    this.errors = []; // Reset errors

    if (!this.mensaje.name) {
      this.errors.push('El nombre es obligatorio.');
    }
    if (!this.mensaje.email) {
      this.errors.push('El correo electrónico es obligatorio.');
    } else if (!this.validateEmail(this.mensaje.email)) {
      this.errors.push('El correo electrónico no es válido.');
    }
    if (!this.mensaje.reason) {
      this.errors.push('Debe seleccionar una razón.');
    }
    if (!this.mensaje.msg) {
      this.errors.push('El mensaje es obligatorio.');
    }
    if (this.errors.length > 0) {
      this.showErrorModal = true;
    } else {
       //SI NO HAY ERRORES ->
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

  validateEmail(email: string): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/i;
    return re.test(email);
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
