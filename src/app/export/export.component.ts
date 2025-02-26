import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { exportFileData } from '../models/common';

@Component({
  selector: 'app-export',
  standalone: false,
  templateUrl: './export.component.html',
  styleUrl: './export.component.scss',
})
export class ExportComponent implements OnInit {
  @Input() exportData: Array<exportFileData> = [];
  @Output() closeEvent = new EventEmitter<void>();
  isVisible: boolean = false;

  /**
   * Component loads
   */
  ngOnInit() {
    this.show();
  }

  /**
   * Show the alert pop-up
   */
  show() {
    this.isVisible = true;
  }

  /**
   * Close the alert pop-up
   * Emit the event to update parent component dependent value
   */
  close() {
    this.isVisible = false;
    this.closeEvent.emit();
  }

  /**
   * Get only the keys from an object
   */
  getKeys(item: any) {
    return Object.keys(item);
  }
}
