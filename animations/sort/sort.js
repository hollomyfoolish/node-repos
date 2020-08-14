function bubble(data, snapshot){
    if(!Array.isArray(data)){
        throw new Error('Only Array is acceptable');
    }
    snapshot && snapshot(data.map(x => x));
    for(let i = data.length - 1; i >= 0; i--){
        for(let j = data.length - 1; j > data.length - i - 1; j--){
            if(data[j] < data[j - 1]){
                [data[j], data[j - 1]] = [data[j - 1], data[j]];
                snapshot && snapshot(data.map(x => x));
            }
        }
    }
}

function quick(data, snapshot){
    snapshot(data.map(x => x));
    innerQuick(data, snapshot, 0, data.length - 1);
}

function innerQuick(data, snapshot, start, end){
    if(start >= end){
        return;
    }
    let oriStart = start;
    let oriEnd = end;
    let f = data[start];
    let e2s = true;
    while(start < end){
        if(e2s){
            if(data[end] >= f){
                end--;
            }else{
                [data[start], data[end]] = [data[end], data[start]];
                snapshot(data.map(x => x));
                start++;
                e2s = false;
            }
        }else{
            if(data[start] <= f){
                start++;
            }else{
                [data[start], data[end]] = [data[end], data[start]];
                snapshot(data.map(x => x));
                end--;
                e2s = true;
            }
        }
    }
    innerQuick(data, snapshot, oriStart, start - 1);
    innerQuick(data, snapshot, start + 1, oriEnd);
}

function insert(data, snapshot){
    for(let i = 0; i < data.length; i++){
        let min = data[i];
        let pos = i;
        for(let j = i + 1; j < data.length; j++){
            if(data[j] < min){
                min = data[j];
                pos = j;
            }
        }
        if(pos != i){
            [data[i], data[pos]] = [data[pos], data[i]];
            snapshot(data.map(x => x));
        }
    }
}

const algorithms = {
    bubble: bubble,
    quick: quick,
    insert: insert
};

function generateData(size){
    let data = [];
    for(let i = 0; i < size; i++){
        data.push(Math.ceil(Math.random() * 100));
    }
    return data;
}

function getSnapshot(size, method){
    let data = generateData(size || 10);
    let snapshots = [];
    algorithms[method](data, s => snapshots.push(s));
    return snapshots;
}

function showAnimation(snapshots, draw, done, speed){
    let drawWrapper = function(idx){
        if(idx < snapshots.length){
            draw(snapshots[idx]);
            setTimeout(() => drawWrapper(idx + 1), speed || 1000);
        }else{
            done && done();
        }
    };
    drawWrapper(0);
}

function showAnimationStepByStep(snapshots, draw, done){
    let idx = 0;
    return function(){
        if(idx < snapshots.length){
            draw(snapshots[idx]);
            idx++;
        }else{
            done && done();
        }
    };
}

function Sorter(){
    if(!(this instanceof Sorter)){
        return new Sorter();
    }
    this._method = 'bubble';
    this._speed = 250;
    this._size = 10;
    this._stepByStep = false;
}
Sorter.prototype.bubble = function(){
    this._method = 'bubble';
    return this;
};
Sorter.prototype.quick = function(){
    this._method = 'quick';
    return this;
};
Sorter.prototype.insert = function(){
    this._method = 'insert';
    return this;
};
Sorter.prototype.dataSize = function(size){
    this._size = size;
    return this;
};
Sorter.prototype.drawwer = function(drawwer){
    this._drawwer = drawwer;
    return this;
};
Sorter.prototype.speed = function(speed){
    this._speed = speed;
    return this;
};
Sorter.prototype.stepByStep = function(){
    this._stepByStep = true;
    return this;
};
Sorter.prototype.animate = function(done){
    let snapshots = getSnapshot(this._size, this._method);
    if(this._stepByStep){
        return showAnimationStepByStep(snapshots, this._drawwer, done);
    }else{
        showAnimation(snapshots, this._drawwer, done, this._speed);
    }
};