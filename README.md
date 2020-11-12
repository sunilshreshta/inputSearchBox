### Requirements
- Bootstrap
- Jquery



# Input search box
=============
##### demo

![demoImage](https://iili.io/Ffz4gj.gif)

## Usage

      Initialize component
      // elementID : id attribute value of input field
      // dataArray : list of items to search in

      inputSearchBox.init(elementID, dataArray) ;

      Remove component
      // elementID : id attribute value of input field
      inputSearchBox.destroy(elementID);

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
