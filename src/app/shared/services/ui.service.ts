import { Injectable } from '@angular/core';
import {
  AlertController,
  LoadingController,
  PopoverController,
  ToastController,
  ModalController,
} from '@ionic/angular';
import { ToastCssClass } from '../complements/enums/toast.enum';
import { AlertStructure } from '../complements/interfaces/alert.interface';
import { PopoverStructure } from '../complements/interfaces/popover.interface';
import { ModalStructure } from '../complements/interfaces/modal.interface';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  constructor(
    private loadingController: LoadingController,
    private toastController: ToastController,
    private alertController: AlertController,
    private popoverController: PopoverController,
    private modalController: ModalController
  ) { }

  presentLoading(message: string) {
    return this.loadingController.create({
      message,
    });
  }

  async presentToast(message: string, duration = 1500, cssClass: ToastCssClass) {
    const toast = await this.toastController.create({
      message,
      mode: 'ios',
      duration,
      cssClass,
    });

    toast.present();
  }

  async presentAlert(structure: AlertStructure) {
    const { header, message, backdropDismiss, buttons, inputs, cssClass } =
      structure;

    const alert = await this.alertController.create({
      header,
      message,
      backdropDismiss,
      buttons,
      inputs,
      cssClass,
    });
    alert.present();
  }

  async presentPopup(structure: PopoverStructure) {
    const { component, componentProps, backdropDismiss } = structure;

    const pop = await this.popoverController.create({
      component,
      componentProps,
      backdropDismiss,
    });

    pop.present();

    return pop;
  }

  hidePopup(params?: any) {
    this.popoverController.dismiss(params);
  }

  async presentModal(structure: ModalStructure) {
    const { component, componentProps, backdropDismiss } = structure;

    const modal = await this.modalController.create({
      component,
      componentProps,
      backdropDismiss,
    });

    modal.present();
  }
  hideModal(params?: any) {
    this.modalController.dismiss(params);
  }
}
