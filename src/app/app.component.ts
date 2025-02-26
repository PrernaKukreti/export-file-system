import { Component, OnInit } from '@angular/core';
import { MOCK_FILE_DATA } from '../assets/data/mock-file-data.js';
import { fileDetail } from './models/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'export-file-system';
  fileDetails: Array<fileDetail>;

  /**
   * Component loads
   */
  ngOnInit() {
    this.fileDetails = MOCK_FILE_DATA;
  }
}
