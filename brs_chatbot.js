var div = document.createElement('div');
div.setAttribute('id', 'app');
document.getElementsByTagName('body')[0].appendChild(div);

var script = document.createElement('script');
script.setAttribute('src', './dist/build.js');
document.getElementsByTagName('body')[0].appendChild(script);
