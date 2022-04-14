function Logger(msg){
   let fs = require('fs');
   let cm = require('crypt-maker');
   let crypt = new cm({key: 'default'});


   let enc = crypt.encrypt(msg);
   let dec = crypt.decrypt(enc);

   fs.writeFile('log.txt', (enc + '  ' + dec), () => null);


}

Logger('Hello');