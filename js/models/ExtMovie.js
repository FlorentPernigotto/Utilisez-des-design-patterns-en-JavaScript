class ExtMovie {
    constructor(data) {
        this._title_fr = data.title_fr
        this._title_en = data.title_en
        this._synopsis = data.synopsis
        this._picture = data.medias.picture
        this._thumbnails = data.medias.thumbnails
        this._duration = data.infos.duration
        this._released_in = data.infos.released_in
    }
    
    get duration() {
        const hours = Math.floor(this._duration / 60)
        const minutes = Math.floor(this._duration % 60)
        return `${hours}h${minutes}`
    }

    get title_fr
}