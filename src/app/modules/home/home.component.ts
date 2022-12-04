import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { companies } from './interfaces/companies.interface';
import { Platform } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public companies: companies[] = [
    {
      name: "Company 1",
      image: "./../../../assets/company.png",
    },
    {
      name: "Company 2",
      image: "./../../../assets/company2.png",
    },
    {
      name: "Company 3",
      image: "./../../../assets/company3.png",
    }
  ];
  scanSub: any;
  qrContent!: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    public platform: Platform,
    private barcodeScanner: BarcodeScanner
  ) {

  }

  ngOnInit() { }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true })
  }

  startScanning() {
    this.scanSub = null;
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.scanSub = barcodeData;
    }).catch(err => {
      console.log('Error', err);
    });
  }
  goToUser() {
    this.router.navigate(['/code/user'])
  }

}
