(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){e.exports=t(24)},18:function(e,a,t){},20:function(e,a,t){},24:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(11),s=t.n(c),l=(t(18),t(1)),i=t(2),o=t(5),g=t(3),m=t(4),d=(t(20),t(7)),b=t(6),u=(t(9),function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"Dice",onClick:this.props.click,style:{backgroundColor:this.props.color}},this.props.text)}}]),a}(r.Component)),k=function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"Control",onClick:this.props.click},"Reset")}}]),a}(r.Component),h=function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return this.props.fail?n.a.createElement("div",{className:"Display"},n.a.createElement("span",{className:"icon",role:"img","aria-label":"emoji"},"\ud83d\udca9"),n.a.createElement("span",{className:"icon",role:"img","aria-label":"emoji"},"\ud83d\udc80"),n.a.createElement("span",{className:"icon",role:"img","aria-label":"emoji"},"\ud83d\udca9"),n.a.createElement("h1",null,"MISS"),n.a.createElement("span",{className:"icon",role:"img","aria-label":"emoji"},"\ud83d\udc80"),n.a.createElement("span",{className:"icon",role:"img","aria-label":"emoji"},"\ud83d\udca9"),n.a.createElement("span",{className:"icon",role:"img","aria-label":"emoji"},"\ud83d\udc80")):n.a.createElement("div",{className:"Display"},n.a.createElement("h1",null,this.props.dmg," ",n.a.createElement("span",{className:"icon",role:"img","aria-label":"emoji"},"\u2764\ufe0f")),n.a.createElement("h1",null,this.props.surge," ",n.a.createElement("span",{className:"icon",role:"img","aria-label":"emoji"},"\u26a1")),n.a.createElement("h1",null,this.props.range," ",n.a.createElement("span",{className:"icon",role:"img","aria-label":"emoji"},"\ud83c\udff9")),n.a.createElement("h1",null,this.props.block," ",n.a.createElement("span",{className:"icon",role:"img","aria-label":"emoji"},"\ud83d\udee1\ufe0f")))}}]),a}(r.Component),p=t(8),j={red:0,blue:0,yellow:0,green:0,brown:0,grey:0,black:0,dmg:0,surge:0,range:0,block:0,fail:!1},E=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(g.a)(a).call(this,e))).state=j,t.addDice=t.addDice.bind(Object(b.a)(Object(b.a)(t))),t.reset=t.reset.bind(Object(b.a)(Object(b.a)(t))),t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"addDice",value:function(e){var a,t=Math.floor(6*Math.random());console.log(e,t),"F"===p[e].side[t].dmg&&this.setState({fail:!0}),this.setState((a={},Object(d.a)(a,e,this.state[e]+1),Object(d.a)(a,"block",this.state.block+p[e].side[t].block),Object(d.a)(a,"dmg",this.state.dmg+p[e].side[t].dmg),Object(d.a)(a,"surge",this.state.surge+p[e].side[t].surge),Object(d.a)(a,"range",this.state.range+p[e].side[t].range),a))}},{key:"reset",value:function(){console.log("reset"),this.setState(j)}},{key:"render",value:function(){return n.a.createElement("div",{className:"Dicent"},n.a.createElement("div",{className:"dice-container"},n.a.createElement(u,{click:this.addDice.bind(this,"red"),text:this.state.red,color:"#D11D05"}),n.a.createElement(u,{click:this.addDice.bind(this,"blue"),text:this.state.blue,color:"#1D1075"}),n.a.createElement(u,{click:this.addDice.bind(this,"green"),text:this.state.green,color:"#1A5E25"}),n.a.createElement(u,{click:this.addDice.bind(this,"yellow"),text:this.state.yellow,color:"#FB1"}),n.a.createElement(u,{click:this.addDice.bind(this,"brown"),text:this.state.brown,color:"#7A2D15"}),n.a.createElement(u,{click:this.addDice.bind(this,"grey"),text:this.state.grey,color:"#666"}),n.a.createElement(u,{click:this.addDice.bind(this,"black"),text:this.state.black,color:"#011"})),n.a.createElement("div",{className:"display-container"},n.a.createElement(h,{dmg:this.state.dmg,surge:this.state.surge,range:this.state.range,block:this.state.block,fail:this.state.fail}),n.a.createElement(k,{click:this.reset})))}}]),a}(r.Component),O=function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement(E,null)))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e){e.exports={red:{side:[{dmg:1,surge:0,range:0,block:0},{dmg:2,surge:0,range:0,block:0},{dmg:2,surge:0,range:0,block:0},{dmg:2,surge:0,range:0,block:0},{dmg:3,surge:0,range:0,block:0},{dmg:3,surge:1,range:0,block:0}]},blue:{side:[{dmg:"F",surge:"A",range:"I",block:"L"},{dmg:2,surge:1,range:2,block:0},{dmg:2,surge:0,range:3,block:0},{dmg:2,surge:0,range:4,block:0},{dmg:1,surge:0,range:5,block:0},{dmg:1,surge:1,range:6,block:0}]},green:{side:[{dmg:1,surge:0,range:0,block:0},{dmg:0,surge:1,range:0,block:0},{dmg:0,surge:1,range:1,block:0},{dmg:1,surge:0,range:1,block:0},{dmg:1,surge:1,range:0,block:0},{dmg:1,surge:1,range:1,block:0}]},yellow:{side:[{dmg:0,surge:1,range:1,block:0},{dmg:1,surge:0,range:1,block:0},{dmg:1,surge:0,range:2,block:0},{dmg:1,surge:1,range:0,block:0},{dmg:2,surge:0,range:0,block:0},{dmg:2,surge:1,range:0,block:0}]},brown:{side:[{dmg:0,surge:0,range:0,block:0},{dmg:0,surge:0,range:0,block:0},{dmg:0,surge:0,range:0,block:0},{dmg:0,surge:0,range:0,block:1},{dmg:0,surge:0,range:0,block:1},{dmg:0,surge:0,range:0,block:2}]},grey:{side:[{dmg:0,surge:0,range:0,block:0},{dmg:0,surge:0,range:0,block:1},{dmg:0,surge:0,range:0,block:1},{dmg:0,surge:0,range:0,block:1},{dmg:0,surge:0,range:0,block:2},{dmg:0,surge:0,range:0,block:3}]},black:{side:[{dmg:0,surge:0,range:0,block:0},{dmg:0,surge:0,range:0,block:2},{dmg:0,surge:0,range:0,block:2},{dmg:0,surge:0,range:0,block:2},{dmg:0,surge:0,range:0,block:3},{dmg:0,surge:0,range:0,block:4}]}}},9:function(e,a,t){}},[[12,2,1]]]);
//# sourceMappingURL=main.c9c2f99f.chunk.js.map