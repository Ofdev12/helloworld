
// récuperation des boutons et des lignes cachées (éléments du DOM)

const bout1Elt = document.getElementById("bout1");
const bout2Elt = document.getElementById("bout2");
const bout3Elt = document.getElementById("bout3");

const ligne1Elt = document.getElementById("ligne1");
const ligne2Elt = document.getElementById("ligne2");
const ligne3Elt = document.getElementById("ligne3");



//ajout d'évenements lors du clic sur images thèmes(bout1, bout2, bout3)

bout1Elt.addEventListener("click", function(e){
	if (ligne1Elt.style.display == 'flex') {
		ligne1Elt.style.display ='none';
	}
	else {
		ligne1Elt.style.display = 'flex';
		ligne2Elt.style.display = 'none';
		ligne3Elt.style.display = 'none';
		console.log("click bouton1");
	}
})

bout2Elt.addEventListener("click", function(e){
	if (ligne2Elt.style.display == 'flex') {
		ligne2Elt.style.display ='none';
	}
	else {
		ligne1Elt.style.display='none';
		ligne2Elt.style.display= 'flex';
		ligne3Elt.style.display= 'none';
		console.log("click bouton2");
	}
})

bout3Elt.addEventListener("click", function(e){
	if (ligne3Elt.style.display == 'flex') {
		ligne3Elt.style.display ='none';
	}
	else {
		ligne1Elt.style.display='none';
		ligne2Elt.style.display= 'none';
		ligne3Elt.style.display= 'flex';
		console.log("click bouton3");
	}

})

/*const makeModal = (src, desc) => `
<div class ="col-xs-12">
    <button type="button" class${src}="btn btn-info btn_lg" data-toggle="modal" data-target="#${src}">
        <img src="img/450px/${src}.jpg" alt ="arc de triomphe" id = "img1">
    </button>
    <img src="img/450px/${src}.jpg" alt ="pyramid louvre")>
</div>

<div id="${src}" class="modal fade" role ="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type ="button" class="close" data-dismiss ="modal">&times;</button>
                 <h4 class="modal-title"> pictures</h4>
            </div>
            <div class="modal-body">
                 <img class="bigPicture" src="img/${src}.jpg" alt="arc de triomphe">
                 <div class = descBig>${desc}</div>
            </div>
            <div class= "modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
     </div>
</div>
`*/

/*fonctions fléchées : syntaxe + plus courte que les expression de fonction 
voir https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es
	([param] [, param]) => {
   		instructions
	}
https://forum.nextinpact.com/topic/173322-script-pour-ouvrir-une-image-en-grand-dans-un-popup/*/
const makeModal = (src, desc) => `
<div id="${src}" class="modal fade" role ="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type ="button" class="close" data-dismiss ="modal">&times;</button>
                 <h4 class="modal-title"> pictures</h4>
            </div>
            <div class="modal-body">
                 <img class="bigPicture" src="Image/img/${src}.jpg" alt="arc de triomphe">
                 <div class = descBig>${desc}</div>
            </div>
            <div class= "modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
     </div>
</div>
`

modalJs1.innerHTML = modalJs1.innerHTML + makeModal('louvre_001', 'le louvre de nuit. oui je travaille beaucoup la nuit !');
modalJs1.innerHTML = modalJs1.innerHTML + makeModal('arc_de_triomphe_002', 'La pyramid du louvre de nuit !!!!!!!!!!!!!!!!!!!');
	


	/*+ makeModal('arc_de_triomphe_xl_002', 'pouet')*/
//créer modal

/*const tabImgRef = []*/
