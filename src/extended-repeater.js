const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
  // return answer;


  function repeater(str, options) {
  
    if (typeof str !== 'string') {  // Проверка является ли str строкой
      str = String(str); 
    }

    if ((typeof addition !== 'string') && (typeof addition !== 'undefined')) { // Проверка является ли дополнительная строка строкой
      options.addition = String(options.addition);
    }
    let answer = [];

    let count; // количество повторений str
    let sep; // разделители между str
    let add; // дополнительная строка, которая добавляется к строке
    let addCount; // количество дополнительных строк (add)
    let addSep; // разделитель между add и str

    options.hasOwnProperty('repeatTimes') ? count = options.repeatTimes : count = 1;
    options.hasOwnProperty('separator') ? sep = options.separator + '' : sep = '+';
    options.hasOwnProperty('addition') ? add = options.addition + '' : add = "";
    options.hasOwnProperty('additionRepeatTimes') ? addCount = options.additionRepeatTimes : addCount = 1;
    options.hasOwnProperty('additionSeparator') ? addSep = options.additionSeparator : addSep = '|';

    // console.log(`separator =` ${sep});
    // console.log(`addition = ${add}`);
    
    let addString = [];

    for (let i = 0; i < addCount; i++) {
      addString.push(add);
    }

    addString = addString.join(addSep);
    // console.log(addString);

    for (let i = 0; i < count; i++) {
      answer.push(str + addString);
    }

    // console.log(answer);
    
    // console.log(answer.join(sep))

    return answer.join(sep);

}


module.exports = {
  repeater
};
