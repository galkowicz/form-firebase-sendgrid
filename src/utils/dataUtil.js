export const normalizeData = (data) => {
    return {
        'personalizations': [
            {
                'to': [
                    {
                        'email': data.email.value
                    }
                ],
                'subject': 'Hello, World!'
            }
        ],
        'from': {
            'email': 'galkowicz@yahoo.com'
        },
        'content': [
            {
                firstName: data.firstName.value,
                lastName: data.lastName.value,
                mailAddress: data.email.value,
                phoneNumber: data.phone.value
            }
        ]
    }
};