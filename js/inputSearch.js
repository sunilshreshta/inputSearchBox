/*
  @autor: Sunil Shrestha
  @descrip: Live search input
  @date: 12/11/2020
  @version: 1
  @require: bootstrap 4, jquery

*/
var inputSearchBox = {
      searchBox : "" ,
      dataArray : "" ,
      init : function(elementID,dataArray){
          if(this.isSearchBox(elementID) && this.isDataValid(dataArray)){
            this.searchBox =  $("#" + elementID) ;
            this.dataArray = dataArray ;
            if(this.alreadyInitialized()){
               return this.updateMatch(this.dataArray);
            }else{
              if(this.prepareSearchBox()){
                this.bindEvents(elementID) ;
                return true;
              }
            }

          }
          return false;
          console.log("Parameters are not valid") ;

      },
      bindEvents: function(elementID){
        parent = this ;
        $(document).on("click",".searchableData-item",function(){
          $("#"+elementID).val($(this).text());
        }) ;
        $(document).on("keyup","#"+elementID,function(){
            parent.searchData($(this).val()) ;
        }) ;

      },
      alreadyInitialized: function(){
            if(this.searchBox.siblings(".comp-inputSearchBoxData").length  > 0){
              return true;
            }
            return false ;
      },
      searchData: function(str){
          var parent = this ;
          var matchedData = [] ;
          str = this.ac_sanitize(str).toLowerCase().trim() ;

          this.dataArray.forEach(function(item){
              var pos = parent.ac_sanitize(item).toLowerCase().trim().indexOf(str) ;
              if( pos > -1){

                item = item.replace(item.substr(pos,str.length),'<strong class="matchedStr">'+item.substr(pos,str.length)+'</strong>');
                matchedData.push(item);
              }
          }) ;
          if(matchedData.length == 0){
            matchedData.push("No results Matched") ;
          }

          this.updateMatch(matchedData) ;

      },
      updateMatch: function(matchedElements){
          var node = this.setSearchableData(matchedElements) ;
          $(".comp-inputSearchBoxData").html(node) ;
          return true;
      },
      prepareSearchBox : function(){
          var searchComponent, searchableData;
          searchableData = this.setSearchableData(this.dataArray) ;
          if(searchableData != false){
              if(!this.searchBox.hasClass("dropdown-toggle")){
                  this.searchBox.addClass("dropdown-toggle") ;
              }
              this.searchBox.attr("data-toggle","dropdown") ;
              searchComponent = '<div class="dropdown form-control comp-inputSearchBox">'
                                 + this.searchBox.get(0).outerHTML +
                                 '<div class="dropdown-menu comp-inputSearchBoxData">'
                                + searchableData +
                                 '</div> \
                                 </div> ' ;

              this.searchBox.replaceWith(searchComponent) ;
              return true;
          }
          return false ;
          console.log("Error data fetch") ;
      },
      isSearchBox: function(elementID){
          if($("#"+ elementID).is("input")){
            return true ;
          }
          return false ;
          console.log("selected element is not input") ;
      },
      isDataValid: function(dataArray){
          if(typeof dataArray == 'object'){
            return true;
          }
          return false ;
          console.log("Given data is not an Array") ;
      },
      setSearchableData: function(dataArray){

          if(dataArray.length <= 0){
            dataArray = ["Data not found"] ;
          }
          var domElement = '<ul class="inputSearchBox-searchableData">' ;
          dataArray.forEach(function(item){
              domElement += '<li class="searchableData-item">'+ item +'</li>' ;
          }) ;
          domElement += "</ul>" ;

          return domElement ;


      },
      ac_sanitize: function(str){
          var map = {
              '-' : ' ',
              '-' : '_',
              'a' : 'á|à|ã|â|À|Á|Ã|Â',
              'e' : 'é|è|ê|É|È|Ê',
              'i' : 'í|ì|î|Í|Ì|Î',
              'o' : 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
              'u' : 'ú|ù|û|ü|Ú|Ù|Û|Ü',
              'c' : 'ç|Ç',
              'n' : 'ñ|Ñ'
          };

          for (var pattern in map) {
              str = str.replace(new RegExp(map[pattern], 'g'), pattern);
          };

          return str;
      },
      destroy: function(elementID){
          var inputField = $("#"+elementID) ;
          inputField.siblings(".comp-inputSearchBoxData").remove();
          inputField.removeClass("dropdown-toggle") ;
          inputField.removeAttr("data-toggle") ;
          inputField.parent().replaceWith(this.searchBox) ;
          return true;
      }

}
