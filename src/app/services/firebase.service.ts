import { Injectable, inject } from '@angular/core';
import { CollectionReference, Firestore, addDoc, collection } from '@angular/fire/firestore';
import { BaseModel } from '../models/Base.model';

@Injectable({
	providedIn: 'root',
})
export abstract class FirebaseService<T extends BaseModel> {
	firestore: Firestore;
	itemCollection: CollectionReference;

	constructor(collectionName: string) {
		this.firestore = inject(Firestore);
		this.itemCollection = collection(this.firestore, collectionName);
	}

	insert(model: T) {
		addDoc(this.itemCollection, Object.assign({}, model));
	}
}
