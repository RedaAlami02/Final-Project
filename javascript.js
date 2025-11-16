/*Name this external file gallery.js*/

function upDate(previewPic){
    let div1 = document.getElementById('image');
    div1.style.backgroundImage = `url(${previewPic.src})`; 
    document.getElementById("blabla").innerHTML = previewPic.alt ;
    div1.style.color = "rgb(201, 135, 12)";
    div1.style.height = previewPic.name;
    div1.style.paddingTop = previewPic.id;
	}

function unDo() {
    let div1 = document.getElementById('image');
    div1.style.backgroundImage = "url('/imgs/naruto-shippuden-s-nagato-xyof9cdxfuqsk918.jpg')";
    document.getElementById("blabla").innerHTML = '	Hover over an image below to display here.';
	div1.style.height = "";
    div1.style.paddingTop = "";
    div1.style.color = " rgb(201, 66, 12)";
}

function tabbing(){
    let tabs = document.querySelectorAll("img");
    for ( let i = 0 ; i < tabs.length ; i++ ){
        console.log ("Image number : " + i);
        tabs[i].tabIndex = "0";
    }
}