const mainBlock = document.getElementById("main");
const newContainer = document.createElement("div");
const myBtn = document.getElementById("myBtn");
const setBtn = document.getElementById("setBtn");

newContainer.setAttribute("id","main-container");
newContainer.style.cssText = "display: grid; grid-gap: 1px; width: 600px; height:600px;";
mainBlock.appendChild(newContainer);

function imgSize(size){
    
    var gridCont = [];
    var k=0;

    newContainer.innerText = "";

    for(i=1;i<=size;i++){
        for(j=1;j<=size;j++){
            gridCont[k] = document.createElement("div");
            gridCont[k].innerText = "";
            gridCont[k].style.backgroundColor = "red";
    
            gridCont[k].style.gridColumn = i.toString() + "/" + (i+1).toString();
            gridCont[k].style.gridRow = j.toString() + "/" + (j+1).toString();
    
            newContainer.appendChild(gridCont[k]);
    
            k++;
        }
    }
    return gridCont;
}

setBtn.addEventListener("click", function(){
    var sizeOfImg = document.getElementById("sizeSq").value;

    if(sizeOfImg > 0 && sizeOfImg <= 100){
        imgSize(sizeOfImg);
        
        var myPixels = imgSize(sizeOfImg); 
    
        myPixels.forEach(element => {
            element.addEventListener("mouseover", function () {
                this.style.filter += "brightness(80%)";
            });
        });
    }
    else{
        window.alert("Invalid input. Size must be between 1 and 100.")
    }
});