import React from 'react';
import PropTypes from 'prop-types';



export default class Formulario extends React.Component{

  render(){

    return(
      <div>
        <form name ="nome" method="POST" action="">

          <label> Nome: </label> <br/>
          <input type="text" name="f_nome" size="40" maxlength="30"/> <br/><br/>

          <label> Senha: </label> <br/>
          <input type="password" name="f_senha" size="40" maxlength="20"/> <br/><br/>

          <label> Qual esporte você pratica? </label> <br/>
          <input type="checkbox" name="f_futebol" value="futebol"/><label>Futebol</label> <br/>
          <input type="checkbox" name="f_volei" value="volei"/><label>Volei</label> <br/>

          <label> Possui veículo? </label> <br/>
          <input type="radio" name="f_radio1" value="s"/><label>Sim</label> <br/>
          <input type="radio" name="f_radio1" value="n"/><label>Nao</label> <br/> <br/>

          <label>Estado:</label><br/>
          <select name="f_estado">
            <option value="-">---</option>
            <option value="MG">Minas Gerais</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="SP">São Paulo</option>
          </select> <br/><br/>

          <textarea name="f_comentario" cols="45" rows="5"></textarea><br/><br/>

          <input type="submit" value="Enviar"/>
          <input type="reset" value="Limpar"/>
          <input type="button" value="Nada"/>
        </form>
      </div>
    );
  }
}
