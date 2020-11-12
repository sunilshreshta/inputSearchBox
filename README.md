### Requirements
- Bootstrap
- Jquery



# Input search box
=============


## Usage
##### HTML　
demo.html

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
##### SCSS　
demo.scss

      .comp-inputSearchBox {
			.dropdown-menu{
				width: 100%;
				max-height: 256px;
				overflow-y: scroll;
			}
			padding: 0;
			border: none;
			.matchedStr{
				color: #007bff;
			}
	 }
	.inputSearchBox-searchableData {
			list-style: none;
			text-align: left;
			padding: 0;
			li{
				padding: 8px 16px;
				&:hover{
		  				background-color: #007bff;
		  				cursor: pointer;
		  				color: white;
		  				.matchedStr{
								color: white!important;
		 				}
				}
			}
	}
