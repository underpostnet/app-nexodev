







/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

s('html').style.color = 'white';
s('body').style.color = 'white';
s('html').style.background = 'black';
s('body').style.background = 'black';

/* notclick('html', 0, false); */
/* notclick('html', 1, false); */
/* notclick('html', 2, false); */

mod_loader.init();
mod_hall.init();
mod_icon.init();
mod_footer.init();

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */


function rr(){

	if( (data.lastW!=s('body').clientWidth) || (data.lastH!=s('body').clientHeight) ){

		data.lastW=s('body').clientWidth;
		data.lastH=s('body').clientHeight;

		if(data.lastH>400&&data.lastW>600){

			data.movil = false;

		}else{

			data.movil = true;

		}

		console.log('movil ->'+data.movil);

		/* -------------------------------------------------------------------------- */
		/* -------------------------------------------------------------------------- */

		setTimeout(function(){

			/* --------------------------------- */
			/* --------------------------------- */

			mod_hall.rr();


			/* --------------------------------- */
			/* --------------------------------- */


			if(data.lastW>1000){

				s('.icon-c1').style.width = '25%';
				s('.icon-c2').style.width = '25%';
				s('.icon-c3').style.width = '25%';
				s('.icon-c4').style.width = '25%';

			}else if(data.lastW>600){

				s('.icon-c1').style.width = '50%';
				s('.icon-c2').style.width = '50%';
				s('.icon-c3').style.width = '51%';
				s('.icon-c4').style.width = '49%';

			}else {

				s('.icon-c1').style.width = '100%';
				s('.icon-c2').style.width = '100%';
				s('.icon-c3').style.width = '100%';
				s('.icon-c4').style.width = '100%';

			}

			/* --------------------------------- */
			/* --------------------------------- */

			if(data.lastW<850){

				s('.sec1-txt-des').style.display = 'none';
				s('.sec2').style.display = 'block';
				s('.sec1').style.height = s('.hall-back').clientHeight+'px';

			}else{

				s('.sec1-txt-des').style.display = 'block';
				s('.sec2').style.display = 'none';
				s('.sec1').style.height = '100%';

			}

			/* --------------------------------- */
			/* --------------------------------- */

		}, 950);

		/* -------------------------------------------------------------------------- */
		/* -------------------------------------------------------------------------- */

	}

}

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

var data = {

	movil: false,
	lastH: null,
	lastW: null

};
rr();
setInterval(function(e){
	rr();
}, 100);



/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */









/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
