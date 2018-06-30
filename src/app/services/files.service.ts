import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { Pubs } from '../models/pubs'; 
import { Observable } from 'rxjs';


@Injectable()
export class FilesService {

  pubs = {} as Pubs;
  uploadPercent: Observable<number>;

  constructor(private storage: AngularFireStorage, private afs: AngularFirestore) { }

  uploadFile(event, pub : Pubs ){
  const file = event.target.files[0];
  const filePath = `files/${pub.title + pub.id}`;
  const fileRef = this.storage.ref(filePath);
  const task = this.storage.upload(filePath, file);
  
  let urlimg = task.downloadURL().subscribe(url => {
    console.log(url);
    let docRef = this.afs.doc(`pubs/${pub.id}`);
     docRef.update({
       img: url
     });
  })

  this.uploadPercent = task.percentageChanges();
   
  
  }

  deleteFile(pub: Pubs) {
  let filePath = `files/${pub.title + pub.id}`;
  this.storage.ref(filePath).delete();
  }
  
}
