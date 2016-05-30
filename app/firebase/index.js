import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyBTE4eVZaxEWeYoo-6sDCZV8IryJUBA_eg",
    authDomain: "my-todo-db.firebaseapp.com",
    databaseURL: "https://my-todo-db.firebaseio.com",
    storageBucket: "my-todo-db.appspot.com",
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
