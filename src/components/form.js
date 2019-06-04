import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Form extends Component {
  state = {
    category: ''
  }


  handleChangeCategory = (e) => {
    this.setState({
      category: e.target.value
    }, () => { //si hay problemas para realizar la siguiente accion
      // pasarlo a la pagina principal para que haga la consulta
      this.props.consultNews(this.state.category)
    }
  )

  }

  render(){
    return (
      <div className="buscador row">
        <div className="col s12 m8 offset-m2">
          <form>
            <h2>Encuentra noticias por categoria</h2>

            <div className="input-field col s12">
              <select onChange={this.handleChangeCategory}>
                <option value="general">General</option>
                <option value="entertainment">Entertainment</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
