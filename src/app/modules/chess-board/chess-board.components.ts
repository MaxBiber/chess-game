import { Component } from '@angular/core';
import { ChessBoard } from '../../chess-logic/chess-board';
import { Color, FENChar } from '../../chess-logic/models';

@Component({
  imports: [],
  selector: 'app-chess-board',
  styleUrl: './chess-board.component.css',
  templateUrl: './chess-board.component.html',
})
export class ChessBoardComponent {
  private chessBoard = new ChessBoard();
  public chessBoardView: (FENChar | null)[][] = this.chessBoard.chessBoardView;
  public get playerColor(): Color {
    return this.chessBoard.playerColor;
  }
}
