import { Component } from '@angular/core';
import {
  Auth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '@angular/fire/auth';
import {
  Firestore,
  collection,
  doc,
  setDoc,
  getDoc,
} from '@angular/fire/firestore';

import { FormGroup, FormControl } from '@angular/forms';
import { UserRegisterDto } from 'src/app/models/User';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export default class LandingComponent {
  // this are the fields for the login and as well as registration for the user

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private readonly auth: Auth, private readonly db: Firestore) {}

  async handleRegistration() {
    try {
      // this will handle registration logic
      if (this.loginForm.valid) {
        // the form is valid
        const email = this.loginForm.get('email')!.value;
        const password = this.loginForm.get('password')?.value;
        if (email && password) {
          const result = await createUserWithEmailAndPassword(
            this.auth,
            email,
            password
          );
          if (result && result.user) {
            // the registration of user is successfull, so writing it to firestore databse
            const dataToSave = {
              email,
              name: result.user.displayName,
              smsCount: 10,
            } as UserRegisterDto;
            const usersCollection = collection(this.db, 'users'); //getting the reference to the collection of users in firestore
            const usersRef = doc(usersCollection, email); // Getting reference of the user in the firestore
            await setDoc(usersRef, dataToSave); // saving it to the firestore
          } else {
            // something went wrong , check the error
          }
        }
      } else {
        // show some error
      }
    } catch (error) {
      // some erorr occured show the err.message to the user
    }
  }

  async handleLogin() {
    try {
      if (this.loginForm.valid) {
        // the form is valid
        const email = this.loginForm.get('email')!.value;
        const password = this.loginForm.get('password')?.value;
        if (email && password) {
          const result = await signInWithEmailAndPassword(
            this.auth,
            email,
            password
          );
          if (result && result.user) {
            // there is user so naviagate to the dashboard
          } else {
            // there is no user, show him a error message to register
          }
        }
      } else {
        // show some error
      }
    } catch (error) {
      // some erorr occured show the err.message to the user
    }
  }

  async handleGoogleLogin() {
    try {
      // this is where the p
      const googleProvider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth, googleProvider);
      console.log(result);
      if (result && result.user) {
        const user = result.user;
      } else {
        // there is no user, show the error message
      }
    } catch (error) {
      // some erorr occured show the err.message to the user
    }
  }
}
