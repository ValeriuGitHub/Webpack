import $ from 'jquery';
import printMe from './print.js';
import { cube } from './js/math.js';
import './sass/style.scss';

function component() {
  var element = document.createElement('div');
  var button = document.createElement('button');
  var br = document.createElement('br');

  button.innerHTML = 'Click me and look at the console!';
  element.appendChild(br);
  element.appendChild(button);

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
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