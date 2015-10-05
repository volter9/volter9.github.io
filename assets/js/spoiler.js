/**
 * KISS Spoiler.js
 * 
 * @author volter9
 */

window.addEventListener('DOMContentLoaded', function () {
    var div = document.createElement('div'),
        toggleHTML = '<div class="spoiler-toggle">'
            + '<span class="spoiler-icon">»</span>'
            + '</div>';
    
    /** Turn array-like object into Array */
    var toA = function (arrayLike) {
        return Array.prototype.slice.call(arrayLike);
    };
    
    /** querySelectorAll */
    var $ = function (selector) {
        return toA(document.querySelectorAll(selector));
    };
    
    /** Add event listener on DOM node */
    var on = function (node, event, listener) {
        node.addEventListener(event, listener);
    };
    
    /** Create DOM node from html */
    var domNode = function (html) {
        div.innerHTML = html;
        
        return div.firstElementChild;
    };
    
    $('.spoiler').forEach(function (node) {
        var check = domNode(toggleHTML);
        
        on(check, 'click', function () {
            var state = this.classList.contains('spoiler-open');
            
            console.log(state);
            
            this.classList.toggle('spoiler-open', !state);
            node.classList.toggle('spoiler-open', !state);
        });
        
        node.appendChild(check);
        node.classList.add('spoiler-close');
    });
});