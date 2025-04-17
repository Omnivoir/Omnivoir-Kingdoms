import AuthService    from './AuthService.js';
import UIController   from './UIController.js';
import MapService     from './MapService.js';
import Player         from './Player.js';
import EntityManager  from './EntityManager.js';
import { firebaseConfig } from './config.js'; // if you put your config in a separate file

window.onload = () => {
  // 1) Init UI
  UIController.init();

  // 2) Init Firebase
  AuthService.init(firebaseConfig);
  AuthService.onAuthStateChanged(user => {
    if (user) {
      UIController.hideLogin();
      // 3) Init map & game
      MapService.init();
      Player.init(MapService);
      EntityManager.init();
      Player.load(user.uid);
      EntityManager.startLoops();
      UIController.bindSearch(addr => MapService.spawnFromAddress(addr));
    } else {
      UIController.showLogin();
    }
  });

  // 4) Hook register/login buttons
  UIController.bindRegister((e,p)=> {
    AuthService.register(e,p)
      .then(()=>console.log('Registered', e))
      .catch(err=>UIController.showError(err.message));
  });
  UIController.bindLogin((e,p)=> {
    AuthService.login(e,p)
      .then(()=>console.log('Logged in', e))
      .catch(err=>UIController.showError(err.message));
  });
};
