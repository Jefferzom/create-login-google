function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential)

  fullName.textContent = data.name;
  sub.textContent = data.sub;
  given_name.textContent = data.given_name;
  family_name.textContent = data.family_name;
  email.textContent = data.email;
  email_verified.textContent = data.email_verified ? 'Verificado' : 'Não verificado';
  picture.setAttribute("src", data.picture) = data.picture;
}
window.onload = function () {
  google.accounts.id.initialize({
    client_id: "YOUR_CLIENT_ID",
    callback: handleCredentialResponse,
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"), { 
      theme: "filled_blue", 
      size: "large",
      type: "standard",
      shape: "pill",
      text: "$ {button.text}",
      logo_alignment: "left",
    }  // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
}