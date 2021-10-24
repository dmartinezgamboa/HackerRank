function plusMinus(arr) {
  let length = arr.length;
  let pos = 0;
  let neg = 0;
  let zed = 0;
  
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] == 0) {
          zed++;
      } if (arr[i] > 0) {
        pos++
      } else if (arr[i] < 0) {
        neg++;
      }
  }

  let ratPos = (pos / length).toFixed(6)
  let ratNeg = (neg / length).toFixed(6)
  let ratZed = (zed / length).toFixed(6)

  console.log(`${ratPos}\n${ratNeg}\n${ratZed}`);
}

const arr1 = [1, -2, 3, -4, 5]
const arr2 = [7, 8, 0 ]
const arr3 = [1, -1, 1, 0, 0, ]

plusMinus(arr1)
plusMinus(arr2)
plusMinus(arr3)