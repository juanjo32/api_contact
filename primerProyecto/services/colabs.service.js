const boom = require('@hapi/boom');

class ColabsService{
    constructor(){
        this.colabs =[];
        this.generate();       
    }
    generate(){
        this.colabs.push({
            id: 1,
            name: "Fernando Sanclemente",
            telephone: "3206435575",
            //platform: 1,
        });
    }
    async create(data){
        const newColab={
            id:  this.colabs.length+1,
            ...data
        }
        this.colabs.push(newColab);
        return newColab;
    }
    find(){
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(this.colabs);
            }, 1000);
        })
        
    }
    async findOne(id){
        const index = this.colabs.findIndex(item => item.id === parseInt(id));
        if (index === -1){
            return boom.notFound('Colab not found');
        }
        /*if(user.isBlock){
            return boom.conflict('User is block');
        }*/
        return this.colabs[index];
        
        
    }
    async update(id, changes){
        const index = this.colabs.findIndex(item => item.id === parseInt(id));
        if (index === -1){
            throw boom.notFound('Colab not found');
        }
        const colab = this.colabs[index];
        this.colabs[index] = {
            ...colab,
            ...changes
        };
        return this.colabs[index];
    }
    async delete(id){
        const index = this.colabs.findIndex(item =>item.id === parseInt(id));
        if (index === -1){
            return boom.notFound('User not Found');
        }
        this.colabs.splice(index, 1);
        return { id };
    }
}

module.exports = ColabsService;