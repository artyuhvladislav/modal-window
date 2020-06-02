function _createModal(options) {
    const DEFAULT_WIDTH = '600px';
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay">
        <div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH}">
            <div class="modal-header">
                <span class="modal-title">${options.title}</span>
                ${ (options.closable) ? '<span class="modal-close">&times;</span>' : ''}
            </div>
            <div class="modal-body">
                <p>${options.content || 'window'}</p>
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
    const $modal = _createModal(options);
    const ANIMATION_SPEED = 200;
    let closing = false;
    return {
        $modal,
        open() {
            !closing && $modal.classList.add('open');
        },
        close() {
            closing = true;
            $modal.classList.remove('open');
            $modal.classList.add('hide');
            setTimeout(() => {
                closing = false
                $modal.classList.remove('hide')
            }, ANIMATION_SPEED);
        },
        destroy() { }
    }
}