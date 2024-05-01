import decode from "jwt-decode";
class AuthService {
  getProfile() {
    return decode(this.getToken());
  }
  loggedIn() {
    console.log("test1");
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }
  isTokenExpired(token) {
    console.log("test2");
    const decoded = decode(token);
    // if (decoded.exp < Date.now()) {
    //   localStorage.removeItem("id_token");
    //   return true;
    // }
    return false;
  }
  getToken() {
    console.log("test3");
    return localStorage.getItem("id_token");
  }
  login(idToken) {
    localStorage.setItem("id_token", idToken);
    window.location.assign("/dashboard");
  }
  logout() {
    localStorage.removeItem("id_token");
    window.location.assign('/');
  }
}
export default new AuthService();
