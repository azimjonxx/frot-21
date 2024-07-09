let a = [2, 4, 9, 10, 45, 67, 8, 90];
console.log(a, "'boshlanishdegi array'");

let c = [];
for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
        c.push(a[i]);
    }
}

console.log(c,"'juft sonlarga ajratilgan array'");

