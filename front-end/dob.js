function getInputValue() {
    let inputValue = document.getElementById("textInput1").value;
    

    let yearString = inputValue.slice(0,2);
    let yearInt = parseInt(yearString);
     yearString = yearString.padStart(4, "19");

     let daysString =  inputValue.slice(2,5);
     let daysInt = parseInt(daysString);
  

  const days = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];

  const daysLeap = [31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];

const months = ["Janaury", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let lastIndex = days.length;
let dob = "";
if (yearInt%4 != 0) {

    if (daysInt < 500 ) {
        while(true) {

            if  (daysInt > daysLeap[lastIndex-1]) {
                let countDays = daysInt - daysLeap[lastIndex-1];
                    // console.log(countDays);
                    // console.log(months[lastIndex]);
                    // console.log("Male");
                     dob += "DOB: " + yearString + " " + months[lastIndex] + " " + countDays + "<br>" + "  Gender : Male  ";
                     console.log("dad");
                break;
            }   
            lastIndex--;
            

        }
    }
    else if (daysInt >= 500 ) {
        daysInt = daysInt - 500;
        while(true) {

            if  (daysInt > daysLeap[lastIndex-1]) {
                let countDays = daysInt - daysLeap[lastIndex-1];
    
                    dob += "DOB: " + yearString + " " + months[lastIndex] + " " + countDays + "<br>" + "  Gender : Female  ";
                    console.log("MOM");
                break;
            }   
            lastIndex--;
            

        }
    }
        console.log("Not Leap");
}
else  {

    if (daysInt < 500 ) {
        while(true) {

            if  (daysInt > daysLeap[lastIndex-1]) {
                let countDays = daysInt - daysLeap[lastIndex-1];
                    
                dob += "DOB: " + yearString + " " + months[lastIndex] + " " + countDays + "<br>" + "  Gender : Male  ";
                console.log("bro");
                break;
            }   
            lastIndex--;
            

        }
    }
    else if (daysInt >= 500 ) {
        daysInt = daysInt - 500;
        while(true) {

            if  (daysInt > daysLeap[lastIndex-1]) {
                let countDays = daysInt - daysLeap[lastIndex-1];
                   
                dob += "DOB: " + yearString + " " + months[lastIndex] + " " + countDays + "<br>" + "  Gender : Female  ";
                    
                break;
            }   
            lastIndex--;
            

        }
    }
    console.log("Leap");
}

// console.log(yearString);
// console.log(yearInt);

document.getElementById("output").innerHTML = dob;


}
