export interface User {
  uid: string;
  email: string;
  role: string;
}

export interface Person {
  id: string;
  phone: string;
  document: string;
  documentType: string;
  completeName: string;
  address: string;
  birthdayDate: string;
  email: string;
  user: string;
}

export interface Role {
  id: string;
  role: string;
  adminAccess: boolean;
  modules: string[];
}
