function diagonalDifference(arr) {
    let leftToRight = 0;
    let rightToLeft = 0;
    for (const i in arr) {
        let n = arr[i];
        leftToRight += n[i];
        rightToLeft += n[n.length - 1 - i];
    }
    let result = Math.abs(leftToRight - rightToLeft);
    return result;
}
