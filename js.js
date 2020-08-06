








// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {



  function generatePassword(){
    let pass={

        special_characters:[" ","!","@","#","$","%","^","&","*","(",")","-","_","=","+","{","}","[","]","|","?","<",">",",",".","/","'",";",":","`","~"],
        numbers:["1","2","3","4","5","6","7","8","9","0"],
        lowerCaseLetter:["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"],
        upperCaseLetter:["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"],
  }


  let amir = confirm("would you like to have a strong pass?");
  console.log(amir);

  if(amir===true){


    let amir1 = confirm("would you like ur pass have special characters?");
    console.log(amir1);

    if(amir1===true){
    let aslan = parseInt(prompt("how many special characters would you like your pass to be?"));
    console.log(aslan);

        for(let i=0;i<aslan;i++){

                pass.special_characters[Math.floor(Math.random() * pass.special_characters.length)];
            }

        }




    // let amir2 = confirm("would you like ur pass have numbers?");
    // console.log(amir2);

    // if(amir2===true){
    // let arsalan = parseInt(prompt("how many numbers would you like your pass to have?"));
    // console.log(arsalan);
    //     for(let i=0;i<arsalan;i++){
    //       let randomNumbers = pass.numbers[Math.floor(Math.random() * pass.numbers.length)];
    //       console.log(randomNumbers);

    //     }

    //   }




    // let amir3 = confirm("would you like ur pass have Lower Case Letter?");
    // console.log(amir3);

    // if(amir3===true){
    // let ardalan = parseInt(prompt("how many lower case letters would you like your pass to have?"));
    // console.log(ardalan);

    // for(let i=0;i<ardalan;i++){
    //   let randomLowerCaseLetter = pass.lowerCaseLetter[Math.floor(Math.random() * pass.lowerCaseLetter.length)];
    //   console.log(randomLowerCaseLetter);
    // }
    //   }




    // let amir4 = confirm("would you like ur pass have uper Case Letter?");
    // console.log(amir4);

    // if(amir4===true){
    // let arastoo = parseInt(prompt("how many uper case letters would you like your pass to have?"));
    // console.log(arastoo);
    //     for(let i=0;i<arastoo;i++){
    //       let randomUpperCaseLetter = pass.upperCaseLetter[Math.floor(Math.random() * pass.upperCaseLetter.length)];
    //       console.log(randomUpperCaseLetter);
    //     }
    // }



  }

  else{
    document.getElementById("password").textContent="you will hacked easly";
    }
}

         document.getElementById("password").textContent=generatePassword();
}




generateBtn.addEventListener("click", writePassword);
