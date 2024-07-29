// votre code ici

export default checkAge;


function checkAge (int) {
if (int.value) < 18 {
    return :"Vous êtes mineur";
} else {
    if (int.value) > 75 {
        return :"Vous êtes senior";
    } else {
        return:"Vous êtes majeur";
    }
}
}