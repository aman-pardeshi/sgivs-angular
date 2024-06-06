"use strict";(self.webpackChunkverona_ng=self.webpackChunkverona_ng||[]).push([[2871],{2871:(I,u,t)=>{t.r(u),t.d(u,{SaaSDashboardModule:()=>J});var f=t(6814),l=t(707),q=t(9552),x=t(5167),c=t(9252),v=t(4480),_=t(3259),m=t(2129),y=t(3620),e=t(9467),C=t(3859),p=t(6263),d=t(95),b=t(3965),h=t(8676),U=t(8039),A=t(6651),g=t(4844);const w=()=>({"background-color":"rgba(101, 214, 173, 0.1)",color:"#27AB83",border:"1px solid #65D6AD"}),o=()=>({"background-color":"rgba(250, 219, 95, 0.1)",color:"#DE911D",border:"1px solid #FADB5F"}),D=()=>({"background-color":"rgba(94, 208, 250, 0.1)",color:"#1992D4",border:"1px solid #5ED0FA"}),S=()=>({"background-color":"rgba(43, 176, 237, 0.1)",color:"#127FBF",border:"1px solid #2BB0ED"}),k=()=>({"background-color":"rgba(255, 155, 155, 0.1)",color:"#CF1124",border:"1px solid #FF9B9B"}),B=i=>({"background-color":i}),M=()=>({height:".5rem"});let H=(()=>{class i{constructor(n){this.layoutService=n,this.subscription=this.layoutService.configUpdate$.pipe((0,y.b)(25)).subscribe(a=>{this.initCharts()})}ngOnInit(){this.initCharts(),this.overviewWeeks=[{name:"Last Week",code:"0"},{name:"This Week",code:"1"}],this.selectedOverviewWeek=this.overviewWeeks[0]}initCharts(){const n=getComputedStyle(document.documentElement),a=n.getPropertyValue("--text-color-secondary"),r=n.getPropertyValue("--primary-color"),Z=n.getPropertyValue("--primary-200"),s=n.getPropertyValue("--surface-border");this.overviewChartData={labels:["M","T","W","T","F","S","S"],datasets:[{label:"Organic",data:[2,1,.5,.6,.5,1.3,1],borderColor:[r],pointBorderColor:"transparent",pointBackgroundColor:"transparent",type:"line",fill:!1},{label:"Referral",data:[4.88,3,6.2,4.5,2.1,5.1,4.1],backgroundColor:["dark"===this.layoutService.config().colorScheme?"#879AAF":"#E4E7EB"],hoverBackgroundColor:[Z],fill:!0,borderRadius:10,borderSkipped:"top bottom",barPercentage:.3}]},this.overviewChartOptions={plugins:{legend:{position:"bottom",align:"end",labels:{color:a}}},responsive:!0,hover:{mode:"index"},scales:{y:{max:7,min:0,ticks:{stepSize:0,callback:function(T,E){return 0===E?T:T+"k"},color:a},grid:{borderDash:[2,2],color:s,drawBorder:!1}},x:{grid:{display:!1},ticks:{beginAtZero:!0,color:a}}}},this.revenueChartData={labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{data:[11,17,30,60,88,92],borderColor:"rgba(25, 146, 212, 0.5)",pointBorderColor:"transparent",pointBackgroundColor:"transparent",fill:!1,tension:.4},{data:[11,19,39,59,69,71],borderColor:"rgba(25, 146, 212, 0.5)",pointBorderColor:"transparent",pointBackgroundColor:"transparent",fill:!1,tension:.4},{data:[11,17,21,30,47,83],backgroundColor:"rgba(25, 146, 212, 0.2)",borderColor:"rgba(25, 146, 212, 0.5)",pointBorderColor:"transparent",pointBackgroundColor:"transparent",fill:!0,tension:.4}]},this.revenueChartOptions={plugins:{legend:{display:!1}},scales:{y:{grid:{color:s},max:100,min:0,ticks:{color:a}},x:{grid:{color:s},ticks:{color:a,beginAtZero:!0}}}}}changeOverviewWeek(){const n=[[2,1,.5,.6,.5,1.3,1],[4.88,3,6.2,4.5,2.1,5.1,4.1]],a=[[3,2.4,1.5,.6,4.5,3.3,2],[3.2,4.1,2.2,5.5,4.1,3.6,3.5]];"1"===this.selectedOverviewWeek.code?(this.overviewChartData.datasets[0].data=a[parseInt("0")],this.overviewChartData.datasets[1].data=a[parseInt("1")]):(this.overviewChartData.datasets[0].data=n[parseInt("0")],this.overviewChartData.datasets[1].data=n[parseInt("1")]),this.overviewChartData={...this.overviewChartData}}get colorScheme(){return this.layoutService.config().colorScheme}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}static#e=this.\u0275fac=function(a){return new(a||i)(e.Y36(C.P))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["ng-component"]],decls:522,vars:50,consts:[[1,"grid"],[1,"col-12","lg:col-6","xl:col-3"],[1,"card","p-0","overflow-hidden","flex","flex-column"],[1,"flex","align-items-center","p-3"],[1,"pi","pi-users","text-6xl","text-blue-500"],[1,"ml-3"],[1,"text-blue-500","block","white-space-nowrap"],[1,"text-blue-500","block","text-4xl","font-bold"],["alt","users",1,"w-full",3,"src"],[1,"pi","pi-map","text-6xl","text-orange-500"],[1,"text-orange-500","block","white-space-nowrap"],[1,"text-orange-500","block","text-4xl","font-bold"],["alt","locations",1,"w-full",3,"src"],[1,"pi","pi-directions","text-6xl","text-green-500"],[1,"text-green-500","block","white-space-nowrap"],[1,"text-green-500","block","text-4xl","font-bold"],["alt","conversion",1,"w-full",3,"src"],[1,"card","h-full","p-0","overflow-hidden","flex","flex-column"],[1,"pi","pi-comments","text-6xl","text-purple-500"],[1,"text-purple-500","block","white-space-nowrap"],[1,"text-purple-500","block","text-4xl","font-bold"],["alt","interactions",1,"w-full","mt-auto",3,"src"],[1,"col-12","xl:col-6"],[1,"card","h-full"],[1,"flex","justify-content-between","align-items-center","mb-3"],["optionLabel","name",3,"options","ngModel","ngModelChange","onChange"],[1,"graph"],["type","bar","height","400px",3,"data","options"],["overviewchart",""],[1,"list-none","p-0","m-0"],[1,"mb-4","flex","align-items-center"],["label","BS","size","large","shape","circle","styleClass","text-base font-bold"],[1,"block"],[1,"text-color-secondary","block"],["label","LA","size","large","shape","circle","styleClass","text-base font-bold"],["label","JB","size","large","shape","circle","styleClass","text-base font-bold"],["label","JJ","size","large","shape","circle","styleClass","text-base font-bold"],["label","AB","size","large","shape","circle","styleClass","text-base font-bold"],["label","AF","size","large","shape","circle","styleClass","text-base font-bold"],["type","button","pButton","","pRipple","","label","View All","icon","pi pi-arrow-right","iconPos","right",1,"w-full","mt-3"],[1,"card"],[1,"text-center","mb-5"],["alt","graph",1,"w-full",3,"src"],[1,"mb-4","flex","align-items-center","justify-content-start"],["icon","pi pi-user-edit","size","large","shape","circle","styleClass","text-base font-bold"],[1,"text-blue-500","hover:underline","cursor-pointer","block","font-bold"],["icon","pi pi-send","size","large","shape","circle","styleClass","text-base font-bold"],["icon","pi pi-video","size","large","shape","circle","styleClass","text-base font-bold"],["icon","pi pi-briefcase","size","large","shape","circle","styleClass","text-base font-bold"],[1,"col-12","lg:col-6","xl:col-4"],[1,"flex","align-items-center","justify-content-between","pb-2","mb-1","border-bottom-1","surface-border"],[1,"font-bold"],[1,"flex","flex-wrap","align-items-center","justify-content-between","py-1"],["styleClass","w-8rem justify-content-evenly"],["image","assets/demo/images/avatar/amyelsner.png","shape","circle"],["image","assets/demo/images/avatar/asiyajavayant.png","shape","circle"],["image","assets/demo/images/avatar/onyamalimba.png","shape","circle"],["image","assets/demo/images/avatar/ionibowcher.png","shape","circle"],["styleClass","w-6rem justify-content-evenly"],["image","assets/demo/images/avatar/annafali.png","shape","circle"],["image","assets/demo/images/avatar/bernardodominic.png","shape","circle"],["image","assets/demo/images/avatar/elwinsharvill.png","shape","circle"],["styleClass","w-4rem justify-content-evenly"],["image","assets/demo/images/avatar/ivanmagalhaes.png","shape","circle"],[1,"flex","flex-wrap","align-items-center","justify-content-between","py-2"],["header","Europe","styleClass","p-0"],[1,"w-full"],[1,"py-1"],[1,"text-right"],[1,"inline-flex","align-items-center","justify-content-between","px-2","py-1","bg-green-100","text-green-900","border-round",2,"min-width","3.5rem"],[1,"pi","pi-arrow-up"],[1,"font-bold","ml-1"],[1,"inline-flex","p-1","align-items-center","justify-content-center","surface-100","text-700","p-1","border-round","text-sm",2,"min-width","4rem"],[1,"inline-flex","p-1","align-items-center","justify-content-center","surface-700","text-100","p-1","border-round","text-sm",2,"min-width","4rem"],[1,"inline-flex","align-items-center","justify-content-between","px-2","py-1","bg-red-100","text-red-900","border-round",2,"min-width","3.5rem"],[1,"pi","pi-arrow-down"],["header","United States"],[1,"flex","flex-column","mb-3"],[1,"text-lg","mb-3"],["value","Conversion","styleClass","mb-3"],[1,"inline-flex","align-items-center"],[1,"pi","pi-clock","mr-1","text-color-secondary"],[1,"text-color-secondary"],[1,"font-bold","ml-2"],[1,"line-height-3","mt-0","mb-5"],[1,"flex","flex-wrap","align-items-center","justify-content-between"],[1,"flex","align-items-center"],["pButton","","type","button","icon","pi pi-angle-left",1,"p-button-outlined","p-button-rounded","p-button-plain","p-button-sm","mr-2","p-2","w-2rem","h-2rem"],["pButton","","type","button","icon","pi pi-angle-right",1,"p-button-outlined","p-button-rounded","p-button-plain","p-button-sm","p-2","w-2rem","h-2rem"],[1,"font-bold","ml-3"],["image","assets/demo/images/avatar/xuxuefeng.png","shape","circle"],[1,"col-12","lg:col-6"],[1,"card","widget-timeline"],[1,"flex","mb-3"],[1,"flex","flex-column","align-items-center"],[1,"flex","align-items-center","justify-content-center","border-circle","p-2","timeline-icon","bg-blue-100","text-blue-500"],[1,"pi","pi-twitter"],[1,"h-full","bg-blue-100",2,"width","2px","min-height","4rem"],[1,"ml-3","flex-1"],[1,"flex","align-items-center","justify-content-between","mb-3"],[1,"font-bold","text-color-secondary"],[1,"p-3","border-round"],[1,"flex","align-items-center","justify-content-between","mb-2"],["src","assets/demo/images/avatar/xuxuefeng.png","alt","avatar",1,"w-2rem"],[1,"font-bold","mb-2"],[1,"text-color-secondary","text-sm","line-height-3","mb-3",2,"max-width","28rem"],["styleClass","w-full md:w-6",3,"value","showValue"],[1,"flex","align-items-center","justify-content-center","border-circle","p-2","timeline-icon","bg-yellow-100","text-yellow-500"],[1,"pi","pi-star"],[1,"h-full","bg-yellow-100",2,"width","2px","min-height","4rem"],[1,"flex","align-items-center","justify-content-between"],[1,"flex","align-items-center","justify-content-center","border-circle","p-2","timeline-icon","bg-green-100","text-green-500"],[1,"pi","pi-link"],[1,"h-full","bg-green-100",2,"width","2px","min-height","4rem"],[1,"flex","align-items-center","justify-content-start","mb-2"],["src","assets/demo/images/dashboard/bg-detail.svg","alt","bg",1,"w-2rem"],[1,"flex","align-items-center","justify-content-start"],[1,"text-center"],["pRipple","","styleClass","p-button-text","icon","pi pi-chevron-down","label","View More"],["type","line","id","nasdaq-chart","height","348",3,"data","options"]],template:function(a,r){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"i",4),e.TgZ(5,"div",5)(6,"span",6),e._uU(7,"USERS SIGNED UP"),e.qZA(),e.TgZ(8,"span",7),e._uU(9,"3882"),e.qZA()()(),e._UZ(10,"img",8),e.qZA()(),e.TgZ(11,"div",1)(12,"div",2)(13,"div",3),e._UZ(14,"i",9),e.TgZ(15,"div",5)(16,"span",10),e._uU(17,"LIFETIME VALUE"),e.qZA(),e.TgZ(18,"span",11),e._uU(19,"532"),e.qZA()()(),e._UZ(20,"img",12),e.qZA()(),e.TgZ(21,"div",1)(22,"div",2)(23,"div",3),e._UZ(24,"i",13),e.TgZ(25,"div",5)(26,"span",14),e._uU(27,"CONVERSION RATE"),e.qZA(),e.TgZ(28,"span",15),e._uU(29,"12.6%"),e.qZA()()(),e._UZ(30,"img",16),e.qZA()(),e.TgZ(31,"div",1)(32,"div",17)(33,"div",3),e._UZ(34,"i",18),e.TgZ(35,"div",5)(36,"span",19),e._uU(37,"ACTIVE TRIALS"),e.qZA(),e.TgZ(38,"span",20),e._uU(39,"440"),e.qZA()()(),e._UZ(40,"img",21),e.qZA()(),e.TgZ(41,"div",22)(42,"div",23)(43,"div",24)(44,"h5"),e._uU(45,"Acquisition Overview"),e.qZA(),e.TgZ(46,"p-dropdown",25),e.NdJ("ngModelChange",function(s){return r.selectedOverviewWeek=s})("onChange",function(){return r.changeOverviewWeek()}),e.qZA()(),e.TgZ(47,"div",26),e._UZ(48,"p-chart",27,28),e.qZA()()(),e.TgZ(50,"div",1)(51,"div",23)(52,"h5"),e._uU(53,"Latest Customers"),e.qZA(),e.TgZ(54,"ul",29)(55,"li",30),e._UZ(56,"p-avatar",31),e.TgZ(57,"div",5)(58,"span",32),e._uU(59,"Brooklyn Simmons"),e.qZA(),e.TgZ(60,"span",33),e._uU(61,"Manager at Mitsubishi"),e.qZA()()(),e.TgZ(62,"li",30),e._UZ(63,"p-avatar",34),e.TgZ(64,"div",5)(65,"span",32),e._uU(66,"Leslie Alexander"),e.qZA(),e.TgZ(67,"span",33),e._uU(68,"Customer Success at General Electric"),e.qZA()()(),e.TgZ(69,"li",30),e._UZ(70,"p-avatar",35),e.TgZ(71,"div",5)(72,"span",32),e._uU(73,"Jerome Bell"),e.qZA(),e.TgZ(74,"span",33),e._uU(75,"Mario Carrier at Nintendo"),e.qZA()()(),e.TgZ(76,"li",30),e._UZ(77,"p-avatar",36),e.TgZ(78,"div",5)(79,"span",32),e._uU(80,"Jim Jones"),e.qZA(),e.TgZ(81,"span",33),e._uU(82,"Reliability Engineer at eBay"),e.qZA()()(),e.TgZ(83,"li",30),e._UZ(84,"p-avatar",37),e.TgZ(85,"div",5)(86,"span",32),e._uU(87,"Annette Black"),e.qZA(),e.TgZ(88,"span",33),e._uU(89,"Delivery Woman at Pizza Hut"),e.qZA()()(),e.TgZ(90,"li",30),e._UZ(91,"p-avatar",38),e.TgZ(92,"div",5)(93,"span",32),e._uU(94,"Albert Flores"),e.qZA(),e.TgZ(95,"span",33),e._uU(96,"Team Leader at Insomniac Games"),e.qZA()()()(),e._UZ(97,"button",39),e.qZA()(),e.TgZ(98,"div",1)(99,"div",40)(100,"div",41),e._UZ(101,"img",42),e.qZA(),e.TgZ(102,"ul",29)(103,"li",43),e._UZ(104,"p-avatar",44),e.TgZ(105,"div",5)(106,"span",32),e._uU(107,"Add your personal information"),e.qZA(),e.TgZ(108,"span",45),e._uU(109,"Go Profile Edit"),e.qZA()()(),e.TgZ(110,"li",43),e._UZ(111,"p-avatar",46),e.TgZ(112,"div",5)(113,"span",32),e._uU(114,"Verify your phone"),e.qZA(),e.TgZ(115,"span",45),e._uU(116,"Send Verification SMS"),e.qZA()()(),e.TgZ(117,"li",43),e._UZ(118,"p-avatar",47),e.TgZ(119,"div",5)(120,"span",32),e._uU(121,"Verify your Face ID"),e.qZA(),e.TgZ(122,"span",45),e._uU(123,"Upload Pictures"),e.qZA()()(),e.TgZ(124,"li",43),e._UZ(125,"p-avatar",48),e.TgZ(126,"div",5)(127,"span",32),e._uU(128,"Give permissions for personal data"),e.qZA(),e.TgZ(129,"span",45),e._uU(130,"View Agreement"),e.qZA()()()()()(),e.TgZ(131,"div",49)(132,"div",23)(133,"h5"),e._uU(134,"Trials Leads By Role"),e.qZA(),e.TgZ(135,"div",50)(136,"span",51),e._uU(137,"Role"),e.qZA(),e.TgZ(138,"span",51),e._uU(139,"Leads"),e.qZA()(),e.TgZ(140,"ul",29)(141,"li",52)(142,"span"),e._uU(143,"Finance"),e.qZA(),e.TgZ(144,"p-avatarGroup",53),e._UZ(145,"p-avatar",54)(146,"p-avatar",55)(147,"p-avatar",56)(148,"p-avatar",57),e.qZA()(),e.TgZ(149,"li",52)(150,"span"),e._uU(151,"Management"),e.qZA(),e.TgZ(152,"p-avatarGroup",58),e._UZ(153,"p-avatar",59)(154,"p-avatar",60)(155,"p-avatar",61),e.qZA()(),e.TgZ(156,"li",52)(157,"span"),e._uU(158,"Human Resources"),e.qZA(),e.TgZ(159,"p-avatarGroup",62),e._UZ(160,"p-avatar",63)(161,"p-avatar",56),e.qZA()(),e.TgZ(162,"li",64)(163,"span"),e._uU(164,"Development"),e.qZA(),e.TgZ(165,"p-avatarGroup",53),e._UZ(166,"p-avatar",54)(167,"p-avatar",55)(168,"p-avatar",56)(169,"p-avatar",57),e.qZA()(),e.TgZ(170,"li",64)(171,"span"),e._uU(172,"Design"),e.qZA(),e.TgZ(173,"p-avatarGroup",62),e._UZ(174,"p-avatar",54)(175,"p-avatar",55),e.qZA()(),e.TgZ(176,"li",64)(177,"span"),e._uU(178,"R&D"),e.qZA(),e.TgZ(179,"p-avatarGroup",58),e._UZ(180,"p-avatar",54)(181,"p-avatar",55)(182,"p-avatar",56),e.qZA()(),e.TgZ(183,"li",64)(184,"span"),e._uU(185,"Reliability"),e.qZA(),e.TgZ(186,"p-avatarGroup",62),e._UZ(187,"p-avatar",54)(188,"p-avatar",55),e.qZA()(),e.TgZ(189,"li",64)(190,"span"),e._uU(191,"Social Media"),e.qZA(),e.TgZ(192,"p-avatarGroup",53),e._UZ(193,"p-avatar",54)(194,"p-avatar",55)(195,"p-avatar",56)(196,"p-avatar",57),e.qZA()()()()(),e.TgZ(197,"div",49)(198,"div",23)(199,"h5"),e._uU(200,"Leads By Region"),e.qZA(),e.TgZ(201,"p-tabView")(202,"p-tabPanel",65)(203,"table",66)(204,"tbody")(205,"tr")(206,"td",67),e._uU(207,"\u{1f1ee}\u{1f1f9} Italy"),e.qZA(),e.TgZ(208,"td")(209,"span",51),e._uU(210,"90"),e.qZA()(),e.TgZ(211,"td",68)(212,"div",69),e._UZ(213,"i",70),e.TgZ(214,"span",71),e._uU(215,"12"),e.qZA()()(),e.TgZ(216,"td",68)(217,"div",72)(218,"span",51),e._uU(219,"LOW"),e.qZA()()()(),e.TgZ(220,"tr")(221,"td",67),e._uU(222,"\u{1f1eb}\u{1f1f7} France"),e.qZA(),e.TgZ(223,"td")(224,"span",51),e._uU(225,"61"),e.qZA()(),e.TgZ(226,"td",68)(227,"div",69),e._UZ(228,"i",70),e.TgZ(229,"span",71),e._uU(230,"8"),e.qZA()()(),e.TgZ(231,"td",68)(232,"div",73)(233,"span",51),e._uU(234,"HIGH"),e.qZA()()()(),e.TgZ(235,"tr")(236,"td",67),e._uU(237,"\u{1f1e9}\u{1f1ea} Germany"),e.qZA(),e.TgZ(238,"td")(239,"span",51),e._uU(240,"46"),e.qZA()(),e.TgZ(241,"td",68)(242,"div",69),e._UZ(243,"i",70),e.TgZ(244,"span",71),e._uU(245,"5"),e.qZA()()(),e.TgZ(246,"td",68)(247,"div",73)(248,"span",51),e._uU(249,"HIGH"),e.qZA()()()(),e.TgZ(250,"tr")(251,"td",67),e._uU(252,"\u{1f1f3}\u{1f1f1} Netherlands"),e.qZA(),e.TgZ(253,"td")(254,"span",51),e._uU(255,"28"),e.qZA()(),e.TgZ(256,"td",68)(257,"div",74),e._UZ(258,"i",75),e.TgZ(259,"span",71),e._uU(260,"19"),e.qZA()()(),e.TgZ(261,"td",68)(262,"div",72)(263,"span",51),e._uU(264,"LOW"),e.qZA()()()(),e.TgZ(265,"tr")(266,"td",67),e._uU(267,"\u{1f1ea}\u{1f1f8} Spain"),e.qZA(),e.TgZ(268,"td")(269,"span",51),e._uU(270,"17"),e.qZA()(),e.TgZ(271,"td",68)(272,"div",74),e._UZ(273,"i",75),e.TgZ(274,"span",71),e._uU(275,"7"),e.qZA()()(),e.TgZ(276,"td",68)(277,"div",73)(278,"span",51),e._uU(279,"HIGH"),e.qZA()()()(),e.TgZ(280,"tr")(281,"td",67),e._uU(282,"\u{1f1e7}\u{1f1f7} Brazil"),e.qZA(),e.TgZ(283,"td")(284,"span",51),e._uU(285,"37"),e.qZA()(),e.TgZ(286,"td",68)(287,"div",74),e._UZ(288,"i",75),e.TgZ(289,"span",71),e._uU(290,"7"),e.qZA()()(),e.TgZ(291,"td",68)(292,"div",73)(293,"span",51),e._uU(294,"HIGH"),e.qZA()()()(),e.TgZ(295,"tr")(296,"td",67),e._uU(297,"\u{1f1f2}\u{1f1fd} Mexico"),e.qZA(),e.TgZ(298,"td")(299,"span",51),e._uU(300,"27"),e.qZA()(),e.TgZ(301,"td",68)(302,"div",69),e._UZ(303,"i",70),e.TgZ(304,"span",71),e._uU(305,"4"),e.qZA()()(),e.TgZ(306,"td",68)(307,"div",73)(308,"span",51),e._uU(309,"HIGH"),e.qZA()()()()()()(),e.TgZ(310,"p-tabPanel",76)(311,"table",66)(312,"tbody")(313,"tr")(314,"td",67),e._uU(315,"California"),e.qZA(),e.TgZ(316,"td")(317,"span",51),e._uU(318,"79"),e.qZA()(),e.TgZ(319,"td",68)(320,"div",69),e._UZ(321,"i",70),e.TgZ(322,"span",71),e._uU(323,"11"),e.qZA()()(),e.TgZ(324,"td",68)(325,"div",73)(326,"span",51),e._uU(327,"HIGH"),e.qZA()()()(),e.TgZ(328,"tr")(329,"td",67),e._uU(330,"Texas"),e.qZA(),e.TgZ(331,"td")(332,"span",51),e._uU(333,"71"),e.qZA()(),e.TgZ(334,"td",68)(335,"div",69),e._UZ(336,"i",70),e.TgZ(337,"span",71),e._uU(338,"9"),e.qZA()()(),e.TgZ(339,"td",68)(340,"div",72)(341,"span",51),e._uU(342,"LOW"),e.qZA()()()(),e.TgZ(343,"tr")(344,"td",67),e._uU(345,"Florida"),e.qZA(),e.TgZ(346,"td")(347,"span",51),e._uU(348,"55"),e.qZA()(),e.TgZ(349,"td",68)(350,"div",74),e._UZ(351,"i",75),e.TgZ(352,"span",71),e._uU(353,"15"),e.qZA()()(),e.TgZ(354,"td",68)(355,"div",72)(356,"span",51),e._uU(357,"LOW"),e.qZA()()()(),e.TgZ(358,"tr")(359,"td",67),e._uU(360,"New York"),e.qZA(),e.TgZ(361,"td")(362,"span",51),e._uU(363,"48"),e.qZA()(),e.TgZ(364,"td",68)(365,"div",74),e._UZ(366,"i",75),e.TgZ(367,"span",71),e._uU(368,"10"),e.qZA()()(),e.TgZ(369,"td",68)(370,"div",73)(371,"span",51),e._uU(372,"HIGH"),e.qZA()()()(),e.TgZ(373,"tr")(374,"td",67),e._uU(375,"Ohio"),e.qZA(),e.TgZ(376,"td")(377,"span",51),e._uU(378,"26"),e.qZA()(),e.TgZ(379,"td",68)(380,"div",74),e._UZ(381,"i",75),e.TgZ(382,"span",71),e._uU(383,"6"),e.qZA()()(),e.TgZ(384,"td",68)(385,"div",73)(386,"span",51),e._uU(387,"HIGH"),e.qZA()()()(),e.TgZ(388,"tr")(389,"td",67),e._uU(390,"New York"),e.qZA(),e.TgZ(391,"td")(392,"span",51),e._uU(393,"48"),e.qZA()(),e.TgZ(394,"td",68)(395,"div",74),e._UZ(396,"i",75),e.TgZ(397,"span",71),e._uU(398,"10"),e.qZA()()(),e.TgZ(399,"td",68)(400,"div",73)(401,"span",51),e._uU(402,"HIGH"),e.qZA()()()(),e.TgZ(403,"tr")(404,"td",67),e._uU(405,"Ohio"),e.qZA(),e.TgZ(406,"td")(407,"span",51),e._uU(408,"26"),e.qZA()(),e.TgZ(409,"td",68)(410,"div",74),e._UZ(411,"i",75),e.TgZ(412,"span",71),e._uU(413,"6"),e.qZA()()(),e.TgZ(414,"td",68)(415,"div",73)(416,"span",51),e._uU(417,"HIGH"),e.qZA()()()()()()()()()(),e.TgZ(418,"div",49)(419,"div",23)(420,"h5"),e._uU(421,"Recent Blog Posts"),e.qZA(),e.TgZ(422,"div",77)(423,"span",78),e._uU(424,"What is the Customer Journey?"),e.qZA(),e._UZ(425,"p-tag",79),e.TgZ(426,"span",80),e._UZ(427,"i",81),e.TgZ(428,"span",82),e._uU(429,"Jan 15."),e.qZA(),e.TgZ(430,"span",83),e._uU(431,"4 days 36 mins"),e.qZA()()(),e.TgZ(432,"p",84),e._uU(433,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),e.qZA(),e.TgZ(434,"p",84),e._uU(435,"Sit amet nulla facilisi morbi tempus iaculis. Dolor magna eget est lorem ipsum dolor sit. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus."),e.qZA(),e.TgZ(436,"div",85)(437,"div",86),e._UZ(438,"button",87)(439,"button",88),e.TgZ(440,"span",89),e._uU(441,"4"),e.qZA(),e.TgZ(442,"span"),e._uU(443,"/8"),e.qZA()(),e.TgZ(444,"p-avatarGroup"),e._UZ(445,"p-avatar",54)(446,"p-avatar",55)(447,"p-avatar",56)(448,"p-avatar",57)(449,"p-avatar",90),e.qZA()()()(),e.TgZ(450,"div",91)(451,"div",92)(452,"h5"),e._uU(453,"Timeline"),e.qZA(),e.TgZ(454,"ul",29)(455,"li",93)(456,"div",94)(457,"span",95),e._UZ(458,"i",96),e.qZA(),e._UZ(459,"div",97),e.qZA(),e.TgZ(460,"div",98)(461,"div",99)(462,"span")(463,"strong"),e._uU(464,"Tom Mathias"),e.qZA(),e._uU(465," retweeted a tweet about your following keyword. "),e.qZA(),e.TgZ(466,"span",100),e._uU(467,"46m"),e.qZA()(),e.TgZ(468,"div",101)(469,"div",102),e._UZ(470,"img",103),e.TgZ(471,"p-avatarGroup"),e._UZ(472,"p-avatar",54)(473,"p-avatar",55)(474,"p-avatar",56),e.qZA()(),e.TgZ(475,"div",104),e._uU(476,"Jeff Atwood"),e.qZA(),e.TgZ(477,"p",105),e._uU(478,"Hooray! I suck at hardware but I was able to get the pi zero W, plus usb case, plus two color e-ink hat, to work!"),e.qZA(),e._UZ(479,"p-progressBar",106),e.qZA()()(),e.TgZ(480,"li",93)(481,"div",94)(482,"span",107),e._UZ(483,"i",108),e.qZA(),e._UZ(484,"div",109),e.qZA(),e.TgZ(485,"div",98)(486,"div",110)(487,"span")(488,"strong"),e._uU(489,"Scott Wesley"),e.qZA(),e._uU(490," starred NS0021 on customer list."),e.qZA(),e.TgZ(491,"span",100),e._uU(492,"1h 51m"),e.qZA()()()(),e.TgZ(493,"li",93)(494,"div",94)(495,"span",111),e._UZ(496,"i",112),e.qZA(),e._UZ(497,"div",113),e.qZA(),e.TgZ(498,"div",98)(499,"div",99)(500,"span")(501,"strong"),e._uU(502,"Jorge Gomez"),e.qZA(),e._uU(503," shared design files on cloud. "),e.qZA(),e.TgZ(504,"span",100),e._uU(505,"12h"),e.qZA()(),e.TgZ(506,"ul",29)(507,"li",114),e._UZ(508,"img",115),e.TgZ(509,"span",83),e._uU(510,"01.Verona-Remastered.fig"),e.qZA()(),e.TgZ(511,"li",116),e._UZ(512,"img",115),e.TgZ(513,"span",83),e._uU(514,"02.Verona-Marketing.fig"),e.qZA()()()()(),e.TgZ(515,"li",117),e._UZ(516,"p-button",118),e.qZA()()()(),e.TgZ(517,"div",22)(518,"div",40)(519,"h5"),e._uU(520,"Monthly Recurring Revenue Growth"),e.qZA(),e._UZ(521,"p-chart",119),e.qZA()()()),2&a&&(e.xp6(10),e.Q6J("src","assets/demo/images/dashboard/users"+("light"===r.colorScheme?"":"-dark")+".svg",e.LSH),e.xp6(10),e.Q6J("src","assets/demo/images/dashboard/locations"+("light"===r.colorScheme?"":"-dark")+".svg",e.LSH),e.xp6(10),e.Q6J("src","assets/demo/images/dashboard/rate"+("light"===r.colorScheme?"":"-dark")+".svg",e.LSH),e.xp6(10),e.Q6J("src","assets/demo/images/dashboard/interactions"+("light"===r.colorScheme?"":"-dark")+".svg",e.LSH),e.xp6(6),e.Q6J("options",r.overviewWeeks)("ngModel",r.selectedOverviewWeek),e.xp6(2),e.Q6J("data",r.overviewChartData)("options",r.overviewChartOptions),e.xp6(8),e.Akn(e.DdM(37,w)),e.xp6(7),e.Akn(e.DdM(38,o)),e.xp6(7),e.Akn(e.DdM(39,D)),e.xp6(7),e.Akn(e.DdM(40,S)),e.xp6(7),e.Akn(e.DdM(41,k)),e.xp6(7),e.Akn(e.DdM(42,o)),e.xp6(10),e.Q6J("src","assets/demo/images/dashboard/completion-graph-"+("light"===r.colorScheme?"light":"dark")+".svg",e.LSH),e.xp6(3),e.Akn(e.DdM(43,o)),e.xp6(7),e.Akn(e.DdM(44,o)),e.xp6(7),e.Akn(e.DdM(45,o)),e.xp6(7),e.Akn(e.DdM(46,o)),e.xp6(343),e.Akn(e.VKq(47,B,"dark"===r.colorScheme?"rgba(227, 248, 255, 0.1)":"rgba(227, 248, 255, 0.5)")),e.xp6(11),e.Akn(e.DdM(49,M)),e.Q6J("value",50)("showValue",!1),e.xp6(42),e.Q6J("data",r.revenueChartData)("options",r.revenueChartOptions))},dependencies:[l.Hq,l.zx,v.H,p.V,c.C,d.JJ,d.On,b.Lt,h.H,U.q,A.k,g.xf,g.x4],encapsulation:2})}return i})(),F=(()=>{class i{static#e=this.\u0275fac=function(a){return new(a||i)};static#t=this.\u0275mod=e.oAB({type:i});static#a=this.\u0275inj=e.cJS({imports:[m.Bz.forChild([{path:"",component:H}]),m.Bz]})}return i})();var G=t(1230);let J=(()=>{class i{static#e=this.\u0275fac=function(a){return new(a||i)};static#t=this.\u0275mod=e.oAB({type:i});static#a=this.\u0275inj=e.cJS({imports:[f.ez,l.hJ,v.T,p.W,_.z,q.U$,x.L$,c.S,d.u5,b.kW,h.Q,U.F,A.q,G.Q,g.LU,p.W,F]})}return i})()}}]);