import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { proudct } from '../../../commpanat/header/header/modeles/proudct.model';
@Component({
  selector: 'app-proudct-box',
  standalone: true,

  imports: [
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    CommonModule,
    CurrencyPipe,
  ],
  templateUrl: './proudct-box.component.html',
  styleUrl: './proudct-box.component.css',
})
export class ProudctBoxComponent implements OnInit {
  @Input() fullwidthmode = false;
  @Input() proudct: proudct | undefined;
  @Output() addtocart = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
  onaddtocart(): void {
    this.addtocart.emit(this.proudct);
  }
}
