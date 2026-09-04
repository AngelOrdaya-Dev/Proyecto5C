import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],

  template: `
    <div class="contact-page">

      <h1>📞 Contáctanos</h1>

      <div class="contact-container">


        <!-- =================================
             INFORMACIÓN DE CONTACTO
             ================================= -->

        <div class="contact-info">

          <h2>Información de Contacto</h2>


          <div class="contact-item">

            <div class="contact-icon">
              📧
            </div>

            <div>
              <strong>Email:</strong>

              <p>
                contacto&#64;miempresa.com
              </p>
            </div>

          </div>


          <div class="contact-item">

            <div class="contact-icon">
              📱
            </div>

            <div>
              <strong>Teléfono:</strong>

              <p>
                +1 (555) 123-4567
              </p>
            </div>

          </div>


          <div class="contact-item">

            <div class="contact-icon">
              📍
            </div>

            <div>
              <strong>Dirección:</strong>

              <p>
                123 Calle Principal<br>
                Ciudad, Estado 12345
              </p>
            </div>

          </div>


          <div class="contact-item">

            <div class="contact-icon">
              🕒
            </div>

            <div>
              <strong>Horarios:</strong>

              <p>
                Lunes - Viernes<br>
                9:00 AM - 6:00 PM
              </p>
            </div>

          </div>

        </div>



        <!-- =================================
             FORMULARIO
             ================================= -->

        <div class="contact-form">

          <h2>Envíanos un Mensaje</h2>


          <form
            (ngSubmit)="onSubmit()"
            #contactForm="ngForm"
          >


            <!-- NOMBRE -->

            <div class="form-group">

              <label for="name">
                Nombre *
              </label>

              <input
                type="text"
                id="name"
                name="name"
                [(ngModel)]="formData.name"
                required
                class="form-control"
                placeholder="Tu nombre"
              >

            </div>


            <!-- EMAIL -->

            <div class="form-group">

              <label for="email">
                Email *
              </label>

              <input
                type="email"
                id="email"
                name="email"
                [(ngModel)]="formData.email"
                required
                email
                class="form-control"
                placeholder="tu@email.com"
              >

            </div>


            <!-- ASUNTO -->

            <div class="form-group">

              <label for="subject">
                Asunto
              </label>

              <input
                type="text"
                id="subject"
                name="subject"
                [(ngModel)]="formData.subject"
                class="form-control"
                placeholder="Asunto del mensaje"
              >

            </div>


            <!-- MENSAJE -->

            <div class="form-group">

              <label for="message">
                Mensaje *
              </label>

              <textarea
                id="message"
                name="message"
                [(ngModel)]="formData.message"
                required
                rows="5"
                class="form-control"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>

            </div>


            <!-- BOTÓN -->

            <button
              type="submit"
              class="btn btn-submit"
              [disabled]="!contactForm.form.valid"
            >
              Enviar Mensaje
            </button>

          </form>


          <!-- MENSAJE DE ÉXITO -->

          <div
            *ngIf="messageSent"
            class="success-message"
          >
            ✅ ¡Mensaje enviado correctamente!
            Te responderemos pronto.
          </div>

        </div>

      </div>


      <!-- =================================
           VOLVER AL INICIO
           ================================= -->

      <div class="back-home">

        <a
          routerLink="/home"
          class="btn btn-back"
        >
          ← Volver al Inicio
        </a>

      </div>

    </div>
  `,


  styles: [`

    /* =========================================
       PÁGINA CONTACTO
       ========================================= */

    .contact-page {
      max-width: 1000px;

      margin: 0 auto;

      padding: 35px 25px;
    }

    .contact-page h1 {
      color: #1b4f91;

      text-align: center;

      font-size: 28px;

      margin: 0 0 30px;
    }


    /* =========================================
       CONTENEDOR
       ========================================= */

    .contact-container {

      display: grid;

      grid-template-columns: 1fr 1.5fr;

      gap: 25px;

      margin-bottom: 25px;
    }


    /* =========================================
       INFORMACIÓN
       ========================================= */

    .contact-info {

      background-color: white;

      padding: 30px;

      border-radius: 8px;

      border: 1px solid #e0e0e0;

      box-shadow:
        0 3px 10px rgba(0, 0, 0, 0.08);
    }

    .contact-info h2,
    .contact-form h2 {

      color: #1769d1;

      margin: 0 0 25px;

      font-size: 21px;
    }


    /* =========================================
       ELEMENTOS DE CONTACTO
       ========================================= */

    .contact-item {

      display: flex;

      align-items: flex-start;

      gap: 12px;

      margin-bottom: 22px;
    }

    .contact-icon {

      width: 35px;
      min-width: 35px;

      height: 35px;

      display: flex;

      align-items: center;
      justify-content: center;

      background-color: #eaf3ff;

      border-radius: 50%;

      font-size: 16px;
    }

    .contact-item strong {

      display: block;

      color: #1769d1;

      margin-bottom: 4px;

      font-size: 14px;
    }

    .contact-item p {

      margin: 0;

      color: #555;

      font-size: 13px;

      line-height: 1.5;
    }


    /* =========================================
       FORMULARIO
       ========================================= */

    .contact-form {

      background-color: white;

      padding: 30px;

      border-radius: 8px;

      border: 1px solid #e0e0e0;

      box-shadow:
        0 3px 10px rgba(0, 0, 0, 0.08);
    }


    .form-group {

      margin-bottom: 18px;
    }

    .form-group label {

      display: block;

      margin-bottom: 6px;

      font-weight: bold;

      color: #333;

      font-size: 14px;
    }


    /* INPUTS */

    .form-control {

      width: 100%;

      box-sizing: border-box;

      padding: 11px 12px;

      border: 1px solid #d5d5d5;

      border-radius: 5px;

      font-size: 14px;

      color: #333;

      background-color: white;

      transition:
        border-color 0.2s,
        box-shadow 0.2s;
    }

    .form-control::placeholder {

      color: #aaa;
    }

    .form-control:focus {

      outline: none;

      border-color: #1769d1;

      box-shadow:
        0 0 0 2px rgba(23, 105, 209, 0.15);
    }


    /* TEXTAREA */

    textarea.form-control {

      min-height: 120px;

      resize: vertical;
    }


    /* =========================================
       BOTÓN ENVIAR
       ========================================= */

    .btn-submit {

      width: 100%;

      background-color: #1769d1;

      color: white;

      border: none;

      padding: 12px 20px;

      border-radius: 5px;

      font-size: 14px;

      font-weight: bold;

      cursor: pointer;

      transition: 0.3s;
    }

    .btn-submit:hover:not(:disabled) {

      background-color: #0d4fa8;
    }

    .btn-submit:disabled {

      background-color: #a9c7eb;

      cursor: not-allowed;
    }


    /* =========================================
       MENSAJE DE ÉXITO
       ========================================= */

    .success-message {

      background-color: #dff5e4;

      color: #27843b;

      padding: 12px;

      border-radius: 5px;

      margin-top: 15px;

      border: 1px solid #b9e6c3;

      font-size: 13px;

      text-align: center;
    }


    /* =========================================
       VOLVER
       ========================================= */

    .back-home {

      text-align: center;

      margin-top: 25px;

      padding-top: 20px;

      border-top: 1px solid #ddd;
    }

    .btn-back {

      display: inline-block;

      background-color: #6c757d;

      color: white;

      padding: 11px 25px;

      text-decoration: none;

      border-radius: 5px;

      font-weight: bold;

      font-size: 14px;

      transition: 0.3s;
    }

    .btn-back:hover {

      background-color: #545b62;
    }


    /* =========================================
       MODO CELULAR
       ========================================= */

    @media (max-width: 768px) {

      .contact-page {

        padding: 25px 15px;
      }

      .contact-page h1 {

        font-size: 23px;

        margin-bottom: 20px;
      }


      /*
        ESCRITORIO:
        información | formulario

        CELULAR:
        información
        formulario
      */

      .contact-container {

        grid-template-columns: 1fr;

        gap: 20px;
      }


      .contact-info,
      .contact-form {

        padding: 20px;
      }


      .contact-info h2,
      .contact-form h2 {

        font-size: 19px;

        margin-bottom: 20px;
      }


      .form-group {

        margin-bottom: 15px;
      }


      /*
        16px evita problemas de zoom
        automático en algunos celulares
      */

      .form-control {

        font-size: 16px;

        padding: 12px;
      }


      textarea.form-control {

        min-height: 130px;
      }


      .btn-submit {

        padding: 13px;

        font-size: 15px;
      }


      .btn-back {

        width: 100%;

        box-sizing: border-box;

        text-align: center;
      }
    }


    /* =========================================
       CELULARES PEQUEÑOS
       ========================================= */

    @media (max-width: 480px) {

      .contact-page {

        padding: 20px 10px;
      }

      .contact-page h1 {

        font-size: 20px;
      }


      .contact-info,
      .contact-form {

        padding: 16px;
      }


      .contact-info h2,
      .contact-form h2 {

        font-size: 18px;
      }


      .contact-item {

        gap: 8px;

        margin-bottom: 18px;
      }


      .contact-icon {

        width: 32px;

        min-width: 32px;

        height: 32px;

        font-size: 14px;
      }


      .contact-item strong {

        font-size: 13px;
      }


      .contact-item p {

        font-size: 12px;
      }
    }

  `]
})
export class ContactComponent {

  messageSent = false;

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };


  onSubmit(): void {

    console.log(
      'Formulario enviado:',
      this.formData
    );

    this.messageSent = true;


    setTimeout(() => {

      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };

      this.messageSent = false;

    }, 3000);
  }
}
