let args = process.argv.splice(2,process.argv.length-1);
let fs = require('fs')


if(args.length == 0) {
    fs.readdir('./', (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          files.forEach(file => { 
            console.log(file); 
          }) 
        } 
    }) 
}

else if(args.length == 1) {
    if(args[0] == '-a') {

      fs.readdir('./', (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          files.forEach(file => { 
            console.log(file); 
          }) 
        } 
    }) 

    } else {
        fs.readdir(args[0], (err, files) => { 
            if (err) 
              console.log(err); 
            else { 
              files.forEach(file => { 
                console.log(file); 
              }) 
            } 
        }) 
    }
}

else if(args.length == 2) {
  if(args[0] == '-R') {
    fs.readdir(args[1], (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          files.forEach(file => { 
            console.log(file); 
          }) 
        } 
    }) 
  }
}
