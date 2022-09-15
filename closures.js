var elem = document.createElement('h2');
elem.textContent = "No Closure";
document.body.appendChild(elem)

var nums = [1, 2, 3];

// Let's loop over the numbers in our array
for (var i = 0; i < nums.length; i++) {

    // This variable keeps changing every time we iterate!
    //  It's first value is 1, then 2, then finally 3.
    var num = nums[i];

    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.textContent = num;

    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', function () {

        // ... alert num's value at the moment of the click!
        alert(num);

        // Specifically, we're alerting the num variable
        // that's defined outside of this inner function.
        // Each of these inner functions are pointing to the
        // same `num` variable... the one that changes on
        // each iteration, and which equals 3 at the end of
        // the for loop.  Whenever the anonymous function is
        // called on the click event, the function will
        //  reference the same `num` (which now equals 3).

    });

    // finally, let's add this element to the document
    document.body.appendChild(elem);
};


// Closures

var elem = document.createElement('h2');
elem.textContent = "Closure";
document.body.appendChild(elem)

/*
The solution involves utilizing closures. We're going to create an inner scope
to hold the value of num at the exact moment we add the event listener.
There are a number of ways to do this -- here's a good one.
*/


// Let's loop over the numbers in our array
for (var i = 0; i < nums.length; i++) {

    // This is the number we're on...
    var num = nums[i];

    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.textContent = num;

    // We immediately invoke the outer function by wrapping it in parentheses
    // and calling it right away, passing in num.This method of wrapping an
    // anonymous function in parentheses and calling it right away is called
    // an IIFE(Immediately - Invoked Function Expression, pronounced like
    // "iffy"). This is where the "magical" part happens.
    elem.addEventListener('click', (function (numCopy) {

        // We're passing the value of num into our outer function. Inside that
        // outer function, the value is known as numCopy --aptly named, since
        // it's a copy of num in that instant.Now it doesn't matter that num
        // changes later down the line.We stored the value of num in numCopy
        // inside our outer function.
        return function () {

            // Lastly, the outer function returns the inner function to the
            // event listener.Because of the way JavaScript scope works, that
            // inner function has access to numCopy.In the near future, num
            // will increment, but that doesn't matter. The inner function
            // has access to numCopy, which will never change.
            alert(numCopy);

        };

        // Now, when someone clicks, it'll execute the returned inner function,
        // alerting numCopy.

    })(num));

    document.body.appendChild(elem);

};
