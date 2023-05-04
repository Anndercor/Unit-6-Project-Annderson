// Declare your genre arrays here
let romance = ["https://m.media-amazon.com/images/M/MV5BNTVkMTFiZWItOTFkOC00YTc3LWFhYzQtZTg3NzAxZjJlNTAyXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BMTQ2NjE4NDE2NV5BMl5BanBnXkFtZTgwOTcwNDE5NzE@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_.jpg"];

let horror = ["https://spartanspeaks.com/wp-content/uploads/2021/09/halloween.jpeg", "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_FMjpg_UX1000_.jpg", "https://m.media-amazon.com/images/M/MV5BMTYyOTAxMDA0OF5BMl5BanBnXkFtZTcwNzgwNTc1NA@@._V1_FMjpg_UX1000_.jpg"];

let action = ["https://upload.wikimedia.org/wikipedia/en/e/ed/Taken_film_poster.jpg", "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"];


// Make sure to declare your HTML elements as variables! 
let result = document.querySelector(".result");
// Submit Button 
let submitButton = document.querySelector(".submit");
submitButton.onclick = function() {
    let input1 = document.querySelector(".input1").value;
    if (input1 === "romance") {
        for (let romanceMovie of romance) {
            let img = "<img src=" + romanceMovie + ">";
            result.insertAdjacentHTML("beforeend", img);
        }
    } else if (input1 === "horror") {
        for (let horrorMovie of horror) {
            let img = "<img src=" + horrorMovie + ">";
            result.insertAdjacentHTML("beforeend", img);
        }
    } else if (input1 === "action") {
        for (let actionMovie of action) {
            let img = "<img src=" + actionMovie + ">";
            result.insertAdjacentHTML("beforeend", img);
        }
    }
};
let suggestButton = document.querySelector(".suggest");
suggestButton.onclick = function() {
    let suggestInput = document.querySelector(".input2").value;
    romance.push(suggestInput);
    horror.push(suggestInput);
    action.push(suggestInput);

    let img = "<img src=" + suggestInput + ">";
    result.insertAdjacentHTML("beforebegin", img + "Thanks!");
};