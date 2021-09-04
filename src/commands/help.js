//help fn
function helpFn(){
    console.log(`
    List of All the commands: 
         node main.js tree "directoryPath"
         node main.js organize "directory"
         node main.js help`);
}
module.exports = {
    helpKey: helpFn
}