
/**
 * initial_model is a simple JavaScript Object with two keys and no methods.
 * it is used both as the "initial" model when mounting the Todo List App
 * and as the "reset" state when all todos are deleted at once.
 */
var initial_model = {
    todos: [],
    hash:"/#"
}


/* module.exports is required to run the functions using Nodejs for testing */

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        model: initial_model
    }
}

/**
 * `update` transforms the `model` based on the `action`.
 * @param {String} action - the desired action to perform on the model.
 * @param {Object} model - the App's (current) model (or "state").
 * @return {Object} new_model - the transformed model.
 */
function update(action, model) {
    switch (action) {                  // action (String) determines which case
      default:                         // if action unrecognised or undefined,
        return model;                  // return model unmodified
    }    // default? https://softwareengineering.stackexchange.com/a/201786/211301
   }