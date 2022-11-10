var opcao = 0;
var pointsCard1 = 0;
var pointsCard2 = 0;
var Card1;
var Card2;

var AtkCard1 = 0;
var HpCard1 = 0;
var SpcCard1 = 0;
var AtkCard2 = 0;
var HpCard2 = 0;
var SpcCard2 = 0;


function Activate() {
	if (opcao >= 2) {
		if (AtkCard1 > AtkCard2) {
			pointsCard1 = pointsCard1 + 1;
		}

		else if (pointsCard2 > pointsCard1) {
			pointsCard2 = pointsCard2 + 1;
		}

		if (HpCard1 > HpCard2) {
			pointsCard2 = pointsCard1 + 1;
		}

		else if (HpCard2 > HpCard1) {
			pointsCard2 = pointsCard2 + 1;
		}

		if ( SpcCard1 > SpcCard2) {
			pointsCard2 = pointsCard2 + 1;
		}

		else if ( SpcCard2 >  SpcCard1) {
			pointsCard2 = pointsCard2 + 1;
		}

		if (pointsCard1 > pointsCard2) {
			alert(Card1 + " 	Winner!");
		}

		else if (pointsCard2 > pointsCard1) {
			alert(Card2 + " Winner!");
		}
	}
}

function chooseSaber() {
	
	opcao = opcao + 1;
	if (opcao == 1) {
		alert('You Choose Saber');
	    var Card1 = "Saber";
		document.getElementById('Card1img').src = "img/SaberAtk2.gif";

		AtkCard1 = 12.000;
        HpCard1 = 15.000;
        SpcCard1 = 70.000;
	}
	else if (opcao == 2) {
		alert('You Choose Saber');
		Card2 = "Saber";
		document.getElementById('Card2img').src = "img/SaberAtk2.gif";

		AtkCard2 = 12.000;
        HpCard2 = 15.000;
        SpcCard2 = 70.000;

	}
	else {
	     alert('You choose the maximum number of cards');
    }

}

function chooseRider() {
	
	opcao = opcao + 1;
	if (opcao == 1) {
		alert('You Choose Rider');
		Card1 = "Rider";
		document.getElementById('Card1img').src = "img/RiderAtk2.gif";

		AtkCard1 = 7.500;
        HpCard1 = 8.000;
        SpcCard1 = 50.000;

	}
	else if (opcao == 2) {
		alert('You Choose Rider');
		Card2 = "Rider";
		document.getElementById('Card2img').src = "img/RiderAtk2.gif";

		AtkCard2 = 7.500;
        HpCard2 = 8.000;
        SpcCard2 = 50.000;

	}
	else {
	     alert('You choose the maximum number of cards');
    }

}

function chooseLancer() {
	
	opcao = opcao + 1;
	if (opcao == 1) {
		alert('You Choose Lancer');
		Card1 = "Lancer";
		document.getElementById('Card1img').src = "img/LancerAtk2.gif";

		AtkCard1 = 9.000;
        HpCard1 = 11.000;
        SpcCard1 = 45.000;

	}
	else if (opcao == 2) {
		alert('You Choose Lancer');
		Card2 = "Lancer";
		document.getElementById('Card2img').src = "img/LancerAtk2.gif";

		AtkCard2 = 9.000;
        HpCard2 = 11.000;
        SpcCard2 = 45.000;

	}
	else {
	     alert('You choose the maximum number of cards');
    }

}

function chooseGilgamesh() {
	
	opcao = opcao + 1;
	if (opcao == 1) {
		alert('You Choose Gilgamesh');
		Card1 = "Gilgamesh";
		document.getElementById('Card1img').src = "img/GilgameshAtk2.gif";

		AtkCard1 = 15.000;
        HpCard1 = 8.000;
        SpcCard1 = 55.000;

	}
	else if (opcao == 2) {
		alert('You Choose Gilgamesh');
		Card2 = "Gilgamesh";
		document.getElementById('Card2img').src = "img/GilgameshAtk2.gif";

		AtkCard2 = 15.000;
        HpCard2 = 8.000;
        SpcCard2 = 55.000;

	}
	else {
	     alert('You choose the maximum number of cards');
    }

}

function chooseCaster() {
	
	opcao = opcao + 1;
	if (opcao == 1) {
		alert('You Choose Caster');
		Card1 = "Caster";
		document.getElementById('Card1img').src = "img/CasterAtk2.gif";
		AtkCard1 = 5.500;
        HpCard1 = 8.900;
        SpcCard1 = 65.000;
	}
	else if (opcao == 2) {
		alert('You Choose Caster');
		Card2 = "Caster";
		document.getElementById('Card2img').src = "img/CasterAtk2.gif";
		AtkCard2 = 5.500;
        HpCard2 = 8.900;
        SpcCard2 = 65.000;
	}
	else {
	     alert('You choose the maximum number of cards');
    }

}

function chooseBerserker() {
	
	opcao = opcao + 1;
	if (opcao == 1) {
		alert('You Choose Berserker');
		var Card1 = "Berserker";
		document.getElementById('Card1img').src = "img/BerserkerAtk2.gif";
		AtkCard1 = 20.000;
        HpCard1 = 10.000;
        SpcCard1 = 50.000;
	}
	else if (opcao == 2) {
		alert('You Choose Berserker');
		Card2 = "Berserker";
		document.getElementById('Card2img').src = "img/BerserkerAtk2.gif";

		AtkCard2 = 20.000;
        HpCard2 = 10.000;
        SpcCard2 = 50.000;

	}
	else {
	     alert('You choose the maximum number of cards');
    }

}

function chooseAssassin() {
	
	opcao = opcao + 1;
	if (opcao == 1) {
		alert('You Choose Assassin');
		Card1 = "Assassin";
		document.getElementById('Card1img').src = "img/AssassinAtk2.gif";
		AtkCard1 = 8.900;
        HpCard1 = 10.500;
        SpcCard1 = 35.000;
	}
	else if (opcao == 2) {
		alert('You Choose Assassin');
	    Card2 = "Assassin";
		document.getElementById('Card2img').src = "img/AssassinAtk2.gif";
		AtkCard1 = 8.900;
        HpCard1 = 10.500;
        SpcCard1 = 35.000;
	}
	else {
	     alert('You choose the maximum number of cards');
    }

}
function chooseArcher() {
	
	opcao = opcao + 1;
	if (opcao == 1) {
		alert('You Choose Archer');
		Card1 = "Archer";
		document.getElementById('Card1img').src = "img/ArcherAtk2.gif";

		AtkCard1 = 9.600;
        HpCard1 = 11.500;
        SpcCard1 = 45.000;

	}
	else if (opcao == 2) {
		alert('You Choose Archer');
		Card2 = "Archer";
		document.getElementById('Card2img').src = "img/ArcherAtk2.gif";
		AtkCard2 = 9.600;
        HpCard2 = 11.500;
        SpcCard2 = 45.000;
	}
	else {
	     alert('You choose the maximum number of cards');
    }

}

	

