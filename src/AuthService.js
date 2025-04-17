// handles all Firebase auth & database initialization
export default class AuthService {
  static init(firebaseConfig) {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app();
    }
    this.auth = firebase.auth();
    this.db   = firebase.database();
  }

  static onAuthStateChanged(cb) {
    this.auth.onAuthStateChanged(cb);
  }

  static register(email, pw) {
    return this.auth.createUserWithEmailAndPassword(email, pw);
  }

  static login(email, pw) {
    return this.auth.signInWithEmailAndPassword(email, pw);
  }

  static getDatabase() {
    return this.db;
  }
}
