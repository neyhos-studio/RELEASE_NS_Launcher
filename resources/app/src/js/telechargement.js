var request = require('request');
var fs = require('fs');
var del = require('delete');

var DecompressZip = require('decompress-zip');

var clone = require('git-clone');
var pull = require('git-pull');

const isGit = require('is-git-check');

var git = require('git-state')

var path = process.cwd();

console.log("Est-ce un GIT repository : " + isGit(process.cwd()))

git.check(path, function (err, result) {
    if (err) throw err
    console.log(result) // => { branch: 'master',
                        //      ahead: 0,
                        //      dirty: 9,
                        //      untracked: 1,
                        //      stashes: 0 }
  })

document.getElementById('launchBtn').onclick = function(event){
/*
    const repo = "https://github.com/neyhos-studio/RELEASE_NS_Launcher.git";
    const targetPath = "./";
    if(isGit(process.cwd())){
        pull(targetPath, function (err, consoleOutput) {
            if (err) {
                console.error("Error!", err, consoleOutput);
            } else {
                console.log("Success!", consoleOutput);
                remote.app.relaunch();
                remote.app.exit(0);
            }
    })}*/

    /*clone(repo, targetPath, ()=>{
    
        console.log("ok")
    
    });*/

    /*pull(targetPath, function (err, consoleOutput) {
        if (err) {
            console.error("Error!", err, consoleOutput);
        } else {
            console.log("Success!", consoleOutput);
        }
    });*/
    
    /*
        file_url = "http://51.91.156.75/LauncherTest/ns_launcher.zip";
        //name_file = "ns_launcher.exe";
        name_file = "ns_launcher.zip";
        // Save variable to know progress
        var received_bytes = 0;
        var total_bytes = 0;
    
        var req = request({
            method: 'GET',
            uri: file_url
        });

    
        var out = fs.createWriteStream(name_file);
        req.pipe(out);
    
        req.on('response', function ( data ) {
            // Change the total bytes value to get progress later.
            total_bytes = parseInt(data.headers['content-length' ]);
        });
    
        req.on('data', function(chunk) {
            // Update the received bytes
            received_bytes += chunk.length;
    
            showProgress(received_bytes, total_bytes);
        });
    
        req.on('end', function() {   

            //fs.createReadStream(name_file).pipe(unzip.Extract({ path: './prod' }));0
/*
            var unzipper = new DecompressZip("C:\\Users\\Le boss\\Documents\\Projet MMO\\Launcher\\ns_launcher.zip")

            unzipper.on('error', function (err) {
                console.log('Caught an error');
            });
             
            unzipper.on('extract', function (log) {
                console.log('Finished extracting');
            });
             
            unzipper.on('progress', function (fileIndex, fileCount) {
                document.getElementById('test').textContent = 'Extracted file ' + (fileIndex + 1) + ' of ' + fileCount
            });
             
            unzipper.extract({
                path: 'C:\\Users\\Le boss\\Documents\\Projet MMO\\Launcher\\prod',
            });
            
            new Notification('NS Launcher', {
                body: "JEU installé !"
              })

            //DON'T TOUCH BIATCH
            /*child('start C:\\"Program Files"\\Git\\git-bash.exe', function(error, data) {
                if(error) {
                console.error(error);
                return;
                }
                console.log(data.toString());
                });

                //del.sync(['./'+ name_file+'']);

                

                
                document.getElementById('launchBtn').textContent = "JOUER"
        });
    
    
    function showProgress(received,total){
        var percentage = (received * 100) / total;
        document.getElementById('progressBar').style.display = "block";
        document.getElementById('progressBar').style.width = ""+percentage.toFixed(0)+"%";
        document.getElementById('pourcentageDl').textContent = percentage.toFixed(0) + " %"

        //| " + received + " bytes out of " + total + " bytes."
    }*/
}

