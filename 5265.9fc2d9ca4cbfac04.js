"use strict";(self.webpackChunkverona_ng=self.webpackChunkverona_ng||[]).push([[5265],{1480:(k,v,p)=>{p.d(v,{Gg:()=>Q,cL:()=>w});var o=p(6814),e=p(9467),m=p(95),_=p(5219),g=p(7778),c=p(8468),T=p(3714),d=p(2332);const r=["inputtext"],h=["container"];function C(l,u){1&l&&e.GkF(0)}function I(l,u){if(1&l&&(e.TgZ(0,"span",12),e._uU(1),e.qZA()),2&l){const t=e.oxw().$implicit,n=e.oxw();e.uIk("data-pc-section","label"),e.xp6(1),e.Oqu(n.field?n.resolveFieldData(t,n.field):t)}}function x(l,u){if(1&l){const t=e.EpF();e.TgZ(0,"TimesCircleIcon",15),e.NdJ("click",function(i){e.CHM(t);const s=e.oxw(2).index,a=e.oxw();return e.KtG(a.removeItem(i,s))}),e.qZA()}2&l&&(e.Q6J("styleClass","p-chips-token-icon"),e.uIk("data-pc-section","removeTokenIcon")("aria-hidden",!0))}function b(l,u){}function y(l,u){1&l&&e.YNc(0,b,0,0,"ng-template")}function E(l,u){if(1&l){const t=e.EpF();e.TgZ(0,"span",16),e.NdJ("click",function(i){e.CHM(t);const s=e.oxw(2).index,a=e.oxw();return e.KtG(a.removeItem(i,s))}),e.YNc(1,y,1,0,null,17),e.qZA()}if(2&l){const t=e.oxw(3);e.uIk("data-pc-section","removeTokenIcon")("aria-hidden",!0),e.xp6(1),e.Q6J("ngTemplateOutlet",t.removeTokenIconTemplate)}}function O(l,u){if(1&l&&(e.ynx(0),e.YNc(1,x,1,3,"TimesCircleIcon",13)(2,E,2,3,"span",14),e.BQk()),2&l){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",!t.removeTokenIconTemplate),e.xp6(1),e.Q6J("ngIf",t.removeTokenIconTemplate)}}const M=l=>({"p-chips-token":!0,"p-focus":l}),D=l=>({$implicit:l});function S(l,u){if(1&l){const t=e.EpF();e.TgZ(0,"li",8,9),e.NdJ("click",function(i){const a=e.CHM(t).$implicit,f=e.oxw();return e.KtG(f.onItemClick(i,a))}),e.YNc(2,C,1,0,"ng-container",10)(3,I,2,2,"span",11)(4,O,3,2,"ng-container",7),e.qZA()}if(2&l){const t=u.$implicit,n=u.index,i=e.oxw();e.Q6J("ngClass",e.VKq(12,M,i.focusedIndex===n)),e.uIk("id",i.id+"_chips_item_"+n)("ariaLabel",t)("aria-selected",!0)("aria-setsize",i.value.length)("aria-pointset",n+1)("data-p-focused",i.focusedIndex===n)("data-pc-section","token"),e.xp6(2),e.Q6J("ngTemplateOutlet",i.itemTemplate)("ngTemplateOutletContext",e.VKq(14,D,t)),e.xp6(1),e.Q6J("ngIf",!i.itemTemplate),e.xp6(1),e.Q6J("ngIf",!i.disabled)}}function B(l,u){if(1&l){const t=e.EpF();e.TgZ(0,"TimesIcon",15),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.clear())}),e.qZA()}2&l&&e.Q6J("styleClass","p-chips-clear-icon")}function A(l,u){}function F(l,u){1&l&&e.YNc(0,A,0,0,"ng-template")}function V(l,u){if(1&l){const t=e.EpF();e.TgZ(0,"span",19),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.clear())}),e.YNc(1,F,1,0,null,17),e.qZA()}if(2&l){const t=e.oxw(2);e.xp6(1),e.Q6J("ngTemplateOutlet",t.clearIconTemplate)}}function R(l,u){if(1&l&&(e.TgZ(0,"li"),e.YNc(1,B,1,1,"TimesIcon",13)(2,V,2,1,"span",18),e.qZA()),2&l){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",!t.clearIconTemplate),e.xp6(1),e.Q6J("ngIf",t.clearIconTemplate)}}const K=(l,u,t,n)=>({"p-chips p-component p-input-wrapper":!0,"p-disabled":l,"p-focus":u,"p-inputwrapper-filled":t,"p-inputwrapper-focus":n}),J=()=>({"p-inputtext p-chips-multiple-container":!0}),P=l=>({"p-chips-clearable":l}),L={provide:m.JU,useExisting:(0,e.Gpc)(()=>w),multi:!0};let w=(()=>{class l{document;el;cd;style;styleClass;disabled;field;placeholder;max;ariaLabel;ariaLabelledBy;tabindex;inputId;allowDuplicate=!0;inputStyle;inputStyleClass;addOnTab;addOnBlur;separator;showClear=!1;onAdd=new e.vpe;onRemove=new e.vpe;onFocus=new e.vpe;onBlur=new e.vpe;onChipClick=new e.vpe;onClear=new e.vpe;inputViewChild;containerViewChild;templates;itemTemplate;removeTokenIconTemplate;clearIconTemplate;value;onModelChange=()=>{};onModelTouched=()=>{};valueChanged;id=(0,d.Th)();focused;focusedIndex;filled;get focusedOptionId(){return null!==this.focusedIndex?`${this.id}_chips_item_${this.focusedIndex}`:null}get isMaxedOut(){return this.max&&this.value&&this.max===this.value.length}constructor(t,n,i){this.document=t,this.el=n,this.cd=i}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"item":default:this.itemTemplate=t.template;break;case"removetokenicon":this.removeTokenIconTemplate=t.template;break;case"clearicon":this.clearIconTemplate=t.template}}),this.updateFilledState()}onWrapperClick(){this.inputViewChild?.nativeElement.focus()}onContainerFocus(){this.focused=!0}onContainerBlur(){this.focusedIndex=-1,this.focused=!1}onContainerKeyDown(t){switch(t.code){case"ArrowLeft":this.onArrowLeftKeyOn();break;case"ArrowRight":this.onArrowRightKeyOn();break;case"Backspace":this.onBackspaceKeyOn(t)}}onArrowLeftKeyOn(){0===this.inputViewChild.nativeElement.value.length&&this.value&&this.value.length>0&&(this.focusedIndex=null===this.focusedIndex?this.value.length-1:this.focusedIndex-1,this.focusedIndex<0&&(this.focusedIndex=0))}onArrowRightKeyOn(){0===this.inputViewChild.nativeElement.value.length&&this.value&&this.value.length>0&&(this.focusedIndex===this.value.length-1?(this.focusedIndex=null,this.inputViewChild?.nativeElement.focus()):this.focusedIndex++)}onBackspaceKeyOn(t){null!==this.focusedIndex&&this.removeItem(t,this.focusedIndex)}onInput(){this.updateFilledState(),this.focusedIndex=null}onPaste(t){this.disabled||(this.separator&&((t.clipboardData||this.document.defaultView.clipboardData).getData("Text").split(this.separator).forEach(i=>{this.addItem(t,i,!0)}),this.inputViewChild.nativeElement.value=""),this.updateFilledState())}updateFilledState(){this.filled=!(!this.value||0===this.value.length)||this.inputViewChild&&this.inputViewChild.nativeElement&&""!=this.inputViewChild.nativeElement.value}onItemClick(t,n){this.onChipClick.emit({originalEvent:t,value:n})}writeValue(t){this.value=t,this.updateMaxedOut(),this.updateFilledState(),this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}resolveFieldData(t,n){if(t&&n){if(-1==n.indexOf("."))return t[n];{let a=n.split("."),f=t;for(var i=0,s=a.length;i<s;++i)f=f[a[i]];return f}}return null}onInputFocus(t){this.focused=!0,this.focusedIndex=null,this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.focusedIndex=null,this.addOnBlur&&this.inputViewChild.nativeElement.value&&this.addItem(t,this.inputViewChild.nativeElement.value,!1),this.onModelTouched(),this.onBlur.emit(t)}removeItem(t,n){if(this.disabled)return;let i=this.value[n];this.value=this.value.filter((s,a)=>a!=n),this.focusedIndex=null,this.inputViewChild.nativeElement.focus(),this.onModelChange(this.value),this.onRemove.emit({originalEvent:t,value:i}),this.updateFilledState(),this.updateMaxedOut()}addItem(t,n,i){this.value=this.value||[],n&&n.trim().length&&(this.allowDuplicate||-1===this.value.indexOf(n))&&!this.isMaxedOut&&(this.value=[...this.value,n],this.onModelChange(this.value),this.onAdd.emit({originalEvent:t,value:n})),this.updateFilledState(),this.updateMaxedOut(),this.inputViewChild.nativeElement.value="",i&&t.preventDefault()}clear(){this.value=null,this.updateFilledState(),this.onModelChange(this.value),this.updateMaxedOut(),this.onClear.emit()}onKeyDown(t){const n=t.target.value;switch(t.code){case"Backspace":0===n.length&&this.value&&this.value.length>0&&this.removeItem(t,null!==this.focusedIndex?this.focusedIndex:this.value.length-1);break;case"Enter":n&&n.trim().length&&!this.isMaxedOut&&this.addItem(t,n,!0);break;case"ArrowLeft":0===n.length&&this.value&&this.value.length>0&&this.containerViewChild?.nativeElement.focus();break;case"ArrowRight":t.stopPropagation();break;default:this.separator&&(this.separator===t.key||t.key.match(this.separator))&&this.addItem(t,n,!0)}}updateMaxedOut(){this.inputViewChild&&this.inputViewChild.nativeElement&&(this.isMaxedOut?(this.inputViewChild.nativeElement.blur(),this.inputViewChild.nativeElement.disabled=!0):(this.disabled&&this.inputViewChild.nativeElement.blur(),this.inputViewChild.nativeElement.disabled=this.disabled||!1))}static \u0275fac=function(n){return new(n||l)(e.Y36(o.K0),e.Y36(e.SBq),e.Y36(e.sBO))};static \u0275cmp=e.Xpm({type:l,selectors:[["p-chips"]],contentQueries:function(n,i,s){if(1&n&&e.Suo(s,_.jx,4),2&n){let a;e.iGM(a=e.CRH())&&(i.templates=a)}},viewQuery:function(n,i){if(1&n&&(e.Gf(r,5),e.Gf(h,5)),2&n){let s;e.iGM(s=e.CRH())&&(i.inputViewChild=s.first),e.iGM(s=e.CRH())&&(i.containerViewChild=s.first)}},hostAttrs:[1,"p-element","p-inputwrapper"],hostVars:6,hostBindings:function(n,i){2&n&&e.ekj("p-inputwrapper-filled",i.filled)("p-inputwrapper-focus",i.focused)("p-chips-clearable",i.showClear)},inputs:{style:"style",styleClass:"styleClass",disabled:"disabled",field:"field",placeholder:"placeholder",max:"max",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",tabindex:"tabindex",inputId:"inputId",allowDuplicate:"allowDuplicate",inputStyle:"inputStyle",inputStyleClass:"inputStyleClass",addOnTab:"addOnTab",addOnBlur:"addOnBlur",separator:"separator",showClear:"showClear"},outputs:{onAdd:"onAdd",onRemove:"onRemove",onFocus:"onFocus",onBlur:"onBlur",onChipClick:"onChipClick",onClear:"onClear"},features:[e._Bn([L])],decls:8,vars:31,consts:[[3,"ngClass","ngStyle"],["tabindex","-1","role","listbox",3,"ngClass","click","focus","blur","keydown"],["container",""],["role","option",3,"ngClass","click",4,"ngFor","ngForOf"],["role","option",1,"p-chips-input-token",3,"ngClass"],["type","text",3,"disabled","ngStyle","keydown","input","paste","focus","blur"],["inputtext",""],[4,"ngIf"],["role","option",3,"ngClass","click"],["token",""],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","p-chips-token-label",4,"ngIf"],[1,"p-chips-token-label"],[3,"styleClass","click",4,"ngIf"],["class","p-chips-token-icon",3,"click",4,"ngIf"],[3,"styleClass","click"],[1,"p-chips-token-icon",3,"click"],[4,"ngTemplateOutlet"],["class","p-chips-clear-icon",3,"click",4,"ngIf"],[1,"p-chips-clear-icon",3,"click"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"ul",1,2),e.NdJ("click",function(){return i.onWrapperClick()})("focus",function(){return i.onContainerFocus()})("blur",function(){return i.onContainerBlur()})("keydown",function(a){return i.onContainerKeyDown(a)}),e.YNc(3,S,5,16,"li",3),e.TgZ(4,"li",4)(5,"input",5,6),e.NdJ("keydown",function(a){return i.onKeyDown(a)})("input",function(){return i.onInput()})("paste",function(a){return i.onPaste(a)})("focus",function(a){return i.onInputFocus(a)})("blur",function(a){return i.onInputBlur(a)}),e.qZA()(),e.YNc(7,R,3,2,"li",7),e.qZA()()),2&n&&(e.Tol(i.styleClass),e.Q6J("ngClass",e.l5B(23,K,i.disabled,i.focused,i.value&&i.value.length||(null==i.inputViewChild?null:i.inputViewChild.nativeElement.value)&&(null==i.inputViewChild?null:i.inputViewChild.nativeElement.value.length),i.focused))("ngStyle",i.style),e.uIk("data-pc-name","chips")("data-pc-section","root"),e.xp6(1),e.Q6J("ngClass",e.DdM(28,J)),e.uIk("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel)("aria-activedescendant",i.focused?i.focusedOptionId:void 0)("aria-orientation","horizontal")("data-pc-section","container"),e.xp6(2),e.Q6J("ngForOf",i.value),e.xp6(1),e.Q6J("ngClass",e.VKq(29,P,i.showClear&&!i.disabled)),e.uIk("data-pc-section","inputToken"),e.xp6(1),e.Tol(i.inputStyleClass),e.Q6J("disabled",i.disabled||i.isMaxedOut)("ngStyle",i.inputStyle),e.uIk("id",i.inputId)("placeholder",i.value&&i.value.length?null:i.placeholder)("tabindex",i.tabindex),e.xp6(2),e.Q6J("ngIf",null!=i.value&&i.filled&&!i.disabled&&i.showClear))},dependencies:()=>[o.mk,o.sg,o.O5,o.tP,o.PC,c.x,g.q],styles:["@layer primeng{.p-chips{display:inline-flex}.p-chips-multiple-container{margin:0;padding:0;list-style-type:none;cursor:text;overflow:hidden;display:flex;align-items:center;flex-wrap:wrap}.p-chips-token{cursor:default;display:inline-flex;align-items:center;flex:0 0 auto;max-width:100%}.p-chips-token-label{min-width:0%;overflow:auto}.p-chips-token-label::-webkit-scrollbar{display:none}.p-chips-input-token{flex:1 1 auto;display:inline-flex}.p-chips-token-icon{cursor:pointer}.p-chips-input-token input{border:0 none;outline:0 none;background-color:transparent;margin:0;padding:0;box-shadow:none;border-radius:0;width:100%}.p-fluid .p-chips{display:flex}.p-chips-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-chips-clearable .p-inputtext{position:relative}}\n"],encapsulation:2,changeDetection:0})}return l})(),Q=(()=>{class l{static \u0275fac=function(n){return new(n||l)};static \u0275mod=e.oAB({type:l});static \u0275inj=e.cJS({imports:[o.ez,T.j,_.m8,c.x,g.q,T.j,_.m8]})}return l})()},6218:(k,v,p)=>{p.d(v,{A:()=>g,g:()=>_});var o=p(9467),e=p(6814),m=p(95);let _=(()=>{class c{el;ngModel;control;cd;autoResize;onResize=new o.vpe;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;constructor(d,r,h,C){this.el=d,this.ngModel=r,this.control=h,this.cd=C}ngOnInit(){this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewChecked(){this.updateState()}ngAfterViewInit(){this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(d){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(d){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(d||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static \u0275fac=function(r){return new(r||c)(o.Y36(o.SBq),o.Y36(m.On,8),o.Y36(m.a5,8),o.Y36(o.sBO))};static \u0275dir=o.lG2({type:c,selectors:[["","pInputTextarea",""]],hostAttrs:[1,"p-inputtextarea","p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(r,h){1&r&&o.NdJ("input",function(I){return h.onInput(I)}),2&r&&o.ekj("p-filled",h.filled)("p-inputtextarea-resizable",h.autoResize)},inputs:{autoResize:"autoResize"},outputs:{onResize:"onResize"}})}return c})(),g=(()=>{class c{static \u0275fac=function(r){return new(r||c)};static \u0275mod=o.oAB({type:c});static \u0275inj=o.cJS({imports:[e.ez]})}return c})()}}]);