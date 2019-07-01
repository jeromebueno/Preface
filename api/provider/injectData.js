const Book = require('../models/book');

function inject (data){
    Book.remove({}, function(err) {
        console.log('--> Collection dropped')
    });
    data.forEach(function(element) {
        let isbn = element.fields.isbn.replace(/-/g, "");
        console.log(isbn);
        let book = new Book({
            'id': element.fields.ean,
            'title': element.fields.titre.split('|')[0],
            'author' : element.fields.auteur,
            'date': element.fields.date,
            'createdAt': Date.now(),
            'description':  element.fields.titre,
            'image': 'http://covers.openlibrary.org/b/isbn/'+ isbn +'-L.jpg',
            'type': [
                {'name': element.fields.categorie_statistique_1,'main':true},
                {'name': element.fields.categorie_statistique_2,'main': false},
            ],
            'notation': {
                'note': 4,
                'numberOfReviews' : 120
            }
        });
        book.save();
    });
}

module.exports = inject;