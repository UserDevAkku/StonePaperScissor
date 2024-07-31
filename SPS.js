let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userscore = 0;
let compscore = 0;

let gencompchoice = () => {
    let option = ["stone", "paper", "scisor"];
    let randid = Math.floor(Math.random() * 3);
    return option[randid];

};
let user_score = () => {
    userscore++
}
let comp_score = () => {
    compscore++
}

let USERcount = () => {
    document.getElementById("user-score").innerText = userscore
}

let COMPcount = () => {
    document.getElementById("comp-score").innerText =compscore
}

let gamedraw = () => {
    console.log("Userchoice & Compchoice are same: GAME DRAWN");
    msg.innerText = "DRAW";
    msg.style.color = "yellow";
}

let showwinner = (winuser) => {
    if (winuser) {
        msg.innerText = "YOU WON";
        msg.style.color = "green";
        user_score();
        USERcount();
    }
    else {
        msg.innerText = "YOU LOST";
        msg.style.color = "red";
        comp_score();
        COMPcount();
    }

}

let playgame = (userchoice) => {
    let compchoice;
    compchoice = gencompchoice();
    if (userchoice === compchoice) {
        gamedraw();
    }
    else {
        let winuser = true;
        if (userchoice === "stone") {
            winuser = compchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            winuser = compchoice === "scisor" ? false : true;
        }
        else {
            winuser = compchoice === "stone" ? false : true;
        }
        showwinner(winuser);



    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});

