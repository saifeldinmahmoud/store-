import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private collectionName = 'products';  // اسم مجموعة Firestore

  constructor(private firestore: AngularFirestore) {}

  // إضافة منتج
  addData(product: any): Promise<any> {
    return this.firestore.collection(this.collectionName).add(product);
  }

  // استرجاع المنتجات
  getData(): Observable<any[]> {
    return this.firestore.collection(this.collectionName).valueChanges({ idField: 'id' });
  }
}

