import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable} from 'rxjs/Observable';
import { take, map } from 'rxjs/operators';
import { Pubs } from '../models/pubs';
import { QuerySnapshot, DocumentSnapshot } from '@firebase/firestore-types';

@Injectable()

export class PubsService {
  pubs = {} as Pubs;
  pubsCollection: AngularFirestoreCollection<Pubs>;
  pub$: Observable<Pubs[]>;
  pubsDoc: AngularFirestoreDocument<Pubs>;
  usuario:any;

  constructor(private readonly afs: AngularFirestore) { 
     this.pubsCollection = this.afs.collection('pubs', ref => ref.orderBy('title', 'asc'));
     this.pub$ = this.pubsCollection.snapshotChanges().map(changes => {
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
    this.pubsCollection.add(pubs).then( docRef => {
      let docId = this.afs.doc(`pubs/${docRef.id}`);
      docId.update({
        id: docRef.id,
        date: new Date
      })
    });
    
    
  }

  editPub(pubs: Pubs){
   this.pubsDoc = this.afs.doc(`pubs/${pubs.id}`);
   this.pubsDoc.update(pubs);
  }

  deletePub(id: string){
    this.pubsDoc = this.afs.doc(`pubs/${id}`);
    this.pubsDoc.delete();
  }

  updatePub(id: Pubs){
    this.pubsDoc = this.afs.doc(`pubs/${id.id}`);
    this.pubsDoc.update(id);
  }

}
