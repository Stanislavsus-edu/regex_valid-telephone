export default class Validator {
  static validatetelephonenumber(number){
    let new_number = number.replace(/^(8\s)/g, '7');
    return `+${new_number.replace(/[^\d]/g,'')}`;
  }
} 