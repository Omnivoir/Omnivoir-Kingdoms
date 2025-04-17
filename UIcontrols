// all DOM wiring: login overlay, search bar, status, road list
export default class UIController {
  static init() {
    // cache elements
    this.loginOverlay     = document.getElementById('loginOverlay');
    this.emailInput       = document.getElementById('emailInput');
    this.passwordInput    = document.getElementById('passwordInput');
    this.registerBtn      = document.getElementById('registerBtn');
    this.loginBtn         = document.getElementById('loginBtn');
    this.searchBtn        = document.getElementById('searchBtn');
    this.addressInput     = document.getElementById('addressInput');
    this.healthDisplay    = document.getElementById('healthDisplay');
    this.scoreDisplay     = document.getElementById('scoreDisplay');
    this.toggleRoadListBtn= document.getElementById('toggleRoadListBtn');
    this.roadListToggle   = document.getElementById('roadListToggle');
    this.roadList         = document.getElementById('roadList');
    this.roadFilter       = document.getElementById('roadFilter');
    this.roadsContainer   = document.getElementById('roadsContainer');

    // road list toggles
    this.toggleRoadListBtn.addEventListener('click', () => {
      this.roadList.style.display       = 'none';
      this.roadListToggle.style.display = 'block';
    });
    this.roadListToggle.addEventListener('click', () => {
      this.roadList.style.display       = 'block';
      this.roadListToggle.style.display = 'none';
    });
    // filter roads
    this.roadFilter.addEventListener('input', () => {
      const f = this.roadFilter.value.toLowerCase();
      this.roadsContainer.querySelectorAll('.road-item').forEach(it => {
        it.style.display = it.textContent.toLowerCase().includes(f) ? '' : 'none';
      });
    });
  }

  static showLogin() { this.loginOverlay.style.display = 'flex'; }
  static hideLogin() { this.loginOverlay.style.display = 'none'; }

  static bindRegister(fn) { this.registerBtn.onclick = ()=>fn(this.emailInput.value.trim(), this.passwordInput.value); }
  static bindLogin(fn)    { this.loginBtn.onclick    = ()=>fn(this.emailInput.value.trim(), this.passwordInput.value); }
  static bindSearch(fn)   { this.searchBtn.onclick   = ()=>fn(this.addressInput.value.trim()); }

  static updateStatus(health, score, backpack) {
    this.healthDisplay.textContent = health;
    this.scoreDisplay.textContent  = score;
    console.log('Status:', { health, score, backpack });
  }

  static showError(msg) { alert(msg); }
}
