(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},45:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(18),r=n.n(a),i=(n(25),n(26),n(20)),d=n(53),o=n(19),u=n.n(o),j=(n(45),n(46),n(4));var l=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1],a=new Date,r=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),o=a.getHours()+":"+a.getMinutes(),l=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][a.getDay()];return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"box",children:Object(j.jsxs)(d.a,{method:"POST",action:"",children:[Object(j.jsx)("div",{className:"form-group-1",children:Object(j.jsx)("input",{type:"text",id:"username",placeholder:"Username",name:"username",autoComplete:"off",required:!0,value:n,onChange:function(e){return s(e.target.value)}})}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("button",{type:"submit",className:"btn",onClick:function(){u.a.post("http://localhost:5000/",{username:n})},children:"Register Me"})}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("button",{type:"submit",className:"btn",children:"SignIn"})})]})}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:"{{ url_for('video_feed') }}",width:"100%"})}),Object(j.jsxs)("div",{className:"dt",children:[Object(j.jsx)("h1",{children:o}),Object(j.jsx)("h2",{children:r}),Object(j.jsx)("h3",{children:l})]})]})};var b=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(l,{})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),h()}},[[51,1,2]]]);
//# sourceMappingURL=main.fb26bcbf.chunk.js.map