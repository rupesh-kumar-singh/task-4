;

// Step 1
// Create Obj which is capable of making an API Call
const request = new XMLHttpRequest();

// Step 2
// Open connection to destination or config details to Http request obj
request.open('GET', 'https://restcountries.com/v3/all'); // Setting the Operation to be Read Operation

// Step 3
// Send the request to rest countries server
request.send(null);

// Step 3.1
// getting the response and unpacking
request.onload = function () {
  const response = JSON.parse(request.responseText); // parse the string of JSON
  console.log(response);

  
response.forEach( ({flag,region,subregion,population})=>{
    console.log(flag,region,subregion,population)
});


};

