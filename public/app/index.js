
$('#registration-form').off('submit').on('submit', (e) => {
    e.preventDefault();
    process_form('registration-form');
});

$('#login-form').off('submit').on('submit', (e) => {
    e.preventDefault();
    process_form('login-form');
})
$('#reset-login-form').off('submit').on('submit', (e) => {
    e.preventDefault();
    process_form('reset-login-form');
})