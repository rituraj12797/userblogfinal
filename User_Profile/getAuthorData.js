let  name = document.getElementById("name_input")


// console.log(localStorage.getItem("user" ) ? JSON.parse(localStorage.getItem("user" ))  : "")
// Set a cookie with a name, value, and optional options
function setCookie(name, value, options = {}) {
    
    // Default options (you can customize these as needed)
    const defaults = {
        path: '/',             // The path for which the cookie is valid          // The expiration date (if empty, the cookie is a session cookie)
        maxAge: '1000*60*60*60',            // The maximum age of the cookie in seconds (if set, takes precedence over 'expires')           // The domain for which the cookie is valid
        secure: false,         // The cookie can only be transmitted over secure (HTTPS) connections
    };
  
    // Merge provided options with defaults
    const mergedOptions = { ...defaults, ...options };
  
    // Build the cookie string
    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  
    // Add options to the cookie string
    for (const [key, val] of Object.entries(mergedOptions)) {
      if (val) {
        cookieString += `; ${key}=${val}`;
      }
    }
  
    // Set the cookie
    document.cookie = cookieString;
    console.log(cookieString)
  }
  
  // Example: Set a cookie named 'myCookie' with the value 'exampleValue'
  

  

  document.cookie = "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTcwYTU1Njc5ZmYxOWU5N2FhN2U2MCIsImVtYWlsIjoiYXl1c2h2aXNoNjU1NUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImRraGIiLCJpYXQiOjE2OTYwODIwMjAsImV4cCI6MTY5NjE2ODQyMH0.C1nzMd0j9tbwDi9ImnUMpStg5W3Ir6RsuNOpXXBi26Q; path=/api/v1/user; maxAge=1000*60*60*60; expires=Sun, 31 Dec 2023 23:59:59 GMT; domain=dep-mocha-six.vercel.app"
  
  let getData  =async ( e) => {
    e.preventDefault() 
    document.cookie = "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTcwYTU1Njc5ZmYxOWU5N2FhN2U2MCIsImVtYWlsIjoiYXl1c2h2aXNoNjU1NUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImRraGIiLCJpYXQiOjE2OTYwODIwMjAsImV4cCI6MTY5NjE2ODQyMH0.C1nzMd0j9tbwDi9ImnUMpStg5W3Ir6RsuNOpXXBi26Q; path=/api/v1/user; maxAge=1000*60*60*60; expires=Sun, 31 Dec 2023 23:59:59 GMT; domain=dep-mocha-six.vercel.app"
  // let token = (localStorage.getItem("user" )  ? JSON.parse(localStorage.user).token : "")
  // setCookie('token', token, { expires: 'Sun, 31 Dec 2023 23:59:59 GMT' ,domain: 'dep-mocha-six.vercel.app', path: '/api/v1/user' });
    const response = await fetch("https://dep-mocha-six.vercel.app/api/v1/user/me" , {
        mode : "cors",
        method:  "GET",
        credentials : "omit"
        

    })

    console.log(response)
     
    const data  =await response.json() 

    console.log(data )
}

window.addEventListener("click" , getData)