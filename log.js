    function login() {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
  
     if (username === "Nikhil" && password === "Niki900") {
      alert("Login Success full ")
      window.location.assign("index.html");
      } 
    
    else if (username === "Nikhil" && password === "niki900") {
      alert("Login Success full")
      window.location.assign("ChoCo.html");
      }
        else{
          alert("Invalid username or password")
        }
    }  

   