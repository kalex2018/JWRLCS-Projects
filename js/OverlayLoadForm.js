function submitForm() {
    var x = document.getElementById("initialF"); /* Form Element */
    var seriesType = document.getElementById("seriesList");
    var seriesTypeSelected = seriesType.options[seriesType.selectedIndex].text;
    
    var weekType = document.getElementById("weekList");
    var weekTypeSelected = weekType.options[weekType.selectedIndex].text;
    
    var lengthType = document.getElementById("lengthList");
    var lengthTypeSelected = lengthList.options[lengthList.selectedIndex].text;
    
    var headTitle = document.getElementById("topHeaderTitle");
    var bestTitle = document.getElementById("seriesTitle");
    
    headTitle.innerHTML = "Season 4 JWRLCS | " + seriesTypeSelected + " | " + weekTypeSelected;
    
    bestTitle.innerHTML = lengthTypeSelected;
    
    if (x.style.display === "none") {
        x.style.display = "block";
        } else {
        x.style.display = "none";
  }
    

}



