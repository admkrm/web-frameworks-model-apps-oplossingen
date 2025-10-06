import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetail {
  id?: string;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((p) => (this.id = p['id']));
  }
}
