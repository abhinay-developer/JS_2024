console.log("JS DOM Manupulation")


var heading3 = document.getElementById('h3');
heading3.innerHTML = "Welcome to JavaScript";


var cardBody = document.getElementById('card-body');

var cardDiv = document.createElement("div");

var picture = document.createElement("img");
picture.src = "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
picture.width = 500;
picture.height = 250;
cardDiv.append(picture);
cardBody.append(cardDiv);


{/* <div id="card-body">
<div>
    <img src="" alt="" />
</div>

</div> */}