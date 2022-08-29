const boom = require('@hapi/boom');

class UsersService{
    constructor(){
        this.users =[];
        this.generate();       
    }
    generate(){
        this.users.push({
            id: 1,
            name: "Andres Rodriguez",
            telephone: "3147196905",
            platform: 1,
        });
    }
    async create(data){
        const newUser={
            id:  this.users.length+1,
            ...data
        }
        this.users.push(newUser);
        return newUser;
    }
    find(){
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(this.users);
            }, 1000);
        })
        
    }
    async findOne(id){
        const index = this.users.findIndex(item => item.id === parseInt(id));
        if (index === -1){
            return boom.notFound('User not found');
        }
        /*if(user.isBlock){
            return boom.conflict('User is block');
        }*/
        return this.users[index];
        
        
    }
    async update(id, changes){
        const index = this.users.findIndex(item => item.id === parseInt(id));
        if (index === -1){
            throw boom.notFound('User not found');
        }
        const user = this.users[index];
        this.users[index] = {
            ...user,
            ...changes
        };
        return this.users[index];
    }
    async delete(id){
        const index = this.users.findIndex(item =>item.id === parseInt(id));
        if (index === -1){
            return boom.notFound('User not Found');
        }
        this.users.splice(index, 1);
        return { id };
    }
}

module.exports = UsersService;