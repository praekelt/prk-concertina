/**
 * @license MIT, GPL, do whatever you want
 * @requires polyfill: Array.prototype.slice fix {@link https://gist.github.com/brettz9/6093105}
 */

if (!Array.from) {
    Array.from = function(object) {
        return [].slice.call(object);
    };
}
