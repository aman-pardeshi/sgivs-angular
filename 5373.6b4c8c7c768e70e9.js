"use strict";(self.webpackChunkverona_ng=self.webpackChunkverona_ng||[]).push([[5373],{5373:(b,g,i)=>{i.r(g),i.d(g,{LandingModule:()=>A});var c=i(6814),r=i(2129),e=i(9467),Z=i(3859),u=i(707),d=i(1913),m=i(4480),x=i(1111);const f=()=>["/"],h=()=>["/auth/login"];let v=(()=>{class t{constructor(n){this.layoutService=n}scrollTo(n){n.scrollIntoView({behavior:"smooth"})}get backgroundStyle(){return{"background-image":"url(assets/demo/images/landing/"+("dark"===this.layoutService.config().colorScheme?"line-effect-dark.svg":"line-effect.svg")+")"}}get colorScheme(){return this.layoutService.config().colorScheme}static#e=this.\u0275fac=function(o){return new(o||t)(e.Y36(Z.P))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:240,vars:7,consts:[[1,"surface-ground","min-h-screen","w-screen"],[1,"landing-wrapper"],[1,"bg-no-repeat","bg-cover","bg-bottom",3,"ngStyle"],[1,"flex","align-items-center","justify-content-between","px-5","sm:px-8","py-6"],[3,"routerLink"],[1,"text-2xl","font-bold","text-color"],[1,"relative"],["pRipple","","pStyleClass","@next","enterClass","hidden","enterActiveClass","scalein","leaveActiveClass","fadeout","leaveToClass","hidden",1,"cursor-pointer","block","lg:hidden","select-none","p-link","w-3rem","h-3rem","inline-flex","align-items-center","justify-content-center","border-circle",3,"hideOnOutsideClick"],[1,"pi","pi-bars","text-4xl"],["id","landing-menu",1,"hidden","lg:block","absolute","right-0","top-auto","lg:static","z-1","shadow-2","lg:shadow-none","w-15rem","lg:w-auto","surface-overlay","lg:surface-ground","origin-top","p-3","lg:p-0",2,"border-radius","14px"],[1,"flex","flex-column","lg:flex-row","m-0","p-0","list-none","text-2xl","lg:text-base"],["pStyleClass","#landing-menu","leaveActiveClass","fadeout","leaveToClass","hidden",1,"block","p-3","cursor-pointer","font-bold","text-color-secondary","hover:text-color","transition-colors","transition-duration-300",3,"click"],[1,"block","p-3","cursor-pointer","font-bold","text-color-secondary","hover:text-color","transition-colors","transition-duration-300",3,"routerLink"],[1,"flex","flex-column","lg:flex-row","gap-5","align-items-center","justify-content-between","px-5","sm:px-8","py-8","overflow-hidden"],[1,"flex-1","fadein","animation-duration-1000"],[1,"font-bold","text-7xl","mt-0","mb-5"],[1,"text-3xl","mb-5","line-height-3"],["pButton","","pRipple","","label","TRY NOW"],[1,"flex-1"],["alt","intro image","src","assets/demo/images/landing/screen.jpg",1,"fadeinright","animation-ease-in-out","animation-duration-1000","w-full","border-round-2xl","shadow-2"],[1,"p-8"],["stats",""],[1,"flex","flex-column","align-items-center","mb-7"],[1,"font-bold","text-color-secondary","text-2xl","mb-3"],[1,"font-bold","text-6xl","my-0"],[1,"flex","flex-column","xl:flex-row","justify-content-center","gap-5"],[1,"surface-card","text-center","py-7","px-5","shadow-2",2,"border-radius","14px"],[1,"text-xl","text-color-secondary","mb-3"],[1,"mt-0","mb-3","font-bold","text-4xl"],[1,"line-height-3","mb-5","text-color-secondary"],["pButton","","icon","pi pi-arrow-right","label","Get Started","iconPos","right",1,"p-button-text"],[1,"mt-8","xl:pt-8"],["alt","intro image","src","assets/demo/images/landing/feature-components.svg",1,"w-9","md:w-4","xl:w-9"],[1,"flex","flex-column","md:flex-row","xl:flex-column","gap-5"],[1,"flex-1","surface-card","flex","flex-column","xl:flex-row","xl:align-items-center","justify-content-between","py-7","px-5","shadow-2","gap-5",2,"border-radius","14px"],[1,"flex-1","flex-order-1","xl:flex-order-0","text-center","xl:text-left"],["alt","intro image","src","assets/demo/images/landing/feature-blocks.svg",1,"w-9"],[1,"text-center","xl:text-right","flex-1"],["pButton","","icon","pi pi-arrow-right","label","Browse Blocks","iconPos","right",1,"p-button-text"],[1,"text-center","xl:text-left","flex-1"],["pButton","","icon","pi pi-arrow-right","label","Explore Icons","iconPos","right",1,"p-button-text"],[1,"flex-1","text-center","xl:text-right"],["alt","intro image","src","assets/demo/images/landing/feature-icons.svg",1,"w-9"],["pButton","","icon","pi pi-arrow-right","label","View Designer","iconPos","right",1,"p-button-text"],["alt","intro image","src","assets/demo/images/landing/feature-designer.svg",1,"w-9","md:w-4","xl:w-9"],[1,"px-5","sm:px-8","py-8","surface-card"],["features",""],[1,"flex","flex-column","lg:flex-row","justify-content-center","gap-5"],[1,"bg-orange-50","p-6","flex","align-items-center","justify-content-center","mb-5",2,"border-radius","14px","border-top-left-radius","5rem"],["alt","intro image","src","assets/demo/images/landing/icon-modern-responsive.svg",1,"h-6rem","sm:h-12rem"],[1,"mt-0","mb-5","font-bold","text-4xl"],[1,"line-height-3","text-color-secondary"],[1,"bg-green-50","p-6","flex","align-items-center","justify-content-center","mb-5",2,"border-radius","14px"],["alt","intro image","src","assets/demo/images/landing/icon-modern-design.svg",1,"h-6rem","sm:h-12rem"],[1,"bg-red-50","p-6","flex","align-items-center","justify-content-center","mb-5",2,"border-radius","14px","border-bottom-right-radius","5rem"],["alt","intro image","src","assets/demo/images/landing/icon-clean-code.svg",1,"h-6rem","sm:h-12rem"],[1,"px-5","sm:px-8","py-8","surface-ground","flex","flex-wrap","gap-5","align-items-center","justify-content-between"],[1,"text-4xl","font-bold"],["pButton","","pRipple","","label","Join Now",1,"p-button-raised"],[1,"px-5","sm:px-8","py-8","surface-card","flex","flex-column","lg:flex-row","justify-content-center","gap-5"],["pricing",""],[1,"shadow-2","surface-card","p-5","text-center","border-round-2xl"],["alt","intro image","src","assets/demo/images/landing/asset-free.svg",1,"w-full","sm:w-6","lg:w-full","block","mx-auto","mb-5"],[1,"text-2xl","font-bold","mb-3"],[1,"mb-5"],[1,"text-6xl","font-bold"],[1,"text-xl","text-color-secondary"],[1,"p-2","mb-5","font-bold","block","text-center","cursor-pointer","hover:surface-hover","transition-colors","transition-duration-300",2,"border-radius","2rem","box-shadow","0px 3px 4px rgba(0, 0, 0, 0.1), 0px 24px 36px rgba(0, 0, 0, 0.04)"],[1,"list-none","p-0","m-0"],[1,"flex","align-items-center"],[1,"pi","pi-check-circle","text-green-500","text-xl","mr-2"],["alt","intro image","src","assets/demo/images/landing/asset-premium.svg",1,"w-full","sm:w-6","lg:w-full","block","mx-auto","mb-5"],[1,"flex","align-items-center","mb-3"],["alt","intro image","src","assets/demo/images/landing/asset-enterprise.svg",1,"w-full","sm:w-6","lg:w-full","block","mx-auto","mb-5"],[1,"px-5","sm:px-8","py-8","bg-gray-900","flex","flex-column","md:flex-row","md:align-items-start","gap-5",2,"border-top-left-radius","14px","border-top-right-radius","14px"],[1,"flex","align-items-center","flex-1"],["alt","intro image","src","assets/demo/images/landing/logo-v.svg",1,"w-4rem"],[1,"text-white","text-5xl","font-bold","ml-2"],[1,"text-xl","text-gray-600","mb-4"],[1,"mb-3"],[1,"cursor-pointer","text-white","text-xl"],["href","https://www.primefaces.org/primeng",1,"cursor-pointer","text-white","text-xl"],["href","https://www.primefaces.org/showcase",1,"cursor-pointer","text-white","text-xl"],["href","https://www.primefaces.org/primereact",1,"cursor-pointer","text-white","text-xl"],["href","https://www.primefaces.org/primevue",1,"cursor-pointer","text-white","text-xl"],[1,"flex","flex-1","gap-4"],["href","http://github.com/primefaces"],[1,"pi","pi-github","text-white","text-5xl"],["href","https://discord.gg/gzKFYnpmCY"],[1,"pi","pi-discord","text-white","text-5xl"],["href","http://twitter/primeng"],[1,"pi","pi-twitter","text-white","text-5xl"],[3,"minimal"]],template:function(o,s){if(1&o){const a=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4)(5,"span",5),e._uU(6,"VERONA"),e.qZA()(),e.TgZ(7,"div",6)(8,"button",7),e._UZ(9,"i",8),e.qZA(),e.TgZ(10,"div",9)(11,"ul",10)(12,"li")(13,"a",11),e.NdJ("click",function(){e.CHM(a);const l=e.MAs(34);return e.KtG(s.scrollTo(l))}),e._uU(14,"STATS"),e.qZA()(),e.TgZ(15,"li")(16,"a",11),e.NdJ("click",function(){e.CHM(a);const l=e.MAs(91);return e.KtG(s.scrollTo(l))}),e._uU(17,"FEATURES"),e.qZA()(),e.TgZ(18,"li")(19,"a",11),e.NdJ("click",function(){e.CHM(a);const l=e.MAs(119);return e.KtG(s.scrollTo(l))}),e._uU(20,"PRICING"),e.qZA()(),e.TgZ(21,"li")(22,"a",12),e._uU(23,"SIGN IN"),e.qZA()()()()()(),e.TgZ(24,"div",13)(25,"div",14)(26,"h1",15),e._uU(27,"PrimeTek Presents Verona"),e.qZA(),e.TgZ(28,"p",16),e._uU(29,"Minimal layout inspired by a beautiful city"),e.qZA(),e._UZ(30,"button",17),e.qZA(),e.TgZ(31,"div",18),e._UZ(32,"img",19),e.qZA()(),e.TgZ(33,"div",20,21)(35,"div",22)(36,"span",23),e._uU(37,"Ecosystem"),e.qZA(),e.TgZ(38,"h2",24),e._uU(39,"All You Need Is Here"),e.qZA()(),e.TgZ(40,"div",25)(41,"div",26)(42,"div",27),e._uU(43,"Easy to use"),e.qZA(),e.TgZ(44,"h3",28),e._uU(45,"Play like a toy"),e.qZA(),e.TgZ(46,"p",29),e._uU(47,"More than "),e.TgZ(48,"strong"),e._uU(49,"80"),e.qZA(),e._uU(50," UI components."),e.qZA(),e._UZ(51,"button",30),e.TgZ(52,"div",31),e._UZ(53,"img",32),e.qZA()(),e.TgZ(54,"div",33)(55,"div",34)(56,"div",35),e._UZ(57,"img",36),e.qZA(),e.TgZ(58,"div",37)(59,"div",27),e._uU(60,"PrimeBlocks"),e.qZA(),e.TgZ(61,"h3",28),e._uU(62,"Save your time"),e.qZA(),e.TgZ(63,"p",29),e._uU(64,"PrimeBlocks have "),e.TgZ(65,"strong"),e._uU(66,"370+"),e.qZA(),e._uU(67," blocks: hero sections, pricing, footers and more...."),e.qZA(),e._UZ(68,"button",38),e.qZA()(),e.TgZ(69,"div",34)(70,"div",39)(71,"div",27),e._uU(72,"PrimeIcons"),e.qZA(),e.TgZ(73,"h3",28),e._uU(74,"Enjoy 300+ Icons"),e.qZA(),e.TgZ(75,"p",29),e._uU(76,"What you need in your app, you find any icon in PrimeIcons."),e.qZA(),e._UZ(77,"button",40),e.qZA(),e.TgZ(78,"div",41),e._UZ(79,"img",42),e.qZA()()(),e.TgZ(80,"div",26)(81,"div",27),e._uU(82,"Theme Designer"),e.qZA(),e.TgZ(83,"h3",28),e._uU(84,"Design Your Own"),e.qZA(),e.TgZ(85,"p",29),e._uU(86,"Limitless customization."),e.qZA(),e._UZ(87,"button",43),e.TgZ(88,"div",31),e._UZ(89,"img",44),e.qZA()()()()(),e.TgZ(90,"div",45,46)(92,"div",47)(93,"div")(94,"div",48),e._UZ(95,"img",49),e.qZA(),e.TgZ(96,"h3",50),e._uU(97,"Responsive Design"),e.qZA(),e.TgZ(98,"p",51),e._uU(99,"Nam non ligula sed urna malesuada lacinia. Aliquam sed viverra ipsum."),e.qZA()(),e.TgZ(100,"div")(101,"div",52),e._UZ(102,"img",53),e.qZA(),e.TgZ(103,"h3",50),e._uU(104,"Modern Design"),e.qZA(),e.TgZ(105,"p",51),e._uU(106,"Nam non ligula sed urna malesuada lacinia. Aliquam sed viverra ipsum."),e.qZA()(),e.TgZ(107,"div")(108,"div",54),e._UZ(109,"img",55),e.qZA(),e.TgZ(110,"h3",50),e._uU(111,"Clean Code"),e.qZA(),e.TgZ(112,"p",51),e._uU(113,"Nam non ligula sed urna malesuada lacinia. Aliquam sed viverra ipsum."),e.qZA()()()(),e.TgZ(114,"div",56)(115,"div",57),e._uU(116,"Join the Prime Community"),e.qZA(),e._UZ(117,"button",58),e.qZA(),e.TgZ(118,"div",59,60)(120,"div",61),e._UZ(121,"img",62),e.TgZ(122,"div",63),e._uU(123,"Free"),e.qZA(),e.TgZ(124,"div",64)(125,"span",65),e._uU(126,"$0 "),e.qZA(),e.TgZ(127,"span",66),e._uU(128,"/month"),e.qZA()(),e.TgZ(129,"a",67),e._uU(130,"TRY NOW"),e.qZA(),e.TgZ(131,"ul",68)(132,"li",69),e._UZ(133,"i",70),e.TgZ(134,"span"),e._uU(135,"Responsive Layout"),e.qZA()()()(),e.TgZ(136,"div",61),e._UZ(137,"img",71),e.TgZ(138,"div",63),e._uU(139,"Premium"),e.qZA(),e.TgZ(140,"div",64)(141,"span",65),e._uU(142,"$9 "),e.qZA(),e.TgZ(143,"span",66),e._uU(144,"/month"),e.qZA()(),e.TgZ(145,"a",67),e._uU(146,"TRY NOW"),e.qZA(),e.TgZ(147,"ul",68)(148,"li",72),e._UZ(149,"i",70),e.TgZ(150,"span"),e._uU(151,"Responsive Layout"),e.qZA()(),e.TgZ(152,"li",72),e._UZ(153,"i",70),e.TgZ(154,"span"),e._uU(155,"10000 Push Messages"),e.qZA()(),e.TgZ(156,"li",69),e._UZ(157,"i",70),e.TgZ(158,"span"),e._uU(159,"50 Support Tickets"),e.qZA()()()(),e.TgZ(160,"div",61),e._UZ(161,"img",73),e.TgZ(162,"div",63),e._uU(163,"Enterprise"),e.qZA(),e.TgZ(164,"div",64)(165,"span",65),e._uU(166,"$19 "),e.qZA(),e.TgZ(167,"span",66),e._uU(168,"/month"),e.qZA()(),e.TgZ(169,"a",67),e._uU(170,"TRY NOW"),e.qZA(),e.TgZ(171,"ul",68)(172,"li",72),e._UZ(173,"i",70),e.TgZ(174,"span"),e._uU(175,"Responsive Layout"),e.qZA()(),e.TgZ(176,"li",72),e._UZ(177,"i",70),e.TgZ(178,"span"),e._uU(179,"Unlimited Push Messages"),e.qZA()(),e.TgZ(180,"li",72),e._UZ(181,"i",70),e.TgZ(182,"span"),e._uU(183,"1000 Support Tickets"),e.qZA()(),e.TgZ(184,"li",72),e._UZ(185,"i",70),e.TgZ(186,"span"),e._uU(187,"Free Shipping"),e.qZA()(),e.TgZ(188,"li",69),e._UZ(189,"i",70),e.TgZ(190,"span"),e._uU(191,"Unlimited Storage"),e.qZA()()()()(),e.TgZ(192,"div",74)(193,"div",75),e._UZ(194,"img",76),e.TgZ(195,"span",77),e._uU(196,"Verona"),e.qZA()(),e.TgZ(197,"div",18)(198,"div",78),e._uU(199,"LATEST"),e.qZA(),e.TgZ(200,"ul",68)(201,"li",79)(202,"a",80),e._uU(203,"Ultima"),e.qZA()(),e.TgZ(204,"li",79)(205,"a",80),e._uU(206,"Apollo"),e.qZA()(),e.TgZ(207,"li",79)(208,"a",80),e._uU(209,"Sakai"),e.qZA()(),e.TgZ(210,"li",79)(211,"a",80),e._uU(212,"Diamond"),e.qZA()(),e.TgZ(213,"li")(214,"a",80),e._uU(215,"Poseidon"),e.qZA()()()(),e.TgZ(216,"div",18)(217,"div",78),e._uU(218,"DEMOS"),e.qZA(),e.TgZ(219,"ul",68)(220,"li",79)(221,"a",81),e._uU(222,"PrimeNG"),e.qZA()(),e.TgZ(223,"li",79)(224,"a",82),e._uU(225,"PrimeFaces"),e.qZA()(),e.TgZ(226,"li",79)(227,"a",83),e._uU(228,"PrimeReact"),e.qZA()(),e.TgZ(229,"li")(230,"a",84),e._uU(231,"PrimeVue"),e.qZA()()()(),e.TgZ(232,"div",85)(233,"a",86),e._UZ(234,"i",87),e.qZA(),e.TgZ(235,"a",88),e._UZ(236,"i",89),e.qZA(),e.TgZ(237,"a",90),e._UZ(238,"i",91),e.qZA()()()()(),e._UZ(239,"app-config",92)}2&o&&(e.xp6(2),e.Q6J("ngStyle",s.backgroundStyle),e.xp6(2),e.Q6J("routerLink",e.DdM(5,f)),e.xp6(4),e.Q6J("hideOnOutsideClick",!0),e.xp6(14),e.Q6J("routerLink",e.DdM(6,h)),e.xp6(217),e.Q6J("minimal",!0))},dependencies:[c.PC,r.rH,u.Hq,d.h,m.H,x.P],encapsulation:2})}return t})(),T=(()=>{class t{static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275mod=e.oAB({type:t});static#i=this.\u0275inj=e.cJS({imports:[r.Bz.forChild([{path:"",component:v}]),r.Bz]})}return t})();var U=i(2913);let A=(()=>{class t{constructor(n){this.router=n}static#e=this.\u0275fac=function(o){return new(o||t)(e.LFG(r.F0))};static#t=this.\u0275mod=e.oAB({type:t});static#i=this.\u0275inj=e.cJS({imports:[c.ez,T,u.hJ,r.Bz,d.l,m.T,U.h]})}return t})()}}]);