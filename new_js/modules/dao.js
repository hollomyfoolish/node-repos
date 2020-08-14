let idx = 0;
class Dao {
    constructor(){
        this.id = idx++;
        this._name = "noone";
    }
    get name(){
        return `${this._name}-${this.id}`;
    }
    set name(n){
        this._name = n;
    }
    getData(n){
        return `data of ${n}`;
    }
}
export default Dao;