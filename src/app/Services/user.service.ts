import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from '../inter-faces.user';
import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user;
  photo='';
  constructor(
    private db : AngularFireDatabase
  ) { }

  addNewUser(id, user: User) {
    return this.db.object('/User/' + id).set({
      fristname:user.fristname,
      lastName:user.lastname,
      displayName: user.fristname +' '+ user.lastname,
      email: user.email,
      password: user.password,
      photoURL: user.photoURL = this.photo,
      country:user.country,
      city:user.city,
      area:user.area,
      streetName:user.streetName,
      buildingName:user.buildingName,
      mobile:user.mobile,
      //uid:user.uid
    })
    .then(() => {
      this.db.object(`/User/${id}`).snapshotChanges().subscribe(user => {
        this.user = user.payload.val();
        console.log(this.user)
      })

    })
  }

  update(userId,value){
    return this.db.object(`/User/${userId}`).update(value)
   }

   uploadPhoto(event) {
    const file = event.target.files[0];
    //console.log(file);
    const metaData = { 'contentType': file.type };
    const storageRef = firebase.storage().ref(`/photos/${file.name}`);
    let uploadTask = storageRef.put(file, metaData);
    uploadTask.on('state_changed', (snapshot) => {
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`upload is ${progress} Done`)
    }
      ,
      (err) => { console.log(err.message) }
      ,
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          console.log(url)
          if(url){this.photo = url}
        })
      })
    console.log("uploading", file.name);
  }

}
 