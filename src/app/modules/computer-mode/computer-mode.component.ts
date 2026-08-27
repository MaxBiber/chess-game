import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ChessBoardComponent } from '../chess-board/chess-board.component';
import { CommonModule } from '@angular/common';
import { StockfishService } from './stockfish.service';
import { ChessBoardService } from '../chess-board/chess-board.service';
import { firstValueFrom, Subscription } from 'rxjs';
import { Color } from '../../chess-logic/models';

@Component({
  imports: [CommonModule],
  selector: 'app-computer-mode',
  styleUrl: '../chess-board/chess-board.component.css',
  templateUrl: '../chess-board/chess-board.component.html',
})
export class ComputerModeComponent extends ChessBoardComponent implements OnInit, OnDestroy {
  private subscription$ = new Subscription();
  constructor(private stockfishService: StockfishService) {
    super(inject(ChessBoardService));
  }
  public ngOnInit(): void {
    const chessBoardStateSubscribtion$: Subscription =
      this.chessBoardService.chessBoardState$.subscribe({
        next: async (FENChar: string) => {
          const player: string = FENChar.split(' ')[1];
          if (player === 'w') return;
          const { prevX, prevY, newX, newY, promotedPiece } = await firstValueFrom(
            this.stockfishService.getBestMove(FENChar),
          );
          this.updateBoard(prevX, prevY, newX, newY, promotedPiece);
        },
      });
    this.subscription$.add(chessBoardStateSubscribtion$);
  }
  public ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
