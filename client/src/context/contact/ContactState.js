import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
    SET_ALERT,
    REMOVE_ALERT
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'John Due',
                email: 'john@example.com',
                phone: '555-555-5555',
                type: 'professional'
            },
            {
                id: 2,
                name: 'Jack Smith',
                email: 'jack@example.com',
                phone: '333-333-3333',
                type: 'professional'
            },
            {
                id: 3,
                name: 'Lili Lauren',
                email: 'lili@example.com',
                phone: '222-222-22222',
                type: 'personal'
            }
        ],
        current: null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contact
    const addContact = contact => {
        contact.id = uuid.v4();
        dispatch({ type: ADD_CONTACT, payload: contact });
    };

    // Delete Contact
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id });
    };

    // Set Current
    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact });
    };

    // Clear Current
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    };

    // Update Contact
    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact });
    };

    // Filter Contacts

    // Clear Filter

    return (
        <ContactContext.Provider value={
            {
                contacts: state.contacts,
                current: state.current,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact
            }
        }>
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactState;