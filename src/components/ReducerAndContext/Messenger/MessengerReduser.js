const MessengerReduser = (contacts, {type, payload}) => {

    switch (type) {
        case 'contactSelected' : {
            return contacts.map((contact) => {
                if (contact.id === payload.id) return {...contact, active: !contact.active };
                else return contact;
            })


        }
        case 'messageWritten' : {

        }
        case 'messageSended' : {

        }
        default: {
            throw Error("unknown action: " + type);
        };
    }

}
export default MessengerReduser;