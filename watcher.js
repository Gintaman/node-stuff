const fs = require("fs"),
      filename = process.argv[2];
if(!filename) {
    throw Error("No filename specified");
}
fs.watch(filename, function() {
    console.log("File", filename, "changed.");
});
console.log("Watching " + filename + " for changes...");
