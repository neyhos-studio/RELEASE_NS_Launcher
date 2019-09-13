var request = require('request');
var fs = require('fs');
const makeDir = require('make-dir');

var unzip = require('unzip-stream')
var del = require('delete');

document.getElementById('launchBtn').onclick = function(event){
    (async () => {
        const folder = await makeDir('./launcherDL');

        file_url = "http://51.91.156.75/LauncherTest/ns_launcher.zip";
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
            fs.createReadStream('ns_launcher.zip').pipe(unzip.Extract({ path: './'+folder+'' }));

            del.sync(['./'+ name_file+'']);
            document.getElementById('launchBtn').textContent = "JOUER"
        });
    
    
    function showProgress(received,total){
        var percentage = (received * 100) / total;
        document.getElementById('progressBar').style.width = ""+percentage.toFixed(0)+"%";
        document.getElementById('pourcentageDl').textContent = percentage.toFixed(0)

        //| " + received + " bytes out of " + total + " bytes."
    }
    })();
}



