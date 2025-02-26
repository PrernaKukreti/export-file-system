import { Component, OnInit } from '@angular/core';
import fileData from '../assets/data/mock-file-data.json';
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
    this.fileDetails = fileData.data;
  }
}
