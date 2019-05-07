
const Rebase = require('re-base')
const firebase = require('firebase')

const FirebaseConfig = {
  apiKey: "AIzaSyAyH2eC1ALrBvoIBuVCXw3mdrxgqfNaLn0",
  authDomain: "sitecompany-bf702.firebaseapp.com",
  databaseURL: "https://sitecompany-bf702.firebaseio.com",
  projectId: "sitecompany-bf702",
  storageBucket: "sitecompany-bf702.appspot.com",
  messagingSenderId: "479948822401"
}

const app = firebase.initializeApp(FirebaseConfig);
const config = Rebase.createClass(app.database());

export default config;
