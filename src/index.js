import './sass/style.scss';
import './sass/main.scss';
import $ from 'Jquery';

function component() {
  var element = document.createElement('div');
  var button = document.createElement('button');
  var br = document.createElement('br');
  var container = document.getElementsByClassName("container")[0];

  button.innerHTML = 'Click me and look at the console!';
  container.appendChild(button);
  $("button").addClass("jquery-works");

  button.onclick = e => import('./print').then(module => {
    var print = module.default;
    print();
  });

  return element;
}

  document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function() {
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  })
}