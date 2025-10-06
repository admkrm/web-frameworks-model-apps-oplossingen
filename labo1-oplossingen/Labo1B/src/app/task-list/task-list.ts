import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  imports: [FormsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  nieuw = '';
  tasks = [] as { id: number; titel: string }[];
  laatsteId = 0;

  toevoegen() {
    const titel = this.nieuw.trim();
    if (!titel) {
      return;
    }
    this.laatsteId = this.laatsteId + 1;
    this.tasks = [...this.tasks, { id: this.laatsteId, titel: titel }];
    this.nieuw = '';
  }

  verwijderen(id: number) {
    this.tasks = this.tasks.filter(function (t) {
      return t.id !== id;
    });
  }
}
