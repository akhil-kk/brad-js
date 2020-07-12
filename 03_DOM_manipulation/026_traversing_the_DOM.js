let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

//Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// 1 -element
// 2 - Attribute
// 3 - text nodeName
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element NodeList
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';
//children o children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// first child
val = list.firstChild;
val = list.firstElementChild;

// last child
val = list.lastChild;
val = list.lastElementChild;

// count child elements
val = list.childElementCount;

//get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// get next sibliing
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// get prev sibling
val = listItem.previousSibling;
val = listItem.previousSibling.previousElementSibling;

console.log(val);