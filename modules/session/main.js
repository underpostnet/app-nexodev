var mod_session = {

  init: function(){

      if(session_state){

        console.log('init user session');


        let txt_ini_button = '';

        if(session_serv){

          txt_ini_button = 'Inicio';

        }else{

          txt_ini_button = 'Servicios';

        }

        prepend('body', `

            <div class='fix topBarSession'>


              <div class='abs topBarC1'>


                <div class='abs center'>

                  <img src='`+path+`/assets/icon/user-log.gif' class='inl topbar-avatar'>
                  <span class='txt-name-session-bar'>`+session_name+`</span>

                </div>


              </div>


              <div class='abs topBarC3'>

                <div class='abs center topBarC3-txt' style='font-weight: bold; font-size: 16px;'>

                  `+txt_ini_button+`

                </div>

              </div>


              <a href='`+path+`/rest/logout.php'><div class='abs topBarC2'>

                <div class='abs center' style='font-weight: bold; font-size: 16px;'>

                  Cerrar Sesión

                </div>

              </div></a>


            </div>

            <div class='fix main-content-session'>

              `+session_info+`

            </div>

        `);

        if(session_serv){

          s('.main-content-session').style.display = 'block';

        }


        s('.topBarC3').onclick = function(){

          if(txt_ini_button=='Inicio'){

            txt_ini_button = 'Servicios';
            fadeOut(s('.main-content-session'));

          }else{

            txt_ini_button = 'Inicio';
            fadeIn(s('.main-content-session'), 'block');

          }

          htmls('.topBarC3-txt', txt_ini_button);

        };

      }else{

        append('body', `

        <form class='in login-content' style='padding: 5%;'>

          <span style='font-size: 24px; font-weight: bold;'>Ingreso Clientes</span>

          <br>

          <br>

          <div class='in login-subcontent'>


          </div>

          <br>

          <div class='in'>

            <div class='fl' style='max-width: 300px;'>

              <div class='in flr error-input error-cap'>

                .

              </div>

            </div>

            <div class='in' style='overflow: hidden;'>

              <div id="test-recaptcha" data-theme='dark'></div>

            </div>

          </div>

          <br>

          <div class='in login-button'>

            Iniciar Sesión

          </div>

        </form>

        `);
        s('.login-button').onclick = function(){

          let email = s('.input-login-email').value.toLowerCase();
          let pass = s('.input-login-pass').value;

          /*

          isCaptchaChecked()

          error-cap
          error-login-email
          error-login-pass

          */

          let send = true;

          /*---------------------------------------------*/
          /*---------------------------------------------*/

          if(email==''){

            send = false;
            s('.error-login-email').style.background = 'red';
            s('.error-login-email').style.color = 'white';
            htmls('.error-login-email', 'error: campo vacio');

          }else{

            s('.error-login-email').style.background = 'none';
            s('.error-login-email').style.color = 'black';
            htmls('.error-login-email', '.');

          }

          /*---------------------------------------------*/
          /*---------------------------------------------*/

          if(pass==''){

            send = false;
            s('.error-login-pass').style.background = 'red';
            s('.error-login-pass').style.color = 'white';
            htmls('.error-login-pass', 'error: campo vacio');

          }else{

            s('.error-login-pass').style.background = 'none';
            s('.error-login-pass').style.color = 'black';
            htmls('.error-login-pass', '.');

          }

          /*---------------------------------------------*/
          /*---------------------------------------------*/

          if(!isCaptchaChecked()){

            send = false;
            s('.error-cap').style.background = 'red';
            s('.error-cap').style.color = 'white';
            htmls('.error-cap', 'error: recaptcha no valido');

          }else{

            s('.error-cap').style.background = 'none';
            s('.error-cap').style.color = 'black';
            htmls('.error-cap', '.');

          }

          /*---------------------------------------------*/
          /*---------------------------------------------*/

          if(send){

            console.log('send');

            postData((path+'/rest/login.php'), {email: email, pass: pass})
              .then(data => {

                console.log(data);

                if(data.state){

                  location.href = 'https://www.nexodev.org/?service=true';

                }else{

                  s('.error-login-email').style.background = 'red';
                  s('.error-login-email').style.color = 'white';
                  htmls('.error-login-email', 'error: email o contraseña no validos');

                }

            });

          }

          /*---------------------------------------------*/
          /*---------------------------------------------*/

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

  }

};
