class userSchema 
    {
        constructor(eventName, name, key, email, phone, present = false, acces = [], cpf){
        this.eventName = eventName
        this.user = {
            name: name,
            cpf: cpf,
            key: key,
            email: email,
            phone: phone,
            present: present,
            acces: acces,
            }
        }

    }



module.exports = userSchema;