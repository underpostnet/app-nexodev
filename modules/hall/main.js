var mod_hall = {

	init: function(){

		append('body', `

			<div class='in hall'>

				<img class='abs background-gif' src='`+path+`/assets/background_gif.gif'>

				<div class='abs main-hall'>

					<br>

					<div class='in txt-logo'>

						<img class='inl img-logo' src='`+path+`/assets/nexodev-white-t.png'>

						<span class='txt-logo-bold'>nexo</span>

						dev.org

						<br>

						<span class='in txt-bajada-logo'>VIRTUAL HOST</span>

					</div>

					<div class='in txt-bajada'>

						Alta Tecnologia al alcance de tus Proyectos.

					</div>

				</div>



			</div>

		`);

	},
	rr: function(data){


		let estandar_css = 400;

    s('.img-logo').style.width = (((data.lastW*60)/estandar_css)+'px');
		s('.img-logo').style.top = (((data.lastW*15)/estandar_css)+'px');
		s('.img-logo').style.left = (((data.lastW*8)/estandar_css)+'px');

		s('.txt-logo').style.fontSize = (((data.lastW*30)/estandar_css)+'px');
		s('.txt-logo-bold').style.fontSize = (((data.lastW*50)/estandar_css)+'px');
		s('.txt-bajada').style.fontSize = (((data.lastW*15)/estandar_css)+'px');
		s('.txt-bajada').style.top = ('-'+((data.lastW*22)/estandar_css)+'px');
		s('.txt-bajada-logo').style.fontSize = (((data.lastW*15)/estandar_css)+'px');


		if(data.movil){

			s('.hall').style.height = '30%';

		}else{

			s('.hall').style.height = '100%';

		}


	}

};

















/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */















/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
