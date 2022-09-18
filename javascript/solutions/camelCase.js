function camelCase(s) {
    if (s.length == 0) {
        return 0;
    }
    let numWords = 1;
    for (const char of s) {
        if (char == char.toUpperCase()) {
            numWords += 1;
        }
    }
    return numWords;
}
