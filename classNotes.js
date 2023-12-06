  // sync vs asyn c
let counter = 1;
counter++;
console.log(counter);
// sync. one thing at a time

let counting = 1;
setTimeout(function() {
  counting++;
}, 0 
);
console.log(counting) // 1...

//MOVIE TIMES
let movieTimePromise = // promise
movieTimePromise.then(function(movieTimes){
  //add movie time info to page
});
movieTimePromise.catch(function() {
  // display error message to user
})


let movieTimesPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        const movieTime = {
            name: 'Captain Marvel',
            time: '19:20',
            location: 'Meridian 16'
        };
        resolve(movieTime)
    }, 1500);
})

movieTimesPromise.then(function(movieTime){
    movieDiv.innerHTML = `
    <h1>${movieTime.name}<h1>
    <p>
    ${movieTime.location}:
    <b>${movieTime.time}<b>
    </p>
    `;
})
movieTimesPromise.catch(function(e){
    movieDiv.innerHTML = 
    'unable to get movie times';
});