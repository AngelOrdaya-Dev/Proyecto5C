import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],

  template: `
    <div class="about-page">

      <h1>📋 Acerca de Nosotros</h1>

      <div class="about-content">

        <!-- INFORMACIÓN DE LA EMPRESA -->

        <section class="company-info">

          <h2>Nuestra Empresa</h2>

          <p>
            Somos una empresa dedicada a crear aplicaciones web modernas
            utilizando las últimas tecnologías como Angular 20.
          </p>

          <p>
            Nuestro objetivo es proporcionar soluciones innovadoras
            y de alta calidad para nuestros clientes.
          </p>

        </section>


        <!-- EQUIPO -->

        <section class="team-info">

          <h2>Nuestro Equipo</h2>

          <div class="team-grid">

            <div class="team-member">

              <div class="member-photo">
                <img src="assets/equipo/tu tia.jpg" alt="Ana García">
              </div>

              <h3>Ana García</h3>

              <p class="position">
                CEO & Fundadora
              </p>

              <p class="description">
                Líder visionaria con más de 10 años de experiencia.
              </p>

            </div>


            <div class="team-member">

              <div class="member-photo">
                <img src="assets/equipo/carlitos.jpg" alt="Carlos Lopez">
              </div>

              <h3>Carlos López</h3>

              <p class="position">
                Desarrollador Senior
              </p>

              <p class="description">
                Especialista en desarrollo web y Angular.
              </p>

            </div>


            <div class="team-member">

              <div class="member-photo">
                <img src="assets/equipo/lla (5).jpg" alt="Carlos Lopez">
              </div>

              <h3>María Rodríguez</h3>

              <p class="position">
                Diseñadora UX/UI
              </p>

              <p class="description">
                Apasionada por el diseño y la experiencia de usuario.
              </p>

            </div>

          </div>

        </section>


        <!-- CONTACTO -->

        <section class="contact-cta">

          <h2>
            ¿Interesado en trabajar con nosotros?
          </h2>

          <p>
            No dudes en contactarnos para más información.
          </p>

          <a
            routerLink="/contact"
            class="btn btn-contact"
          >
            ✉ Contactar Ahora
          </a>

        </section>

      </div>

    </div>
  `,

  styles: [`

    /* =========================================
       ABOUT
       ========================================= */

    .about-page {
      max-width: 1000px;
      margin: 0 auto;

      padding: 35px 25px;

      line-height: 1.6;
    }

    .about-page h1 {
      color: #1b4f91;

      text-align: center;

      font-size: 28px;

      margin: 0 0 30px;
    }


    /* =========================================
       CONTENIDO
       ========================================= */

    .about-content {
      background-color: white;

      padding: 30px;

      border-radius: 8px;

      border: 1px solid #e0e0e0;

      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
    }

    .about-content section {
      margin-bottom: 35px;
    }

    .about-content section:last-child {
      margin-bottom: 0;
    }


    /* =========================================
       TÍTULOS
       ========================================= */

    .about-content h2 {
      color: #1769d1;

      border-bottom: 2px solid #1769d1;

      padding-bottom: 8px;

      margin: 0 0 18px;

      font-size: 21px;
    }


    /* =========================================
       INFORMACIÓN
       ========================================= */

    .company-info p {
      color: #555;

      font-size: 15px;

      margin-bottom: 15px;
    }


    /* =========================================
       EQUIPO
       ========================================= */

    .team-grid {
      display: grid;

      grid-template-columns: repeat(3, 1fr);

      gap: 20px;

      margin-top: 20px;
    }

    .team-member {
      background-color: #f8faff;

      padding: 20px 15px;

      border-radius: 8px;

      text-align: center;

      border: 1px solid #dce7f5;

      transition: 0.3s;
    }

    .team-member:hover {
      transform: translateY(-5px);

      box-shadow: 0 6px 15px rgba(23, 105, 209, 0.15);
    }


    /* FOTO / ICONO */

    .member-photo {
  width: 100px;
  height: 100px;

  margin: 0 auto 15px;

  border-radius: 50%;

  overflow: hidden;

  border: 4px solid #eaf3ff;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  background-color: #eaf3ff;
}

.member-photo img {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;
}


    .team-member h3 {
      color: #1769d1;

      margin: 0 0 5px;

      font-size: 17px;
    }

    .position {
      color: #333;

      font-weight: bold;

      margin: 0 0 8px;

      font-size: 14px;
    }

    .description {
      color: #666;

      margin: 0;

      font-size: 13px;
    }


    /* =========================================
       CONTACTO
       ========================================= */

    .contact-cta {
      background-color: #eaf3ff;

      padding: 25px;

      border-radius: 8px;

      text-align: center;

      border: 1px solid #cfe2ff;
    }

    .contact-cta h2 {
      border: none;

      margin: 0 0 10px;

      color: #1769d1;
    }

    .contact-cta p {
      color: #555;

      margin-bottom: 15px;
    }

    .btn-contact {
      display: inline-block;

      background-color: #1769d1;

      color: white;

      padding: 12px 30px;

      border-radius: 5px;

      font-weight: bold;

      text-decoration: none;

      transition: 0.3s;
    }

    .btn-contact:hover {
      background-color: #0d4fa8;

      transform: translateY(-2px);
    }


    /* =========================================
       CELULAR
       ========================================= */

    @media (max-width: 768px) {

      .about-page {
        padding: 25px 15px;
      }

      .about-page h1 {
        font-size: 23px;
      }

      .about-content {
        padding: 20px;
      }

      .about-content h2 {
        font-size: 19px;
      }

      .company-info p {
        font-size: 14px;
      }


      /* 3 COLUMNAS -> 1 COLUMNA */

      .team-grid {
        grid-template-columns: 1fr;

        gap: 15px;
      }

      .team-member {
        padding: 20px;
      }


      .contact-cta {
        padding: 20px 15px;
      }

      .contact-cta h2 {
        font-size: 19px;
      }

      .btn-contact {
        width: 100%;

        box-sizing: border-box;

        text-align: center;
      }
    }


    /* =========================================
       CELULAR PEQUEÑO
       ========================================= */

    @media (max-width: 480px) {

      .about-page {
        padding: 20px 10px;
      }

      .about-page h1 {
        font-size: 20px;
      }

      .about-content {
        padding: 15px;
      }

      .about-content h2 {
        font-size: 18px;
      }

      .member-icon {
        width: 70px;
        height: 70px;

        font-size: 32px;
      }

      .team-member h3 {
        font-size: 16px;
      }

      .description {
        font-size: 12px;
      }
    }

  `]
})
export class AboutComponent {
}
