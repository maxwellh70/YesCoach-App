"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9452],{9452:(_,r,i)=>{i.r(r),i.d(r,{SleepPage:()=>g});var n=i(6114),l=i(8614),e=i(8256),u=i(6435),p=i(6008);let g=(()=>{class a{constructor(t,s){this.uService=t,this.apiService=s,this.userInfo=this.uService.userInfo,this.postOption={access_token:this.uService.user.authentication.accessToken},this.curDate=new Date,this.startDate=(0,l.F)(this.curDate),this.getOption={end_time:this.curDate.toISOString(),start_time:this.startDate.toISOString(),which_tables:["sleep"],aggregate_types:[""]}}ngOnInit(){this._getBasicStats()}handleRefresh(t){setTimeout(()=>{this._getBasicStats(),t.target.complete()},2e3)}_getBasicStats(){const t=this.uService.nextPullDataDate;null===t||t.getTime()<Date.now()?(this.uService.nextPullDataDate=new Date(this.curDate.getFullYear(),this.curDate.getMonth(),this.curDate.getDate()+1),this.apiService.pullDataAndGetData(this.userInfo,this.postOption,this.getOption).subscribe(([s,c])=>{console.log(s),this.uService.userInfo=c})):this.apiService.getStats(this.userInfo.id,this.getOption).subscribe(s=>{console.log(s)})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(u.K),e.Y36(p.s))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-sleep"]],standalone:!0,features:[e.jDz],decls:39,vars:2,consts:[[3,"fullscreen"],[3,"translucent"],["slot","fixed",3,"ionRefresh"],["pullingIcon","chevron-down-circle-outline","refreshingSpinner","circles"],[1,"main-div"],[1,"rec-header"],[1,"data-div"],[1,"data"],[1,"past-container"],[1,"activity-div"],[1,"date"]],template:function(t,s){1&t&&(e.TgZ(0,"ion-content",0)(1,"ion-header",1)(2,"ion-toolbar")(3,"ion-title"),e._uU(4," YesCoach "),e.qZA()()(),e.TgZ(5,"ion-refresher",2),e.NdJ("ionRefresh",function(d){return s.handleRefresh(d)}),e._UZ(6,"ion-refresher-content",3),e.qZA(),e.TgZ(7,"div",4)(8,"h1",5),e._uU(9,"Sleep Recommendation"),e.qZA(),e.TgZ(10,"div",6)(11,"div",7)(12,"h1"),e._uU(13,"10:32pm"),e.qZA(),e.TgZ(14,"p"),e._uU(15,"Time to Sleep"),e.qZA()(),e.TgZ(16,"div",7)(17,"h1"),e._uU(18,"10:32pm"),e.qZA(),e.TgZ(19,"p"),e._uU(20,"Time to Wake Up "),e.qZA()()(),e.TgZ(21,"h2"),e._uU(22,"Past Slumbers"),e.qZA(),e.TgZ(23,"div",8)(24,"div",9)(25,"p"),e._uU(26," 11:30pm - 7:20am "),e.qZA(),e.TgZ(27,"p",10),e._uU(28," 11/02 "),e.qZA()(),e.TgZ(29,"div",9)(30,"p"),e._uU(31," 11:30pm - 7:20am "),e.qZA(),e.TgZ(32,"p",10),e._uU(33," 11/02 "),e.qZA()(),e.TgZ(34,"div",9)(35,"p"),e._uU(36," 11:30pm - 7:20am "),e.qZA(),e.TgZ(37,"p",10),e._uU(38," 11/02 "),e.qZA()()()()()),2&t&&(e.Q6J("fullscreen",!0),e.xp6(1),e.Q6J("translucent",!0))},dependencies:[n.Pc,n.W2,n.Gu,n.nJ,n.Wo,n.wd,n.sr],styles:[".main-div[_ngcontent-%COMP%]{margin:8px}.header[_ngcontent-%COMP%]{font-size:30px;margin-top:16px}.past-container[_ngcontent-%COMP%]{background-color:#1e1e1e;outline:rgb(26,25,25) solid 1px;padding:8px;border-radius:10px}.data-div[_ngcontent-%COMP%]{display:flex;justify-content:space-around}.date[_ngcontent-%COMP%]{color:#da541f}.data[_ngcontent-%COMP%]{width:100%;margin:4px;background-color:#1e1e1e;outline:rgb(26,25,25) solid 1px;padding:8px;border-radius:10px;display:flex;flex-direction:column;justify-content:center;align-items:center}.activity-div[_ngcontent-%COMP%]{display:flex;justify-content:space-between;border-bottom:1px solid rgb(60,60,60)}"]}),a})()}}]);