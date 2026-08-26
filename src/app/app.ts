import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChessBoardComponent } from './modules/chess-board/chess-board.component';

@Component({
  imports: [ChessBoardComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('chess-game');
}
