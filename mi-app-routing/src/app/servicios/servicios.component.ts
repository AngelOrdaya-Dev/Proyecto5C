// Importamos Component para poder crear un componente de Angular.
import { Component } from '@angular/core';

// Importamos RouterLink para poder utilizar routerLink
// y navegar entre las páginas sin recargar el navegador.
import { RouterLink } from '@angular/router';


// ============================================================
// CONFIGURACIÓN DEL COMPONENTE
// ============================================================

@Component({

  // Nombre de la etiqueta HTML que representa este componente.
  selector: 'app-servicios',

  // Indicamos que es un componente independiente.
  // Esto significa que no necesitamos declararlo dentro de un módulo.
  standalone: true,

  // Importamos RouterLink porque utilizamos enlaces
  // como routerLink="/contact".
  imports: [RouterLink],


  // ============================================================
  // HTML DEL COMPONENTE
  // ============================================================

  template: `

    <!--
      Contenedor principal de toda la página de servicios.
      Dentro estarán el encabezado, las tarjetas,
      la llamada a la acción y el pie de página.
    -->
    <div class="services-page">


      <!-- =====================================================
           HERO / ENCABEZADO PRINCIPAL
           ===================================================== -->

      <section class="hero">

        <!--
          Contenedor del contenido del encabezado.
          Permite centrar el título y el subtítulo.
        -->
        <div class="hero-content">

          <!-- Título principal de la página -->
          <h1>
            Nuestros Servicios
          </h1>

          <!-- Descripción corta debajo del título -->
          <p>
            Soluciones digitales que impulsan el crecimiento
            de tu negocio
          </p>

        </div>

      </section>


      <!-- =====================================================
           SECCIÓN DE SERVICIOS
           ===================================================== -->

      <section class="services-section">

        <!--
          Grid donde se colocarán todas las tarjetas.
          En computadora tendremos 4 columnas.
        -->
        <div class="services-grid">


          <!-- =================================================
               SERVICIO 1 - DISEÑO WEB
               ================================================= -->

          <div class="service-card">

            <!-- Área destinada al icono -->
            <div class="service-icon">

              <!--
                Monitor creado solamente con HTML y CSS.
                No necesitamos una imagen externa.
              -->
              <div class="monitor">

                <!-- Parte interior de la pantalla -->
                <div class="screen">

                  <!-- Barras que simulan contenido de una página -->
                  <span></span>
                  <span></span>
                  <span></span>

                </div>

                <!-- Teléfono que aparece junto al monitor -->
                <div class="phone"></div>

              </div>

            </div>

            <!-- Nombre del servicio -->
            <h2>
              Diseño Web Apps
            </h2>

            <!-- Descripción del servicio -->
            <p>
              Creamos sitios web y aplicaciones web modernas,
              responsivas y optimizadas para ofrecer la mejor
              experiencia de usuario.
            </p>

            <!--
              RouterLink permite navegar a la página de contacto
              sin recargar toda la aplicación.
            -->
            <a routerLink="/contact">
              Ver más →
            </a>

          </div>


          <!-- =================================================
               SERVICIO 2 - REDES SOCIALES
               ================================================= -->

          <div class="service-card">

            <!-- Contenedor de los iconos sociales -->
            <div class="service-icon social-icons">

              <!-- Facebook -->
              <span class="facebook">
                f
              </span>

              <!-- Instagram -->
              <span class="instagram">
                ◎
              </span>

              <!-- LinkedIn -->
              <span class="linkedin">
                in
              </span>

              <!-- Icono de conversación -->
              <span class="chat">
                •••
              </span>

            </div>

            <!-- Nombre del servicio -->
            <h2>
              Redes Sociales
            </h2>

            <!-- Descripción -->
            <p>
              Gestionamos y potenciamos tus redes sociales para
              aumentar tu presencia digital y conectar con tu
              audiencia.
            </p>

            <!-- Enlace a contacto -->
            <a routerLink="/contact">
              Ver más →
            </a>

          </div>


          <!-- =================================================
               SERVICIO 3 - MARKETING DIGITAL
               ================================================= -->

          <div class="service-card">

            <!-- Área del icono -->
            <div class="service-icon">

              <!--
                Megáfono utilizado para representar
                publicidad y marketing.
              -->
              <div class="megaphone">
                📣
              </div>

            </div>

            <!-- Nombre -->
            <h2>
              Marketing Digital
            </h2>

            <!-- Descripción -->
            <p>
              Estrategias digitales efectivas para atraer,
              convertir y fidelizar clientes. Campañas que
              generan resultados.
            </p>

            <!-- Enlace -->
            <a routerLink="/contact">
              Ver más →
            </a>

          </div>


          <!-- =================================================
               SERVICIO 4 - DESARROLLO DE SOFTWARE
               ================================================= -->

          <div class="service-card">

            <!-- Icono del servicio -->
            <div class="service-icon software-icon">

              <!-- Monitor -->
              <div class="computer">

                <!-- Símbolo típico de programación -->
                &lt;/&gt;

              </div>

              <!-- Engranaje -->
              <div class="gear">
                ⚙
              </div>

            </div>

            <!-- Nombre -->
            <h2>
              Desarrollo Software
            </h2>

            <!-- Descripción -->
            <p>
              Desarrollamos software a medida que se adapta a
              las necesidades de tu negocio y optimiza tus
              procesos.
            </p>

            <!-- Enlace -->
            <a routerLink="/contact">
              Ver más →
            </a>

          </div>


          <!-- =================================================
               SERVICIO 5 - HOSTING Y DOMINIO
               ================================================= -->

          <div class="service-card">

            <!-- Icono de hosting -->
            <div class="service-icon hosting-icon">

              <!-- Nube -->
              <div class="cloud">
                ☁
              </div>

              <!-- Servidor -->
              <div class="server">
                ▬▬▬
              </div>

            </div>

            <!-- Nombre -->
            <h2>
              Hosting & Dominio
            </h2>

            <!-- Descripción -->
            <p>
              Ofrecemos hosting seguro, rápido y confiable.
              Registramos tu dominio y te ayudamos a poner tu
              proyecto en línea.
            </p>

            <!-- Enlace -->
            <a routerLink="/contact">
              Ver más →
            </a>

          </div>


          <!-- =================================================
               SERVICIO 6 - ESTRATEGIA DIGITAL
               ================================================= -->

          <div class="service-card">

            <!-- Icono de estrategia -->
            <div class="service-icon strategy-icon">

              <!-- Objetivo -->
              <div class="target">
                ◎
              </div>

              <!-- Flecha -->
              <div class="arrow">
                ➜
              </div>

            </div>

            <!-- Nombre -->
            <h2>
              Estrategia Digital
            </h2>

            <!-- Descripción -->
            <p>
              Analizamos tu negocio y creamos estrategias
              digitales personalizadas para lograr tus objetivos
              y aumentar tu competitividad.
            </p>

            <!-- Enlace -->
            <a routerLink="/contact">
              Ver más →
            </a>

          </div>


          <!-- =================================================
               SERVICIO 7 - IDENTIDAD CORPORATIVA
               ================================================= -->

          <div class="service-card">

            <!-- Icono de identidad corporativa -->
            <div class="service-icon identity-icon">

              <!-- Primer documento -->
              <div class="document">
                📄
              </div>

              <!-- Segundo documento -->
              <div class="document second">
                📄
              </div>

            </div>

            <!-- Nombre -->
            <h2>
              Identidad Corporativa
            </h2>

            <!-- Descripción -->
            <p>
              Diseñamos la identidad visual de tu marca para que
              comuniques profesionalismo y generes confianza.
            </p>

            <!-- Enlace -->
            <a routerLink="/contact">
              Ver más →
            </a>

          </div>


        </div>

      </section>


      <!-- =====================================================
           LLAMADA A LA ACCIÓN - CTA
           ===================================================== -->

      <section class="cta">

        <!-- Texto del CTA -->
        <div class="cta-text">

          <!-- Pregunta principal -->
          <h2>
            ¿Listo para llevar tu negocio al siguiente nivel?
          </h2>

          <!-- Texto secundario -->
          <p>
            Hablemos sobre tu proyecto y encontremos la mejor
            solución para ti.
          </p>

        </div>

        <!--
          Botón que dirige al formulario de contacto.
        -->
        <a
          routerLink="/contact"
          class="cta-button"
        >
          Solicitar Cotización

          <!-- Flecha del botón -->
          <span>
            →
          </span>

        </a>

      </section>


      <!-- =====================================================
           FOOTER
           ===================================================== -->

      <footer class="footer">

        <!-- Información de contacto -->
        <div class="footer-left">

          <!-- Teléfono -->
          <span>
            📞
          </span>

          +51 987 654 321


          <!-- Correo -->
          <span class="footer-email">
            ✉ info&#64;companyapp.com
          </span>

        </div>


        <!-- Redes sociales -->
        <div class="social-footer">

          <span>
            f
          </span>

          <span>
            ◎
          </span>

          <span>
            in
          </span>

          <span>
            ▶
          </span>

        </div>


        <!-- Derechos de autor -->
        <div class="copyright">

          © 2025 CompanyApp. Todos los derechos reservados.

        </div>

      </footer>


    </div>
  `,


  // ============================================================
  // CSS DEL COMPONENTE
  // ============================================================

  styles: [`

    /* =========================================================
       CONFIGURACIÓN GENERAL
       ========================================================= */

    /*
      .services-page es el contenedor principal.

      width: 100% hace que ocupe todo el ancho disponible.

      min-height: 100vh hace que la página tenga como mínimo
      la altura completa de la pantalla.

      background-color establece el fondo blanco.
    */
    .services-page {

      width: 100%;

      min-height: 100vh;

      background-color: #ffffff;

      color: #333;

      box-sizing: border-box;
    }


    /*
      box-sizing: border-box permite que el padding y el borde
      estén incluidos dentro del tamaño total del elemento.
    */
    * {
      box-sizing: border-box;
    }


    /* =========================================================
       HERO
       ========================================================= */

    /*
      El hero es la franja azul que aparece en la parte superior.

      display:flex permite utilizar Flexbox.

      align-items:center centra verticalmente.

      justify-content:center centra horizontalmente.
    */
    .hero {

      width: 100%;

      min-height: 170px;

      display: flex;

      align-items: center;

      justify-content: center;

      text-align: center;


      /*
        Degradado azul.

        Los dos colores producen el efecto visual
        parecido al encabezado de la imagen.
      */
      background:
        linear-gradient(
          rgba(8, 52, 100, 0.88),
          rgba(13, 79, 150, 0.88)
        );


      position: relative;

      overflow: hidden;
    }


    /*
      Pseudo-elemento utilizado para crear una decoración
      circular que simula un fondo tecnológico.
    */
    .hero::before {

      content: '';

      position: absolute;

      width: 700px;

      height: 700px;

      border: 1px solid rgba(255,255,255,0.08);

      border-radius: 50%;

      top: -500px;

      left: -100px;
    }


    /*
      Segundo círculo decorativo del encabezado.
    */
    .hero::after {

      content: '';

      position: absolute;

      width: 600px;

      height: 600px;

      border: 1px solid rgba(255,255,255,0.08);

      border-radius: 50%;

      right: -200px;

      bottom: -500px;
    }


    /*
      El contenido se coloca por encima de los elementos
      decorativos gracias al z-index.
    */
    .hero-content {

      position: relative;

      z-index: 2;

      padding: 25px;
    }


    /*
      Título principal del Hero.
    */
    .hero h1 {

      margin: 0 0 8px;

      color: white;

      font-size: 32px;

      font-weight: 700;
    }


    /*
      Subtítulo del Hero.
    */
    .hero p {

      margin: 0;

      color: #e7f2ff;

      font-size: 16px;
    }


    /* =========================================================
       CONTENEDOR DE SERVICIOS
       ========================================================= */

    /*
      Limitamos el ancho para que las tarjetas no ocupen
      demasiado espacio en pantallas grandes.

      margin: 0 auto centra el contenido.
    */
    .services-section {

      max-width: 1050px;

      margin: 0 auto;

      padding: 25px 20px 15px;
    }


    /*
      CSS Grid permite organizar las tarjetas.

      repeat(4, 1fr) crea cuatro columnas del mismo tamaño.
    */
    .services-grid {

      display: grid;

      grid-template-columns:
        repeat(4, 1fr);

      gap: 10px;
    }


    /* =========================================================
       TARJETAS DE SERVICIOS
       ========================================================= */

    /*
      Cada servicio se muestra como una tarjeta blanca.

      border crea el borde.

      border-radius redondea las esquinas.

      box-shadow agrega una sombra ligera.
    */
    .service-card {

      background-color: #fff;

      border: 1px solid #e1e1e1;

      border-radius: 6px;

      min-height: 270px;

      padding: 15px 12px;

      text-align: center;

      display: flex;

      flex-direction: column;

      align-items: center;

      /*
        transition permite que el efecto hover
        sea suave.
      */
      transition: all 0.25s ease;

      box-shadow:
        0 1px 4px rgba(0,0,0,0.04);
    }


    /*
      Cuando el usuario coloca el mouse sobre una tarjeta:

      translateY(-4px) la mueve ligeramente hacia arriba.

      También aumentamos la sombra.
    */
    .service-card:hover {

      transform: translateY(-4px);

      border-color: #b9d5f5;

      box-shadow:
        0 6px 15px rgba(0, 90, 170, 0.12);
    }


    /* =========================================================
       ICONOS
       ========================================================= */

    /*
      Espacio reservado para cada icono.
    */
    .service-icon {

      width: 100px;

      height: 90px;

      margin-bottom: 7px;

      display: flex;

      align-items: center;

      justify-content: center;

      position: relative;

      color: #1268cc;

      font-size: 50px;
    }


    /* =========================================================
       ICONO DISEÑO WEB
       ========================================================= */

    /*
      Creamos un monitor utilizando solamente CSS.
    */
    .monitor {

      width: 75px;

      height: 55px;

      border: 4px solid #17365d;

      border-radius: 5px;

      background-color: #e5f2ff;

      position: relative;
    }


    /*
      Base del monitor.
    */
    .monitor::after {

      content: '';

      position: absolute;

      width: 35px;

      height: 5px;

      background: #17365d;

      bottom: -10px;

      left: 16px;
    }


    /*
      Contenido interno de la pantalla.
    */
    .screen {

      padding: 7px;

      display: flex;

      flex-direction: column;

      gap: 5px;
    }


    /*
      Barras azules que simulan contenido web.
    */
    .screen span {

      height: 7px;

      background-color: #4da3ed;

      border-radius: 2px;
    }


    /*
      Cada barra tiene un ancho diferente
      para simular texto/contenido.
    */
    .screen span:nth-child(1) {
      width: 35px;
    }

    .screen span:nth-child(2) {
      width: 50px;
    }

    .screen span:nth-child(3) {
      width: 30px;
    }


    /*
      Pequeño teléfono que aparece junto al monitor.
    */
    .phone {

      position: absolute;

      width: 20px;

      height: 34px;

      background: #1268cc;

      border: 2px solid white;

      border-radius: 4px;

      right: -15px;

      bottom: -5px;
    }


    /* =========================================================
       REDES SOCIALES
       ========================================================= */

    /*
      Organizamos los cuatro iconos en una cuadrícula
      de 2 columnas por 2 filas.
    */
    .social-icons {

      display: grid;

      grid-template-columns: 40px 40px;

      grid-template-rows: 40px 40px;

      gap: 5px;
    }


    /*
      Configuración general de cada icono.
    */
    .social-icons span {

      display: flex;

      align-items: center;

      justify-content: center;

      border-radius: 8px;

      color: white;

      font-weight: bold;

      font-size: 22px;
    }


    /* Facebook */
    .facebook {
      background-color: #1877f2;
    }


    /* Instagram */
    .instagram {

      background:
        linear-gradient(
          45deg,
          #f9ce34,
          #ee2a7b,
          #6228d7
        );
    }


    /* LinkedIn */
    .linkedin {

      background-color: #0a66c2;

      font-size: 17px !important;
    }


    /* Chat */
    .chat {

      background-color: #e5eef8;

      color: #3e6c9f !important;

      font-size: 16px !important;
    }


    /* =========================================================
       MARKETING DIGITAL
       ========================================================= */

    /*
      Utilizamos un emoji como representación del megáfono.
    */
    .megaphone {

      font-size: 60px;

      transform: rotate(-5deg);
    }


    /* =========================================================
       DESARROLLO SOFTWARE
       ========================================================= */

    .software-icon {
      color: #17365d;
    }


    /*
      Computadora representada mediante CSS.
    */
    .computer {

      width: 80px;

      height: 55px;

      border-radius: 5px;

      background-color: #e9f2fc;

      border: 4px solid #17365d;

      display: flex;

      align-items: center;

      justify-content: center;

      font-size: 20px;

      color: #1268cc;

      font-weight: bold;
    }


    /*
      Engranaje ubicado en la parte inferior derecha.
    */
    .gear {

      position: absolute;

      right: 0;

      bottom: 0;

      font-size: 35px;

      color: #7892ad;
    }


    /* =========================================================
       HOSTING
       ========================================================= */

    /*
      Organizamos verticalmente la nube y el servidor.
    */
    .hosting-icon {

      flex-direction: column;
    }


    /*
      Nube utilizada para representar almacenamiento/hosting.
    */
    .cloud {

      font-size: 55px;

      color: #4d9be8;

      line-height: 45px;
    }


    /*
      Servidor debajo de la nube.
    */
    .server {

      color: #17365d;

      background: #17365d;

      font-size: 10px;

      padding: 2px 10px;

      border-radius: 3px;
    }


    /* =========================================================
       ESTRATEGIA DIGITAL
       ========================================================= */

    .strategy-icon {

      color: #355b9a;
    }


    /*
      Círculos que representan un objetivo.
    */
    .target {

      font-size: 75px;

      font-weight: bold;
    }


    /*
      Flecha que representa dirección y crecimiento.
    */
    .arrow {

      position: absolute;

      right: 5px;

      top: 5px;

      color: #e5a92e;

      font-size: 35px;

      transform: rotate(-30deg);
    }


    /* =========================================================
       IDENTIDAD CORPORATIVA
       ========================================================= */

    .identity-icon {

      font-size: 50px;

      color: #394c9a;
    }


    /*
      Primer documento.
    */
    .document {

      position: absolute;

      transform: translateX(-12px);

      color: #393d98;
    }


    /*
      Segundo documento.
      Se desplaza hacia la derecha y ligeramente hacia abajo.
    */
    .document.second {

      transform:
        translateX(12px)
        translateY(5px);

      color: #e7edf8;
    }


    /* =========================================================
       TEXTO DE LAS TARJETAS
       ========================================================= */

    /*
      Título de cada servicio.
    */
    .service-card h2 {

      margin: 5px 0 8px;

      color: #222;

      font-size: 15px;

      font-weight: 700;
    }


    /*
      Descripción del servicio.
    */
    .service-card p {

      color: #555;

      font-size: 11px;

      line-height: 1.5;

      margin: 0 0 8px;

      /*
        flex-grow hace que el contenido ocupe el espacio
        disponible y permite alinear el enlace inferior.
      */
      flex-grow: 1;
    }


    /*
      Enlace "Ver más".
    */
    .service-card a {

      color: #1769d1;

      font-size: 11px;

      font-weight: bold;

      text-decoration: none;

      margin-top: auto;
    }


    /*
      Al pasar el mouse aparece subrayado.
    */
    .service-card a:hover {
      text-decoration: underline;
    }


    /* =========================================================
       CTA - LLAMADA A LA ACCIÓN
       ========================================================= */

    /*
      Barra azul clara ubicada antes del footer.
    */
    .cta {

      max-width: 1000px;

      margin: 5px auto 12px;

      padding: 12px 20px;

      background-color: #eaf3ff;

      border: 1px solid #d5e6fa;

      border-radius: 6px;

      display: flex;

      align-items: center;

      justify-content: space-between;

      gap: 20px;
    }


    .cta-text h2 {

      margin: 0 0 3px;

      color: #173d72;

      font-size: 14px;
    }


    .cta-text p {

      margin: 0;

      color: #555;

      font-size: 11px;
    }


    /*
      Botón azul "Solicitar Cotización".
    */
    .cta-button {

      background-color: #1769d1;

      color: white;

      text-decoration: none;

      padding: 10px 16px;

      border-radius: 5px;

      font-size: 11px;

      font-weight: bold;

      white-space: nowrap;

      transition: 0.3s;
    }


    /*
      Cambio de color cuando pasamos el mouse.
    */
    .cta-button:hover {

      background-color: #0d4fa8;
    }


    /*
      Separación entre el texto y la flecha.
    */
    .cta-button span {
      margin-left: 5px;
    }


    /* =========================================================
       FOOTER
       ========================================================= */

    /*
      Pie de página azul oscuro.
    */
    .footer {

      min-height: 65px;

      background-color: #06244b;

      color: white;

      display: flex;

      align-items: center;

      justify-content: space-between;

      padding: 10px 30px;

      gap: 20px;

      font-size: 10px;
    }


    /*
      Información de teléfono y correo.
    */
    .footer-left {

      display: flex;

      align-items: center;

      gap: 8px;
    }


    /*
      Separación adicional entre teléfono y correo.
    */
    .footer-email {
      margin-left: 15px;
    }


    /*
      Contenedor de redes sociales.
    */
    .social-footer {

      display: flex;

      gap: 7px;
    }


    /*
      Círculos de las redes sociales del footer.
    */
    .social-footer span {

      width: 23px;

      height: 23px;

      display: flex;

      align-items: center;

      justify-content: center;

      border: 1px solid white;

      border-radius: 50%;

      font-size: 9px;

      font-weight: bold;
    }


    /*
      Texto de copyright.
    */
    .copyright {

      font-size: 9px;

      color: #d6e0ec;
    }


    /* =========================================================
       TABLET
       Pantallas menores a 900px
       ========================================================= */

    @media (max-width: 900px) {

      /*
        Pasamos de 4 columnas a 3 columnas.
      */
      .services-grid {

        grid-template-columns:
          repeat(3, 1fr);
      }


      /*
        Aumentamos ligeramente la altura de las tarjetas.
      */
      .service-card {

        min-height: 275px;
      }


      /*
        El footer permite que sus elementos bajen
        a una segunda línea si es necesario.
      */
      .footer {

        padding: 12px 20px;

        flex-wrap: wrap;

        justify-content: center;
      }

    }


    /* =========================================================
       CELULAR
       Pantallas menores a 768px
       ========================================================= */

    @media (max-width: 768px) {


      /*
        Reducimos la altura del encabezado.
      */
      .hero {

        min-height: 145px;
      }


      /*
        Reducimos el tamaño del título.
      */
      .hero h1 {

        font-size: 26px;
      }


      /*
        Reducimos el tamaño del subtítulo.
      */
      .hero p {

        font-size: 13px;

        padding: 0 15px;
      }


      /*
        Reducimos los espacios laterales.
      */
      .services-section {

        padding: 20px 15px;
      }


      /*
        En celular pasamos de 4 columnas
        a solamente 2 columnas.

        Esto permite mostrar dos tarjetas por fila.
      */
      .services-grid {

        grid-template-columns:
          repeat(2, 1fr);

        gap: 12px;
      }


      /*
        Aumentamos ligeramente la altura de las tarjetas
        para que el texto tenga espacio.
      */
      .service-card {

        min-height: 285px;

        padding: 18px 12px;
      }


      /*
        Reducimos el tamaño de los iconos.
      */
      .service-icon {

        width: 90px;

        height: 85px;
      }


      /*
        Reducimos el tamaño de los títulos.
      */
      .service-card h2 {

        font-size: 14px;
      }


      /*
        Texto de descripción más pequeño.
      */
      .service-card p {

        font-size: 11px;
      }


      /*
        El CTA pasa de horizontal a vertical.
      */
      .cta {

        margin: 10px 15px 15px;

        flex-direction: column;

        text-align: center;

        padding: 18px;
      }


      /*
        El botón ocupa todo el ancho.
      */
      .cta-button {

        width: 100%;

        text-align: center;

        padding: 12px;
      }


      /*
        Footer vertical para celulares.
      */
      .footer {

        flex-direction: column;

        text-align: center;

        padding: 20px 15px;
      }


      /*
        Teléfono y correo se colocan verticalmente.
      */
      .footer-left {

        flex-direction: column;

        gap: 8px;
      }


      /*
        Eliminamos el margen del correo
        porque ahora está debajo del teléfono.
      */
      .footer-email {

        margin-left: 0;
      }

    }


    /* =========================================================
       CELULAR PEQUEÑO
       Pantallas menores a 480px
       ========================================================= */

    @media (max-width: 480px) {


      /*
        Encabezado todavía más pequeño.
      */
      .hero {

        min-height: 130px;
      }


      .hero h1 {

        font-size: 22px;
      }


      .hero p {

        font-size: 12px;

        line-height: 1.5;
      }


      /*
        Menos espacio lateral.
      */
      .services-section {

        padding: 15px 10px;
      }


      /*
        Mantenemos dos columnas.
      */
      .services-grid {

        grid-template-columns:
          repeat(2, 1fr);

        gap: 8px;
      }


      /*
        Reducimos el tamaño de las tarjetas.
      */
      .service-card {

        min-height: 270px;

        padding: 12px 8px;
      }


      /*
        Reducimos visualmente los iconos.
      */
      .service-icon {

        width: 75px;

        height: 70px;

        transform: scale(0.85);
      }


      /*
        Títulos más pequeños.
      */
      .service-card h2 {

        font-size: 13px;

        line-height: 1.2;
      }


      /*
        Descripciones más pequeñas.
      */
      .service-card p {

        font-size: 10px;

        line-height: 1.45;
      }


      /*
        Enlaces más pequeños.
      */
      .service-card a {

        font-size: 10px;
      }


      /*
        Ajustamos el CTA.
      */
      .cta {

        margin: 8px 10px 12px;
      }


      .cta-text h2 {

        font-size: 13px;
      }


      .cta-text p {

        font-size: 10px;
      }


      /*
        Texto del footer más pequeño.
      */
      .footer {

        font-size: 9px;
      }

    }


    /* =========================================================
       CELULAR MUY PEQUEÑO
       Pantallas menores a 360px
       ========================================================= */

    @media (max-width: 360px) {


      /*
        En teléfonos extremadamente pequeños
        mostramos una sola tarjeta por fila.

        Así evitamos que el contenido quede demasiado pequeño.
      */
      .services-grid {

        grid-template-columns: 1fr;
      }


      /*
        Reducimos la altura mínima.
      */
      .service-card {

        min-height: 250px;
      }


      /*
        Título más pequeño.
      */
      .hero h1 {

        font-size: 20px;
      }

    }

  `]

})


// ============================================================
// CLASE DEL COMPONENTE
// ============================================================

/*
  Clase principal del componente.

  En este caso no necesitamos propiedades ni métodos
  porque toda la información de los servicios está escrita
  directamente en el HTML.

  La navegación se realiza mediante RouterLink.
*/
export class ServiciosComponent {

}
