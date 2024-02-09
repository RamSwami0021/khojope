var usernameInput = document.getElementById('usernameInput');
  var newCursorIndex = usernameInput.value.length;
  usernameInput.setSelectionRange(newCursorIndex, newCursorIndex);
  usernameInput.addEventListener('input', function() {
    var newCursorIndex = this.value.length;
    this.setSelectionRange(newCursorIndex, newCursorIndex);
  });

  function claimUrl() {
    $(document).ready(function () {
        $('#statusContainer').hide();
    });
    var username = $('#usernameInput').val();
    var cleanUsername = username.replace('khojope.com/', '');

    $.ajax({
        url: 'https://app.khojorightnow.com/api/v1/api-public/username/' + cleanUsername,
        method: 'GET',
        success: function (response) {
            console.log(response.status);
            if (!response.status) {
                showStatusMessage('error', 'OOPS !! That username is already taken');
                showStatusMessage('success', '');
            } else {
                showStatusMessage('success', 'Yay!🎉 URL available, Claim now!');
                showStatusMessage('error', '');
            }
        },
        error: function (error) {
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

  function redirectToKhojoRightNow() {
    window.location.href = 'https://app.khojorightnow.com/';
  }