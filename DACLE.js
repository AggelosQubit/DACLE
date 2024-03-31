const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 2371;
const cheerio = require('cheerio');
// Définit les dossier public pour servir les fichiers statiques


const privateKey = fs.readFileSync('./certs/key.pem', 'utf8');
const certificate = fs.readFileSync('./certs/cert.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };

// Create HTTPS server
const httpsServer = https.createServer(credentials, app);


app.route('/Eyn_Haqqore_Hedge_Fund/eynhaqqore/AdaviEcoRecaller.html')
    .post(
        (req, res) => {
            //console.log("IN AdaviEcoRecaller POST");
            res.sendFile('AdaviEcoRecaller.html', { root: __dirname + '/Eyn_Haqqore_Hedge_Fund/eynhaqqore/' });
        }
    )
    .get(
        (req, res) => {
            //console.log("IN AdaviEcoRecaller GET");

            res.sendFile('AdaviEcoRecaller.html', { root: __dirname + '/Eyn_Haqqore_Hedge_Fund/eynhaqqore/' })
        }
    );
// Route principale
app.get('/', (req, res) => { res.redirect('/DACLE-Intranet/Dacle.html'); });

app.use(express.static('.'));
// Démarrer le serveur
httpsServer.listen(port, () => {
    console.log(`Le serveur est démarré sur le port ${port}`);
});