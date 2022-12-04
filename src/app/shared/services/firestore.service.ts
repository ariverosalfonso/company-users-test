import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(public database: AngularFirestore) { }

  createDoc(data: any, path: string, id: string) {
    const collection = this.database.collection(path);
    return collection.doc(id).set(data);
  }

  createMultipleDocs(path: string, array: any[]) {
    const b = this.database.firestore.batch();
    array.forEach((item) => {
      b.set(this.database.collection(path).doc(item.id).ref, item);
    });
    return b.commit();
  }

  updateMultipleDocs(path: string, array: any[]) {
    const b = this.database.firestore.batch();
    array.forEach((item) => {
      b.update(this.database.collection(path).doc(item.id).ref, item);
    });
    return b.commit();
  }

  getDoc<T>(path: string, id: string) {
    const colecction = this.database.collection<T>(path);
    return colecction.doc(id).valueChanges();
  }

  deleteDoc(path: string, id: string) {
    const colecction = this.database.collection(path);
    return colecction.doc(id).delete();
  }

  updateDoc(data: any, path: string, id: string) {
    const colecction = this.database.collection(path);
    return colecction.doc(id).update(data);
  }

  getId() {
    return this.database.createId();
  }

  getColecction<T>(path: string) {
    const colecction = this.database.collection<T>(path);
    return colecction.valueChanges();
  }


}
