const remote = require('electron').remote
const tcpp = require('tcp-ping');
const electron = require('electron');
const IP_SERVER = '51.91.156.75';
const PORT_SERVER = 5757;
const EN_LIGNE = 'NOM_DU_JEU est maintenant disponible';
const HORS_LIGNE = 'NOM_DU_JEU est malheureusement indisponible';

let boolServ = false;
let myServ = false;
let etatFenetre = true;

document.getElementById('launchBtn').disabled = true;

pingTest();
notifServeur();

// Selection server display
function displayServerSeletion() {
    var x = document.getElementById("Server-List");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
};

// Icon Selection
var iconList = document.getElementById("Icon-List");
function displayIconSeletion() {
    if (iconList.style.display === "block") {
        iconList.style.display = "none";
    } else {
        iconList.style.display = "block";
    }
};
iconList.childNodes.forEach(icon => {
    icon.addEventListener('click', () => {
        document.getElementById('profil-img').src = icon.src;
        Console.log("ok");
    })
});

// valide nickname
let btnNickname = document.getElementById('my-nickname')
btnNickname.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
        btnNickname.textContent = btnNickname.value;
        btnNickname.blur();
    }
});

// Close Launcher
this.document.getElementById('closeApp').onclick = function(event) {
    let window = remote.getCurrentWindow();
    window.close();
    socialFenetre.close();
}

// Minimize Launcher
this.document.getElementById('minimizeApp').onclick = function(event) {
    let window = remote.getCurrentWindow();
    window.minimize();
}

// Maximize / Minimize Launcher
this.document.getElementById('maximizeApp').onclick = function(event) {
    let window = remote.getCurrentWindow();
    if(etatFenetre){
        window.maximize();
    } else {
        window.setResizable(true)
        window.setSize(1024, 660);
        window.center();
    }

    etatFenetre = !etatFenetre;
} 

// Ping server
function pingTest() {
    tcpp.probe(IP_SERVER, PORT_SERVER, function(err, available) {
        console.log(available)
        if(available){
            document.getElementById('Server-Ping').style.backgroundColor = "rgba(60,210,0,1)";
            document.getElementById('launchBtn').disabled = false;
            document.getElementById('launchBtn').style.backgroundColor = "rgba(0,0,0,0.75)"
            document.getElementById('launchBtn').onmouseover = function(){document.getElementById('launchBtn').style.backgroundColor = "red"};
            document.getElementById('launchBtn').onmouseleave = function(){document.getElementById('launchBtn').style.backgroundColor = "rgba(0,0,0,0.75)"};
            boolServ = true;
            //notifServeur();
        } else {
            document.getElementById('Server-Ping').style.backgroundColor = "rgba(210,30,0,1)";
            document.getElementById('launchBtn').disabled = true;
            document.getElementById('launchBtn').style.backgroundColor = "rgba(255, 255, 255, 0.55)"
            boolServ = false;
            //notifServeur();
        }
    });

    setTimeout("pingTest();", 5000); 
  }

// Notif windows
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


document.getElementById('numVersion').textContent = "v."+require('electron').remote.app.getVersion();

// Encart news
let mainNews = document.getElementById('Main-News');
let subNews1 = document.getElementById('Sub-News1');
let subNews2 = document.getElementById('Sub-News2');

let apiOff = document.getElementById('Serveur-Off');

let urlVideo = document.getElementById('urlVideo');

let xhttp= new XMLHttpRequest();
let newsSecondaires= new XMLHttpRequest();

// Récupération news principale
let requestURLNewsPrincipale = 'http://51.91.156.75:5000/api/News/GetByPosition/Grande';
let requestURLNewsSecondaire = 'http://51.91.156.75:5000/api/News/GetByPosition/Petite';
try{
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 0) {
            
        // CONDITION QUAND API OFF
        mainNews.style.display = 'none';
        subNews1.style.display = 'none';
        subNews2.style.display = 'none';

        apiOff.style.display = "block"
      }
    };

    xhttp.open('GET', requestURLNewsPrincipale);
    xhttp.send();

    newsSecondaires.open('GET', requestURLNewsSecondaire);
    newsSecondaires.send();

    xhttp.onload = function() {
        let objectJson = JSON.parse(xhttp.response)
        urlVideo.src = "https://www.youtube.com/embed/"+objectJson[0].urlVideoNews+"";
      }

    newsSecondaires.onload = function(){
        let newsSecondaire = JSON.parse(newsSecondaires.response)
        console.log(newsSecondaire[0])
        console.log(newsSecondaire[1])
        subNews1.style.backgroundImage = 'url("./assets/img/news/'+newsSecondaire[0].urlImageNews+'")';
        subNews2.style.backgroundImage = 'url("./assets/img/news/'+newsSecondaire[1].urlImageNews+'")';
    }
  }catch(e){
    console.log('catch', e);
  }

  