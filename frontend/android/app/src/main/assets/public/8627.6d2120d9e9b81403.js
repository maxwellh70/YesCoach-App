"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8627],{8627:(h,r,i)=>{i.r(r),i.d(r,{Hydration:()=>g});var t=i(6114),u=i(8614),e=i(8256),l=i(6435),d=i(6008);let g=(()=>{class a{constructor(n,s){this.uService=n,this.apiService=s,this.userInfo=this.uService.userInfo,this.postOption={access_token:this.uService.user.authentication.accessToken},this.curDate=new Date,this.startDate=(0,u.F)(this.curDate),this.getOption={end_time:this.curDate.toISOString(),start_time:this.startDate.toISOString(),which_tables:["fitness"],aggregate_types:[""],summarize:!1}}handleRefresh(n){setTimeout(()=>{this._getBasicStats(),n.target.complete()},50)}ngOnInit(){}_getBasicStats(){const n=this.uService.nextPullDataDate;null===n||n.getTime()<Date.now()?(this.uService.nextPullDataDate=new Date(this.curDate.getFullYear(),this.curDate.getMonth(),this.curDate.getDate()+1),this.apiService.pullDataAndGetData(this.userInfo,this.postOption,this.getOption).subscribe(([s,c])=>{console.log(s),this.uService.userInfo=c})):this.apiService.getStats(this.userInfo.id,this.getOption).subscribe(s=>{console.log(s)})}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(l.K),e.Y36(d.s))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-hydration"]],standalone:!0,features:[e.jDz],decls:40,vars:2,consts:[[3,"fullscreen"],[3,"translucent"],["slot","fixed",3,"ionRefresh"],["pullingIcon","chevron-down-circle-outline","refreshingSpinner","circles"],[1,"main-div"],[1,"rec-header"],[1,"number"],[1,"past-container"],[1,"activity-div"],[1,"date"]],template:function(n,s){1&n&&(e.TgZ(0,"ion-content",0)(1,"ion-header",1)(2,"ion-toolbar")(3,"ion-title"),e._uU(4," YesCoach "),e.qZA()()(),e.TgZ(5,"ion-refresher",2),e.NdJ("ionRefresh",function(_){return s.handleRefresh(_)}),e._UZ(6,"ion-refresher-content",3),e.qZA(),e.TgZ(7,"div",4)(8,"h1",5),e._uU(9,"Hydration Recommendation"),e.qZA(),e.TgZ(10,"ion-card")(11,"ion-card-header")(12,"ion-card-title"),e._uU(13,"Drink a Glass of Water by 8:00pm"),e.qZA()(),e.TgZ(14,"ion-card-content"),e._uU(15," So far, you've drank "),e.TgZ(16,"span",6),e._uU(17,"4"),e.qZA(),e._uU(18," glasses (12oz) of water today. You need another "),e.TgZ(19,"span",6),e._uU(20,"3"),e.qZA(),e._uU(21," to meet your daily recommended intake. "),e.qZA()(),e.TgZ(22,"h2"),e._uU(23,"Past Hydration"),e.qZA(),e.TgZ(24,"div",7)(25,"div",8)(26,"p"),e._uU(27," 8 glasses of water "),e.qZA(),e.TgZ(28,"p",9),e._uU(29," 11/02 "),e.qZA()(),e.TgZ(30,"div",8)(31,"p"),e._uU(32," 8 glasses of water "),e.qZA(),e.TgZ(33,"p",9),e._uU(34," 11/02 "),e.qZA()(),e.TgZ(35,"div",8)(36,"p"),e._uU(37," 8 glasses of water "),e.qZA(),e.TgZ(38,"p",9),e._uU(39," 11/02 "),e.qZA()()()()()),2&n&&(e.Q6J("fullscreen",!0),e.xp6(1),e.Q6J("translucent",!0))},dependencies:[t.Pc,t.PM,t.FN,t.Zi,t.Dq,t.W2,t.Gu,t.nJ,t.Wo,t.wd,t.sr],styles:[".main-div[_ngcontent-%COMP%]{margin:8px}.header[_ngcontent-%COMP%]{font-size:30px;margin-top:16px}.rec-div[_ngcontent-%COMP%]{background-color:#252525;padding:4px}.past-container[_ngcontent-%COMP%]{background-color:#1e1e1e;outline:rgb(26,25,25) solid 1px;padding:8px;border-radius:10px}.number[_ngcontent-%COMP%]{color:#fff;font-weight:700}.activity-div[_ngcontent-%COMP%]{display:flex;justify-content:space-between;border-bottom:1px solid rgb(60,60,60)}.date[_ngcontent-%COMP%]{color:#da541f}"]}),a})()}}]);