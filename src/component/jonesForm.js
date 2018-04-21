import React from 'react';
import {Button, Form, Message, Container} from 'semantic-ui-react';
import {
    isValidName,
    isValidEmailAddress,
    isValidPhone
} from '../utils/validationUtil';
import {normalizeData} from '../utils/dataUtil';
import {postEmail} from '../services/mailService';

class JonesForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);

        this.state = {
            firstName: {
                isValid: true,
                value: ''
            },
            lastName: {
                isValid: true,
                value: ''
            },
            email: {
                isValid: true,
                value: ''
            },
            phone: {
                isValid: true,
                value: ''
            }
        }
    }

    handleInputChange(event) {
        const inputName = event.target.name;
        const value = event.target.value;

        let newState = Object.assign({}, this.state);
        newState[inputName].value = value;
        newState[inputName].isValid = true;

        this.setState({...newState});
    }

    handleFormSubmit() {
        const {firstName, lastName, email, phone} = this.state;
        const firstNameValidation = isValidName(firstName.value);
        const lastNameValidation = isValidName(lastName.value);
        const emailValidation = isValidEmailAddress(email.value);
        const phoneValidation = isValidPhone(phone.value);

        const newState = {
            firstName: {
                isValid: firstNameValidation.isValid,
                value: firstName.value,
                errorMsg: firstNameValidation.errorMsg
            },
            lastName: {
                isValid: lastNameValidation.isValid,
                value: lastName.value,
                errorMsg: lastNameValidation.errorMsg
            },
            email: {
                isValid: emailValidation.isValid,
                value: email.value,
                errorMsg: emailValidation.errorMsg
            },
            phone: {
                isValid: phoneValidation.isValid,
                value: phone.value,
                errorMsg: phoneValidation.errorMsg
            }
        };
        if (firstNameValidation.isValid && lastNameValidation.isValid &&
            emailValidation.isValid && phoneValidation.isValid) {
            const data = normalizeData(this.state);
            postEmail(data);
        }

        this.setState({...newState});
    }

    render() {
        const {firstName, lastName, email, phone} = this.state;

        return (
            <Container>
                <Form error className='jones-form'>
                    <Form.Input onChange={this.handleInputChange}
                                name='firstName'
                                label='First Name'
                                value={firstName.value}/>
                    {!firstName.isValid && <Message
                        error
                        header='Invalid First Name'
                        content={firstName.errorMsg}/>}
                    <Form.Input onChange={this.handleInputChange}
                                name='lastName'
                                label='Last Name'
                                value={lastName.value}/>
                    {!lastName.isValid && <Message
                        error
                        header='Invalid Last Name'
                        content={lastName.errorMsg}/>}
                    <Form.Input onChange={this.handleInputChange}
                                name='email'
                                label='Mail Address'
                                type='email'
                                value={email.value}/>
                    {!email.isValid && <Message
                        error
                        header='Invalid Email Address'
                        content={email.errorMsg}/>}
                    <Form.Input onChange={this.handleInputChange}
                                name='phone'
                                label='Phone Number'
                                value={phone.value}/>
                    {!phone.isValid && <Message
                        error
                        header='Invalid phone number'
                        content={phone.errorMsg}/>}
                    <div className='edit-actions'>
                        <Button type="button" className='inverted-btn' onClick={this.handleFormSubmit}>Submit</Button>
                    </div>
                </Form>
            </Container>
        );
    }
}

export default JonesForm;