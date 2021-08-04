console.log("loading javascript")

const btnELement = document.getElementById('create-post'); 

function createNewPost(){
    var title = document.getElementById('title').value ; 
    var description = document.getElementById('description').value ; 
    console.log(title, description);

    // Send a POST request to the API endpoint
    const response =  fetch('/api/posts/', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
}
btnELement.addEventListener('click', createNewPost)