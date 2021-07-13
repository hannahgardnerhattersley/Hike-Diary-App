(this.webpackJsonphiking_frontend=this.webpackJsonphiking_frontend||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i,a=n(1),s=n.n(a),c=n(6),r=n.n(c),o=(n(14),n(2)),l=n(9),d=n(0),h=function(e){var t=e.lat,n=e.lng,i=Object(a.useState)({}),s=Object(o.a)(i,2),c=s[0],r=s[1];return Object(a.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/weather?lon=".concat(n,"&lat=").concat(t,"&units=imperial&appid=").concat("a2f8fde0f0c308bd8156aec162b5749e")).then((function(e){return e.json()})).then((function(e){r(e)}))}),[t,n]),c.main?Object(d.jsxs)("div",{className:"weather-display",children:[Object(d.jsx)("h5",{className:"weather-title",children:"Current Weather"}),Object(d.jsx)("div",{id:"icon",children:Object(d.jsx)("img",{id:"wicon",src:"http://openweathermap.org/img/w/"+c.weather[0].icon+".png",alt:"Weather icon"})}),Object(d.jsxs)("p",{className:"weather-text",children:[Object(d.jsx)(l.a,{})," ",Math.round(c.main.temp),": ",c.weather[0].description]}),Object(d.jsxs)("p",{className:"weather-text",children:["High: ",Math.round(c.main.temp_max)," Low: ",Math.round(c.main.temp_min)]})]}):Object(d.jsx)("div",{children:"Weather Display"})},u=function(e){var t=e.hike;return Object(d.jsxs)("div",{className:"user-entered=data",children:[Object(d.jsxs)("h6",{className:"user-data-text",id:"entry-address",children:[t.hike_name," Address: ",t.hike_address]}),Object(d.jsxs)("h6",{className:"user-data-text",id:"entry-date",children:["Hike Date: ",t.hike_date]}),Object(d.jsx)("h6",{className:"user-data-text",children:t.hike_description})]})},m=n(4),j=n.n(m),b=n(5),k=function(){var e=document.getElementById("highlight-element"),t=document.getElementById("new-form-element"),n=document.getElementById("edit-form-element");return Object(d.jsx)("button",{style:{backgroundColor:"white"},className:"highlight-button",onClick:function(){return e.style.display="inline-flex",t.style.display="none",void(n.style.display="none")},children:"Return to Highlight"})};i="https://hike-diary-backend.herokuapp.com/api";var p=function(e){var t=e.getEntries,n=e.setNewHikeName,s=e.setNewHikeAddress,c=e.newHikeName,r=e.newHikeAddress,l=Object(a.useState)(c),h=Object(o.a)(l,2),u=h[0],m=h[1],p=Object(a.useState)(r),g=Object(o.a)(p,2),O=g[0],f=g[1],y=Object(a.useState)(""),N=Object(o.a)(y,2),x=N[0],v=N[1],w=Object(a.useState)(""),_=Object(o.a)(w,2),H=_[0],S=_[1],C=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s("");case 2:return e.next=4,n("");case 4:m(u),f(O),v(""),S("");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"new-entry",children:[Object(d.jsxs)("div",{className:"edit-title-and-button",children:[Object(d.jsx)("h4",{className:"new-form-title",children:"New Hike"}),Object(d.jsx)(k,{})]}),Object(d.jsxs)("form",{className:"new-entry-form",onSubmit:function(e){return function(e){e.preventDefault();var n={hike_name:u,hike_address:O,hike_date:x,hike_description:H};fetch("".concat(i,"/diary_entry/"),{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(){t()})).then((function(){C()}))}(e)},children:[Object(d.jsx)("input",{className:"new-form-input",type:"text",name:"hike_name",id:"hike_name",placeholder:"Hike Name",value:u,onChange:function(e){return m(e.target.value)}}),Object(d.jsx)("input",{className:"new-form-input",type:"text",name:"hike_address",id:"hike_address",placeholder:"Address",value:O,onChange:function(e){return f(e.target.value)}}),Object(d.jsx)("input",{className:"new-form-input",name:"hike_date",id:"hike_date",type:"date",value:x,onChange:function(e){return v(e.target.value)}}),Object(d.jsx)("input",{className:"new-form-input",type:"text",name:"hike_description",id:"hike_description",placeholder:"Description",value:H,onChange:function(e){return S(e.target.value)}}),Object(d.jsx)("input",{className:"new-form-input",type:"submit",value:"Add Hike",style:{background:"white",color:"black"}})]})]})};var g,O=function(e){var t=e.hike,n=Object(a.useState)(t.hike_name),i=Object(o.a)(n,2),s=i[0],c=i[1],r=Object(a.useState)(t.hike_address),l=Object(o.a)(r,2),h=l[0],u=l[1],m=Object(a.useState)(t.hike_date),j=Object(o.a)(m,2),b=j[0],p=j[1],g=Object(a.useState)(t.hike_description),O=Object(o.a)(g,2),f=O[0],y=O[1];return Object(a.useEffect)((function(){c(t.hike_name),u(t.hike_address),p(t.hike_date),y(t.hike_description)}),[t]),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h4",{children:["Edit ",t.hike_name," Hike"]}),Object(d.jsxs)("form",{className:"edit-entry-form",children:[Object(d.jsx)("input",{className:"edit-form-input",type:"text",name:"hike_name",id:"hike_name",placeholder:"Hike Name",value:s,onChange:function(e){return c(e.target.value)}}),Object(d.jsx)("input",{className:"edit-form-input",type:"text",name:"hike_address",id:"hike_address",placeholder:"Address",value:h,onChange:function(e){return u(e.target.value)}}),Object(d.jsx)("input",{className:"edit-form-input",name:"hike_date",id:"hike_date",type:"date",value:b,onChange:function(e){return p(e.target.value)}}),Object(d.jsx)("input",{className:"edit-form-input",type:"text",name:"hike_description",id:"hike_description",placeholder:"Description",value:f,onChange:function(e){return y(e.target.value)}}),Object(d.jsx)("input",{className:"edit-form-input",type:"submit",value:"Update Hike",style:{background:"white",color:"black"}})]}),Object(d.jsx)(k,{})]})};g="https://hike-diary-backend.herokuapp.com/";var f,y=function(e){var t=e.displayedLocation,n=e.getEntries,i=e.newHikeName,s=e.newHikeAddress,c=e.setNewHikeName,r=e.setNewHikeAddress,l=Object(a.useState)(null),m=Object(o.a)(l,2),j=m[0],b=m[1],k=document.getElementById("highlight-element"),f=document.getElementById("edit-form-element");Object(a.useEffect)((function(){y()}),[t]);var y=function(){var e="".concat(g,"/location_search?location_string=").concat(encodeURIComponent(t.hike_address));fetch(e).then((function(e){return e.json()}),(function(e){return console.log(e)})).then((function(e){var t={lat:Number(e.candidates[0].geometry.location.lat),lng:Number(e.candidates[0].geometry.location.lng)};b(t)}),(function(e){return console.log(e)}))};return Object(d.jsxs)("div",{className:"entry-highlight",children:[j?Object(d.jsxs)("div",{className:"display-highlight",id:"highlight-element",children:[Object(d.jsxs)("div",{className:"title-and-edit",children:[Object(d.jsx)("h4",{className:"hike-highlight-title",children:t.hike_name}),Object(d.jsx)("div",{className:"edit-button",children:Object(d.jsx)("button",{style:{backgroundColor:"white",width:"30%",padding:"1%"},onClick:function(){k.style.display="none",f.style.display="inline-flex",console.log(t)},children:"Edit"})})]}),Object(d.jsxs)("div",{className:"data-and-weather",children:[Object(d.jsx)(u,{hike:t}),Object(d.jsx)(h,{lat:j.lat,lng:j.lng})]})]}):Object(d.jsx)("div",{className:"display-highlight",id:"highlight-element",children:"Add a hike to view a highlight."}),Object(d.jsx)("div",{className:"display-new",id:"new-form-element",children:Object(d.jsx)(p,{getEntries:n,newHikeName:i,newHikeAddress:s,setNewHikeName:c,setNewHikeAddress:r})}),Object(d.jsx)("div",{className:"display-edit",id:"edit-form-element",children:Object(d.jsx)(O,{hike:t})})]})},N=function(e){var t=e.hike,n=e.setDisplayedHike,i=document.getElementById("highlight-element"),a=document.getElementById("new-form-element"),s=document.getElementById("edit-form-element");return Object(d.jsx)("div",{className:"hikes-in-scroll",onClick:function(){n(t),i.style.display="inline-flex",a.style.display="none",s.style.display="none"},children:Object(d.jsxs)("h6",{children:[t.hike_name," ",t.hike_date]})})},x=function(e){var t=e.diaryEntries,n=e.setDisplayedHike;return Object(d.jsxs)("div",{className:"entries-scroll",children:[Object(d.jsx)("h4",{children:"My Hikes"}),Object(d.jsx)("div",{children:t.map((function(e,t){return Object(d.jsx)(N,{hike:e,setDisplayedHike:n},t)}))})]})},v=function(){var e=document.getElementById("highlight-element"),t=document.getElementById("new-form-element"),n=document.getElementById("diary-entries-main-elem"),i=document.getElementById("edit-form-element");return Object(d.jsx)("div",{className:"newButton",children:Object(d.jsx)("button",{style:{backgroundColor:"white",width:"30%",alignSelf:"center"},className:"new-button",id:"new-button-entry-panel",onClick:function(){e.style.display="none",t.style.display="inline-flex",i.style.display="none",n.scrollIntoView({behavior:"smooth"})},children:"New Hike"})})},w=function(){var e=document.getElementById("recommendations-main-elem");return Object(d.jsx)("button",{style:{backgroundColor:"white",width:"30%",margin:"auto"},onClick:function(){e.scrollIntoView({behavior:"smooth"})},children:"Scroll to Recommendations"})};f="https://hike-diary-backend.herokuapp.com/api";var _,H=function(e){e.locations,e.setLocations,e.displayedLocation,e.setDisplayedLocation;var t=e.newHikeName,n=e.newHikeAddress,i=e.setNewHikeName,s=e.setNewHikeAddress,c=Object(a.useState)([]),r=Object(o.a)(c,2),l=r[0],h=r[1],u=Object(a.useState)({}),m=Object(o.a)(u,2),j=m[0],b=m[1];Object(a.useEffect)((function(){k()}),[]);var k=function(){fetch("".concat(f,"/diary_entry/")).then((function(e){return e.json()}),(function(e){return console.log(e)})).then((function(e){h(e),b(e[0])}))};return Object(d.jsxs)("div",{className:"entries-main",id:"diary-entries-main-elem",children:[Object(d.jsx)("h1",{className:"my-hikes-title",children:"My Hikes"}),Object(d.jsx)(v,{}),Object(d.jsxs)("div",{className:"entries-panels",children:[Object(d.jsx)(y,{displayedLocation:j,getEntries:k,newHikeName:t,newHikeAddress:n,setNewHikeName:i,setNewHikeAddress:s}),Object(d.jsx)(x,{diaryEntries:l,setDisplayedHike:b})]}),Object(d.jsx)(w,{})]})},S=n(7),C=function(e){var t=e.lat,n=e.lng,i=e.name,s=e.address,c=Object(a.useState)(null),r=Object(o.a)(c,2),l=r[0],h=r[1];return Object(d.jsx)("div",{className:"map-container",children:Object(d.jsx)(S.c,{googleMapsApiKey:"AIzaSyCfILb50DF1dD13vivAzgoSFhycD5bVr_A",children:Object(d.jsxs)(S.a,{mapContainerStyle:{height:"25vh",width:"35vh"},zoom:13,center:{lat:Number(t),lng:Number(n)},children:[Object(d.jsx)(S.d,{position:{lat:Number(t),lng:Number(n)},onClick:function(){return h({name:i,address:s})}}),l&&Object(d.jsx)(S.b,{position:{lat:Number(t),lng:Number(n)},onCloseClick:function(){return h(null)},children:Object(d.jsxs)("p",{children:[l.name," \u2013 ",l.address]})})]})})})},A=function(e){var t=e.location;return Object(d.jsx)("div",{className:"map-display",children:t?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(C,{lat:t.hike_lat,lng:t.hike_lng,name:t.hike_name,address:t.hike_address})}):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(C,{lat:41.3851,lng:2.1734,name:"Barcelona, Spain",address:"Barcelona,"})})})},E=function(e){var t=e.hikeName,n=e.hikeAddress,i=e.setNewHikeAddress,a=e.setNewHikeName,s=document.getElementById("highlight-element"),c=document.getElementById("new-form-element"),r=document.getElementById("diary-entries-main-elem"),o=document.getElementById("edit-form-element");return Object(d.jsx)("button",{style:{backgroundColor:"white"},className:"new-button",onClick:Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(n);case 2:return e.next=4,a(t);case 4:s.style.display="none",c.style.display="inline-flex",o.style.display="none",r.scrollIntoView({behavior:"smooth"});case 6:case"end":return e.stop()}}),e)}))),children:"New Hike"})},L=function(e){var t=e.displayedLocation,n=e.setNewHikeName,i=e.setNewHikeAddress;return Object(d.jsxs)("div",{className:"recommendation-highlight",children:[Object(d.jsxs)("div",{className:"title-and-button",children:[t?Object(d.jsx)("h5",{className:"highlight-title",children:t.hike_name}):Object(d.jsx)("h5",{className:"highlight-title",children:"Search a Location to See a Recommendation."}),Object(d.jsx)(E,{hikeName:t.hike_name,hikeAddress:t.hike_address,setNewHikeName:n,setNewHikeAddress:i})]}),Object(d.jsxs)("div",{className:"map-and-weather",children:[Object(d.jsx)(A,{location:t}),Object(d.jsx)(h,{lat:t.hike_lat,lng:t.hike_lng})]})]})},I=function(e){var t=e.location,n=e.setDisplayedLocation,i=e.setNewHikeName,a=e.setNewHikeAddress;return Object(d.jsxs)("div",{className:"rec-and-new",onClick:function(){return n(t)},children:[Object(d.jsx)("h6",{className:"indiv-rec-title",children:t.hike_name}),Object(d.jsx)(E,{hikeName:t.hike_name,hikeAddress:t.hike_address,setNewHikeName:i,setNewHikeAddress:a})]})},B=function(e){var t=e.locations,n=e.setDisplayedLocation,i=e.nearbyLocation,a=e.setNewHikeName,s=e.setNewHikeAddress;return Object(d.jsxs)("div",{className:"recommendations-scroll",children:[Object(d.jsxs)("h5",{className:"scroll-title",children:["Hikes near ",i]}),Object(d.jsx)("div",{className:"titles-in-scroll",children:t.length>0?t.map((function(e,t){return Object(d.jsx)(I,{location:e,setDisplayedLocation:n,setNewHikeName:a,setNewHikeAddress:s},t)})):Object(d.jsx)("h6",{children:"Search a Location to See Recommendations."})})]})};_="https://hike-diary-backend.herokuapp.com/api";var D=function(e){e.locations;var t=e.setLocations,n=e.setNearbyLocation,i=Object(a.useState)(""),s=Object(o.a)(i,2),c=s[0],r=s[1],l=Object(a.useState)({lat:41.3851,lng:2.1734}),h=Object(o.a)(l,2),u=h[0],m=h[1];Object(a.useEffect)((function(){p().then(g)}),[u]);var k=function(){n(c);var e="".concat(_,"/location_search?location_string=").concat(encodeURIComponent(c));fetch(e).then((function(e){return e.json()}),(function(e){return console.log(e)})).then((function(e){var t={lat:Number(e.candidates[0].geometry.location.lat),lng:Number(e.candidates[0].geometry.location.lng)};m(t),r("")}),(function(e){return console.log(e)}))},p=function(){var e="".concat(_,"/get_nearby_locations?lat=").concat(encodeURIComponent(u.lat),"&lng=").concat(encodeURIComponent(u.lng));return fetch(e).then((function(e){return e.json()}),(function(e){return console.log(e)})).then((function(e){return e.results}),(function(e){return console.log(e)}))},g=function(e){var n=e.map((function(e){return e.photos?{hike_name:e.name,hike_address:e.place_id,hike_lat:e.geometry.location.lat,hike_lng:e.geometry.location.lng,hike_img:e.photos[0].photo_reference}:{hike_name:e.name,hike_address:e.place_id,hike_lat:e.geometry.location.lat,hike_lng:e.geometry.location.lng,hike_img:null}}));t(n)},O=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),k();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("form",{className:"location-search",onSubmit:O,children:[Object(d.jsx)("input",{className:"location-search-input",type:"text",id:"location_string",name:"location_string",onChange:function(e){return r(e.target.value)},placeholder:"Where are you?",value:c}),Object(d.jsx)("input",{style:{backgroundColor:"white"},className:"search-btn",type:"submit",value:"Search"})]})},F=function(){var e=document.getElementById("diary-entries-main-elem");return Object(d.jsx)("button",{style:{backgroundColor:"white"},onClick:function(){e.scrollIntoView({behavior:"smooth"})},children:"Scroll to My Hikes"})},M=function(e){var t=e.locations,n=e.setLocations,i=e.displayedLocation,s=e.setDisplayedLocation,c=e.setNewHikeName,r=e.setNewHikeAddress,l=Object(a.useState)("Barcelona, Spain"),h=Object(o.a)(l,2),u=h[0],m=h[1];return Object(a.useEffect)((function(){t.length>0&&s(t[0])}),[t]),Object(d.jsxs)("div",{className:"recommendations-main",id:"recommendations-main-elem",children:[Object(d.jsx)("h3",{className:"rec-main-title",children:"Where should I hike?"}),Object(d.jsx)(D,{locations:t,setLocations:n,setNearbyLocation:m}),Object(d.jsxs)("div",{className:"recommendations-panels",children:[Object(d.jsx)(L,{displayedLocation:i,setNewHikeName:c,setNewHikeAddress:r}),Object(d.jsx)(B,{locations:t,setDisplayedLocation:s,nearbyLocation:u,setNewHikeName:c,setNewHikeAddress:r})]}),Object(d.jsx)(F,{})]})},R={hike_name:"Barcelona",hike_address:"Barcelona, Spain",hike_lat:41.3851,hike_lng:2.1734,hike_img:void 0},U=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)(R),c=Object(o.a)(s,2),r=c[0],l=c[1],h=Object(a.useState)(""),u=Object(o.a)(h,2),m=u[0],j=u[1],b=Object(a.useState)(""),k=Object(o.a)(b,2),p=k[0],g=k[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(M,{displayedLocation:r,setDisplayedLocation:l,locations:n,setLocations:i,setNewHikeName:j,setNewHikeAddress:g}),Object(d.jsx)(H,{displayedLocation:r,setDisplayedLocation:l,locations:n,setLocations:i,newHikeName:m,newHikeAddress:p,setNewHikeName:j,setNewHikeAddress:g})]})},V=function(e){e&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),s(e),c(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(U,{})}),document.getElementById("root")),V()}},[[17,1,2]]]);
//# sourceMappingURL=main.17bee7a5.chunk.js.map