import $ from 'jquery';

export function feedback() {
    function validateEmail(email) {
        var EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email) {
            email = email.toLowerCase();
            return email && EMAIL_REGEXP.test(email);
        }
        return false;
    }

    $('body').on('click', '.js-btn-submit', function (e) {
        var emailItem, emailVal, formData, formItem, nameItem, nameVal, phoneItem, phoneVal;
        e.preventDefault();
        emailItem = $(this).parents('form').find('input[name="email"]');
        emailVal = emailItem.val();
        phoneItem = $(this).parents('form').find('input[name="phone"]');
        phoneVal = phoneItem.val();
        nameItem = $(this).parents('form').find('input[name="name"]');
        nameVal = nameItem.val();
        if (validateEmail(emailVal) && nameVal.length > 0 && phoneVal.length > 0) {
            formItem = $(this).parents('form');
            console.log(formItem);
            formData = formItem.serialize();
            $.ajax({
                method: 'POST',
                data: formData,
                url: 'send.php',
                success: function (data) {
                    formItem[0].reset();
                    console.log(formData);
                    $('.contacts__wrapper').hide();
                    $('.contacts__success').fadeIn();
                },
                error: function () {
                    console.log(1);
                }
            });
        }
        if (!(nameVal.length > 0)) {
            nameItem.addClass('is-error');
        }
        if (nameVal.length > 0) {
            nameItem.removeClass('is-error');
        }
        if (!(phoneVal.length > 0)) {
            phoneItem.addClass('is-error');
        }
        if (phoneVal.length > 0) {
            phoneItem.removeClass('is-error');
        }
        if (!validateEmail(emailVal)) {
            emailItem.addClass('is-error');
        }
        if (validateEmail(emailVal)) {
            emailItem.removeClass('is-error');
        }
    });
}

