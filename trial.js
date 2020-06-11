

//i put it in an array so that we can use the loop //
var objPeople = [
    {
        username: "admin",
        password: "admin"
    }
   
]
var objPeople2= [
    {
        username: "user",
        password: "user"
    }
]


//process takes here, i use the loop method because i remember this process on my OOP project, its pretty straight forward// 

function getInfo() {    
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
        if(username=="user" && password=="user"){

        
            if(username == objPeople2[i].username && password == objPeople2[i].password) {
             console.log(username + " is logged in!!!")
                labelinside.innerHTML = "";
                labelinside.innerHTML = " ";
                labeloutside.innerHTML = "It works!!!";
                return
            }
    }
        if(username=="admin" && password=="admin"){
            if(username == objPeople[i].username && password == objPeople[i].password) {
                console.log(username + " is logged in!!!")
                labeloutside.innerHTML = " ";
                labeloutside.innerHTML = "";
                labelinside.innerHTML = "It works!!!";
                   return
               }

    }

         
    }
    //displays incorrect output
    labeloutside.innerHTML = "";
    labelinside.innerHTML = "";
    console.log("incorrect username or password")
    alert("Incorrect Username or Password")

    
}
//tried this and it worked// 
function fun(){
    alert("Developed by Francis Gabriel Cabahug and Flore Virtudazo duwa ta dota 2 ser hehe(190954789)")
}