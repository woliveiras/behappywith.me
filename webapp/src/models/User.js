import Avatar from './Avatar'
import Repository from '../infrastructure/Repository'

const repository =  new Repository()

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

  toString() {
    return `${this.name}, ${this.avatar.toString()}`
  }

  save(callback) {
    repository.save(this, callback)
  }

  static get(success, error) {
    repository.get(persistentData => {
      let user = new User()
      user.name = persistentData.name
      user.gender = persistentData.gender
      user.avatar = new Avatar(
        persistentData.avatar.index,
        persistentData.avatar.description
      )
      success(user)
    }, error)
  }
}

export default User
