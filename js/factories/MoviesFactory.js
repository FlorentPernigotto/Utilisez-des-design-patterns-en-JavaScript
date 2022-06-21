class MoviesFactory {
    constructor(data, type) {
        if (type ===  'oldApi') {
            return new OldMovie(data)
        } else if (type === 'newApi') {
            return new Movie(data)
        } else if (type === 'extApi') {
            return new ExtMovie(data)
        } else { 
            throw 'Unknow format Type'
        }
    }
}