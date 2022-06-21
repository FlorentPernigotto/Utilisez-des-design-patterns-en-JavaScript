class OldMovie {
    constructor(data) {
        this._title = data.title
        this._synopsis = data.synopsis
        this._picture = data.picture
        this._duration = data.duration
        this._released_in = data.released_in
    }

    get duration() {
        const hours = Math.floor(this._duration / 60)
        const minutes = this._duration % 60
        return `${hours}h${minutes}`

    }

    get picture() {
        return `assets/${this._picture}`
    }

    get thumbnail() {
        return `assets/thumbnails/${this._picture}`
    }
    
    get released_in() {
        return this._released_in

    }

    get synopsis() {
        return this._synopsis

    }

    get title() {
        return this._title.hasOwnProperty('fr') ? this._title['fr'] : this._title['en']

    }
}
