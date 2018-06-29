import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { Pubs } from '../models/pubs'; 
import { Observable } from 'rxjs';


@Injectable()
export class FilesService {

  pubs = {} as Pubs;
  uploadPercent: Observable<number>;
  url: Observable<string | null>;
  constructor(private storage: AngularFireStorage, private afs: AngularFirestore) { }

  uploadFile(event, pub : Pubs ){
  const file = event.target.files[0];
  const filePath = `files/${pub.title + pub.id}`;
  const fileRef = this.storage.ref(filePath);
  const task = this.storage.upload(filePath, file);
  const imgName = pub.title + pub.id;
  this.url = fileRef.getDownloadURL();

  
  this.uploadPercent = task.percentageChanges();
   
  let docRef = this.afs.doc(`pubs/${pub.id}`);
     docRef.update({
       img: this.url 
     });
  }

  deleteFile(pub: Pubs) {
  let filePath = `files/${pub.title + pub.id}`;
  this.storage.ref(filePath).delete();
  }
  
}
