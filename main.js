const colorBtn = document.getElementById("btn");
    const colorGenerator = document.querySelector("#color-g");
    const bgColor = document.querySelector(".from");
    const bor = document.querySelector("card");
    const colorGeneratorText = document.querySelector(".card-b p");
    const btn = document.querySelector("#btn");
    colorBtn.addEventListener("click", function(){
        let number = Math.floor(Math.random()*16777215);
        let colorCode = '#'+number.toString(16);
        console.log(colorCode);
        colorGenerator.style.backgroundColor = colorCode;
        bgColor.style.backgroundColor = colorCode;
        btn.style.backgroundColor = colorCode;
        colorGeneratorText.innerHTML = colorCode;

    })
