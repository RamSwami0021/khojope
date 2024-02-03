function claimUrl() {
    var username = $('#usernameInput').val();
    $.ajax({
        url: 'https://app.khojorightnow.com/api/v1/api-public/username/' + username,
        method: 'GET',
        success: function (response) {
            console.log(response);
            if (response.success) {
                showStatusMessage('error', 'That username is already taken');
            } else {
                showStatusMessage('success', 'Yay!🎉 URL available, Claim now!');
            }
        },
        error: function (error) {
            console.error('API request failed:', error);
            showStatusMessage('error', 'Claim failed. Please try again.');
        }
    });
}

function showStatusMessage(type, message) {
    $('#statusContainer').show();

    var statusElement = $('#statusContainer h6.' + type);
    statusElement.text(message);
}
