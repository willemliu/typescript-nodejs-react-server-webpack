/**
 * Collection of Mustache helper functions.
 */
import * as fs from 'fs-extra';

/**
 * Load Mustache templates from file.
 * 
 * templateFiles key:value object where value is the path to the template file.
 */
export function loadTemplates(templateFiles: {}) {
    let promises = new Array();
    let templates = {};
    Object.keys(templateFiles).map(function(key, idx) {
        const templateFile = templateFiles[key];
        promises.push(fs.readFile(templateFile, 'utf-8')
        .then((result) => {
            templates[key] = result;
        })
        .catch((error) => {
            if (error) throw error;
        }));
    });
    return Promise.all(promises).then(() => { return templates; });
}
