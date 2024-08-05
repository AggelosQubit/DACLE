const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 2371;
const { exec } = require('child_process');
// Définit les dossier public pour servir les fichiers statiques


const privateKey = fs.readFileSync('./certs/key.pem', 'utf8');
const certificate = fs.readFileSync('./certs/cert.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };

// Create HTTPS server
const httpsServer = https.createServer(credentials, app);


app.route('/Dunamis_esports/Minecraftinfos.html')
    .post(
        (req, res) => {
            //console.log("IN AdaviEcoRecaller POST");
            exec("ps -aux | grep server.jar",
                function (error, stdout, stderr) {
                    if (error !== null) console.log('exec error: ' + error);

                    //Xmx1024M
                    var commandResult = stdout + "\n" + stderr;
                    (commandResult.includes("Xmx1024M"))
                        ? res.sendFile('MinecraftinfosOnline.html', { root: __dirname + '/Dunamis_esports/' })
                        : res.sendFile('MinecraftinfosOffline.html', { root: __dirname + '/Dunamis_esports/' });
                });
        }
    )
    .get(
        (req, res) => {
            exec("ps -aux | grep server.jar",
                function (error, stdout, stderr) {
                    if (error !== null) console.log('exec error: ' + error);

                    //Xmx1024M
                    var commandResult = stdout + "\n" + stderr;
                    (commandResult.includes("Xmx1024M"))
                        ? res.sendFile('MinecraftinfosOnline.html', { root: __dirname + '/Dunamis_esports/' })
                        : res.sendFile('MinecraftinfosOffline.html', { root: __dirname + '/Dunamis_esports/' });
                });
        }
    );

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
