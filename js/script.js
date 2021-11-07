// Function for calculating grades
const calculate = () => {

    // Getting input from user into height variable.
    let chemistry = document.querySelector("#chemistry").value;
    let hindi = document.querySelector("#hindi").value;
    let math = document.querySelector("#math").value;
    let biology = document.querySelector("#biology").value;
    let islam = document.querySelector("#islam").value;
    let generalmath = document.querySelector("#generalmath").value;
    let bangla = document.querySelector("#bangla").value;
    let english = document.querySelector("#english").value;
    let highermath = document.querySelector("#highermath").value;
    let physics = document.querySelector("#physics").value;
    let grades = "";
    
    // Input is string so typecasting is necessary. */
    let totalgrades =
        parseFloat(chemistry) +
        parseFloat(hindi) +
        parseFloat(math) +
        parseFloat(biology) +
        parseFloat(islam) +
        parseFloat(generalmath) +
        parseFloat(bangla) +
        parseFloat(english) +
        parseFloat(highermath) +
        parseFloat(physics);


    
    // Checking the condition for the providing the
    // grade to student based on percentage
    let percentage = (totalgrades / 1000) * 100;
    if (percentage <= 100 && percentage >= 80) {
        grades = "A";
    } else if (percentage <= 79 && percentage >= 60) {
        grades = "B";
    } else if (percentage <= 59 && percentage >= 40) {
        grades = "C";
    } else {
        grades = "F";
    }
    // Checking the values are empty if empty than
    // show please fill them
    if (chemistry == "" || hindi == ""
                || math == "" || biology == ""
                || islam== "" || generalmath ==""
                || bangla=="" || english==""
                || highermath=="" || physics==""){
            

        document.querySelector("#showdata").innerHTML
            = "Please enter all the fields";
    
        // Checking the condition for the fail and pass
    } else {
        if (percentage >= 39.5) {
        document.querySelector(
            "#showdata"
        ).innerHTML =
            ` Out of 1000 your total is ${totalgrades}
            and percentage is ${percentage}%. <br>
            Your grade is ${grades}. You are Pass. `;
        } else {
        document.querySelector(
            "#showdata"
        ).innerHTML =
            ` Out of 1000 your total is ${totalgrades}
            and percentage is ${percentage}%. <br>
            Your grade is ${grades}. You are Fail. `;
        }
    }
    };
    