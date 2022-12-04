import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  qrData = JSON.stringify({ name: "Alejandra", lat: "47.61542976338377", lon: "-122.35379713991888" });
  constructor() {
  }

  ngOnInit() { }

}
