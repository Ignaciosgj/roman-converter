import { roman } from "./roman";
import { isNotAnInteger } from "../../helpers/isNotAnInteger";
import { isBiggerThan } from "../../helpers/isBiggerThan";

const MAX_ROMAN_NUMBER = 4999;
export function romanConverterFunction(number) {
  if (isNotAnInteger(number)) throw new Error("Sólo se aceptan números entre el 1 y el 4999 :(");
  if (isBiggerThan(number, MAX_ROMAN_NUMBER)) throw new Error("El número máximo es 4999 !");
  let output = '', relative;
  for (let i of Object.keys(roman)) {
    relative = Math.floor(number / roman[i]);
    number -= relative * roman[i];
    output += i.repeat(relative);
  }
  return output;
}