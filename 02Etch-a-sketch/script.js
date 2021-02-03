let pixelNo = 3;
createPixels();
sketchTbl = document.getElementById("sketchTbl");
//console.log(Math.random());

function createPixels(){
    let pixelLightness =[];
    

    for(let i=0; i < pixelNo; i++){
        var tr = document.createElement('tr');
        // pixelLightness.push([0,0]);
        sketchTbl.appendChild(tr);
        pixelLightness[i] = [];


        for(let j=0; j < pixelNo; j++){
            var td = document.createElement('td');
            td.style.backgroundColor = "hsl(0,0,100)";
            sketchTbl.getElementsByTagName("tr")[i].appendChild(td);

            pixelLightness[i][j] = 100;
            //pixelLightness.splice()               

            //working on this vv
            // sketchTbl.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].addEventListener("mouseover", function( event ) {
            //     let h = Math.round(Math.random()*360);
            //     let s = Math.round(Math.random()*100);
            //     let l = pixelLightness[i][j];
            //     // if (pixelLightness[i][j] > 0){
            //     //     pixelLightness[i][j] -= 10;
            //     // }
            //     // console.log(h);
            //     // console.log(s);
            //     // console.log(l);
            //     // console.log(pixelLightness[i][j]);
            //     pixelLightness[i][j] -= 10;

            //     event.target.style.backgroundColor = "hsl(" + h + ", " + s + "%, " + l + "%)";
        //};
            //ADD PARENTHESIS ^^^^^ });
        }
    }
    console.table(pixelLightness);

    document.getElementById("sketchTbl").addEventListener("mouseover",function(e) {
        if(e.target && e.target.nodeName == "TD") {
            let h = Math.round(Math.random()*360);
            let s = Math.round(Math.random()*100);
            let l = 50;

            e.target.style.backgroundColor = "hsl(" + h + ", " + s + "%, " + l  + "%)";

            
            
            // for(let i=0; i < pixelNo; i++){
            //     for(let j=0; j < pixelNo; j++){
            //         pixelLightness[i][j] -= 10;
            //         l = pixelLightness[i][j];
            //     }
            // }


            // if (pixelLightness[i][j] > 0){
            //     pixelLightness[i][j] -= 10;
            // }
            // console.log(h);
            // console.log(s);
            // console.log(l);
            // console.log(pixelLightness[i][j]);
            


            
        };

        //console.table(pixelLightness);
        
        console.log("works");
    });

    

}

document.getElementById("pixelBtn").addEventListener("click", function( event ) {
    pixelNo = prompt("Enter number of pixels in rows and columns with a max of 100.", "");

    while(!(pixelNo <= 100 && pixelNo >= 1)){
        pixelNo = prompt("Important, enter number of pixels in rows and columns with a max of 100.", "");
    }
    
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    removeAllChildNodes(sketchTbl);
    createPixels();
});
