import{S as G,i as H,s as J,k as d,q as m,a as w,l as v,m as u,r as y,h as n,c as L,n as V,b as K,C as e,u as M,D as z,I as N,o as O}from"../chunks/index.5fa4193b.mjs";import{d as F}from"../chunks/index.d6237994.mjs";import{r as Q}from"../chunks/index.09e37ac8.mjs";const R={x:0,y:0};function A(t=F){return t?{x:t.scrollX,y:t.scrollY}:R}function T({window:t=F}={}){return Q(A(),o=>{function r(){o(A())}if(t)return t.addEventListener("scroll",r),()=>{t.removeEventListener("scroll",r)}})}function U(t){let s,o,r,f,a,i,E,C,P,p,h,k,b=t[0].x+"",x,X,_,Y,g=t[0].y+"",I;return{c(){s=d("div"),o=d("div"),r=d("p"),f=m("See scroll values in the lower right corner of the screen."),a=w(),i=d("div"),E=d("div"),C=m("Scroll value:"),P=w(),p=d("div"),h=d("div"),k=m("X: "),x=m(b),X=w(),_=d("div"),Y=m("Y: "),I=m(g),this.h()},l(c){s=v(c,"DIV",{class:!0});var l=u(s);o=v(l,"DIV",{class:!0});var W=u(o);r=v(W,"P",{class:!0});var j=u(r);f=y(j,"See scroll values in the lower right corner of the screen."),j.forEach(n),W.forEach(n),a=L(l),i=v(l,"DIV",{class:!0});var D=u(i);E=v(D,"DIV",{});var B=u(E);C=y(B,"Scroll value:"),B.forEach(n),P=L(D),p=v(D,"DIV",{});var S=u(p);h=v(S,"DIV",{});var $=u(h);k=y($,"X: "),x=y($,b),$.forEach(n),X=L(S),_=v(S,"DIV",{});var q=u(_);Y=y(q,"Y: "),I=y(q,g),q.forEach(n),S.forEach(n),D.forEach(n),l.forEach(n),this.h()},h(){V(r,"class","border border-black p-4 rounded-md bg-slate-100 inline-block"),V(o,"class","mt-8"),V(i,"class","position-view svelte-1homax7"),V(s,"class","scroll-container")},m(c,l){K(c,s,l),e(s,o),e(o,r),e(r,f),e(s,a),e(s,i),e(i,E),e(E,C),e(i,P),e(i,p),e(p,h),e(h,k),e(h,x),e(p,X),e(p,_),e(_,Y),e(_,I)},p(c,[l]){l&1&&b!==(b=c[0].x+"")&&M(x,b),l&1&&g!==(g=c[0].y+"")&&M(I,g)},i:z,o:z,d(c){c&&n(s)}}}function Z(t,s,o){let r;const f=T();return N(t,f,a=>o(0,r=a)),O(()=>{if(typeof window=="object"){const a=window.document.getElementById("main-container");a&&(a.style.setProperty("width","10000px"),a.style.setProperty("height","10000px"))}}),[r,f]}class re extends G{constructor(s){super(),H(this,s,Z,U,J,{})}}export{re as default};
