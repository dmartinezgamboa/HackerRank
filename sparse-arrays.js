function matchingStrings(strings, queries) {
  let results = [];

  for (let i = 0; i < queries.length; i++) {
    for (let j = 0; j < strings.length; j++) {
      if (queries[i] == strings[j]) {
        if (!results[i]) {
          results[i] = 1;
        } else {
          results[i]++;
        }
      } else if (!results[i]) {
        results[i] = 0;
      }
    }
  }
  return results;
}

let s1 = ["ab", "ab", "abc"];
let q1 = ["ab", "abc", "bc"];

matchingStrings(s1, q1);
