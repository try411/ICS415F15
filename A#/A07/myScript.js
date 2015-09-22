/**
 * Created by Kaelyn on 9/20/2015.
 */
function getClasses(elem){
  var numElem;
  var arrayOfClass = new Array();
  var arrayEntry = new Array();
  var entryString = "";
  var tempString = "";
  var printout = elem + "'s classes: [";
  var classArray = document.getElementById(elem);

  if(classArray == null || classArray.length == 0){
    classArray = document.getElementsByTagName(elem);

    if(classArray == null || classArray.length == 0){
      alert("No class set for " + elem);
    }
    else{
      numElem = classArray.length;

      for(var i = 0; i < numElem; i++){
        arrayOfClass[i]=classArray[i].className;
        arrayEntry = arrayOfClass[i].split(" ");
        entryString = "";
        for(var b = 0; b < arrayEntry.length; b++){
          tempString = "\"";
          tempString = tempString.concat(arrayEntry[b]);
          tempString = tempString.concat("\"");
          if(b < arrayEntry.length-1){
            tempString = tempString.concat(", ");
          }
          entryString = entryString.concat(tempString);
        }

        if(numElem > 1){
          tempString = "[";
          entryString = tempString.concat(entryString);
          entryString = entryString.concat("]");
        }
        if(numElem > 1 && i < numElem-1){
          entryString = entryString.concat(", ");
        }
        printout = printout.concat(entryString);
      }
      printout = printout.concat("]");
      alert(printout);
    }
  }
  else{
    numElem = classArray.length;

    for(var i = 0; i < numElem; i++){
      arrayOfClass[i]=classArray[i].className;
      arrayEntry = arrayOfClass[i].split(" ");
      entryString = "";
      for(var b = 0; b < arrayEntry.length; b++){
        tempString = "\"";
        tempString = tempString.concat(arrayEntry[b]);
        tempString = tempString.concat("\"");
        if(b < arrayEntry.length-1){
          tempString = tempString.concat(", ");
        }
        entryString = entryString.concat(tempString);
      }

      if(numElem > 1){
        tempString = "[";
        entryString = tempString.concat(entryString);
        entryString = entryString.concat("]");
      }
      if(numElem > 1 && i < numElem-1){
        entryString = entryString.concat(", ");
      }
      printout = printout.concat(entryString);
    }
    printout = printout.concat("]");
    alert(printout);
  }
}

function addClass(elem, className){

  var tempString = "";
  var numElem = 0;
  var printout = "";
  var elemSelect = document.getElementById(elem);

  if(elemSelect == null || elemSelect.length == 0){
    elemSelect = document.getElementsByTagName(elem);

    if(elemSelect == null || elemSelect.length == 0){
      alert("No class can be set/added for " + elem);
    }
    else{
      numElem = elemSelect.length;

      for(var i = 0; i < numElem; i++){
        tempString = elemSelect[i].className;
        if(tempString.length == 0){
          tempString = tempString.concat(className);
        }
        else{
          tempString = tempString.concat(" " + className);
        }
        elemSelect[i].className = tempString;
        printout = printout.concat(elem + "'s class has been updated to: " + elemSelect[i].className + "\n");
      }
    }
  }
  else{
    numElem = elemSelect.length;

    for(var i = 0; i < numElem; i++){
      tempString = elemSelect[i].className;
      if(tempString.length == 0){
        tempString = tempString.concat(className);
      }
      else{
        tempString = tempString.concat(" " + className);
      }
      elemSelect[i].className = tempString;
      printout = printout.concat(elem + "'s class has been updated to: " + elemSelect[i].className + "\n");
    }
  }
  alert(printout);
}
