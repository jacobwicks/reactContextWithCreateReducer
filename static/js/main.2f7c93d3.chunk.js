(this.webpackJsonpreactcontextwithcreatereducer=this.webpackJsonpreactcontextwithcreatereducer||[]).push([[0],{13:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var o,n=a(0),r=a.n(n),u=a(5),i=a.n(u),s=(a(13),a(3)),l=a(7),c=a(1);!function(e){e.addPage="addPage",e.deletePage="deletePage",e.setCurrentPage="setCurrentPage"}(o||(o={}));var h=Object(c.a)(o.addPage),d=function(e,t){var a=t.payload;e.pages.push(a.page)},m=h,y=Object(c.a)(o.deletePage),g=function(e){e.pages=e.pages.filter((function(t){return t.number!==e.current})),e.current=void 0},b=y,w=Object(c.a)(o.setCurrentPage),f=function(e,t){var a=t.payload;e.current=a},p=w,v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return e=Math.ceil(e),(t=Math.floor(t))<e&&(t=e+1),Math.floor(Math.random()*(t-e+1))+e},W=["What weird food combinations do you really enjoy?","What social stigma does society need to get over?","What food have you never eaten but would really like to try?","What\u2019s something you really resent paying for?","What would a world populated by clones of you be like?","Do you think that aliens exist?","What are you currently worried about?","Where are some unusual places you\u2019ve been?","Where do you get your news?","What are some red flags to watch out for in daily life?","What movie can you watch over and over without ever getting tired of?","When you are old, what do you think children will ask you to tell stories about?","If you could switch two movie characters, what switch would lead to the most inappropriate movies?","What inanimate object would be the most annoying if it played loud upbeat music while being used?","When did something start out badly for you but in the end, it was great?","How would your country change if everyone, regardless of age, could vote?","What animal would be cutest if scaled down to the size of a cat?","If your job gave you a surprise three day paid break to rest and recuperate, what would you do with those three days?","What\u2019s wrong but sounds right?","What\u2019s the most epic way you\u2019ve seen someone quit or be fired?","If you couldn\u2019t be convicted of any one type of crime, what criminal charge would you like to be immune to?","What\u2019s something that will always be in fashion, no matter how much time passes?","What actors or actresses play the same character in almost every movie or show they do?","In the past people were buried with the items they would need in the afterlife, what would you want buried with you so you could use it in the afterlife?","What\u2019s the best / worst practical joke that you\u2019ve played on someone or that was played on you?","Who do you go out of your way to be nice to?","Where do you get most of the decorations for your home?","What food is delicious but a pain to eat?","Who was your craziest / most interesting teacher","What \u201cold person\u201d things do you do?","What was the last photo you took?","What is the most amazing slow motion video you\u2019ve seen?","Which celebrity do you think is the most down to earth?","What would be the worst thing to hear as you are going under anesthesia before heart surgery?","What\u2019s the spiciest thing you\u2019ve ever eaten?","What\u2019s the most expensive thing you\u2019ve broken?","What obstacles would be included in the World\u2019s most amazing obstacle course?","What makes you roll your eyes every time you hear it?","What do you think you are much better at than you actually are?","Should kidneys be able to be bought and sold?","What\u2019s the most creative use of emojis you\u2019ve ever seen?","When was the last time you got to tell someone \u201cI told you so.\u201d?","What riddles do you know?","What\u2019s your cure for hiccups?","What invention doesn\u2019t get a lot of love, but has greatly improved the world?","What\u2019s the most interesting building you\u2019ve ever seen or been in?","What mythical creature do you wish actually existed?","What are your most important rules when going on a date?","How do you judge a person?","If someone narrated your life, who would you want to be the narrator?","What was the most unsettling film you\u2019ve seen?","What unethical experiment would have the biggest positive impact on society as a whole?","When was the last time you were snooping, and found something you wish you hadn\u2019t?"],E=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=[],a=0;a<e;a++)t.push(W[v(1,W.length-1)]);return t},k=function(e,t){return{number:e,questions:E(t||v(2,10))}},j={current:1,pages:[k(1),k(2),k(3)],dispatch:function(e){}},C=Object(c.b)(j,(function(e){return e.addCase(m,d).addCase(b,g).addCase(p,f)})),x=Object(n.createContext)(j),O=function(e){var t=e.children,a=e.testState,o=e.testDispatch,u=Object(n.useReducer)(C,a||j),i=Object(l.a)(u,2),c=i[0],h=i[1],d=Object(s.a)(Object(s.a)({},c),{},{dispatch:o||h});return r.a.createElement(x.Provider,{value:d},t)},P=function(){var e=Object(n.useContext)(x),t=e.dispatch,a=e.pages;return r.a.createElement("button",{className:"btn",onClick:function(){return function(){var e=a.length?a[a.length-1].number+1:1,o=k(e);t(m({page:o}))}()}},r.a.createElement("i",{className:"fa fa-plus"})," Add Page")},N=function(){var e=Object(n.useContext)(x),t=e.dispatch,a=e.current,o=e.pages;return r.a.createElement("div",{className:"sidenav"},r.a.createElement(P,null),r.a.createElement("br",null),o&&o.map((function(e,o){return r.a.createElement("div",{key:o,style:{padding:10}},r.a.createElement("button",{className:"btn",style:a===e.number?{backgroundColor:"darkblue"}:void 0,onClick:function(){return t(p(e.number))}},"Page ",e.number," ",r.a.createElement("br",null),e.questions.length," Question",1!==e.questions.length?"s":""))})))},I=function(){var e=Object(n.useContext)(x).dispatch;return r.a.createElement("button",{className:"btn",onClick:function(){return e(b())}},r.a.createElement("i",{className:"fa fa-trash"})," Delete Page")},q=function(){var e=Object(n.useContext)(x),t=e.current,a=e.pages.find((function(e){return e.number===t}));if(!a)return r.a.createElement("div",{className:"main"},r.a.createElement("h2",null,"No page selected"));var o=a.questions;return r.a.createElement("div",{className:"main"},r.a.createElement("h2",null,"This is page ",a.number),r.a.createElement(I,null),r.a.createElement("br",null),r.a.createElement("br",null),o.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("div",null,t+1,". ",e))})))};var M=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,null,r.a.createElement("header",{className:"App-header"},"React Context with Redux Toolkit createReducer"),r.a.createElement(q,null),r.a.createElement(N,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.2f7c93d3.chunk.js.map