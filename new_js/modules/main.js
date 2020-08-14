import {s1, s2} from './service.js';

export const getData = function(name){
    return s2(name);
}

export const echo = function(){
    return s1();
}