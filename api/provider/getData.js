const ProgressBar = require("./ProgressBar");
const injectData = require("./injectData");
const { get } = require("https");
const URL = "https://opendata.paris.fr/api/records/1.0/search/?dataset=tous-les-documents-des-bibliotheques-de-pret&rows=10000&sort=ndeg_de_notice&facet=langue&facet=editeur&facet=collection&facet=titre_de_serie&facet=libelle_v_smart_et_webopac&facet=categorie_statistique_1&facet=categorie_statistique_2&facet=auteur&refine.libelle_v_smart_et_webopac=Livre+pour+adulte";

const Bar = new ProgressBar();

function request(){ get(URL, response => {
    const total = response.headers["content-length"];
    let current = 0;
    let data = '';
    Bar.init(total);

    response.on("data", chunk => {
        current += chunk.length;
        data += chunk;
        Bar.update(current);
    });
    response.on("error", e => console.log(e.message));

    response.on("end", () => {
        let res = JSON.parse(data);
        injectData(res.records);
        console.log("|--> Fetch finished");
        console.log("|--> Push data in db ...");
    });
});
}

module.exports = request;