module.exports = () => {
    let self = {};

    // objective signature: isAuthenticated(roleService, id)
    self.isAuthenticated = (id) =>{
        return id === 12345;
    };

    return self;
};