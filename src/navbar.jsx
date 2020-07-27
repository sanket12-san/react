import React from "react"



function Navbar (){

return (
<div >

<nav class=" nav  navbar navbar-expand-lg navbar-light ">
  <a class="navbar-brand logo-text " href="#">Maxeon</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link nav-item" href="#">Products <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link nav-item" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link nav-item" href="#">Use Cases</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link nav-item" href="#">Pricing</a>
      </li>
     
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <button class=" nav-button btn btn-light">Login</button>
    </form>
  </div>
</nav>






</div>


);





}



export default Navbar;
