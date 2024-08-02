//votre code ici

export default printNumbers

function printNumbers(n) {

    let res = "";

    for (let i = 1; i <= n ; i++) {
    res += i;

        if (i!= n ) {
            res += " ";
        }
    }
    return res;
};