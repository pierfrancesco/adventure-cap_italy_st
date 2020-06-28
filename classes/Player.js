/*
This is the player module. Here we create the player and retrieve it
 */

/**
 *
 */
class Player {
  constructor (id, name, money, businesses, lastAccess) {
    this._id = id;
    this._name = name;
    this._money = money;
    this._businesses = businesses;
    this._lastAccess = lastAccess;
  }

  get name () {
    return this._name;
  }

  set name (newName) {
    this._name = newName;
  }

  get money () {
    return this._money;
  }

  set money (newMoney) {
    this._money = newMoney;
  }

  get businesses () {
    return this._businesses;
  }

  set businesses (newBusinesses) {
    this._businesses = newBusinesses;
  }

  get lastAccess () {
    return this._lastAccess;
  }

  set lastAccess (newLastAccess) {
    this._lastAccess = newLastAccess;
  }

  export () {
    return JSON.stringify({
      id: this._id,
      name: this._name,
      money: this._money,
      businesses: this._businesses,
      lastAccess: this._lastAccess
    });
  }
}

export default Player;
