import React, {Component} from 'react';
import { connect } from 'react-redux';
import {clothChanger, editClick, valueChanger} from "../store";

class ClothBasket extends Component {

  editItem = (id) => {
    this.props.editClick(id);
  };

  editValue = (event) => {
    const valueOnChange = event.target.value.match(/[\w]+\W{0,2}/ig);

    this.props.valueChanger(valueOnChange ? valueOnChange.join('') : '');
  };

  submitChange = (event, id) => {

    if (event.key === "Enter") {
      this.props.clothChanger(id)
    }
  };

  render() {
    const { clothList, currentId, editValue } = this.props;

    return (
      <ul>
        {clothList.map(({id, name}) => (
          <li key={id} >
          {id === currentId ?
            <input
              type='text'
              value={editValue}
              onChange={this.editValue}
              onKeyDown={(event) => this.submitChange(event, id)}
            /> : (
            <>
              {name}
              <button onClick={() => this.editItem(id)}>EDIT</button>
            </>
          )}
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
    clothList: state.clothList,
    currentId: state.currentId,
    editValue: state.editValue,
});

const mapDispatchToProps = (dispatch) => ({
  editClick: id => dispatch(editClick(id)),
  valueChanger: value => dispatch(valueChanger(value)),
  clothChanger: id => dispatch(clothChanger(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ClothBasket);



