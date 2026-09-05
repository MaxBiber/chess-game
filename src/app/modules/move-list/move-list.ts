import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  selector: 'app-move-list',
  styleUrl: './move-list.css',
  templateUrl: './move-list.html',
  standalone: true,
})
export class MoveList {}
