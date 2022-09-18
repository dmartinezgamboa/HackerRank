function encryption(s) {
    let filtered = s.split("").filter((c) => c != " ");
    let L = Math.sqrt(filtered.length);
    let numRows = Math.floor(L);
    let numCols = Math.ceil(L);

    if (numCols * numRows < filtered.length) {
        console.log("here");
        numRows++;
    }

    let result = "";
    for (let i = 0; i < numCols; i++) {
        for (let j = 0; j < numRows; j++) {
            let nextChar = filtered[i + j * numCols];
            console.log(nextChar);
            if (nextChar == undefined) {
                break;
            }
            result += nextChar;
        }
        result += " ";
    }
    return result;
}

let test = "chillout";
let result = encryption(test);
console.log(result);
