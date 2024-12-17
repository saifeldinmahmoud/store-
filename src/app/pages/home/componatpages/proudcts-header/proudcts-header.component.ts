import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
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
import { FilterComponent } from "../../filter/filter.component";
import { HomeComponent } from '../../home.component';
@Component({
  selector: 'app-proudcts-header',
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
    
  ],
  templateUrl: './proudcts-header.component.html',
  styleUrl: './proudcts-header.component.css',
})
export class ProudctsHeaderComponent implements OnInit {
  @Output() columesoutchanges = new EventEmitter<number>();
  @Output() itemcountchanges = new EventEmitter<number>();
  @Output() sortchanges = new EventEmitter<string>();
  sort = 'desc';
  itemshowcount = 12;
  category: string | undefined;

  constructor( private home:HomeComponent) {}
  ngOnInit(): void {}
  onsortupdate(newsort: string): void {
    this.sort = newsort;
    this.sortchanges.emit(newsort);
  }
  onitemsupdated(count: number): void {
    this.itemshowcount = count;
    this.itemcountchanges.emit(count);
  }
  onculmesupdeted(colnum: number): void {
    this.columesoutchanges.emit(colnum);
  }
  onshowcatogery(newcatogrey: string): void {
    this.category = newcatogrey;
    this.home.getproudcts()
  }
}
