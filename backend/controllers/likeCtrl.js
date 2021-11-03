// Importation du modèle de likes
const Like = require('../models/like');
// Imporatiton de la BDD
const db = require('../database');


// INITIALISATION, A REVOIR ENTIEREMENT POUR PRENDRE EN COMPTE LA LIMITATION D'UN LIKE PAR UTILISATEUR


// Ajout d'un like
exports.addLike = (req, res) => {
    // Préparation de la requête SQL 
    let sqlCreateLike = `INSERT INTO likes (utilisateur_id, publication_id, vote) VALUES ('${1}', '${1}, '${req.params.vote}')`;
    // Envoi de la requête à la BDD
    db.query(sqlCreateLike, (error, publication) => {
        if (!error) {
            res.status(201).json({ message: "Like ajouté !" });
        } else {
            console.log(error);
            res.status(400).json({ message: "Erreur lors de l'ajout du like !" });
        }
    }); 
}


/*
// Ajout d'un like, test complet avec no like / like
exports.addLike = (req, res) => {
    switch (req.body.likes) {

        // L'utilisateur souhaite liker un post
        case 1 :
            // Préparation de la requête SQL 
        let sqlCreateLike = `INSERT INTO likes (utilisateur_id, publication_id, vote) VALUES ('${1}', '${1}, '${req.params.vote}')`;
        // Envoi de la requête à la BDD
        db.query(sqlCreateLike, (error, publication) => {
            if (!error) {
                res.status(201).json({ message: "Like ajouté !" });
            } else {
                console.log(error);
                res.status(400).json({ message: "Erreur lors de l'ajout du like !" });
            }
        }); 
    }
}
*/