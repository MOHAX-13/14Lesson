showMenu(menu, 100, 10);

function showMenu(element, x, y) {
    let classList = element.classList,
        style = element.style,
        hideClass = 'hide',
        pxUnit = 'px';

    style.left = x + pxUnit;
    style.top = y + pxUnit;

    classList.remove(hideClass);

    element.addEventListener('click', () => {
        classList.add(hideClass);
    }, {once: true})
};

document.addEventListener('contextmenu', function (sm) {
    sm.preventDefault();

    var x = event.pageX,
        y = event.pageY;

    showMenu(menu, x, y);

},);

