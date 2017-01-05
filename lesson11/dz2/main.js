let friendsFilter;
let content = document.getElementById('result');

// --- VK --- //

new Promise(function(resolve) {
  if (document.readyState == 'complete') {
    resolve();
  } else {
    window.onload = resolve;
  }
}).then(function() {
  return new Promise(function(resolve, reject) {
    VK.init({
      apiId: 5808257
    });

    VK.Auth.login(function(response) {
      if (response.session) {
        resolve(response);
      } else {
        reject(new Error('Не удалось авторизоваться'));
      }
    }, 8);
  });
}).then(function () {
  return new Promise(function(resolve, reject) {
    VK.api('friends.get', {v:"5.60", fields:"first_name, photo, last_name"}, response => {
      if (response.error) {
        reject(new Error(response.error.error_msg));
      } else {

        friendsFilter =  response.response;

        console.log(friendsFilter);

        handelbarsInit(friendsFilter);

        resolve();
      }
    });
  });
})
  .catch(function(e) {
    console.log(`Ошибка: ${e.message}`);
  });

function handelbarsInit(obj) {
  let source   = document.querySelector("#entry-template").innerHTML;
  let template = Handlebars.compile(source);
  content.innerHTML = template(obj);
}