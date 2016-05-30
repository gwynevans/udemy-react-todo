import firebase from 'firebase';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBTE4eVZaxEWeYoo-6sDCZV8IryJUBA_eg",
  authDomain: "my-todo-db.firebaseapp.com",
  databaseURL: "https://my-todo-db.firebaseio.com",
  storageBucket: "my-todo-db.appspot.com",
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref()

firebaseRef.set({
  isRunning: true,
  user: {
    name: 'Gwyn',
    age: 53
  },
  app: {
    name: 'Todo App',
    version: '1.0'
  },
});

var todoRef = firebaseRef.child('todos');

todoRef.on('child_added', (data) => {
  console.log('Child added: key=', data.key, ', val=', data.val());
});

var newTodoRef = todoRef.push({
  text: 'Walk the cat!'
});

var newTodoRef = todoRef.push({
  text: 'Wash the cat!'
});


// firebaseRef.remove();

// firebaseRef.update({
//   isRunning: false,
//   'user/name': 'G',
//   'app/name': "Todo Application"
// });


// firebaseRef.update({
//   isRunning: false
// });

// firebaseRef.child('user').update({
//   name: 'GRE'
// });
//
// firebaseRef.child('app').update({
//   name: 'Todo app'
// })

// firebaseRef.child('app/name').update({
//   name: 'Todo app'
// })

// firebaseRef.update({
//   isRunning: null
// });
//
// firebaseRef.child('user/age').remove();

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got app snapshot', snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value'. e);
// });
//
// firebaseRef.on('value', (snapshot) => {
//   console.log('Got value', snapshot.val() );
// });
//
// firebaseRef.update({
//   isRunning: false
// });

// firebaseRef.child('user').on('value', (snapshot) => {
//    console.log('Got value', snapshot.val() );
//  });
//
//
//  firebaseRef.child('app').update({name: 'Todo app'});
//  firebaseRef.child('user').update({name: 'G'});
