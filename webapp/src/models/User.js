import Avatar from './Avatar'

class User {
  constructor() {
    this.name = ''
    this.gender = ''
    this.avatar = Avatar.getAll()[0]
  }

  validateName() {
    return typeof this.name === 'string' && this.name.length != 0 && this.name.length <= 40
  }

  validateGender() {
    return ['m', 'f'].some(param => this.gender === param)
  }
}

export default User
