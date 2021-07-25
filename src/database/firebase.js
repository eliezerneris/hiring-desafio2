import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDlc84l_zlnKgGRxEdCJHrxq16yuZkdBM4",
    authDomain: "crud-produtos-ffa6f.firebaseapp.com",
    projectId: "crud-produtos-ffa6f",
    storageBucket: "crud-produtos-ffa6f.appspot.com",
    messagingSenderId: "910978116097",
    appId: "1:910978116097:web:5b4584246b70814f60ae00"
  };
  let firedb = firebase.initializeApp(firebaseConfig);

  export default firedb.database().ref();