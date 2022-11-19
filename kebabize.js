// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes:

// the returned string should only contain lowercase letters

function kebabize(str) {
    let result = [];
    
    for(let i = 0; i <= str.length - 1; i++) {
      if(str[i] >= 'A' && str[i] <= 'Z') {
        result.push(' ' + str[i].toLowerCase());
      } else if(str[i] >= '0' && str[i] <= '9') {

      } else {
        result.push(str[i]);
      }
    };

    if(result[0] === '-') {
        result[0] = result[0].replace('-', '');
    }
    return result.join('').split(' ').join('-');
};

