function handleCredentialResponse(response) {
  
}
window.onload = function () {
  google.accounts.id.initialize({
    client_id: "618103155660-gn9rfm534rues9fck6q3vntnh2g3vjvv.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", size: "large" }  // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
}