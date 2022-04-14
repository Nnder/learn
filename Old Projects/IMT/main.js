function MassMath(){
    document.getElementById('result').innerHTML = '';
    let mass = document.getElementById('Mass').value;
    let width = document.getElementById('Width').value;
    let years = document.getElementById('Years').value;
    let result = mass/((width/100)*(width/100));
    let status;
    let desc;

    document.getElementById('result').innerHTML =
        document.getElementById('result').innerHTML +
        parseInt(result) + " без округления " + result + " " + desc + status;


    if (years){
        if (result < 20){
            status = false;
            desc = "недостаток массы";
        } else if (result >= 20 && result < 26){
            status = true;
            desc = "норма";
        } else if (result >= 26 && result < 27.9){
            status = false;
            desc = "избыток массы";
        } else if (result => 28 && result <= 30.9){
            status = false;
            desc = "Ожирение 1 степени";
        } else if (result >= 31 && result <= 35.9){
            status = false;
            desc = "Ожирение 2 степени";
        } else if (result >= 36 && result <= 40.9){
            status = false;
            desc = "Ожирение 3 степени";
        } else if (result >= 41){
            status = false;
            desc = "Ожирение 4 степени";
        }

    } else {

    }

}