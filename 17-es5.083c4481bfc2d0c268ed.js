!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{pwtZ:function(e,i,a){"use strict";a.r(i),a.d(i,"TutorialModule",(function(){return S}));var s=a("ofXK"),o=a("TEn/"),r=a("tyNb"),b=a("kyOO"),c=a("fXoL"),l=a("e8h1"),u=a("sYmb"),g=["slides"];function h(t,n){if(1&t){var e=c.Lb();c.Kb(0,"ion-col"),c.Kb(1,"div"),c.Kb(2,"img",10),c.Sb("click",(function(){c.cc(e);var t=n.$implicit;return c.Ub().setLanguage(t.value)})),c.Jb(),c.Jb(),c.Jb()}if(2&t){var i=n.$implicit;c.xb(2),c.ac("src",i.img,c.dc)}}var p,d,f,m=[{path:"",component:(p=function(){function e(n,i,a,s){t(this,e),this.menu=n,this.router=i,this.storage=a,this.languageService=s,this.showSkip=!0,this.languages=[]}var i,a,s;return i=e,(a=[{key:"startApp",value:function(){var t=this;this.router.navigateByUrl("/app/tabs/switzerland",{replaceUrl:!0}).then((function(){return t.storage.set("ion_did_tutorial",!0)}))}},{key:"onSlideChangeStart",value:function(t){var n=this;t.target.isEnd().then((function(t){n.showSkip=!t}))}},{key:"ionViewWillEnter",value:function(){var t=this;this.slides.lockSwipes(!0),this.languages=this.languageService.getLangages(),this.storage.get("ion_did_tutorial").then((function(n){!0===n&&t.router.navigateByUrl("/app/tabs/switzerland",{replaceUrl:!0})})),this.menu.enable(!1)}},{key:"ionViewDidLeave",value:function(){this.menu.enable(!0)}},{key:"setLanguage",value:function(t){this.languageService.setLanguage(t),this.nextSwipe()}},{key:"nextSwipe",value:function(){this.slides.lockSwipes(!1),this.slides.slideNext(),this.slides.lockSwipes(!0)}}])&&n(i.prototype,a),s&&n(i,s),e}(),p.\u0275fac=function(t){return new(t||p)(c.Hb(o.J),c.Hb(r.e),c.Hb(l.b),c.Hb(b.a))},p.\u0275cmp=c.Bb({type:p,selectors:[["page-tutorial"]],viewQuery:function(t,n){var e;1&t&&c.fc(g,!0),2&t&&c.bc(e=c.Tb())&&(n.slides=e.first)},decls:47,vars:34,consts:[["fullscreen","true"],["pager","false",3,"ionSlideWillChange"],["slides",""],["src","assets/img/covid.webp",1,"slide-image"],[1,"slide-title"],[4,"ngFor","ngForOf"],["src","assets/img/humaans/standing-18.png",1,"slide-image"],["shape","round","fill","outline",3,"click"],["src","assets/img/humaans/standing-17.png",1,"slide-image"],["src","assets/img/humaans/standing-2.png",1,"slide-image"],[1,"flags",3,"src","click"]],template:function(t,n){1&t&&(c.Kb(0,"ion-content",0),c.Kb(1,"ion-slides",1,2),c.Sb("ionSlideWillChange",(function(t){return n.onSlideChangeStart(t)})),c.Kb(3,"ion-slide"),c.Ib(4,"img",3),c.Kb(5,"h2",4),c.hc(6),c.Vb(7,"translate"),c.Jb(),c.Kb(8,"p"),c.hc(9),c.Vb(10,"translate"),c.Jb(),c.Kb(11,"ion-grid"),c.Kb(12,"ion-row"),c.gc(13,h,3,1,"ion-col",5),c.Jb(),c.Jb(),c.Jb(),c.Kb(14,"ion-slide"),c.Ib(15,"img",6),c.Kb(16,"h2",4),c.hc(17),c.Vb(18,"translate"),c.Jb(),c.Kb(19,"p"),c.hc(20),c.Vb(21,"translate"),c.Jb(),c.Kb(22,"ion-button",7),c.Sb("click",(function(){return n.nextSwipe()})),c.hc(23),c.Vb(24,"translate"),c.Jb(),c.Jb(),c.Kb(25,"ion-slide"),c.Ib(26,"img",8),c.Kb(27,"h2",4),c.hc(28),c.Vb(29,"translate"),c.Jb(),c.Kb(30,"p"),c.hc(31),c.Vb(32,"translate"),c.Jb(),c.Kb(33,"ion-button",7),c.Sb("click",(function(){return n.nextSwipe()})),c.hc(34),c.Vb(35,"translate"),c.Jb(),c.Jb(),c.Kb(36,"ion-slide"),c.Ib(37,"img",9),c.Kb(38,"h2",4),c.hc(39),c.Vb(40,"translate"),c.Jb(),c.Kb(41,"p"),c.hc(42),c.Vb(43,"translate"),c.Jb(),c.Kb(44,"ion-button",7),c.Sb("click",(function(){return n.startApp()})),c.hc(45),c.Vb(46,"translate"),c.Jb(),c.Jb(),c.Jb(),c.Jb()),2&t&&(c.xb(6),c.jc(" ",c.Wb(7,12,"TUTORIAL.SLIDE1.title")," "),c.xb(3),c.jc(" ",c.Wb(10,14,"TUTORIAL.SLIDE1.text")," "),c.xb(4),c.ac("ngForOf",n.languages),c.xb(4),c.ic(c.Wb(18,16,"TUTORIAL.SLIDE2.title")),c.xb(3),c.ic(c.Wb(21,18,"TUTORIAL.SLIDE2.text")),c.xb(3),c.ic(c.Wb(24,20,"TUTORIAL.SLIDE2.button")),c.xb(5),c.ic(c.Wb(29,22,"TUTORIAL.SLIDE3.title")),c.xb(3),c.ic(c.Wb(32,24,"TUTORIAL.SLIDE3.text")),c.xb(3),c.ic(c.Wb(35,26,"TUTORIAL.SLIDE3.button")),c.xb(5),c.ic(c.Wb(40,28,"TUTORIAL.SLIDE4.title")),c.xb(3),c.ic(c.Wb(43,30,"TUTORIAL.SLIDE4.text")),c.xb(3),c.ic(c.Wb(46,32,"TUTORIAL.SLIDE4.button")))},directives:[o.l,o.A,o.z,o.m,o.y,s.i,o.c,o.k],pipes:[u.c],styles:["ion-toolbar[_ngcontent-%COMP%]{--background:transparent;--border-color:transparent}.flags[_ngcontent-%COMP%]{width:35px}.swiper-slide[_ngcontent-%COMP%]{display:block}.slide-title[_ngcontent-%COMP%]{margin-top:2.8rem}.slide-image[_ngcontent-%COMP%]{max-height:50%;max-width:60%;margin:36px 0;pointer-events:none}b[_ngcontent-%COMP%]{font-weight:500}p[_ngcontent-%COMP%]{padding:0 40px;font-size:14px;line-height:1.5;color:var(--ion-color-step-600,#60646b)}p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:var(--ion-text-color,#000)}"]}),p)}],v=((f=function n(){t(this,n)}).\u0275mod=c.Fb({type:f}),f.\u0275inj=c.Eb({factory:function(t){return new(t||f)},imports:[[r.h.forChild(m)],r.h]}),f),S=((d=function n(){t(this,n)}).\u0275mod=c.Fb({type:d}),d.\u0275inj=c.Eb({factory:function(t){return new(t||d)},imports:[[s.b,o.I,v,u.b]]}),d)}}])}();