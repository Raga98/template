import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable} from 'rxjs/Observable';
import { Subject, BehaviorSubject } from 'rxjs';
import { Pubs } from '../models/pubs';
import { switchMap } from 'rxjs/operators';

@Injectable()

export class PubsService {
  pubs = {} as Pubs;
  pubsCollection: AngularFirestoreCollection<Pubs>;
  pub$: Observable<Pubs[]>;
  pubsDoc: AngularFirestoreDocument<Pubs>;
  usuario:any;
  publics : Pubs[];
  type$: BehaviorSubject<string| null>;

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

  getContenidos(): Observable<any> {
      this.type$ = new BehaviorSubject(null);
      return this.pub$ = this.type$.pipe(switchMap( type => 
      this.afs.collection<Pubs>('pubs', ref => ref.where('type', '==', "contenido")).valueChanges()
    ),
  );  
  }

  getArticulos(): Observable<any>{
    this.type$ = new BehaviorSubject(null);
    return this.pub$ = this.type$.pipe(switchMap( type => 
    this.afs.collection<Pubs>('pubs', ref => ref.where('type', '==', "articulo")).valueChanges()
    ),
  );
  }

  addPub(pubs: Pubs, type: string){
    this.pubsCollection.add(pubs).then( docRef => {
      let docId = this.afs.doc(`pubs/${docRef.id}`);
      docId.update({
        id: docRef.id,
        date: new Date,
        type: type
      })
    });
  }

  addArticle(pubs: Pubs){
    this.pubsCollection.add(pubs).then( docRef => {
      let docId = this.afs.doc(`pubs/${docRef.id}`);
      docId.update({
        id: docRef.id,
        date: new Date
      })
    });
  }

  editPub(pubs: Pubs){
   let docRef = this.afs.doc(`pubs/${pubs.id}`);
   docRef.update(pubs);
  }

  deletePub(id: Pubs){
    this.pubsDoc = this.afs.doc(`pubs/${id.id}`);
    this.pubsDoc.delete();
  }

}
