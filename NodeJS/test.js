var fs = require('fs');

var dirString = fs.realpathSync(__dirname);
console.log("Répértoire courant",dirString);
var dir =dirString +'/'+'monDossier';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
    console.log("vous avez créer un dossier qui a pour nom 'monDossier'");
}
else{
	    console.log("le dossier dont le nom  est 'monDossier' existe déja");
}