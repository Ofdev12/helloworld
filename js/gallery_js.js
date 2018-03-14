
// récuperation des boutons et des lignes cachées (éléments du DOM)

const bout1Elt = document.getElementById("bout1");
const bout2Elt = document.getElementById("bout2");
const bout3Elt = document.getElementById("bout3");
const bout4Elt = document.getElementById("bout4");
const bout5Elt = document.getElementById("bout5");
const bout6Elt = document.getElementById("bout6");

const ligne1Elt = document.getElementById("ligne1");
const ligne2Elt = document.getElementById("ligne2");
const ligne3Elt = document.getElementById("ligne3");
const ligne4Elt = document.getElementById("ligne4");
const ligne5Elt = document.getElementById("ligne5");
const ligne6Elt = document.getElementById("ligne6");



//ajout d'évenements lors du clic sur images thèmes(bout1, bout2, bout3)

bout1Elt.addEventListener("click", function(e){
	if (ligne1Elt.style.display == 'flex') {
		ligne1Elt.style.display ='none';
	}
	else {
		ligne1Elt.style.display = 'flex';
		ligne2Elt.style.display = 'none';
		ligne3Elt.style.display = 'none';
		ligne4Elt.style.display = 'none';
		ligne5Elt.style.display = 'none';
		ligne6Elt.style.display = 'none';

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
		ligne4Elt.style.display = 'none';
		ligne5Elt.style.display = 'none';
		ligne6Elt.style.display = 'none';
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
		ligne4Elt.style.display = 'none';
		ligne5Elt.style.display = 'none';
		ligne6Elt.style.display = 'none';
		console.log("click bouton3");
	}

})

bout4Elt.addEventListener("click", function(e){
	if (ligne4Elt.style.display == 'flex') {
		ligne4Elt.style.display ='none';
	}
	else {
		ligne1Elt.style.display='none';
		ligne2Elt.style.display= 'none';
		ligne3Elt.style.display= 'none';
		ligne4Elt.style.display = 'flex';
		ligne5Elt.style.display = 'none';
		ligne6Elt.style.display = 'none';
		console.log("click bouton3");
	}

})
bout5Elt.addEventListener("click", function(e){
	if (ligne5Elt.style.display == 'flex') {
		ligne5Elt.style.display ='none';
	}
	else {
		ligne1Elt.style.display='none';
		ligne2Elt.style.display= 'none';
		ligne3Elt.style.display= 'none';
		ligne4Elt.style.display = 'none';
		ligne5Elt.style.display = 'flex';
		ligne6Elt.style.display = 'none';
		console.log("click bouton5");
	}

})

bout6Elt.addEventListener("click", function(e){
	if (ligne6Elt.style.display == 'flex') {
		ligne6Elt.style.display ='none';
	}
	else {
		ligne1Elt.style.display='none';
		ligne2Elt.style.display= 'none';
		ligne3Elt.style.display= 'none';
		ligne4Elt.style.display = 'none';
		ligne5Elt.style.display = 'none';
		ligne6Elt.style.display = 'flex';
		console.log("click bouton6");
	}

})


/*fonctions fléchées : syntaxe + plus courte que les expression de fonction 
voir https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es
	([param] [, param]) => {instructions}
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Litt%C3%A9raux_gabarits*/

const makeModal = (src, desc,srcPrec,srcSuiv) => `
<div id="${src}" class="modal fade" role ="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type ="button" class="close" data-dismiss ="modal">&times;</button>
                 <h4 class="modal-title"> slideshow</h4>
            </div>
            <div class="modal-body">
                 <div class= imageContent>
            		<button type ="button" class="btn btn-default" data-dismiss="modal" data-toggle="modal" data-target="#${srcPrec}" >
            			<div class="flecheGauche"> < </div>
           			</button>
                 	<img class="bigPicture" src="Image/img/${src}.jpg" alt="${src}">

                 	<button type="button" class="btn btn-default" data-dismiss="modal" data-toggle="modal" data-target="#${srcSuiv}">
                 		<div class="flecheDroite"> > </div>
                 	</button>
                 </div>
                <div class = descBig>${desc}</div>
            </div>
            <div class= "modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
     </div>
</div>
`

modalJs1.innerHTML = modalJs1.innerHTML + makeModal('louvre_001', 'The pyramid of the Louvre is a pyramid made of glass and metal, located in the middle of the Napoleon courtyard of the Louvre Museum in Paris.','notre_dame_002','arc_de_triomphe_002');
modalJs1.innerHTML = modalJs1.innerHTML + makeModal('arc_de_triomphe_002', 'The Arc de Triomphe is located in the center of the roundabout of the Place Charles de Gaule.','louvre_001','sacre_coeur_003');
modalJs1.innerHTML = modalJs1.innerHTML + makeModal('sacre_coeur_003','','arc_de_triomphe_002','invalide_001');
modalJs1.innerHTML = modalJs1.innerHTML + makeModal('invalide_001','','sacre_coeur_003','sacre_coeur_002','sacre_coeur_003','tour_eiffel_003');
modalJs1.innerHTML = modalJs1.innerHTML + makeModal('sacre_coeur_002','','invalide_001','tour_eiffel_003');
modalJs1.innerHTML = modalJs1.innerHTML + makeModal('tour_eiffel_003','','sacre_coeur_002','tour_eiffel_001');
modalJs1.innerHTML = modalJs1.innerHTML + makeModal('tour_eiffel_001','','tour_eiffel_003','sacre_coeur_005');
modalJs1.innerHTML = modalJs1.innerHTML + makeModal('sacre_coeur_005','','tour_eiffel_001','invalide_003');
modalJs1.innerHTML = modalJs1.innerHTML + makeModal('invalide_003','','sacre_coeur_005','tour_eiffel_002');
modalJs1.innerHTML = modalJs1.innerHTML + makeModal('tour_eiffel_002','','invalide_003','arc_de_triomphe_003');
modalJs1.innerHTML = modalJs1.innerHTML + makeModal('arc_de_triomphe_003','','tour_eiffel_002','notre_dame_002');
modalJs1.innerHTML = modalJs1.innerHTML + makeModal('notre_dame_002','','arc_de_triomphe_003','louvre_001');
