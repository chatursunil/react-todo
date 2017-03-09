import firebase from 'firebase';

try {
var config = {
    apiKey: "AIzaSyDrGNXpahK2pJFaN95pG5fiLluSOR9TEnk",
    authDomain: "sunil-todo-app.firebaseapp.com",
    databaseURL: "https://sunil-todo-app.firebaseio.com",
    storageBucket: "sunil-todo-app.appspot.com",
    messagingSenderId: "113824574725"
};
firebase.initializeApp(config);
} catch (error) {
    
}
export const firebaseRef = firebase.database().ref();
export default firebase;