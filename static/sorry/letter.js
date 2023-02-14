/*
 * @Description:
 * @Author: wwy
 * @Date: 2022-11-01 22:16:08
 * @LastEditTime: 2023-02-14 11:28:07
 * @LastEditors: wwy
 * @FilePath: /sorry/letter.js
 */
let heart = document.querySelector(".heart");
let card = document.querySelector(".card");
let box = document.querySelector("#box");
heart.addEventListener("click", function() {
  card.setAttribute("style", "opacity:0");
  let x = document.createElement("audio");
  x.setAttribute("src", "Jurrivh - Lonely Day.mp3");
  x.setAttribute("autoplay", "autoplay");

  let i = 0;
  let str =
    "对不起，最近是我不对a我不该态度不好，还凶你，实在是不应该这样，不该在你难受的时候火上浇油a多幸运遇见你a如果没有你，我的世界多孤寂a遇见你是我三生有幸,我真的知道错了aa-----";
  let strp = "";

  function print() {
    if (str[i] == "a") {
      document.getElementById("box").innerHTML = strp + "<br><br>+'|'";
      strp += "<br><br>";
    } else {
      strp += str[i];
      box.innerHTML = strp + "|";
    }
    i++;
  }
  setTimeout(() => {
    let printid = setInterval(() => {
      print();
      if (i == str.length) {
        strp[i - 1] = "";
        document.getElementById("box").innerHTML = strp;
        clearInterval(printid);
      }
    }, 190);
  }, 5500);
  function appearBackground() {
    setTimeout(() => {
      box.style.opacity = 1;
    }, 1500);
  }
  appearBackground();
});
