import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterOutlet } from '@angular/router';
import { PostListComponentComponent } from "./post-list-component/post-list-component.component";
import { PostCardComponent } from './post-card/post-card.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostListComponentComponent, CommonModule, PostCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Diplomado Univalle...';
  mensajePadre = "Hola desde arriba";
  mensajePadre2 = "Hola desde arriba, segundo mensaje";
 
  
}
