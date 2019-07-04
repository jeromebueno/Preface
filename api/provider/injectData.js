const Book = require('../models/book');
const Scraper = require ('images-scraper')
const pics =  new Scraper.Bing();

function inject (data){
    Book.remove({}, function(err) {
        console.log('--> Collection dropped')
    });
    let i = 0;
    data.forEach(function(element) {
        let isbn;
        let stats2;
        if (element.fields.isbn !== undefined){
             isbn = element.fields.isbn.replace(/-/g, "");
        }
        else {
             isbn = 111111111;
        }
        pics.list({
            keyword: isbn,
            num: 1,
            details: false
        })
            .then(function (res) {
                if(element.fields.categorie_statistique_2 === "pas de code stat 2"){
                    stats2 = null
                }
                else{
                    stats2 = element.fields.categorie_statistique_2.substring(5)
                }
                let book = new Book({
                    'id': element.fields.ean,
                    'title': element.fields.titre.split('|')[0],
                    'author' : element.fields.auteur,
                    'date': element.fields.date,
                    'createdAt': Date.now(),
                    'description':  element.fields.titre,
                    'image': res[0].url,
                    'type': [
                        {'name': element.fields.categorie_statistique_1.substring(5),'main':true},
                        {'name': stats2,'main': false},
                    ],
                    'notation': {
                        'note': 4,
                        'numberOfReviews' : 120
                    },
                    'avisForBook': []
                });
                book.save();
                i++;
            }).catch(function(err) {
        })


    });
}

module.exports = inject;