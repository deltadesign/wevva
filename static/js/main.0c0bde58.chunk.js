(this.webpackJsonpwevva=this.webpackJsonpwevva||[]).push([[0],{19:function(e,t,n){e.exports=n(44)},24:function(e,t,n){},25:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),i=n.n(o),c=(n(24),n(3)),u=n(4),s=n(6),l=n(5),h=(n(25),n(26),n(7)),d=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=new Date(1e3*parseInt(this.props.datestring)),t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay(e)],n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth(e)],a=e.getFullYear(e),o=e.getDate(e);return r.a.createElement(h.a,null,r.a.createElement(h.a.Header,null,t," ",o," / ",n," / ",a),r.a.createElement(h.a.Body,null,this.props.text))}}]),n}(r.a.Component),m=n(18),p=n.n(m),y=function(){function e(){Object(c.a)(this,e)}return Object(u.a)(e,[{key:"status",value:function(e){return e.status>=200&&e.status<300?Promise.resolve(e):Promise.reject(new Error(e.text))}},{key:"getForecast",value:function(){return this.getRequest("https://api.openweathermap.org/data/2.5/onecall?lat=53.402460&lon=-1.503170&exclude=hourly,minutely&units=metric&appid=0c0115c73dc56a1a10b2e6f717f9c859")}},{key:"getRequest",value:function(e){return p.a.get(e).then(this.status).catch((function(e){console.log(e),alert(e)}))}}]),e}(),f=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={loading:!0,weather:[]},a.ApiClient=new y,a}return Object(u.a)(n,[{key:"weather",value:function(){return this.state.weather.map((function(e,t){return r.a.createElement(d,{key:t,datestring:e.dt,icon:e.weather[0].icon,text:e.weather[0].description,min:e.temp.min,max:e.temp.max,wind:e.wind_speed})}))}},{key:"getweather",value:function(){var e=this;this.ApiClient.getForecast().then((function(t){e.setState({loading:!1,weather:t.data.daily})}))}},{key:"componentDidMount",value:function(){this.getweather()}},{key:"render",value:function(){return r.a.createElement("div",{className:"app"},this.state.loading?"Loading...":"Here's your 5 day forecast",this.weather())}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.0c0bde58.chunk.js.map