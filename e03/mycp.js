let args = process.argv.splice(2,process.argv.length-1);
let fs = require('fs')

if(args.length == 2) {
    if(fs.existsSync(args[0])) {

        if(fs.existsSync(args[1])) {

            fs.copyFile(args[0], args[1], (err) => {
                if (err) throw err;
                console.log(`${args[0]} a été copié dans ${args[1]} `);
            });

        } else {

            fs.rename(args[0], args[1], (err) => {
                if (err) throw err;
                console.log(`${args[0]} a été copié dans ${args[1]} `);
            });

        }

    } else {

        console.log(`Le fichier : ${args[0]} n\'existe pas`);
    }
}

else if(args.length == 3) {
    if(args[0] == '-r') {
        if(fs.existsSync(args[1])) {

            let path = fs.realpathSync(args[1]);

            fs.writeFileSync(args[2], path, (err) => {
                if (err) throw err;
                console.log(`le chemin d'accès du dossier : ${args[1]} a été copié dans ${args[2]}`);
            });


        } else {

            console.log(`Le fichier : ${args[1]} n\'existe pas`);
        }
    } else {

        console.log('Commande Inconnue');
    }
} 

else {
    console.log('Commane Inconnue')
}
