var parkingList = ["Aparcamiento mixto. Serrano I",
                   "Aparcamiento mixto. Serrano II",
                   "Aparcamiento mixto. Serrano III",
                   "Aparcamiento mixto. Sevilla",
                   "Aparcamiento mixto. Velázquez - Ayala",
                   "Aparcamiento mixto. Velázquez - Jorge Juan",
                   "Aparcamiento mixto. Verdaguer y García",
                   "Aparcamiento público disuasorio Estadio Metropolitano Sur ES-02b",
                   "Aparcamiento público. Almagro",
                   "Aparcamiento público. Auditorio Nacional de Música (Príncipe de Vergara)",
                   "Aparcamiento público. Descalzas",
                   "Aparcamiento público. Fernández Shaw",
                   "Aparcamiento público. Glorieta Puerta de Toledo",
                   "Aparcamiento público. Las Cortes",
                   "Aparcamiento público. Luna - Tudescos",
                   "Aparcamiento público. Marqués de Urquijo",
                   "Aparcamiento público. Mostenses",
                   "Aparcamiento público. Museo de la Ciudad",
                   "Aparcamiento público. Olavide",
                   "Aparcamiento público. Plaza de Colón",
                   "Aparcamiento público. Plaza de España",
                   "Aparcamiento público. Plaza del Carmen",
                   "Aparcamiento público. Plaza del Rey",
                   "Aparcamiento público. Santa Ana",
                   "Aparcamiento público. Usera",
                   "Aparcamiento público. Velázquez - Juan Bravo",
                   "Aparcamiento público. Villa de París"
                 ] ;


$(document).ready(function(){
    $("#searchParking").on("click",function(){
      //cargar el componente
      inputSearchBox.init("searchableInput",parkingList) ;
    });
}) ;
