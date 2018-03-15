
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
const modalJs1 = document.getElementById("modalJs1");
const modalJs2 = document.getElementById("modalJs2");



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
            		<button type ="button" class="btn btn-default " data-dismiss="modal" data-toggle="modal" data-target="#${srcPrec}" >
            			<div class="flecheGauche"> < </div>
           			</button>
                 	<img class="bigPicture" src="Image/img/${src}.jpg" alt="${src}">

                 	<button type="button" class="btn btn-default " data-dismiss="modal" data-toggle="modal" data-target="#${srcSuiv}">
                 		<div class="flecheDroite"> > </div>
                 	</button>
                 </div>
                <div class = descBig>${desc}</div>
            </div>
            <div class= "modal-footer">
                <button type="button" class="btn btn-default tClose" data-dismiss="modal">Close</button>
            </div>
        </div>
     </div>
</div>
`


modalJs1.innerHTML =
	  makeModal('louvre_001', 'The pyramid of the Louvre is a pyramid made of glass and metal, located in the middle of the Napoleon courtyard of the Louvre Museum in Paris.','notre_dame_002','arc_de_triomphe_002')
	+ makeModal('arc_de_triomphe_002', 'The Arc de Triomphe is located in the center of the roundabout of the Place Charles de Gaule.','louvre_001','sacre_coeur_003')
	+ makeModal('sacre_coeur_003','','arc_de_triomphe_002','invalide_001')
	+ makeModal('invalide_001','','sacre_coeur_003','sacre_coeur_002','sacre_coeur_003','tour_eiffel_003')
	+ makeModal('sacre_coeur_002','','invalide_001','tour_eiffel_003')
	+ makeModal('tour_eiffel_003','','sacre_coeur_002','tour_eiffel_001')
	+ makeModal('tour_eiffel_001','','tour_eiffel_003','sacre_coeur_005')
	+ makeModal('sacre_coeur_005','','tour_eiffel_001','invalide_003')
	+ makeModal('invalide_003','','sacre_coeur_005','tour_eiffel_002')
	+ makeModal('tour_eiffel_002','','invalide_003','arc_de_triomphe_003')
	+ makeModal('arc_de_triomphe_003','','tour_eiffel_002','notre_dame_002')
	+ makeModal('notre_dame_002','','arc_de_triomphe_003','louvre_001')


modalJs2.innerHTML =
	  makeModal('bridge-monceau', '','chairs-lux','paris_tree_graveyard')
	+ makeModal('paris_tree_graveyard', '','bridge-monceau','mur_vegetal')
	+ makeModal('mur_vegetal','','paris_tree_graveyard','palace-of-the-luxembourg')
	+ makeModal('palace-of-the-luxembourg','','mur_vegetal','paris-flowers')
	+ makeModal('paris-flowers','','palace-of-the-luxembourg','colonnade-monceau')
	+ makeModal('colonnade-monceau','','paris-flowers','wall-garden')
	+ makeModal('wall-garden','','colonnade-monceau','paris_tree_snow')
	+ makeModal('paris_tree_snow','','wall-garden','paris-jardin_plante')
	+ makeModal('paris-jardin_plante','','paris_tree_snow','paris-sculture-buisson')
	+ makeModal('paris-sculture-buisson','','paris-jardin_plante','paris-tuilerie')
	+ makeModal('paris-tuilerie','','paris-sculture-buisson','chairs-lux')
	+ makeModal('chairs-lux','','paris-tuilerie','bridge-monceau')



 
modalJs3.innerHTML = 
	  makeModal('sculpture_007', 'The pyramid of the Louvre is a pyramid made of glass and metal, located in the middle of the Napoleon courtyard of the Louvre Museum in Paris.','sculpture_205','sculpture_004')
	+ makeModal('sculpture_004', 'The Arc de Triomphe is located in the center of the roundabout of the Place Charles de Gaule.','sculpture_007','sculpture_003')
	+ makeModal('sculpture_003', 'The Arc de Triomphe is located in the center of the roundabout of the Place Charles de Gaule.','sculpture_004','sculpture_006')
	+ makeModal('sculpture_006', 'The Arc de Triomphe is located in the center of the roundabout of the Place Charles de Gaule.','sculpture_003','sculpture_002')
	+ makeModal('sculpture_002', 'The Arc de Triomphe is located in the center of the roundabout of the Place Charles de Gaule.','sculpture_006','sculpture_005')
	+ makeModal('sculpture_005', 'The Arc de Triomphe is located in the center of the roundabout of the Place Charles de Gaule.','sculpture_002','sculpture_207')

	+ makeModal('sculpture_207', 'The pyramid of the Louvre is a pyramid made of glass and metal, located in the middle of the Napoleon courtyard of the Louvre Museum in Paris.','sculpture_005','sculpture_204')
	+ makeModal('sculpture_204', 'The Arc de Triomphe is located in the center of the roundabout of the Place Charles de Gaule.','sculpture_207','sculpture_203')
	+ makeModal('sculpture_203', 'The Arc de Triomphe is located in the center of the roundabout of the Place Charles de Gaule.','sculpture_204','sculpture_206')
	+ makeModal('sculpture_206', 'The Arc de Triomphe is located in the center of the roundabout of the Place Charles de Gaule.','sculpture_203','sculpture_202')
	+ makeModal('sculpture_202', 'The Arc de Triomphe is located in the center of the roundabout of the Place Charles de Gaule.','sculpture_206','sculpture_205')
	+ makeModal('sculpture_205', 'The Arc de Triomphe is located in the center of the roundabout of the Place Charles de Gaule.','sculpture_202','sculpture_001')




	/* suppression de la transition lors du click sur fleche*/


const modals = Array.from(document.getElementsByClassName('modal'))

const disableFade = elem => elem.classList.remove('fade')
const enableFade = elem => elem.classList.add('fade')

const disableAllFadesLater = () =>
	setTimeout(() => modals.forEach(disableFade), 1000)

const enableAllFade = () => 
	modals.forEach(enableFade)

Array.from(document.getElementsByClassName('open-modal'))
	.forEach(btn => btn.addEventListener('click', disableAllFadesLater))

Array.from(document.getElementsByClassName('tClose'))
	.forEach(btn => btn.addEventListener('click', enableAllFade))
