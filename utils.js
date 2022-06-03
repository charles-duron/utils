const utils = {
    doesItExist: function(selector) {
            if(typeof(document.querySelector(selector)) != 'undefined' && document.querySelector(selector) != null){
                return true
            } else{
               return false
            }
        },

    apiCall: function (url, callback) {
        fetch(url)
            .then( function(res) {
                if (res.ok) {
                    return res.json()
                }
            })
            .then( function (value) {
                //une fois qu'on a bien récupéré les canapés depuis l'API
                // on lance la fonction d'affichage
                callback(value)
            })
            .catch( function (error) {
                console.log(error)
            })
    },

    newElt: function (
        tag = 'div',
        attributes = [],
        classes = '',
        text = false,
        appendToParent = false)
    {
        const elt = document.createElement(tag)

        if (attributes !== false){
                attributes.forEach(attribute => {
                elt.setAttribute(attribute.name, attribute.value)
            })
        }

        if (classes){
            elt.classList.add(classes)
        }

        if (text) {
            elt.textContent = text
        }

        if (appendToParent) {
            appendToParent.appendChild(elt)
        }
    }
}
