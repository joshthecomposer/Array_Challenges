

{
    //Always Hungry
    function alwaysHungry(arr) {
    let yummy = false;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === "food") {
            console.log("yummy");
            yummy = true;
        } else if (arr[i] !== "food") {
            yummy = false;
        }

    }
    if (yummy == false) {
        console.log("I'm hungry");
    }
    };


    alwaysHungry([3.14, "food", "pie", true, "food"]);

    alwaysHungry([4, 1, 5, 7, 2]);
}



{
    //High Pass Filter
    function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) { 
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
    };
    var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
    console.log(result); // we expect back [6, 8, 10, 9]
}

{
    //Better Than Average
    function betterThanAverage(arr) {
        var average = 0;
        // calculate the average
        for (var i = 0; i < arr.length; i++) { 
            average += arr[i]
        }
        average = average / arr.length;

        var count = 0
        // count how many values are greater than the average
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > average) {
                count++;
            }
        }
        return count;
    }
    var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
    console.log(result); // we expect back 4
    
}




{
    //Array reverse - assuming .reverse() is not allowed...
    function reverse(arr) {
        let temp = []
        for (let i = 0; i < arr.length; i++) {
            temp.unshift(arr[i])
        }
        arr = temp;
        return arr;
    }

    var result = reverse(["a", "b", "c", "d", "e"]);
    console.log(result); // we expect back ["e", "d", "c", "b", "a"]
}

{
    // Fibonacci Array
    function fibonacciArray(n) {
        // the [0, 1] are the starting values of the array to calculate the rest from
        var fibArr = [0, 1];
        // your code here
        for (let i = 1; i < n - 1; i++) { 
            fibArr.push(fibArr[i] + fibArr[i - 1])
        }
        return fibArr;
    }

    var result = fibonacciArray(10);
    console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    
}