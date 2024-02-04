function claimUrl() {
    $(document).ready(function() {
        $('#statusContainer').hide();
    });
     var username = $('#usernameInput').val();
     $.ajax({
         url: 'https://app.khojorightnow.com/api/v1/api-public/username/' + username,
         method: 'GET',
         success: function(response) {
             console.log(response.status);
             if (!response.status) {
                 showStatusMessage('error', 'That username is already taken');
                 showStatusMessage('success', '');
             } else {
                 showStatusMessage('success', 'Yay!🎉 URL available, Claim now!');
                 showStatusMessage('error', '');
             }
         },
         error: function(error) {
             console.error('API request failed:', error);
             showStatusMessage('error', 'Claim failed. Please try again.');
             showStatusMessage('success', '');
         }
     });
 }

 function showStatusMessage(type, message) {
     $('#statusContainer').show();
     var statusElement = $('#statusContainer h6.' + type);
     statusElement.text(message);
 }