import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDrGNXpahK2pJFaN95pG5fiLluSOR9TEnk",
    authDomain: "sunil-todo-app.firebaseapp.com",
    databaseURL: "https://sunil-todo-app.firebaseio.com",
    storageBucket: "sunil-todo-app.appspot.com",
    messagingSenderId: "113824574725"
};
firebase.initializeApp(config);

const firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo Application',
        version: '1.0'
    },
    isRunning: true,
    user: {
        name: 'Sunil',
        age: 46
    }
});

const notesRef = firebaseRef.child('todos');

notesRef.on('child_added', (snapshot) => {
    console.log('child_added', snapshot.key, snapshot.val());
});

notesRef.push({text: 'Eat lunch'});
notesRef.push({text: 'Go Running'});