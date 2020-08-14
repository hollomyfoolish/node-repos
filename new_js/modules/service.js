import Dao from './dao.js';

export const s1 = function(){
    return 's1';
}

export const s2 = function(name){
    let dao = new Dao();
    console.log(dao.name);
    dao.name = 'Foo';
    console.log(dao.name);
    return new Dao(name).getData(name);
}