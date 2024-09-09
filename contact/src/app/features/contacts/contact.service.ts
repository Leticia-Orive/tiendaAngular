import { APP_BOOTSTRAP_LISTENER, inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, doc, DocumentData, DocumentReference, Firestore, getDoc, orderBy, setDoc, query, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { APP_CONSTANTS } from '@shared/constants';
import { Contact } from './contact.interfaces';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContactService {
  // Firestore instance and contact collection
  private readonly _firestore = inject(Firestore);
  private readonly _contactCollection = collection(this._firestore, APP_CONSTANTS.COLLECTION_NAME);

  // Create a new contact
  newContact(contact: Partial<Contact>): Promise<DocumentReference<DocumentData>> {
    return addDoc(this._contactCollection, {
      created: Date.now(),
      updated: Date.now(),
      ...contact,
    });
  }

  // Fetch all contacts with ordering
  getAllContacts(): Observable<Contact[]> {
    const queryFn = query(this._contactCollection, orderBy('created', 'desc'));
    return collectionData(queryFn, { idField: 'id' }) as Observable<Contact[]>;
  }

  // Fetch a single contact by ID
  async getContactById(id: string): Promise<Contact | undefined> {
    const docRef = this._getDocRef(id);
    const documentSnapshot = await getDoc(docRef);
    return documentSnapshot.exists() ? (documentSnapshot.data() as Contact) : undefined;
  }

  // Update a contact by merging new data
  updateContact(id: string, contact: Contact): void {
    const docRef = this._getDocRef(id);
    updateDoc(docRef, {...contact});
  }
  deleteContact(id: string):void{
    const docRef = this._getDocRef(id);
    deleteDoc(docRef);
  }
   

  // Get the document reference for a contact by ID
  private _getDocRef(id: string) {
    return doc(this._firestore, APP_CONSTANTS.COLLECTION_NAME, id);
  }
}
