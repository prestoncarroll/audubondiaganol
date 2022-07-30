const Diaganol = () => {

softArr = [
    [1, 3, 4],
    [3, 5, 9],
    [8, 4, 3]
]

function diagonalDifference(arr) {
    // Write your code here
    var n = arr.length; 
    var diaganol1 = 0;
    var diaganol2 = 0;
    for(var i=0; i<n; i++){
        for(var j=0; j<n; j++){
    
        if(i === j) {
        diaganol1 += arr[i][j];
        }
    
        if(i + j === n - 1){
            diaganol2 += arr[i][j];
        }
        };
    };
    console.log( Math.abs(diaganol1 - diaganol2));
    res.send('<h1> Sorry for the Covid Delay. </h1>' + (Math.abs(diaganol1 - diaganol2 )));
};
diagonalDifference(softArr);

};

export default Diaganol;