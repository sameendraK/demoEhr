import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

enum FilterTypes {
  DROPDOWN = 'DROPDOWN',
  TEXT = 'TEXT',
  NUMBER = 'NUMBER'
}

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit {

  items: any[] = [];
  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  FilterTypes = FilterTypes;

  @Input()
  filterCriterias: any[] = [];

  constructor() {
    this.items = [
      {
        name: "Option 1"
      },
      {
        name: "Option 1"
      },
      {
        name: "Option 1"
      },
    ]
  }


}
