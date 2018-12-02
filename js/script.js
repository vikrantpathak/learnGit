function login(){
				var username = document.getElementById("username").value;
				var password = document.getElementById("password").value;
				
				if( username == "vikrant" && password == "vikrant")
				{
					document.getElementById("msg").innerHTML = '<p class="success">You are successfully login.</p>';
				}
				else
					{
						
					document.getElementById("msg").innerHTML = '<p class="fail">Please enter valid credentials.</p>';
					}
			}
		