let args = process.argv.splice(2,process.argv.length-1);
let readline = require('readline');
let fs = require('fs');

if(args.length == 0) {
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
      
    rl.on('line', (input) => {
        console.log(input);
        rl.close();
    });
}

if(args.length == 1) {
    let rl = readline.createInterface({
        input: fs.createReadStream(args[0], 'utf8'),
    });

    rl.on('line', function(line) {
        console.log(line);
        rl.close();
    });
}

if(args.length == 2) {

    let rl = readline.createInterface({
        input: fs.createReadStream(args[1], 'utf8'),
    });
    
    rl.on('line', function(line) {
        console.log(line + '$');
        rl.close();
    });
}

if(args.length >= 3) {
    console.log('Commande Inconnue');
}

