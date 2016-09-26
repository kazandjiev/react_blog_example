This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

There is no Undo and Edit functionality added here, only Delete and Show comments.

Several notes:
  * I have taken the "happy path" with this example. I wanted to try to do it without any flux implementation like the good old Redux. 
  * The build could be customized depending on the requirements;
  * The index.js files in components' directories are there for more straightforward imports and predictability;
  * The styles could be handled better [CSS Modules](http://javascriptplayground.com/blog/2016/06/css-modules-webpack-react/);
  * stylelint could be added as well
  * polyfill for fetch could be added so that we use fetch natively in Chrome and Firefox and polyfill it for IE and Safari and some mobile browsers according to [Can I Use](http://caniuse.com/#search=fetch)