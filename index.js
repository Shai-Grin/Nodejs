var underscore = require('underscore');

function html(content){
  var htmlCont = underscore.template('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"></head><body><%= content %></body></html>');

  return htmlCont({content: content});
}
function h1(content){
  var headerCont = underscore.template('<h1><%= content %></h1>');
  return headerCont({content: content});
}
function p(content){
  var paraCont = underscore.template('<p><%= content %></p>');
  return paraCont({content: content});
}

function ul(textarray){
  var compiled = underscore.template('<ul><% for (var i =0; i < array.length; i++){%><li><%= array[i] %></li><%}%></ul>'
  );
  return compiled({array: textarray});
}

console.log(ul(['test1','test2','test3']));
module.exports = {
  html: html,
  h1: h1,
  p: p,
  ul: ul
};

