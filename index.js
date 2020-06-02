const modal = $.modal({
    title: 'My modal',
    closable: true,
    content: `Lorem ipsum dolor sit amet, consectetur!`,
    width: '400px',
    footerButtons: [
        {title: 'ok', type: 'primary', handler(){
            modal.close();
            console.log('primary is clicked')
        }},
        {title: 'cancel', type: 'danger', handler(){
            modal.close();
            console.log('danger is clicked')
        }}
    ]
});


