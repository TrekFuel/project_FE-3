export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _expirationDate: Date,
  ) {
  }

  get userToken() {
    if (this._expirationDate && this._expirationDate >= new Date()) {
      return this._token;
    } else {
      return null;
    }
  }
}
