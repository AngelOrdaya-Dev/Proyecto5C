import { Component } from '@angular/core'; 
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router'; 
 
@Component({ 
  selector: 'app-root', 
  standalone: true, 
  imports: [RouterOutlet, RouterLink, RouterLinkActive], 
  template: ` 
    <div class="app-container"> 
      <!-- NAVEGACIÓN --> 
      <nav class="navbar"> 
        <h1>CONDOR</h1> 
        <ul class="nav-menu"> 
          <li> 
            <a routerLink="/home"  
               routerLinkActive="active" 
               [routerLinkActiveOptions]="{exact: true}"> 
              Inicio 
            </a> 
          </li> 
          <li> 
            <a routerLink="/about"  
               routerLinkActive="active"> 
              Acerca de 
            </a> 
          </li> 
          <li> 
            <a routerLink="/contact"  
               routerLinkActive="active"> 
              Contacto
            </a> 
          </li>
          <li> 
            <a routerLink="/servicios"  
               routerLinkActive="active"> 
              Servicios
            </a> 
          </li> 
        </ul> 
      </nav> 
 
      <!-- CONTENIDO DINÁMICO --> 
      <main class="main-content"> 
        <router-outlet></router-outlet> 
      </main> 
    </div> 
  `, 
  styles: [` 
    .app-container { 
      font-family: Arial, sans-serif; 
    } 
     
    .navbar { 
      background-color: #007acc; 
      color: white; 
      padding: 1rem 2rem; 
      display: flex; 
      justify-content: space-between; 
      align-items: center; 
    } 
     
    .navbar h1 { 
      margin: 0; 
      font-size: 1.5rem; 
    } 
     
    .nav-menu { 
      display: flex; 
      list-style: none; 
      margin: 0; 
      padding: 0; 
      gap: 1rem; 
    } 
     
    .nav-menu a { 
      color: white; 
      text-decoration: none; 
      padding: 0.5rem 1rem; 
      border-radius: 4px; 
      transition: background-color 0.3s; 
    } 
     
    .nav-menu a:hover { 
      background-color: rgba(255, 255, 255, 0.2); 
    } 
     
    .nav-menu a.active { 
      background-color: #0056b3; 
      font-weight: bold; 
    } 
     
    .main-content { 
      padding: 2rem; 
      min-height: calc(100vh - 80px); 
    } 
  `]}) 
export class AppComponent { 
title = 'mi-app-routing'; 
} 
