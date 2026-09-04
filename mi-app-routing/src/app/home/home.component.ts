import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],

  template: `
    <div class="home-page">

      <h1>🏠 ¡Bienvenido a CompanyApp!</h1>

      <p class="intro">
        Somos una empresa comprometida con ofrecer soluciones innovadoras
        y de alta calidad para nuestros clientes.
      </p>

      <div class="welcome-card">

        <div class="welcome-text">
          <h2>¿Qué puedes hacer aquí?</h2>

          <p>
            Conoce más sobre nuestra empresa y descubre las soluciones
            que tenemos para ti.
          </p>

          <ul>
            <li>
              Conocer más sobre nosotros en
              <a routerLink="/about">Acerca de</a>
            </li>

            <li>
              Ponerte en contacto en
              <a routerLink="/contact">Contacto</a>
            </li>

            <li>
              Navegar por toda la aplicación
            </li>
          </ul>
        </div>

        <div class="welcome-icon">
          💻
        </div>

      </div>

      <div class="features">

        <div class="feature-card">
          <div class="feature-icon">
            👥
          </div>

          <h3>Innovación</h3>

          <p>
            Desarrollamos soluciones creativas y efectivas.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            🚀
          </div>

          <h3>Calidad</h3>

          <p>
            Trabajamos con los más altos estándares.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            🎧
          </div>

          <h3>Soporte</h3>

          <p>
            Acompañamos a nuestros clientes siempre.
          </p>
        </div>

      </div>

      <div class="action-buttons">

        <a
          routerLink="/about"
          class="btn btn-primary"
        >
          Conocer más sobre nosotros
        </a>

        <a
          routerLink="/contact"
          class="btn btn-secondary"
        >
          Ir a Contacto
        </a>

      </div>

    </div>
  `,

  styles: [`

    /* =========================================
       HOME
       ========================================= */

    .home-page {
      max-width: 1000px;
      margin: 0 auto;
      padding: 35px 25px;
    }

    .home-page h1 {
      color: #1b4f91;
      text-align: center;
      font-size: 28px;
      margin: 0 0 10px;
    }

    .intro {
      text-align: center;
      color: #666;
      font-size: 15px;
      max-width: 700px;
      margin: 0 auto 30px;
      line-height: 1.6;
    }


    /* =========================================
       TARJETA DE BIENVENIDA
       ========================================= */

    .welcome-card {
      display: flex;
      align-items: center;
      justify-content: space-between;

      background-color: white;
      border: 1px solid #e1e1e1;
      border-radius: 8px;

      padding: 30px;

      margin-bottom: 25px;

      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
    }

    .welcome-text {
      flex: 1;
    }

    .welcome-text h2 {
      color: #1769d1;
      margin: 0 0 15px;
      font-size: 22px;
    }

    .welcome-text p {
      color: #555;
      line-height: 1.6;
      margin-bottom: 15px;
    }

    .welcome-card ul {
      padding-left: 22px;
      margin-bottom: 0;
      line-height: 1.9;
      color: #555;
    }

    .welcome-card a {
      color: #1769d1;
      font-weight: bold;
    }

    .welcome-card a:hover {
      text-decoration: underline;
    }

    .welcome-icon {
      width: 150px;
      height: 150px;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: #eaf3ff;
      border-radius: 50%;

      font-size: 65px;

      margin-left: 30px;
    }


    /* =========================================
       TARJETAS DE CARACTERÍSTICAS
       ========================================= */

    .features {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin: 25px 0;
    }

    .feature-card {
      background-color: white;
      border: 1px solid #e0e0e0;
      border-radius: 8px;

      padding: 25px 15px;

      text-align: center;

      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.06);

      transition: 0.3s;
    }

    .feature-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    }

    .feature-icon {
      width: 55px;
      height: 55px;

      margin: 0 auto 12px;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: #1769d1;
      color: white;

      border-radius: 50%;

      font-size: 27px;
    }

    .feature-card h3 {
      color: #1769d1;
      margin: 10px 0;
      font-size: 17px;
    }

    .feature-card p {
      color: #666;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }


    /* =========================================
       BOTONES
       ========================================= */

    .action-buttons {
      display: flex;
      justify-content: center;
      gap: 10px;

      margin-top: 30px;
    }

    .btn {
      display: inline-block;

      padding: 12px 22px;

      border-radius: 5px;

      font-weight: bold;
      font-size: 14px;

      text-decoration: none;

      transition: 0.3s;
    }

    .btn-primary {
      background-color: #1769d1;
      color: white;
    }

    .btn-primary:hover {
      background-color: #0d4fa8;
    }

    .btn-secondary {
      background-color: white;
      color: #1769d1;

      border: 2px solid #1769d1;
    }

    .btn-secondary:hover {
      background-color: #1769d1;
      color: white;
    }


    /* =========================================
       CELULAR
       ========================================= */

    @media (max-width: 768px) {

      .home-page {
        padding: 25px 15px;
      }

      .home-page h1 {
        font-size: 23px;
      }

      .intro {
        font-size: 14px;
      }

      .welcome-card {
        flex-direction: column;
        text-align: center;
        padding: 22px;
      }

      .welcome-text h2 {
        font-size: 20px;
      }

      .welcome-card ul {
        text-align: left;
      }

      .welcome-icon {
        width: 100px;
        height: 100px;

        font-size: 45px;

        margin: 20px auto 0;
      }

      .features {
        grid-template-columns: 1fr;
        gap: 15px;
      }

      .feature-card {
        padding: 20px;
      }

      .action-buttons {
        flex-direction: column;
      }

      .btn {
        width: 100%;
        text-align: center;
        box-sizing: border-box;
      }
    }


    /* =========================================
       CELULAR PEQUEÑO
       ========================================= */

    @media (max-width: 480px) {

      .home-page {
        padding: 20px 10px;
      }

      .home-page h1 {
        font-size: 20px;
      }

      .welcome-card {
        padding: 17px;
      }

      .welcome-text h2 {
        font-size: 18px;
      }

      .welcome-card ul {
        font-size: 13px;
      }

      .feature-card h3 {
        font-size: 16px;
      }

      .feature-card p {
        font-size: 12px;
      }
    }

  `]
})
export class HomeComponent {
}
