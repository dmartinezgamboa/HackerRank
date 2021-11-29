function flippingBits(n) {
  let binaryString = createBinaryString(n);
  let newBinaryString = "";

  for (let i = 0; i < binaryString.length; i++) {
    newBinaryString += flipBit(binaryString[i]);
  }

  function createBinaryString(nMask) {
    // nMask must be between -2147483648 and 2147483647
    for (
      var nFlag = 0, nShifted = nMask, sMask = "";
      nFlag < 32;
      nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1
    );
    return sMask;
  }

  function flipBit(bit) {
    if (bit == "0") {
      return "1";
    } else {
      return "0";
    }
  }

  return parseInt(newBinaryString, 2);
}
