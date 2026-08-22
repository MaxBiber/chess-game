import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SelectedSquare } from './models';

import { ChessBoard } from '../../chess-logic/chess-board';
import { Color, Coords, FENChar, pieceImagePaths, SafeSquares } from '../../chess-logic/models';

@Component({
  imports: [CommonModule],
  selector: 'app-chess-board',
  styleUrl: './chess-board.component.css',
  templateUrl: './chess-board.component.html',
})
export class ChessBoardComponent {
  public pieceImagePaths = pieceImagePaths;
  private chessBoard = new ChessBoard();
  public chessBoardView: (FENChar | null)[][] = this.chessBoard.chessBoardView;
  public get playerColor(): Color {
    return this.chessBoard.playerColor;
  }
  public get safeSquares(): SafeSquares {
    return this.chessBoard.safeSquares;
  }

  private selectedSquare: SelectedSquare = { piece: null };
  private pieceSafeSquares: Coords[] = [];

  public isSquareDark(x: number, y: number): boolean {
    return ChessBoard.isSquareDark(x, y);
  }

  public isSquareSelected(x: number, y: number): boolean {
    if (!this.selectedSquare.piece) return false;
    return this.selectedSquare.x === x && this.selectedSquare.y === y;
  }

  public isSquareSafeForSelectedPiece(x: number, y: number): boolean {
    return this.pieceSafeSquares.some((coords) => coords.x === x && coords.y === y);
  }
  public selectingPiece(x: number, y: number): void {
    const piece: FENChar | null = this.chessBoardView[x][y];
    if (!piece) return;

    this.selectedSquare = { piece, x, y };
    this.pieceSafeSquares = this.safeSquares.get(x + ',' + y) || [];
  }
}
