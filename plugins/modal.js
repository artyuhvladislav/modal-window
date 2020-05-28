function _createModal(options) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay">
        <div class="modal-window">
            <div class="modal-header">
                <span class="modal-title">Modal title</span>
                <span class="modal-close">&times;</span>
            </div>
            <div class="modal-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet maxime distinctio possimus!
                    Accusantium fugiat reiciendis libero consequatur impedit doloribus nulla dicta minima, ipsum et
                    odit quis distinctio quo rem similique!</p>
            </div>
            <div class="modal-footer">
                <button>ok</button>
                <button>cancel</button>
            </div>
        </div>
    </div>
    `);
    document.body.append(modal);
    return modal;
}
$.modal = function (options) {
    const $modal = _createModal();
    return {
        open() { },
        close() { },
        destroy() { }
    }
}