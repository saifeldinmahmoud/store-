import { Component } from '@angular/core';
import { LayoutgComponent } from "./layout/layoutg/layoutg.component";
import { ProudctComponent } from "./proudct/proudct.component";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [LayoutgComponent, ProudctComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
