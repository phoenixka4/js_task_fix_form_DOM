var e=Array.from(document.querySelectorAll("input"));!function(){var t=!0,r=!1,l=void 0;try{for(var n,a=e[Symbol.iterator]();!(t=(n=a.next()).done);t=!0){var o=n.value,i=o.name.replace(/([A-Z])/g," $1").replace(/^./,function(e){return e.toUpperCase()}),c=document.createElement("label");c.classList.add("field-label"),c.setAttribute("for",o.id),c.textContent=i,o.placeholder=i,o.insertAdjacentElement("beforebegin",c)}}catch(e){r=!0,l=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw l}}}();
//# sourceMappingURL=index.bea12343.js.map
