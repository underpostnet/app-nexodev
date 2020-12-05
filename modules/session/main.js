var mod_session = {

  init: function(){

      append('body', `

      <form class='in login-content' style='padding: 5%;'>

        <span style='font-size: 24px; font-weight: bold;'>Ingreso Clientes</span>

        <br>

        <br>

        <div class='in login-subcontent'>


        </div>

        <br>

        <div class='in' style='overflow: hidden;'>

          <div id="test-recaptcha" data-theme='dark'></div>

        </div>

        <br>

        <div class='in login-button'>

          Iniciar Sesión

        </div>

      </form>

      `);
      s('.login-button').onclick = function(){

        let email = s('.input-login-email').value;
        let pass = s('.input-login-pass').value;

        postData((path+'/rest/login.php'), {email: email, pass: pass})
          .then(data => {
            console.log(data);
        });

      };

      let din_1 = {

        label: 'email',
        class: 'login-email',
        type: 'email',
        img: 'mail-log.gif'

      };

      let din_2 = {

        label: 'contraseña',
        class: 'login-pass',
        type: 'password',
        img: 'pass-log.gif'

      };

      function addInput(din){

          append('.login-subcontent', `

            <div class='in input-content'>

                <div class='fl'><div class='in flr error-input error-`+din.class+`'>

                  .

                </div></div>

                <div class='fl' style='border: 2px solid white;'>

                      <div class='in fll' style='width: 15%; height: 30px;'>

                          <img class='abs center' style='width: 20px;' src='`+path+`/assets/icon/`+din.img+`'>

                      </div>

                      <div class='in fll' style='width: 85%; height: 30px;'>

                          <input

                          type='`+din.type+`'
                          class='abs center input-session input-`+din.class+`'
                          style='height: 85%; width: 95%; text-align: left; background: none; color: white;'
                          spellcheck='false'
                          autocomplete='new-password'
                          placeholder=' `+din.label+`'
                          value=''

                          />

                      </div>

                </div>

            </div>

            <br>

          `);

      };


      addInput(din_1);
      addInput(din_2);

  }

};
