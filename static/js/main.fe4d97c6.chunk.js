(this.webpackJsonphome=this.webpackJsonphome||[]).push([[0],{16:function(e,t,a){e.exports=a(44)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),u=a.n(c),i=a(2),l=a.n(i),s=a(13),o=a(15),m=a(14),p=a.n(m).a.create({baseURL:"https://api.github.com/users"});a(39),a(40),a(41),a(42);var d=function(e){var t=e.dev;return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("div",{className:"user-info"},r.a.createElement("img",{src:t.avatar_url,alt:t.name}),r.a.createElement("strong",null,t.name),r.a.createElement("span",null,t.login))),r.a.createElement("p",null,t.bio))};a(43);var h=function(e){e.stat},f=[{_id:0,imgSrc:"https://github-readme-stats.vercel.app/api?username=ramonlimaramos&show_icons=true&hide_border=true&&count_private=true&include_all_commits=true"},{_id:1,imgSrc:"https://github-readme-stats.vercel.app/api/top-langs/?username=ramonlimaramos&layout=compact"}];var v=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],c=t[1];function u(){return(u=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/ramonlimaramos");case 2:(t=e.sent).data.techs=["Go","Python","NodeJs"],c(t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){u.apply(this,arguments)}(),r.a.createElement("div",{id:"app"},r.a.createElement("aside",null,r.a.createElement(d,{dev:a})),r.a.createElement("main",null,r.a.createElement("ul",null,f.map((function(e){return r.a.createElement(h,{key:e._id,stat:e})})))))};u.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.fe4d97c6.chunk.js.map