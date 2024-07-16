import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {

  mensaje = {
    name: '',
    email: '',
    phone: '',
    reason: '',
    msg: ''
  };

  constructor(private http: HttpClient) {}

  enviar(form: NgForm) {

    this.http.post<any>('http://localhost:3000/send-email', this.mensaje).subscribe(
      (response) => {
        console.log('Correo enviado', response);
        form.resetForm()
        
      },
      (error) => {
        console.error('Error al enviar correo', error);
      }
    );
  }
}
