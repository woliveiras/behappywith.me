class User {
  constructor() {
    this.name = ''
    this.gender = ''
  }

  validateName() {
    return typeof this.name === 'string' && this.name.length != 0 && this.name.length <= 40
  }

  validateGender() {
    return ['m', 'f'].some(param => this.gender === param)
  }
}

export default User
