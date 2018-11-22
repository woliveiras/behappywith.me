class Avatar {
    constructor(index, description) {
        this.index = index
        this.description = description
    }
    
    toString() {
        return this.description
    }

    static getAll() {
        return Array(23).fill(0).map((entry, index) => {
            return new Avatar(index, `Avatar ${index+1}`)
        })
    }
}

export default Avatar