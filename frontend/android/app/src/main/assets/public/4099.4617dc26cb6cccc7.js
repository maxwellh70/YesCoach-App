"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4099],{4099:(P,s,i)=>{i.r(s),i.d(s,{LoginPage:()=>E});var c=i(5861),l=i(6895),g=i(4006),o=i(6114),e=i(8256),u=i(6435),v=i(1407),d=i(6008);let E=(()=>{class r{constructor(n,t,_){this.uService=n,this.router=t,this.apiService=_}ngOnInit(){}signInWithGoogle(){var n=this;return(0,c.Z)(function*(){yield n.uService.signIn(),n.apiService.getUserInfo(n.uService.user.uid).subscribe({next:t=>{n.uService.userInfo=t,n.router.navigate(["/"]).then(()=>{})},error:t=>{n.router.navigate(["/register"]).then(()=>{})}})})()}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(u.K),e.Y36(v.F0),e.Y36(d.s))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-login"]],standalone:!0,features:[e.jDz],decls:12,vars:2,consts:[[3,"translucent"],[3,"fullscreen"],[1,"ion-margin-vertical"],[1,"ion-align-items-center","ion-padding-vertical"],["size","12"],["size","medium","expand","block",3,"click"],["name","logo-google"]],template:function(n,t){1&n&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"YesCoach Login"),e.qZA()()(),e.TgZ(4,"ion-content",1)(5,"ion-grid",2)(6,"ion-row",3)(7,"ion-col",4)(8,"ion-button",5),e.NdJ("click",function(){return t.signInWithGoogle()}),e._uU(9,"Sign in with "),e._UZ(10,"ion-icon",6),e._uU(11,"oogle "),e.qZA()()()()()),2&n&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0))},dependencies:[o.Pc,o.YG,o.wI,o.W2,o.jY,o.Gu,o.gu,o.Nd,o.wd,o.sr,l.ez,g.u5],styles:["ion-icon[_ngcontent-%COMP%]{padding-left:.3rem}"]}),r})()}}]);