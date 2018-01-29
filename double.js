'use strict'
//var answer = "ダブルビーフダブルチーズバーガー";
var answer = [0, 1, 0, 2, 3];
var candidate = ["ダブル", "ビーフ", "チーズ", "バーガー"];
var queue = [0, 0, 0, 0, 0];
var count = 0;
window.onload = () => {
    document.querySelector("#start").addEventListener('click', (e) => {

        for (let i = 0; i < queue.length; i++) {
            let j = Math.floor((Math.random() * 10) % 4);
            queue[i] = j;
        }
        while (true) {
            count++;
            let j = Math.floor((Math.random() * 10) % 4);
            document.getElementById("text").innerText = document.getElementById("text").innerText + candidate[j];
            queue[0] = queue[1];
            queue[1] = queue[2];
            queue[2] = queue[3];
            queue[3] = queue[4];
            queue[4] = j;
            if (queue[0] == answer[0] &&
                queue[1] == answer[1] &&
                queue[2] == answer[2] &&
                queue[3] == answer[3] &&
                queue[4] == answer[4]) {
                document.getElementById("start").style.display = "none";
                document.getElementById("burger").style.display = "block";
                document.getElementById("retry").style.display = "block";
                document.getElementById("tbutton").setAttribute("href",
                    "https://twitter.com/share?text=🍔ダブルビーフダブルチーズバーガーチャレンジ🍔%0a" + count + "回でダブルビーフダブルチーズバーガーが出ました！" + "&url=https://ni-n-ja.github.io/doublebeefdoublecheeseburger");
                break;
            }
        }
    });

    document.querySelector("#retry").addEventListener('click', (e) => {
        document.getElementById("text").innerText = ""
        document.getElementById("start").style.display = "flex";
        document.getElementById("burger").style.display = "none";
        document.getElementById("retry").style.display = "none";
        document.getElementById("tbutton").setAttribute("href",
            "https://twitter.com/share?text=🍔ダブルビーフダブルチーズバーガーチャレンジ🍔&url=https://ni-n-ja.github.io/doublebeefdoublecheeseburger");
        count = 0;
    });

}