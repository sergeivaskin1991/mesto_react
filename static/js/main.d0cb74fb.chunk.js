(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n.n(c),s=n(6),r=n.n(s),i=(n(14),n(8)),u=n(2),l=n.p+"static/media/logo.812fc7b5.svg";var p=function(){return Object(a.jsx)("div",{className:"header root__section",children:Object(a.jsx)("img",{src:l,alt:"mesto logo",className:"logo"})})};var d=function(){var e=new Date;return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsxs)("p",{className:"footer__copyright",children:[e.getFullYear()," Mesto by Sergei Vaskin"]})})},_=o.a.createContext();var j=function(e){var t=e.card,n=o.a.useContext(_),c=t.owner._id===n._id,s="place-card__delete-icon ".concat(c?"place-card__delete-icon_visible":""),r=t.likes.some((function(e){return e._id===n._id})),i="place-card__like-icon ".concat(r?"place-card__like-icon_liked":"");return Object(a.jsxs)("div",{className:"place-card",children:[Object(a.jsx)("div",{className:"place-card__image",style:{backgroundImage:"url(".concat(t.link,")")},onClick:function(){e.onCardClick(t.link,t.name)}}),Object(a.jsx)("button",{onClick:function(){e.onCardDelete(e.card)},className:"".concat(s),type:"button"}),Object(a.jsxs)("div",{className:"place-card__description",children:[Object(a.jsx)("h3",{className:"place-card__name",children:t.name}),Object(a.jsxs)("div",{className:"place-card__like-container",children:[Object(a.jsx)("button",{className:"".concat(i),onClick:function(){e.onCardLike(t)}}),Object(a.jsx)("div",{className:"place-card__like-counter",children:t.likes.length})]})]})]},t._id)};var b=function(e){var t=o.a.useContext(_);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"profile root__section",children:Object(a.jsxs)("div",{className:"user-info",children:[Object(a.jsx)("div",{className:"user-info__photo",onClick:e.onEditAvatar,style:{backgroundImage:"url(".concat(t.avatar,")")}}),Object(a.jsxs)("div",{className:"user-info__data",children:[Object(a.jsx)("h1",{className:"user-info__name",children:t.name}),Object(a.jsx)("p",{className:"user-info__job",children:t.about}),Object(a.jsx)("button",{className:"user-info__edit",onClick:e.onEditProfile,children:"Edit"})]}),Object(a.jsx)("button",{className:"button user-info__button",onClick:e.onAddPlace,children:"+"})]})}),Object(a.jsx)("div",{className:"places-list root__section",children:e.cards.slice(0,50).map((function(t){return Object(a.jsx)(j,{card:t,onCardDelete:e.onCardDelete,onCardClick:e.onCardClick,onCardLike:e.onCardLike},t._id)}))})]})},h=n.p+"static/media/close.888d78eb.svg";var m=function(e){return Object(a.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen),children:Object(a.jsxs)("div",{className:"popup__content",children:[Object(a.jsx)("img",{src:h,alt:"",className:"popup__close popup__close_type_".concat(e.name),onClick:e.onClose}),Object(a.jsx)("h3",{className:"popup__title",children:e.title}),Object(a.jsx)("form",{className:"popup__form",name:e.name,onSubmit:e.onSubmit,noValidate:!0,children:e.children})]})})};var f=function(e){var t=o.a.useState(""),n=Object(u.a)(t,2),c=n[0],s=n[1],r=o.a.useState(""),i=Object(u.a)(r,2),l=i[0],p=i[1],d=o.a.useContext(_);return o.a.useEffect((function(){s(d.name),p(d.about)}),[d]),Object(a.jsx)(m,{isOpen:e.isOpen?"popup_is-opened":"",onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:l})},title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"profile",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{value:c||"",onChange:function(e){s(e.target.value)},id:"user",type:"text",name:"user",className:"popup__input popup__input_type_user",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"30"}),Object(a.jsx)("span",{id:"user-error",className:"error"}),Object(a.jsx)("input",{value:l||"",onChange:function(e){p(e.target.value)},id:"about",type:"text",name:"about",className:"popup__input popup__input_type_about",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,minLength:"2",maxLength:"30"}),Object(a.jsx)("span",{id:"about-error",className:"error"}),Object(a.jsx)("button",{type:"submit",className:"button popup__button popup__button_save popup__button_valid",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})};var O=function(e){var t=o.a.useState(""),n=Object(u.a)(t,2),c=n[0],s=n[1],r=o.a.useState(""),i=Object(u.a)(r,2),l=i[0],p=i[1];return Object(a.jsx)(m,{isOpen:e.isOpen?"popup_is-opened":"",onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:c,link:l}),p(""),s("")},title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"card",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{onChange:function(e){s(e.target.value)},value:c,id:"name",type:"text",name:"name",className:"popup__input popup__input_type_name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"30"}),Object(a.jsx)("span",{id:"name-error",className:"error"}),Object(a.jsx)("input",{onChange:function(e){p(e.target.value)},value:l,id:"link",type:"url",name:"link",className:"popup__input popup__input_type_link-url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(a.jsx)("span",{id:"link-error",className:"error"}),Object(a.jsx)("button",{type:"submit",className:"button popup__button popup__button_add popup__button_valid",children:"+"})]})})};var v=function(e){var t=o.a.useRef();return Object(a.jsx)(m,{isOpen:e.isOpen?"popup_is-opened":"",onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{ref:t,id:"avatarlink",type:"url",name:"link",className:"popup__input popup__input_type_avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0}),Object(a.jsx)("span",{id:"avatarlink-error",className:"error"}),Object(a.jsx)("button",{type:"submit",className:"button popup__button popup__button_add-avatar popup__button_valid",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})};var x=function(e){return Object(a.jsx)("div",{className:e.card.isOpen?"popup popup_type_".concat(e.name," popup_is-opened"):"popup popup_type_".concat(e.name),children:Object(a.jsxs)("div",{className:"popup__image-container",children:[Object(a.jsx)("img",{src:h,alt:"",className:"popup__close popup__close_type_image",onClick:e.onClose}),Object(a.jsx)("img",{src:e.card.link,alt:e.card.name,className:"popup__image"}),Object(a.jsx)("figcaption",{className:"popup__caption",children:e.card.name})]})})},g=n(7),C=new function e(t){var n=this;Object(g.a)(this,e),this.getInitialCards=function(){return fetch("".concat(n.baseUrl,"/cards"),{headers:n.headers}).then((function(e){return n._getResponseData(e)}))},this.addCardPage=function(e){return fetch("".concat(n.baseUrl,"/cards"),{method:"POST",headers:n.headers,body:JSON.stringify(e)}).then((function(e){return n._getResponseData(e)}))},this.getUsersInfo=function(){return fetch("".concat(n.baseUrl,"/users/me"),{headers:n.headers}).then((function(e){return n._getResponseData(e)}))},this.updateUserInfo=function(e){return fetch("".concat(n.baseUrl,"/users/me"),{method:"PATCH",headers:n.headers,body:JSON.stringify(e)}).then((function(e){return n._getResponseData(e)}))},this.removeCard=function(e){return fetch("".concat(n.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:n.headers}).then((function(e){return n._getResponseData(e)}))},this.setLikeCard=function(e){return fetch("".concat(n.baseUrl,"/cards/like/").concat(e),{method:"PUT",headers:n.headers}).then((function(e){return n._getResponseData(e)}))},this.unLikeCard=function(e){return fetch("".concat(n.baseUrl,"/cards/like/").concat(e),{method:"DELETE",headers:n.headers}).then((function(e){return n._getResponseData(e)}))},this.addNewAvatar=function(e){return fetch("".concat(n.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:n.headers,body:JSON.stringify(e)}).then((function(e){return n._getResponseData(e)}))},this._getResponseData=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))},this.baseUrl=t.baseUrl,this.headers=t.headers}({baseUrl:"https://nomoreparties.co/cohort11",headers:{authorization:"e68fb6ad-453f-4883-819e-2174dfda84ad","Content-Type":"application/json"}});var N=function(){var e=o.a.useState([]),t=Object(u.a)(e,2),n=t[0],c=t[1],s=o.a.useState({}),r=Object(u.a)(s,2),l=r[0],j=r[1],h=o.a.useState(!1),m=Object(u.a)(h,2),g=m[0],N=m[1],k=o.a.useState(!1),y=Object(u.a)(k,2),S=y[0],U=y[1],D=o.a.useState(!1),L=Object(u.a)(D,2),P=L[0],E=L[1],A=o.a.useState({isOpen:!1,link:"",name:""}),I=Object(u.a)(A,2),R=I[0],F=I[1];function T(){U(!1),N(!1),E(!1),F({isOpen:!1,link:"",name:""})}return o.a.useEffect((function(){Promise.all([C.getUsersInfo(),C.getInitialCards()]).then((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];j(n),c(a.reverse())})).catch((function(e){return console.log(e)}))}),[]),Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("div",{className:"root",children:Object(a.jsxs)(_.Provider,{value:l,children:[Object(a.jsx)(p,{}),Object(a.jsx)(b,{cards:n,onCardDelete:function(e){C.removeCard(e._id).then((function(){var t=n.filter((function(t){return t._id!==e._id}));c(t),T()})).catch((function(e){return console.log(e)}))},onCardLike:function(e){e.likes.some((function(e){return e._id===l._id}))?C.unLikeCard(e._id).then((function(t){var a=n.map((function(n){return n._id===e._id?t:n}));c(a)})).catch((function(e){return console.log(e)})):C.setLikeCard(e._id).then((function(t){var a=n.map((function(n){return n._id===e._id?t:n}));c(a)})).catch((function(e){return console.log(e)}))},onCardClick:function(e,t){F({isOpen:!0,link:e,name:t})},onEditProfile:function(){N(!0)},onAddPlace:function(){U(!0)},onEditAvatar:function(){E(!0)}}),Object(a.jsx)(d,{}),Object(a.jsx)(f,{isOpen:g,onClose:T,onUpdateUser:function(e){C.updateUserInfo(e).then((function(e){j(e),T()})).catch((function(e){return console.log(e)}))}}),Object(a.jsx)(O,{isOpen:S,onClose:T,onAddPlace:function(e){C.addCardPage(e).then((function(e){c([e].concat(Object(i.a)(n))),T()})).catch((function(e){return console.log(e)}))}}),Object(a.jsx)(v,{isOpen:P,onClose:T,onUpdateAvatar:function(e){C.addNewAvatar(e).then((function(e){j(e),T()})).catch((function(e){return console.log(e)}))}}),Object(a.jsx)(x,{card:R,onClose:T})]})})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),k()}},[[15,1,2]]]);
//# sourceMappingURL=main.d0cb74fb.chunk.js.map