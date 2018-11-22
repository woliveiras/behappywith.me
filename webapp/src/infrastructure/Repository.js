class Repository {
    constructor() {
        this.key = 'behappy-user'
    }

    save(persistentData, callback) {
        let data = JSON.stringify(persistentData)
        window.localStorage.setItem(this.key, data)
        callback()
    }

    get(success, error) {
        let data = window.localStorage.getItem(this.key)
        let persistentData = JSON.parse(data)
        if (persistentData) {
            success(persistentData)
        } else {
            error()
        }
    }
}

export default Repository