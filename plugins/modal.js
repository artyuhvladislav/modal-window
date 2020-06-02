function _createModal(options) {
    const DEFAULT_WIDTH = '600px';
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay" data-close="true">
        <div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH}">
            <div class="modal-header">
                <span class="modal-title">${options.title}</span>
                ${ (options.closable) ? '<span class="modal-close" data-close="true">&times;</span>' : ''}
            </div>
            <div class="modal-body" data-content>
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
    let destroyed = false;
    const modal = {
        open() {
            if(destroyed) {
                return
            }
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
        }
    }

    const closingListener = e => {
        if (e.target.dataset.close) {
            modal.close();
        }
    }

    $modal.addEventListener('click', closingListener);

    return Object.assign(modal, {
        destroy() {
            $modal.parentNode.removeChild($modal);
            $modal.removeEventListener('click', closingListener);
            destroyed = true;
        },
        setContent(html) {
            document.querySelector('[data-content]').innerHTML = html;
        }
    })
}