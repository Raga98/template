import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable} from 'rxjs';
import { take, map } from 'rxjs/operators';
import { Pubs } from '../models/pubs';
import { QuerySnapshot, DocumentSnapshot } from '@firebase/firestore-types';
import * as firebase from 'firebase';

@Injectable()

export class PubsService {
  pubs = {} as Pubs;
  pubsCollection: AngularFirestoreCollection<Pubs>;
  pub$: Observable<Pubs[]>;
  pubsDoc: AngularFirestoreDocument<Pubs>;

  constructor(private readonly afs: AngularFirestore) { 
     this.pubsCollection = this.afs.collection('pubs', ref => ref.orderBy('title', 'asc'));
     this.pub$ = this.pubsCollection.snapshotChanges().take(1).map(changes => {
        return changes.map(a => {
        const data = a.payload.doc.data() as Pubs;
        const id = a.payload.doc.id;
        return {id,...data};
       });
     });
   }

   getPubs(){
     return this.pub$;
    }
  

  addPub(pubs: Pubs){
    this.pubsCollection.add(pubs);
    let docRef = this.afs.doc(`pubs/${pubs.id}`);
    docRef.set({
    date: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  deletePub(pubs: Pubs){
    this.pubsDoc = this.afs.doc(`pubs/${pubs.id}`);
    this.pubsDoc.delete();
  }

  updatePub(pubs: Pubs){
    this.pubsDoc = this.afs.doc(`pubs/${pubs.id}`);
    this.pubsDoc.update(pubs);
  }

}
