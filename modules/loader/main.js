var mod_loader = {

	init: function(){

		append('body', `

		<loader class='fix'>

				<img class='abs center img-load' src='`+path+`/assets/loading2.gif'>

		</loder>

		`);


		setTimeout(function(){

			fadeOut(s('loader'));

		}, 1000);


	}

};
