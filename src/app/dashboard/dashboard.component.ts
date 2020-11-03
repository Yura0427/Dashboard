import { Component, OnInit } from '@angular/core';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  bloc1 = [
    'bloc1_1',
    'bloc1_2',
    'bloc1_3',
  ];

  bloc2 = [
    'bloc2_1',
    'bloc2_2',
    // 'bloc2_3',
  ];

  bloc3 = [
    'bloc3_1',
    'bloc3_2',
    // 'bloc3_3',
  ];
  constructor() { }

  ngOnInit(): void {
  }
  dropHorizontal(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.bloc1, event.previousIndex, event.currentIndex);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
