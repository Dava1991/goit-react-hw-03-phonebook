import React, { Component } from 'react';
import css from './ContactForm.module.css';
import { Icon } from '../img/Icon';
import { IMaskInput } from 'react-imask';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    // console.log('e :>> ', value);
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className={css.formBox}>
            <label htmlFor="Name" className={css.formLabel}>
              Name
            </label>
            <div className={css.boxInput}>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                // pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                // placeholder="Ivan Bereza"
                required
              />

              <Icon id="user" className={css.iconsInput} />
            </div>

            <label htmlFor="Number" className={css.formLabel}>
              Number
            </label>
            <div className={css.boxInput}>
              {/* <input
                type="tel"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
                pattern="/\+38\(\d{3}\)\d{3}-\d{2}-\d{2}/"
                required
              /> */}
              <IMaskInput
                type="tel"
                name="number"
                mask={'+38 (000) 000-00-00'}
                value={this.state.number}
                onChange={this.handleChange}
                required
              />
              <Icon id="phone" className={css.iconsInput} />
            </div>

            <button type="submit" className={css.btnAddContact}>
              <Icon id="user-plus" className={css.icons} />
              {/* <i className={css.icon} class="icon ion-md-person-add"></i> */}
              Add contact
            </button>
          </div>
          <ion-icon name="search"></ion-icon>
        </form>
      </div>
    );
  }
}