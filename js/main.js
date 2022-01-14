var elwayForm = document.querySelector(`.way__form`);
var elwayInput = elwayForm.querySelector(`.way__input`);
var elresultMan = document.querySelector(`.man`);
var elresultBike = document.querySelector(`.bike`);
var elresultCar = document.querySelector(`.car`);
var elresultAirplane = document.querySelector(`.airplane`);

var speedMan = 3.6;
var speedBike = 20.1;
var speedCar = 70;
var speedAirplane = 800;

elwayForm.addEventListener('submit', function (evt) {
	evt.preventDefault();

	var speedIncluded = Number(elwayInput.value.trim());

    function distance (speed){

        var hour = Math.floor(speedIncluded / speed);

        var minute = Math.floor(((speedIncluded / speed - hour)*60));

        var second = Math.floor((((speedIncluded / speed - hour)*60)-minute)*60);

        return hour + ' soat ' + minute + ' minut ' + second + ' sekund';
    }

	elresultMan.textContent = distance(speedMan);
	elresultBike.textContent = distance(speedBike);
	elresultCar.textContent = distance(speedCar);
	elresultAirplane.textContent = distance(speedAirplane);
});

