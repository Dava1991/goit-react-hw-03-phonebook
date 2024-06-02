import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Title } from './Title/Title';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    const newContact = {
      ...data,
      id: nanoid(),
    };
    const { name } = data;
    const { contacts } = this.state;
    // console.log('data :>> ', data);
    const findName = contact =>
      contact.name.toLowerCase() === name.toLowerCase();

    if (contacts.some(findName)) {
      return toast.warn(`${name} is already in contacts.`);
    } else {
      this.setState(prev => prev.contacts.push(newContact));
      // console.log(newContact);
    }
  };
  handleFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  componentDidMount() {
    const testData = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
    let contactsSafe = localStorage.getItem('contactsSafe');
    if (contactsSafe) {
      this.setState({ contacts: JSON.parse(contactsSafe) });
    } else {
      this.setState({ contacts: testData });
    }
  }
  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contactsSafe', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const filtrContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <>
        <ToastContainer autoClose={1500} />
        <Title text="Phonebook" />
        <ContactForm onSubmit={this.formSubmitHandler} />
        <Title text="Contacts" />
        <Filter handleFilter={this.handleFilter} value={this.state.filter} />
        <ContactList
          contacts={filtrContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}
