module.exports = function toReadable(number) {
    const a = [
        "",
        "one ",
        "two ",
        "three ",
        "four ",
        "five ",
        "six ",
        "seven ",
        "eight ",
        "nine ",
        "ten ",
        "eleven ",
        "twelve ",
        "thirteen ",
        "fourteen ",
        "fifteen ",
        "sixteen ",
        "seventeen ",
        "eighteen ",
        "nineteen ",
    ];
    const b = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let n;
    const getTen = (n) => a[n];
    const getHundred = (n) => {
        let one10 = Math.floor(n / 10);
        let two10 = n - one10 * 10;
        return b[one10] + " " + a[two10];
    };
    if (isNaN(number)) return "";
    if (number === 0) return "zero";
    let str = "";
    if (number < 20) {
        str += getTen(number);
    }
    if (number > 19 && number < 100) {
        str += getHundred(number);
    }
    if (number >= 100) {
        let num100 = Math.floor(number / 100);
        let num10 = number - num100 * 100;
        str += getTen(num100) + "hundred" + " ";
        str = num10 < 20 ? str + getTen(num10) : str + getHundred(num10);
    }
    str = str.trim();
    return str;
};
