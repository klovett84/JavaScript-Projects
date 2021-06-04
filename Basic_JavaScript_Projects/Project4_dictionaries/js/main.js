// Create dictionary and print to page
function printDictionary() {
    //Define the dictionary
    var song = {
        Genre: "Disco",
        Tempo: "120 BPM",
        Key: "F Major",
        Year: 1972
    };

    // Delete Year KVP
    delete song.Year;

    // Attempt to print deleted KVP
    document.getElementById("dictionary").innerHTML = song.Year;
};