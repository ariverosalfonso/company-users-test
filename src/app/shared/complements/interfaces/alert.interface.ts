import { AlertCssClass } from '../enums/alert.enum';

export interface AlertStructure {
  header: string;
  subHeader?: string;
  message: string;
  backdropDismiss?: boolean;
  buttons: any[];
  inputs?: any[];
  cssClass: AlertCssClass;
}
