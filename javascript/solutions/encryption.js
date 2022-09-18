function encryption(s) {
    let noSpaces = s.split("").filter((char) => char != " ");
    let len = Math.sqrt(noSpaces.length);
    let numRows = Math.floor(len);
    let numCols = Math.ceil(len);

    if (numCols * numRows < noSpaces.length) {
        numRows++;
    }

    let result = "";

    for (let c = 0; c < numCols; c++) {
        for (let r = 0; r < numRows; r++) {
            let nextChar = noSpaces[c + r * numCols];
            if (nextChar == undefined) {
                break;
            }
            result += nextChar;
        }
        result += " ";
    }
    return result;
}
