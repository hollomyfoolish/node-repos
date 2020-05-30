console.log('./spec/**/*.spec.js'.match(/^\/.*/));

require('./unit-test');


describe('my tests', () => {
    let foo;
    let idx = 0;
    beforeEach(() => {
        foo = function(){
            idx++;
            return `foo ${idx}`;
        }
    });
    
    add(() => {
        console.log(foo());
    });
    
    add(() => {
        console.log(foo());
    });

});