/**
 * Returns a promise that returns after the given
 * time in milliseconds
 * @param  {Number} ms time to wait (milliseconds)
 * @return {Promise}
 */
module.exports = function(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}
