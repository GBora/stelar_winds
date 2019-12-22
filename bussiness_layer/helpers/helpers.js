const R = require('ramda');

latinizeNumbers = (num) => {
    var latinNum = num;

    switch(num) {
        case 1: latinNum = 'I'; break;
        case 2: latinNum = 'II'; break;
        case 3: latinNum = 'III'; break;
        case 4: latinNum = 'IV'; break;
        case 5: latinNum = 'V'; break;
        case 6: latinNum = 'VI'; break;
        case 7: latinNum = 'VII'; break;
        case 8: latinNum = 'VIII'; break;
        case 9: latinNum = 'IX'; break;
        case 10: latinNum = 'X'; break;
        default: console.warn('latin conversion only defined for 1-10.');
    }


    return latinNum;
}

getDownloadbleJSON = (data) => {
    let galaxyClone = R.clone(data);
    galaxyClone = R.omit(['_id', 'id'], galaxyClone);

    galaxyClone.systems = R.omit(['_id', 'id'], galaxyClone.systems);
    
    const pruneSystem = (value, key) => {
        value = R.omit(['_id', 'id'], value);
    };
    R.forEachObjIndexed(pruneSystem, galaxyClone.systems); 

    let galaxyJSON = JSON.stringify(galaxyClone, null, 4);

    return galaxyJSON;
}

module.exports = {
    latinizeNumbers,
    getDownloadbleJSON
}