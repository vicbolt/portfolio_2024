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

  error = '';


  public thanksmodal: HTMLElement | null = null;

  constructor(private http: HttpClient) {
  }

  // ENVIAMOS EL CORREO
  enviar(form: NgForm) {

    this.error = '';

    // SI HAY ERRORES ->
    if(this.mensaje.name.length < 1 || this.mensaje.email.length < 1 || this.mensaje.reason.length < 1 || this.mensaje.msg.length < 1 ){
      this.error = 'Rellena los campos vacíos antes de enviar el formulario';
    }

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


  closeThanksModal() {
    this.thanksmodal = document.getElementById('thanksModal');
    if (this.thanksmodal) {
      this.thanksmodal.style.display = 'none';
    }
  }
}
