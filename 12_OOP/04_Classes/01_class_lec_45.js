{
  //* Important Notes

  // Classes are just a syntanctic-sugar added in ES6 (ecma script).

  class User {
    //! constructor is not neccessasry everytime (constructor gets executed, whenever an instance of this is created)
    constructor(username, email, password) {
      this.username = username;
      this.email = email;
      this.password = password;
    }

    //! it is just a method (we can make function/method like this without any keyword)
    encryptPassword() {
      return `${this.password}abc`;
    }

    changeUsername() {
      return `${this.username.toUpperCase()}`;
    }
  }

  const chai = new User("chai", "chai@gmail.com", "123");

  console.log(chai.encryptPassword());
  console.log(chai.changeUsername());


  //* Behind-the-scenes (of class - under-the-hood)


  function User2 (username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  User2.prototype.encryptPassword = function () {
    return `${this.password}abc`;
  };
  User2.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`;
  };

  const tea = new User2("tea", "tea@gmail.com", "123");

  console.log(tea.encryptPassword());
  console.log(tea.changeUsername());

}
