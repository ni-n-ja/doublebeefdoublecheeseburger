'use strict'
//var answer = "ダブルビーフダブルチーズバーガー";
var answer = [0, 1, 0, 2, 3];
var candidate = ["ダブル", "ビーフ", "チーズ", "バーガー"];
var queue = [0, 0, 0, 0, 0];
for (let i = 0; i < queue.length; i++) {
    let j = Math.floor((Math.random() * 10) % 4);
    queue[i] = j;
}
while (true) {
    let j = Math.floor((Math.random() * 10) % 4);
    queue[0] = queue[1];
    queue[1] = queue[2];
    queue[2] = queue[3];
    queue[3] = queue[4];
    queue[4] = j;
    console.log(candidate[queue[0]] +
        candidate[queue[1]] +
        candidate[queue[2]] +
        candidate[queue[3]] +
        candidate[queue[4]]
    );
    if (queue[0] == answer[0] &&
        queue[1] == answer[1] &&
        queue[2] == answer[2] &&
        queue[3] == answer[3] &&
        queue[4] == answer[4]) {

        break;
    }
}