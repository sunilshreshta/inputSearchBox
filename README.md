### Requirements
- Bootstrap
- Jquery



# Input search box
=============


## Usage
##### HTML　
demo.html

      ...
      <link rel="stylesheet" href="scss/demo.min.css">
      ...

      <input type="text" class="form-control" placeholder="Buscar por nombre del parking" id="searchableInput">

      ...
      <script src="js/inputSearch.js"></script>
      <script src="js/demo.js"></script>

##### Javscript　
demo.js

       $(document).ready(function(){
   			 $("#searchParking").on("click",function(){
      				//cargar el componente
     				 inputSearchBox.init("searchableInput",parkingListArray) ;
   			 });
		}) ;
