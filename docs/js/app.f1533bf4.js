(function(){"use strict";var e={6456:function(e,t,o){var s=o(9242),n=o(3396);function a(e,t,o,s,a,r){const i=(0,n.up)("NavBarComponent"),l=(0,n.up)("RouterView");return(0,n.wg)(),(0,n.iD)("main",null,[(0,n.Wm)(i),(0,n.Wm)(l)])}var r=o(7139);const i={class:"navbar"},l=["src"],u=["src"],c={key:0,class:"home-div"},m=["src"];function d(e,t,o,s,a,d){const p=(0,n.up)("RouterLink"),h=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("img",{src:e.charmanderSprite,alt:"Charmander",class:(0,r.C_)(["sprites",{"animate-sprite":e.isMouseOverPlay}])},null,10,l),(0,n.Wm)(p,{to:"/play"},{default:(0,n.w5)((()=>[(0,n._)("button",{class:"play-button",onMouseover:t[0]||(t[0]=t=>e.isMouseOverPlay=!0),onMouseout:t[1]||(t[1]=t=>e.isMouseOverPlay=!1)},"Play",32)])),_:1}),(0,n.Wm)(p,{to:"/pokedex"},{default:(0,n.w5)((()=>[(0,n._)("button",{class:"pokedex-button",onMouseover:t[2]||(t[2]=t=>e.isMouseOverPokedex=!0),onMouseout:t[3]||(t[3]=t=>e.isMouseOverPokedex=!1)},"PokeDex",32)])),_:1}),(0,n._)("img",{src:e.bulbasaurSprite,alt:"Bulbasaur",class:(0,r.C_)(["sprites",{"animate-sprite":e.isMouseOverPokedex}])},null,10,u),e.isNotHome?((0,n.wg)(),(0,n.iD)("div",c,[(0,n._)("img",{src:e.mewtwoSprite,alt:"Mewtwo",class:(0,r.C_)(["mewtwo-sprite",{"animate-mewtwo":e.isMouseOverHome}])},null,10,m),(0,n.Wm)(h,{to:"/"},{default:(0,n.w5)((()=>[(0,n._)("button",{class:"home-button",onMouseover:t[4]||(t[4]=t=>e.isMouseOverHome=!0),onMouseout:t[5]||(t[5]=t=>e.isMouseOverHome=!1),onClick:t[6]||(t[6]=t=>e.isMouseOverHome=!1)},"Home",32)])),_:1})])):(0,n.kq)("",!0)])}var p=o(2483),h=(0,n.aZ)({components:{RouterLink:p.rH},name:"NavBarComponent",data(){return{bulbasaurSprite:"",charmanderSprite:"",mewtwoSprite:"",isMouseOverPlay:!1,isMouseOverPokedex:!1,isMouseOverHome:!1}},computed:{isNotHome(){return"/"!==this.$route.path}},mounted(){fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur").then((e=>e.json())).then((e=>{this.bulbasaurSprite=e.sprites.front_default})),fetch("https://pokeapi.co/api/v2/pokemon/charmander").then((e=>e.json())).then((e=>{this.charmanderSprite=e.sprites.front_default})),fetch("https://pokeapi.co/api/v2/pokemon/mewtwo").then((e=>e.json())).then((e=>{this.mewtwoSprite=e.sprites.front_default}))}}),v=o(89);const g=(0,v.Z)(h,[["render",d],["__scopeId","data-v-c693454c"]]);var f=g,k=(0,n.aZ)({components:{NavBarComponent:f}});const w=(0,v.Z)(k,[["render",a]]);var b=w;function _(e,t,o,s,a,r){const i=(0,n.up)("GreetingsComponent");return(0,n.wg)(),(0,n.j4)(i)}var y=o.p+"img/professor.161635b3.png";const C=e=>((0,n.dD)("data-v-50779c0a"),e=e(),(0,n.Cn)(),e),x={class:"greetings columns"},S={class:"column is-8 dialog"},P={class:"box"},D={class:"control"},L=C((()=>(0,n._)("div",{class:"column is-4"},[(0,n._)("img",{src:y,alt:"Professor Oak",class:"professor"})],-1)));function M(e,t,o,s,a,i){return(0,n.wg)(),(0,n.iD)("div",x,[(0,n._)("div",S,[(0,n._)("div",P,(0,r.zw)(e.currentBubble),1),(0,n._)("div",D,[(0,n._)("button",{class:"button is-normal is-rounded is-outlined",onClick:t[0]||(t[0]=(...t)=>e.prevBubble&&e.prevBubble(...t))}," prev "),(0,n._)("button",{class:"button is-normal is-rounded",onClick:t[1]||(t[1]=(...t)=>e.nextBubble&&e.nextBubble(...t))}," next ")])]),L])}var O=(0,n.aZ)({name:"GreetingsComponent",data(){return{bubbles:["Welcome, young trainer! I'm Professor Oak, and I'm here to help you on your journey to become a Pokemon master. Are you ready to learn more about the world of Pokemon?","Well, for starters, we have an exciting 'Who's That Pokemon' game that will test your knowledge of these amazing creatures. You can also explore our Pokedex, which contains information about all the Pokemon from the first generation. From Bulbasaur to Mewtwo, you'll find everything you need to know about these fascinating creatures."," Have fun, and remember, the journey to become a Pokemon master is a long one, but it's worth it in the end. Good luck!","Goodbye, young trainer! Catch you later!"],step:0,currentBubble:""}},mounted(){this.typer()},computed:{displayedSentence(){var e=this.bubbles[this.step];return e}},methods:{typer(){this.currentBubble.length<this.displayedSentence.length&&(this.currentBubble+=this.displayedSentence.charAt(this.currentBubble.length),setTimeout(this.typer,10))},nextBubble(){this.step<=this.bubbles.length-2&&(this.step++,this.currentBubble="",this.typer())},prevBubble(){this.step>0&&(this.step--,this.currentBubble="",this.typer())}}});const H=(0,v.Z)(O,[["render",M],["__scopeId","data-v-50779c0a"]]);var Z=H,B=(0,n.aZ)({name:"HomeView",components:{GreetingsComponent:Z}});const G=(0,v.Z)(B,[["render",_]]);var I=G;function T(e,t,o,s,a,r){const i=(0,n.up)("PokemonComponent");return(0,n.wg)(),(0,n.j4)(i)}const j=e=>((0,n.dD)("data-v-2f73b878"),e=e(),(0,n.Cn)(),e),z={class:"pokebox"},N={class:"pokemon"},U={class:"image-box"},W=["src"],Y=["disabled"],A={class:"counts"},V={class:"box"},K=j((()=>(0,n._)("h2",null,"Streak:",-1))),$={class:"box"},q=j((()=>(0,n._)("h2",null,"Best:",-1))),F={class:"box"},E=j((()=>(0,n._)("h2",null,"Total:",-1)));function R(e,t,o,a,i,l){return(0,n.wg)(),(0,n.iD)("div",z,[(0,n.Wm)(s.uT,{name:"notification"},{default:(0,n.w5)((()=>[e.processingGuess?((0,n.wg)(),(0,n.iD)("div",{key:0,class:(0,r.C_)(["notification",{"is-success":e.correctGuess,"is-danger":!e.correctGuess}])},[(0,n.Uk)(" It was "),(0,n._)("strong",null,(0,r.zw)(e.pokemonName),1),(0,n.Uk)("! ")],2)):(0,n.kq)("",!0)])),_:1}),(0,n._)("div",N,[(0,n._)("div",U,[(0,n.Wm)(s.uT,{name:"pokemon",appear:"",onAfterLeave:e.nextPokemon},{default:(0,n.w5)((()=>[e.processingGuess?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("img",{key:0,src:e.imageUrl,alt:"who's that pokemon?"},null,8,W))])),_:1},8,["onAfterLeave"])]),(0,n.wy)((0,n._)("input",{type:"text",class:"input","onUpdate:modelValue":t[0]||(t[0]=t=>e.guess=t),onKeyup:t[1]||(t[1]=(0,s.D2)(((...t)=>e.processGuess&&e.processGuess(...t)),["enter"])),disabled:e.disabled},null,40,Y),[[s.nr,e.guess]])]),(0,n._)("div",A,[(0,n._)("div",V,[K,(0,n.Uk)(" "+(0,r.zw)(e.streak),1)]),(0,n._)("div",$,[q,(0,n.Uk)(" "+(0,r.zw)(e.maxStreak),1)]),(0,n._)("div",F,[E,(0,n.Uk)(" "+(0,r.zw)(e.guessCount),1)])])])}var Q=o(4870);async function J(){const e=await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151"),t=await e.json();return t.results.map((e=>{const t=e.url.split("/");return{name:e.name,url:e.url,id:parseInt(t[t.length-2])}}))}var X=(0,n.aZ)({name:"PokemonComponent",data(){return{guessingList:[],streak:0,maxStreak:0,guessCount:0,pokemonName:"",guess:"",pokemonIndex:0,imageUrl:(0,Q.iH)(""),disabled:!1,processingGuess:!1,correctGuess:!1}},computed:{currentPokemon(){return this.guessingList[this.pokemonIndex]}},async created(){this.guessingList=await J(),this.shuffle(this.guessingList)},methods:{shuffle(e){let t,o,s=e.length;while(0!==s)o=Math.floor(Math.random()*s),s-=1,t=e[s],e[s]=e[o],e[o]=t;return e},processGuess(){if(""!==this.guess){if(this.disabled=!0,this.guess.toLocaleLowerCase()!=this.pokemonName.toLocaleLowerCase())return this.correctGuess=!1,this.processingGuess=!0,this.guess="",void(this.streak=0);this.guess.toLocaleLowerCase()===this.pokemonName.toLocaleLowerCase()&&(this.correctGuess=!0,this.processingGuess=!0,this.guess="",this.guessCount+=1,this.streak+=1),this.streak>=this.maxStreak&&(this.maxStreak=this.streak)}},nextPokemon(){this.pokemonIndex+=1,this.processingGuess=!1,this.disabled=!1}},watch:{async currentPokemon(e){const t=e.id.toString().padStart(3,"0");this.imageUrl=`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${t}.png`,this.pokemonName=e.name,console.log(e.name)}}});const ee=(0,v.Z)(X,[["render",R],["__scopeId","data-v-2f73b878"]]);var te=ee,oe=(0,n.aZ)({name:"PlayView",components:{PokemonComponent:te}});const se=(0,v.Z)(oe,[["render",T]]);var ne=se;function ae(e,t,o,s,a,r){const i=(0,n.up)("PokedexComponent");return(0,n.wg)(),(0,n.j4)(i)}const re=e=>((0,n.dD)("data-v-15a714bc"),e=e(),(0,n.Cn)(),e),ie={class:"pokedex"},le={key:0,class:"no-match"},ue=re((()=>(0,n._)("h2",null,"We couldn't find a Pokémon with that name or ID :(",-1))),ce=[ue];function me(e,t,o,s,a,i){const l=(0,n.up)("FilterHeaderComponent"),u=(0,n.up)("CardComponent");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(l,{onSearch:e.emitSearch,onSort:e.emitSort},null,8,["onSearch","onSort"]),(0,n._)("div",ie,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.displayedList,((t,o)=>((0,n.wg)(),(0,n.j4)(u,{key:o,url:t.url,class:(0,r.C_)(e.reveal?"reveal":"")},null,8,["url","class"])))),128)),0===e.displayedList.length?((0,n.wg)(),(0,n.iD)("div",le,ce)):(0,n.kq)("",!0)])],64)}const de=e=>((0,n.dD)("data-v-b645a38e"),e=e(),(0,n.Cn)(),e),pe={class:"card-front"},he={class:"pokemon-id"},ve=["src","alt"],ge={class:"stats-text"},fe=de((()=>(0,n._)("p",null,"Height:",-1))),ke={class:"stats-text"},we=de((()=>(0,n._)("p",null,"Weight:",-1))),be={class:"types"},_e=de((()=>(0,n._)("p",null,"Types:",-1))),ye={class:"abilities"},Ce=de((()=>(0,n._)("p",null,"Abilities:",-1))),xe={class:"abilities-list"};function Se(e,t,o,s,a,i){return(0,n.wg)(),(0,n.iD)("div",{class:"card",onMouseenter:t[0]||(t[0]=t=>e.details=!0),onMouseleave:t[1]||(t[1]=t=>e.details=!1)},[(0,n._)("div",pe,[(0,n._)("h2",null,(0,r.zw)(e.pokemon?.name),1),(0,n._)("span",he,"#"+(0,r.zw)(e.pokemon?.id),1),(0,n._)("img",{src:e.imageUrl,alt:e.pokemon?.name},null,8,ve)]),(0,n._)("div",{class:(0,r.C_)(["stats",{active:e.details}])},[(0,n._)("div",ge,[fe,(0,n._)("p",null,(0,r.zw)(e.pokemon?.height)+"m",1)]),(0,n._)("div",ke,[we,(0,n._)("p",null,(0,r.zw)(e.pokemon?.weight)+"Kg",1)]),(0,n._)("div",be,[_e,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.pokemon?.types,((e,t)=>((0,n.wg)(),(0,n.iD)("span",{key:t,class:(0,r.C_)(e.toLowerCase())},(0,r.zw)(e),3)))),128))]),(0,n._)("div",ye,[Ce,(0,n._)("div",xe,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.pokemon?.abilities,((e,t)=>((0,n.wg)(),(0,n.iD)("span",{key:t,class:(0,r.C_)(e.toLowerCase())},(0,r.zw)(e.replace("-"," ")),3)))),128))])])],2)],32)}var Pe=o(4161),De=(0,n.aZ)({name:"CardComponent",props:{url:{type:String,required:!0}},data(){return{details:!1}},setup(e){const t=(0,Q.iH)(null);function o(e){return e/10}function s(e){return e/10}(0,n.YP)((()=>e.url),(async()=>{try{const n=await Pe.Z.get(e.url);t.value={id:n.data.id,name:n.data.name,height:o(n.data.height),weight:s(n.data.weight),types:n.data.types.map((e=>e.type.name)),abilities:n.data.abilities.map((e=>e.ability.name))}}catch(n){console.error(n)}}),{immediate:!0});const a=(0,Q.iH)("");return(0,n.YP)((()=>t.value),(()=>{if(t.value){const e=t.value.id.toString().padStart(3,"0");a.value=`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${e}.png`}}),{immediate:!0}),{pokemon:t,imageUrl:a}}});const Le=(0,v.Z)(De,[["render",Se],["__scopeId","data-v-b645a38e"]]);var Me=Le;const Oe={class:"pokedex-header"},He={class:"search-bar"},Ze=(0,n._)("label",{class:"search-text"},"Name or ID",-1),Be={class:"search-input"},Ge=(0,n._)("span",{class:"icon"},[(0,n._)("i",{class:"fa fa-magnifying-glass"})],-1),Ie=[Ge],Te={class:"sort-by column is-narrow is-flex is-flex-direction-column"},je={class:"selection"},ze=(0,n._)("label",{for:"sort-select"},"Sort by",-1),Ne=(0,n._)("option",{value:"low-high"},"Low to high",-1),Ue=(0,n._)("option",{value:"high-low"},"High to low",-1),We=(0,n._)("option",{value:"a-z"},"A to Z",-1),Ye=(0,n._)("option",{value:"z-a"},"Z to A",-1),Ae=[Ne,Ue,We,Ye],Ve=(0,n._)("div",{class:"box info"},[(0,n._)("p",null,"Only Generation I Pokémon are displayed in this Pokédex")],-1);function Ke(e,t,o,a,r,i){return(0,n.wg)(),(0,n.iD)("div",Oe,[(0,n._)("div",He,[Ze,(0,n._)("div",Be,[(0,n.wy)((0,n._)("input",{class:"input is-inline",type:"text","onUpdate:modelValue":t[0]||(t[0]=t=>e.searchTerm=t),onKeyup:t[1]||(t[1]=(0,s.D2)(((...t)=>e.emitSearch&&e.emitSearch(...t)),["enter"]))},null,544),[[s.nr,e.searchTerm]]),(0,n._)("button",{class:"button",onClick:t[2]||(t[2]=t=>e.emitSearch())},Ie)])]),(0,n._)("div",Te,[(0,n._)("div",je,[ze,(0,n.wy)((0,n._)("select",{id:"sort-select","onUpdate:modelValue":t[3]||(t[3]=t=>e.selectedSort=t),onChange:t[4]||(t[4]=(...t)=>e.emitSort&&e.emitSort(...t))},Ae,544),[[s.bM,e.selectedSort]])]),Ve])])}var $e=(0,n.aZ)({name:"FilterHeaderComponent",props:{searchQuery:String,sortAscending:Boolean},emits:{search:e=>!0,sort:e=>!0},data(){return{searchTerm:"",selectedSort:"low-high"}},methods:{emitSearch(){this.$emit("search",this.searchTerm)},emitSort(){this.$emit("sort",this.selectedSort)}}});const qe=(0,v.Z)($e,[["render",Ke]]);var Fe=qe,Ee=(0,n.aZ)({name:"PokedexComponent",components:{CardComponent:Me,FilterHeaderComponent:Fe},data(){return{pokemonList:[],displayedList:[],reveal:!0,totalDisplayed:0,searchTerm:"",selectedSort:"low-high"}},computed:{filteredItems(){let e=this.pokemonList.slice();"low-high"===this.selectedSort?e.sort(((e,t)=>e.id-t.id)):"high-low"===this.selectedSort?e.sort(((e,t)=>t.id-e.id)):"a-z"===this.selectedSort?e.sort(((e,t)=>e.name.localeCompare(t.name))):"z-a"===this.selectedSort&&e.sort(((e,t)=>t.name.localeCompare(e.name)));const t=/^\d+$/.test(this.searchTerm)?parseInt(this.searchTerm):NaN;return e=isNaN(t)?e.filter((e=>e.name.toLowerCase().includes(this.searchTerm.toLowerCase()))):e.filter((e=>e.id===t)),e.slice(0,this.totalDisplayed)}},watch:{filteredItems(e){this.displayedList=e}},async created(){this.pokemonList=await J(),this.totalDisplayed=12},mounted(){window.addEventListener("scroll",this.loadMore)},beforeUnmount(){window.removeEventListener("scroll",this.loadMore)},methods:{emitSort(e){this.selectedSort=e},emitSearch(e){this.searchTerm=e},async loadMore(){const e=window.innerHeight,t=window.scrollY||window.pageYOffset,o=document.documentElement.scrollHeight;e+t>=o&&(this.totalDisplayed+=12)}}});const Re=(0,v.Z)(Ee,[["render",me],["__scopeId","data-v-15a714bc"]]);var Qe=Re,Je=(0,n.aZ)({name:"PokedexView",components:{PokedexComponent:Qe}});const Xe=(0,v.Z)(Je,[["render",ae]]);var et=Xe;const tt=[{path:"/",name:"Home",component:I},{path:"/play",name:"Play",component:ne},{path:"/pokedex",name:"PokeDex",component:et}],ot=(0,p.p7)({history:(0,p.PO)("/Pokemon/"),routes:tt});var st=ot;(0,s.ri)(b).use(st).mount("#app")}},t={};function o(s){var n=t[s];if(void 0!==n)return n.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,s,n,a){if(!s){var r=1/0;for(c=0;c<e.length;c++){s=e[c][0],n=e[c][1],a=e[c][2];for(var i=!0,l=0;l<s.length;l++)(!1&a||r>=a)&&Object.keys(o.O).every((function(e){return o.O[e](s[l])}))?s.splice(l--,1):(i=!1,a<r&&(r=a));if(i){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[s,n,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="/Pokemon/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,a,r=s[0],i=s[1],l=s[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(l)var c=l(o)}for(t&&t(s);u<r.length;u++)a=r[u],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},s=self["webpackChunkpokeguess"]=self["webpackChunkpokeguess"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(6456)}));s=o.O(s)})();
//# sourceMappingURL=app.f1533bf4.js.map