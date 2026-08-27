import { Component, signal } from '@angular/core';
import { NavMenuComponent } from './modules/nav-menu/nav-menu.component';
import { ChessBoardComponent } from './modules/chess-board/chess-board.component';
import { RouterOutlet } from '@angular/router';
import { PlayAgainstComputerDialogComponent } from './modules/play-against-computer-dialog/play-against-computer-dialog.component';

@Component({
  imports: [
    ChessBoardComponent,
    NavMenuComponent,
    RouterOutlet,
    PlayAgainstComputerDialogComponent,
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('chess-game');
}
