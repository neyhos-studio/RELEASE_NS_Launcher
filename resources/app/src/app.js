
const remote = require('electron').remote
const tcpp = require('tcp-ping');
const electron = require('electron');
const BrowserWindow = electron.remote.BrowserWindow;

let sql = require("mssql");

let etatFenetre = true;

let etatServer = document.getElementById('etatServer');

const IP_SERVER = '51.91.156.75';
const PORT_SERVER = 5757;
const EN_LIGNE = 'NOM_DU_JEU est maintenant disponible';
const HORS_LIGNE = 'NOM_DU_JEU est malheureusement indisponible';

let boolServ = false;
let myServ = false;

//Encart test API - début
    let testAPI = document.getElementById('testAPI');
    testAPI.textContent = "saluttttt"
//Encart test API - fin

pingTest();
//connectToDatabase();
notifServeur();

    this.document.getElementById('closeApp').onclick = function(event) {
        let window = remote.getCurrentWindow();
        window.close();
        socialFenetre.close();
    }

    this.document.getElementById('minimizeApp').onclick = function(event) {
        let window = remote.getCurrentWindow();
        window.minimize();
    }


    this.document.getElementById('maximizeApp').onclick = function(event) {
        let window = remote.getCurrentWindow();
        if(etatFenetre){
            window.maximize();
            document.getElementById('maximizeApp').innerHTML = "<i class='far fa-window-restore'></i>"
        } else {
            window.setSize(1024, 660);
            window.center();
            document.getElementById('maximizeApp').innerHTML = "<i class='far fa-window-maximize'></i>"
        }

        etatFenetre = !etatFenetre;
    }   

    function pingTest() {
        tcpp.probe(IP_SERVER, PORT_SERVER, function(err, available) {
            console.log(available)
            if(available){
                etatServer.textContent = "EN LIGNE"
                etatServer.style.color = "#ace720";
                btnInit = document.getElementById('btnInit').disabled = false;
                boolServ = true;
                notifServeur();
            } else {
                etatServer.textContent = "HORS LIGNE"
                etatServer.style.color = "#d94f12";
                btnInit = document.getElementById('btnInit').disabled = true;
                boolServ = false;
                notifServeur();
            }
        });

        setTimeout("pingTest();", 5000); 
      }

    function jouer (){
        alert("En cours de développement !");
    }

    function maj (){
        alert("En cours de développement !");
    }

    function installation (){
        alert("En cours de développement !");
    }

    

//Test sql server

/*function connectToDatabase()
{
    
    // Database Configuration
    let config = {
        user: 'Administrateur', 
        password: 'Projet_meuporg57',
        server: '51.91.156.75', 
        database: 'NEYHOS_STUDIO_DEV',
    };
    
    // connect to your database
    sql.connect(config, function (err) {
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
            
        // Retourner la dernière grosse news
        request.query("SELECT TOP 1 * FROM NS_NEWS WHERE NEW_POSITION = 'Grande' AND NEW_ACTIVE = 1 ORDER BY NEW_DATE DESC" , function (err, recordset) {
            if (err) {
                console.log("Something went wrong")
            }
            else{
                //let date = new Date(recordset.recordset[0].NEW_DATE);
                grandeNews.style.backgroundImage = 'url("./assets/img/news/'+recordset.recordset[0].NEW_IMAGE+'")';
                document.getElementById('titreGrandeNews').textContent = recordset.recordset[0].NEW_TITRE;
            }
        });

        // Retourner les 2 dernières petites news
        request.query("SELECT TOP 2 * FROM NS_NEWS WHERE NEW_POSITION = 'Petite' AND NEW_ACTIVE = 1 ORDER BY NEW_ID DESC" , function (err, recordset) {
            if (err) {
                console.log("Something went wrong")
            }
            else{
                if(recordset.recordset.length == 1){
                    petiteNews1.style.backgroundImage = 'url("./assets/img/news/'+recordset.recordset[0].NEW_IMAGE+'")';
                    titrePetiteNews1.textContent = recordset.recordset[0].NEW_TITRE;
                } else {
                    petiteNews1.style.backgroundImage = 'url("./assets/img/news/'+recordset.recordset[1].NEW_IMAGE+'")';
                    petiteNews2.style.backgroundImage = 'url("./assets/img/news/'+recordset.recordset[0].NEW_IMAGE+'")';
                    titrePetiteNews1.textContent = recordset.recordset[1].NEW_TITRE;
                    document.getElementById('titrePetiteNews2').textContent = recordset.recordset[0].NEW_TITRE;
                }
                //let date = new Date(recordset2.recordset[0].NEW_DATE);
                
            }
        });
}
    )}

function formatDate(date){
    let formattageJour;
    let formattageMois;

    if(date.getDate() < 10){
        formattageJour = "0" + date.getDate();
    }else {
        formattageJour = date.getDate();
    }

    if((date.getMonth() + 1) < 10){
        formattageMois = "0" + (date.getMonth() + 1);
    } else {
        formattageMois = (date.getMonth() + 1);
    }


    dateNews.textContent = "Le " + formattageJour + "/" + formattageMois + "/" + date.getFullYear();    
}*/

function notifServeur(){
    
    if(boolServ != myServ){
        if(boolServ){
            new Notification('NS Launcher', {
                body: EN_LIGNE
              })
              myServ = boolServ;
        } else {
            new Notification('NS Launcher', {
                body: HORS_LIGNE
              })
              myServ = boolServ;
        }
    } 
}

grandeNews.onmouseover = function(event){
    document.getElementById('contentGrandeNews').style.display = "block";
}

grandeNews.onmouseleave = function(event){
    document.getElementById('contentGrandeNews').style.display = "none";
}

petiteNews1.onmouseover = function(event){
    document.getElementById('contentPetiteNews1').style.display = "block";
}

petiteNews1.onmouseleave = function(event){
    document.getElementById('contentPetiteNews1').style.display = "none";
}

petiteNews2.onmouseover = function(event){
    document.getElementById('contentPetiteNews2').style.display = "block";
}

petiteNews2.onmouseleave = function(event){
    document.getElementById('contentPetiteNews2').style.display = "none";
}

this.social.onclick = function(event){
    const socialFenetre = new BrowserWindow({
        width: 300,
        height: 585,
        frame: false,
        x: 1172,
        y: 265,
     });
}

