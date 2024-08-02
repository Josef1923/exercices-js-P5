// votre code ici

export default checkAge;


function checkAge(age) {

    if (age < 18) {
        return "Vous êtes mineur.";
    }

    if (age >= 65) {
            return "Vous êtes senior.";
    }

    return "Vous êtes majeur.";
    
};
