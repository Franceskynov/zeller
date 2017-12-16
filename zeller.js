/**
 * 
 * Copyright (c) 2017, Franceskynov.
 * Licensed under the MIT License.
 */

'use strict';

module.exports = function zeller(day, month, year, lang) {

    return congruence(day, month, year, lang);

}

/**
 * Validation for data type
 * 
 * @param {*} thing 
 * @param {*} type 
 */
function validate(thing, type) {

    if (!thing || typeof thing !== type || thing == undefined) {

        return false;
    }

    return true;
}

/**
 * Import the languages
 * 
 */
let langs = require("./langs.json");

/**
 * 
 * @param {int} day 
 * @param {int} month 
 * @param {int} year 
 * @param {string} lang 
 */
function congruence(day, month, year, lang) {

    if (validate(day, "number") && validate(month, "number") && validate(year, "number")) {

        if ((day < 32) && (month < 13) && (year < 10000)) {

            let a = parseInt((14 - month) / 12),
                y = (year - a),
                m = (month + (12 * a) - 2),
                d = parseInt(((day + y + parseInt(y / 4)) - parseInt(y / 100) + parseInt(y / 400) + (31 * m) / 12) % 7);

            switch (lang) {

                case "ca":
                    return langs.catalan[d];
                    break;

                case "en":
                    return langs.english[d];
                    break;

                case "es":
                    return langs.spanish[d];
                    break;
                
                case "fr":
                    return langs.french[d];
                    break;

                default:
                    return langs.english[d];
                    break;
            }
        }

    } else {

        return "I need required parameters !";
    }
}