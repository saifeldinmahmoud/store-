import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { proudct } from '../../../commpanat/header/header/modeles/proudct.model';
import { CartService } from '../../../sevices/cart.service';

@Component({
  selector: 'app-proudct-box',
  standalone: true,
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './proudct-box.component.html',
  styleUrls: ['./proudct-box.component.css'],
})
export class ProudctBoxComponent implements OnInit {
  @Input() fullwidthmode = false;
  @Input() proudct: proudct | undefined;
  @Output() addtocart = new EventEmitter();

  constructor(private cartservice: CartService) {}

  ngOnInit(): void {}

  onaddtocart(): void {
    this.addtocart.emit(this.proudct);
  }
}
