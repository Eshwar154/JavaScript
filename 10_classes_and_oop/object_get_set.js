const User ={
    _email:'h@hc.com',
    _password:"abc",      // _email in it _ define as private property


    get email(){
         return  this._email.toUpperCase()
    },

    set email(value){
            this._email =value
    }
}

const tea = Object.create(User)  //by using factory function making object reference user
console.log(tea.email)