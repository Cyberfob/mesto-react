class Api {
    constructor (options) {
        this._url = options.url
        this._headers = options.headers
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        }       
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    getUserInfo() {
        const request = {
            method: "GET",
            headers: this._headers,
        } 
        return fetch(`${this._url}/users/me`,request)
            .then(this._checkResponse)
    }

    setUserInfo({name,about}) {
        const request = {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({name,about})
        }
        return fetch(`${this._url}/users/me`,request)
            .then(this._checkResponse)
    }
    

    getInitCards() {
        const request = {
            method: "GET",
            headers: this._headers,
        } 
        return fetch(`${this._url}/cards`,request)
        .then(this._checkResponse)
    }


    addCard({name,link}) {
        const request = {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({name,link})
        } 
        return fetch(`${this._url}/cards`,request)
        .then(this._checkResponse)
    }


    setLike(_id) {
        const request = {
            method: "PUT",
            headers: this._headers,
        } 
        return fetch(`${this._url}/cards/${_id}/likes`,request)
        .then(this._checkResponse)
    }

    deleteLike(_id) {
        const request = {
            method: "DELETE",
            headers: this._headers,
        } 
        return fetch(`${this._url}/cards/${_id}/likes`,request)
        .then(this._checkResponse)
    }

    removeCard(_id) {
        {
            const request = {
                method: "DELETE",
                headers: this._headers,
            } 
            return fetch(`${this._url}/cards/${_id}`,request)
            .then(this._checkResponse)
        }
    }

    setProfileAvatar(link) {
        {
            const request = {
                method: "PATCH",
                headers: this._headers,
                body: JSON.stringify({
                    avatar: link
                })
            } 
            return fetch(`${this._url}/users/me/avatar`,request)
            .then(this._checkResponse)
            }
    }
}

const api = new Api ({
    url: 'https://mesto.nomoreparties.co/v1/cohort36',
        headers: {
            authorization: '308eaaab-711e-417d-8eb0-09fd4aa24c68',
            'Content-Type': 'application/json'
        }
    }
);

export default api;