function lonelyinteger(a) {
    let ans = 0;

    for (let i = 0; i < a.length; i++) {
        let temp = a.filter((e) => e == a[i]);
        if (temp.length == 1) {
            ans = a[i];
            break;
        }
    }
    return ans;
}

let a1 = [1, 1, 2, 2, 3, 4, 4];
let a2 = [1, 1, 2, 5, 5, 4, 4];
let a3 = [1, 1, 2, 2, 3, 4, 4];
let a4 = [1, 2, 2, 3, 3, 4, 4];

console.log(lonelyinteger(a1));
console.log(lonelyinteger(a2));
console.log(lonelyinteger(a3));
console.log(lonelyinteger(a4));
