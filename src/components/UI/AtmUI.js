import EventEmitter from '../EventEmitter';

export default function UIAtm() {
    EventEmitter.call(this);
    this.atm = null;
    this.count = 0;
  }
  
  UIAtm.prototype = Object.create(EventEmitter.prototype);
  UIAtm.prototype.constructor = UIAtm;
  
  UIAtm.prototype.atmRender = function (atm) {
    const atmContainer = document.getElementsByClassName('atm--container');
    const atmItem = document.createElement('div');
    this.atm = atmItem;
    this.count = atm.getCount();
    atmItem.setAttribute('class', 'atm-item free');
    atmItem.innerHTML =
      `       <h1>ATM</h1>
                  <div class="atm-item--count ">
                    ${atm.count}
                  </div>
          `;
  
    atmContainer[0].appendChild(atmItem);
  
  
  };
  
  UIAtm.prototype.changeCounter = function changeCounter(atm) {
    this.atm.innerHTML =
      `       <h1>ATM</h1>
                  <div class="atm-item--count ">
                    ${atm.getCount()}
                  </div>
          `;
  }
  
  UIAtm.prototype.setBusyUI = function (atm) {
    this.atm.setAttribute('class', 'atm-item busy');
  
  
  };
  
  UIAtm.prototype.setFreeUI = function (atm) {
    this.atm.setAttribute('class', 'atm-item free');
  };
  
  UIAtm.prototype.removeAtm = function removeAtm() {
    const container = document.getElementsByClassName('atm--container');
    container[0].removeChild(this.atm); 
  
  }