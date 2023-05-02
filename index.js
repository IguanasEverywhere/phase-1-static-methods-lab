class Formatter {
  //add static methods here
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    let str2 = str.replace(/[^A-Za-z0-9 '-]/gm, '');
    return str2;
  }

  static titleize(str) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let strArray = str.split(' ');
    strArray[0] = strArray[0][0].toUpperCase() + strArray[0].slice(1);
    for (let i = 1; i < strArray.length; i++) {
      if (!exceptions.includes(strArray[i])) {
        strArray[i] = strArray[i][0].toUpperCase() + strArray[i].slice(1);
      }
    }
    return strArray.join(' ');
  }
}