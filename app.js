const https = require('https'); 
https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => { 
  let data = ''; 
 
  resp.on('data', (chunk) => { 
    data += chunk; 
  }); 
 
  resp.on('end', () => { 
    console.log(JSON.parse(data)); 
  }); 
}).on('error', (err) => { 
  console.log("Error: " + err.message); 
});
async function myFunction() { 
  try { 
    const result = await myPromise; 
    console.log(result); 
  } catch (error) { 
    console.log(error); 
  } 
} 
 
myFunction();
