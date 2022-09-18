function diagonalDifference(arr) {
    let leftToRightSum = 0;
    let rightToLeftSum = 0;
    for (const m in arr) {
        let n = arr[m];
        leftToRightSum += n[m];
        rightToLeftSum += n[n.length - 1 - m];
    }
    let result = Math.abs(leftToRightSum - rightToLeftSum);
    return result;
}
