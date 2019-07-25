const authService = require('./authService');

module.exports = () => {
    let self = {};
    let service = authService();

    self.someAction = () =>{
        if (service.isAuthenticated(555)){
            console.log('User 555 is authenticated');
        }
        else {
            console.log('User is not authenticated');
        }
    };

    return self;
};