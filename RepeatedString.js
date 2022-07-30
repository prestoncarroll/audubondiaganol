
function countAs(str, ln) {
    let count = 0;
    for (let i = 0; i < ln; i++) {
        if (str[i] === 'a') {
            count++;
        }
    }
    return count;
    
}

function repeatedString(s, n) {
    return (
        countAs(s, s.length) * parseInt(n / s.length, 10) +
        countAs(s, n % s.length)
    );
}

export default repeatedString;
