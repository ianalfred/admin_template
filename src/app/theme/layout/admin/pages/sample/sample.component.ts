// angular import
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [],
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export default class TypographyComponent {
  @ViewChild('exampleModal') exampleModal: ElementRef;

  showModal() {
    const modal = new Modal(this.exampleModal.nativeElement);
    modal.show();
  }
}
