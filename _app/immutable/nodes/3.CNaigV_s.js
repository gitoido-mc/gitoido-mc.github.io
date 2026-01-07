import"../chunks/DsnmJJEf.js";import{ag as x,ao as A,aA as ee,aj as S,aq as y,ar as m,ap as Q,as as C,e as te,$ as ne,w as ae}from"../chunks/Bjx4IpYh.js";import{d as X,c as O,f as Y}from"../chunks/CUxniq2w.js";import{I as re,s as oe,r as j,a as B,e as G}from"../chunks/BbHntWID.js";import{h as ie}from"../chunks/B6824pSW.js";import{s as V,r as se}from"../chunks/Jm-7IO35.js";import{s as T}from"../chunks/DYBW50BZ.js";function ce(e,t){x(t,!0);let n=se(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]];re(e,V({name:"calendar"},()=>n,{get iconNode(){return a},children:(r,o)=>{var i=X(),c=A(i);oe(c,()=>t.children??ee),O(r,i)},$$slots:{default:!0}})),S()}const ue=[{title:"Influencing Cobblemon shiny rates",tags:["cobblemon","code","kotlin"],slug:"cobblemon-shiny-rates",date:new Date("2026-01-07T00:00:00.000Z"),excerpt:"How to work with ShinyChanceCalculationEvent in Cobblemon",content:`Sometimes you want to modify the ✨*shiny*✨ rate of the species you are working with.

Use cases may vary. The typical scenario is when you are trying to give a player a species via methods other than natural spawning.

The code in this note is **Kotlin**. Your experience with **Java** may vary. Don't be afraid to ask questions in the Cobblemon Discord's #programming channel.

Let's instantiate \`ShinyChanceCalculationEvent\`:

\`\`\`kotlin
val pokemon = PokemonProperties.parse('zubat').create()
val shinyRate = Cobblemon.config.shinyRate
val event = ShinyChanceCalculationEvent(shinyRate, pokemon)
\`\`\`

It accepts only two parameters:
* **shinyRate** - \`Float\` - Base chance, fetched from the mod config.
* **pokemon** - \`Pokemon\` - Initialized instance of the species.

Now that we have created an event instance, we are ready to do some work—the instance exposes a couple of handy functions.

The first allows us to apply a flat modifier to the event chance:

\`\`\`kotlin
event.addModifier(modifier: Float)
\`\`\`

The second allows us to apply a callable function to modify the chance.
We expect three arguments to be passed to it:
* \`Float\` - Shiny rate
* \`ServerPlayer\` - Nullable player 
* \`Pokemon\` - The species instance we are calculating the chance for

\`\`\`kotlin
event.addModificationFunction(function: (Float, ServerPlayer?, Pokemon) -> Float)
\`\`\`

These handy helpers are our bread and butter.
For example, if I want to apply a flat bonus, I would do it this way:

\`\`\`kotlin
var shinyRate = Cobblemon.config.shinyRate
val event = ShinyChanceCalculationEvent(shinyRate, pokemon)
event.addModifier(100f) // add flat 100 increase
\`\`\`

The callable allows us to be more flexible:

\`\`\`kotlin
var shinyRate = Cobblemon.config.shinyRate
val event = ShinyChanceCalculationEvent(shinyRate, pokemon)

event.addModificationFunction { chance, player, pokemon -> 
  // For example, in this case I want to
  // modify the rate if the pokemon is holding a diamond.

  // Early bail if criteria not met
  if (pokemon.heldItem().item != Items.DIAMOND) {
    return@addModificationFunction chance
  }

  // Return calculated chance otherwise
  return@addModificationFunction (chance + 100f)
}
\`\`\`

> [!hint] Kotlin specific
> The \`return@addModificationFunction\` is *specific to Kotlin* because we can explicitly tell Kotlin which function we want to return from.

Now that we are done modifying our chances, let's assemble it all together:

\`\`\`kotlin
fun calculateShiny(player: ServerPlayer): Pokemon {
  val pokemon = PokemonProperties.parse('zubat').create()
  val shinyRate = Cobblemon.config.shinyRate
  val event = ShinyChanceCalculationEvent(shinyRate, pokemon)
  
  CobblemonEvents.SHINY_CHANCE_CALCULATION.post(event) { evt ->
    pokemon.shiny = evt.isShiny(player)
  }
  
  return pokemon
}
\`\`\`

You may notice something: I check for ✨shiny✨ in the \`post\` handler of the event.
This is because there are other mods that can influence the shiny rate.
Checking it at that particular place ensures your mod will properly pick up other chance influences.

That is all. Happy modding!`,_meta:{filePath:"2026-01-07-cobblemon-shiny-rates.md",fileName:"2026-01-07-cobblemon-shiny-rates.md",directory:".",extension:"md",path:"2026-01-07-cobblemon-shiny-rates"},html:`<p>Sometimes you want to modify the ✨<em>shiny</em>✨ rate of the species you are working with.</p>
<p>Use cases may vary. The typical scenario is when you are trying to give a player a species via methods other than natural spawning.</p>
<p>The code in this note is <strong>Kotlin</strong>. Your experience with <strong>Java</strong> may vary. Don't be afraid to ask questions in the Cobblemon Discord's #programming channel.</p>
<p>Let's instantiate <code>ShinyChanceCalculationEvent</code>:</p>
<pre><code class="language-kotlin">val pokemon = PokemonProperties.parse('zubat').create()
val shinyRate = Cobblemon.config.shinyRate
val event = ShinyChanceCalculationEvent(shinyRate, pokemon)
</code></pre>
<p>It accepts only two parameters:</p>
<ul>
<li><strong>shinyRate</strong> - <code>Float</code> - Base chance, fetched from the mod config.</li>
<li><strong>pokemon</strong> - <code>Pokemon</code> - Initialized instance of the species.</li>
</ul>
<p>Now that we have created an event instance, we are ready to do some work—the instance exposes a couple of handy functions.</p>
<p>The first allows us to apply a flat modifier to the event chance:</p>
<pre><code class="language-kotlin">event.addModifier(modifier: Float)
</code></pre>
<p>The second allows us to apply a callable function to modify the chance.
We expect three arguments to be passed to it:</p>
<ul>
<li><code>Float</code> - Shiny rate</li>
<li><code>ServerPlayer</code> - Nullable player</li>
<li><code>Pokemon</code> - The species instance we are calculating the chance for</li>
</ul>
<pre><code class="language-kotlin">event.addModificationFunction(function: (Float, ServerPlayer?, Pokemon) -> Float)
</code></pre>
<p>These handy helpers are our bread and butter.
For example, if I want to apply a flat bonus, I would do it this way:</p>
<pre><code class="language-kotlin">var shinyRate = Cobblemon.config.shinyRate
val event = ShinyChanceCalculationEvent(shinyRate, pokemon)
event.addModifier(100f) // add flat 100 increase
</code></pre>
<p>The callable allows us to be more flexible:</p>
<pre><code class="language-kotlin">var shinyRate = Cobblemon.config.shinyRate
val event = ShinyChanceCalculationEvent(shinyRate, pokemon)

event.addModificationFunction { chance, player, pokemon -> 
  // For example, in this case I want to
  // modify the rate if the pokemon is holding a diamond.

  // Early bail if criteria not met
  if (pokemon.heldItem().item != Items.DIAMOND) {
    return@addModificationFunction chance
  }

  // Return calculated chance otherwise
  return@addModificationFunction (chance + 100f)
}
</code></pre>
<blockquote>
<p>[!hint] Kotlin specific
The <code>return@addModificationFunction</code> is <em>specific to Kotlin</em> because we can explicitly tell Kotlin which function we want to return from.</p>
</blockquote>
<p>Now that we are done modifying our chances, let's assemble it all together:</p>
<pre><code class="language-kotlin">fun calculateShiny(player: ServerPlayer): Pokemon {
  val pokemon = PokemonProperties.parse('zubat').create()
  val shinyRate = Cobblemon.config.shinyRate
  val event = ShinyChanceCalculationEvent(shinyRate, pokemon)
  
  CobblemonEvents.SHINY_CHANCE_CALCULATION.post(event) { evt ->
    pokemon.shiny = evt.isShiny(player)
  }
  
  return pokemon
}
</code></pre>
<p>You may notice something: I check for ✨shiny✨ in the <code>post</code> handler of the event.
This is because there are other mods that can influence the shiny rate.
Checking it at that particular place ensures your mod will properly pick up other chance influences.</p>
<p>That is all. Happy modding!</p>`}],de=async()=>({notes:ue.toSorted((e,t)=>t.date.getTime()-e.date.getTime())}),Ft=Object.freeze(Object.defineProperty({__proto__:null,load:de},Symbol.toStringTag,{value:"Module"})),z=6048e5,le=864e5,N=Symbol.for("constructDateFrom");function p(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&N in e?e[N](t):e instanceof Date?new e.constructor(t):new Date(t)}function f(e,t){return p(t||e,e)}let he={};function W(){return he}function M(e,t){const n=W(),a=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,r=f(e,t?.in),o=r.getDay(),i=(o<a?7:0)+o-a;return r.setDate(r.getDate()-i),r.setHours(0,0,0,0),r}function D(e,t){return M(e,{...t,weekStartsOn:1})}function J(e,t){const n=f(e,t?.in),a=n.getFullYear(),r=p(n,0);r.setFullYear(a+1,0,4),r.setHours(0,0,0,0);const o=D(r),i=p(n,0);i.setFullYear(a,0,4),i.setHours(0,0,0,0);const c=D(i);return n.getTime()>=o.getTime()?a+1:n.getTime()>=c.getTime()?a:a-1}function _(e){const t=f(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function fe(e,...t){const n=p.bind(null,t.find(a=>typeof a=="object"));return t.map(n)}function R(e,t){const n=f(e,t?.in);return n.setHours(0,0,0,0),n}function me(e,t,n){const[a,r]=fe(n?.in,e,t),o=R(a),i=R(r),c=+o-_(o),l=+i-_(i);return Math.round((c-l)/le)}function ge(e,t){const n=J(e,t),a=p(e,0);return a.setFullYear(n,0,4),a.setHours(0,0,0,0),D(a)}function ye(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function pe(e){return!(!ye(e)&&typeof e!="number"||isNaN(+f(e)))}function we(e,t){const n=f(e,t?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}const be={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ve=(e,t,n)=>{let a;const r=be[e];return typeof r=="string"?a=r:t===1?a=r.one:a=r.other.replace("{{count}}",t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a};function F(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const ke={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Pe={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Me={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},xe={date:F({formats:ke,defaultWidth:"full"}),time:F({formats:Pe,defaultWidth:"full"}),dateTime:F({formats:Me,defaultWidth:"full"})},Se={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Oe=(e,t,n,a)=>Se[e];function k(e){return(t,n)=>{const a=n?.context?String(n.context):"standalone";let r;if(a==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,c=n?.width?String(n.width):i;r=e.formattingValues[c]||e.formattingValues[i]}else{const i=e.defaultWidth,c=n?.width?String(n.width):e.defaultWidth;r=e.values[c]||e.values[i]}const o=e.argumentCallback?e.argumentCallback(t):t;return r[o]}}const Ce={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Te={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},De={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},We={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Fe={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Ye={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Ee=(e,t)=>{const n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Ne={ordinalNumber:Ee,era:k({values:Ce,defaultWidth:"wide"}),quarter:k({values:Te,defaultWidth:"wide",argumentCallback:e=>e-1}),month:k({values:De,defaultWidth:"wide"}),day:k({values:We,defaultWidth:"wide"}),dayPeriod:k({values:Fe,defaultWidth:"wide",formattingValues:Ye,defaultFormattingWidth:"wide"})};function P(e){return(t,n={})=>{const a=n.width,r=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],o=t.match(r);if(!o)return null;const i=o[0],c=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(c)?Re(c,u=>u.test(i)):_e(c,u=>u.test(i));let h;h=e.valueCallback?e.valueCallback(l):l,h=n.valueCallback?n.valueCallback(h):h;const d=t.slice(i.length);return{value:h,rest:d}}}function _e(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function Re(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function qe(e){return(t,n={})=>{const a=t.match(e.matchPattern);if(!a)return null;const r=a[0],o=t.match(e.parsePattern);if(!o)return null;let i=e.valueCallback?e.valueCallback(o[0]):o[0];i=n.valueCallback?n.valueCallback(i):i;const c=t.slice(r.length);return{value:i,rest:c}}}const Ie=/^(\d+)(th|st|nd|rd)?/i,He=/\d+/i,Le={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ae={any:[/^b/i,/^(a|c)/i]},Qe={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Xe={any:[/1/i,/2/i,/3/i,/4/i]},je={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Be={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ge={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Ve={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},ze={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Je={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ke={ordinalNumber:qe({matchPattern:Ie,parsePattern:He,valueCallback:e=>parseInt(e,10)}),era:P({matchPatterns:Le,defaultMatchWidth:"wide",parsePatterns:Ae,defaultParseWidth:"any"}),quarter:P({matchPatterns:Qe,defaultMatchWidth:"wide",parsePatterns:Xe,defaultParseWidth:"any",valueCallback:e=>e+1}),month:P({matchPatterns:je,defaultMatchWidth:"wide",parsePatterns:Be,defaultParseWidth:"any"}),day:P({matchPatterns:Ge,defaultMatchWidth:"wide",parsePatterns:Ve,defaultParseWidth:"any"}),dayPeriod:P({matchPatterns:ze,defaultMatchWidth:"any",parsePatterns:Je,defaultParseWidth:"any"})},Ue={code:"en-US",formatDistance:ve,formatLong:xe,formatRelative:Oe,localize:Ne,match:Ke,options:{weekStartsOn:0,firstWeekContainsDate:1}};function $e(e,t){const n=f(e,t?.in);return me(n,we(n))+1}function Ze(e,t){const n=f(e,t?.in),a=+D(n)-+ge(n);return Math.round(a/z)+1}function K(e,t){const n=f(e,t?.in),a=n.getFullYear(),r=W(),o=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=p(t?.in||e,0);i.setFullYear(a+1,0,o),i.setHours(0,0,0,0);const c=M(i,t),l=p(t?.in||e,0);l.setFullYear(a,0,o),l.setHours(0,0,0,0);const h=M(l,t);return+n>=+c?a+1:+n>=+h?a:a-1}function et(e,t){const n=W(),a=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,r=K(e,t),o=p(t?.in||e,0);return o.setFullYear(r,0,a),o.setHours(0,0,0,0),M(o,t)}function tt(e,t){const n=f(e,t?.in),a=+M(n,t)-+et(n,t);return Math.round(a/z)+1}function s(e,t){const n=e<0?"-":"",a=Math.abs(e).toString().padStart(t,"0");return n+a}const g={y(e,t){const n=e.getFullYear(),a=n>0?n:1-n;return s(t==="yy"?a%100:a,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):s(n+1,2)},d(e,t){return s(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return n==="am"?"a.m.":"p.m."}},h(e,t){return s(e.getHours()%12||12,t.length)},H(e,t){return s(e.getHours(),t.length)},m(e,t){return s(e.getMinutes(),t.length)},s(e,t){return s(e.getSeconds(),t.length)},S(e,t){const n=t.length,a=e.getMilliseconds(),r=Math.trunc(a*Math.pow(10,n-3));return s(r,t.length)}},v={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},q={G:function(e,t,n){const a=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const a=e.getFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return g.y(e,t)},Y:function(e,t,n,a){const r=K(e,a),o=r>0?r:1-r;if(t==="YY"){const i=o%100;return s(i,2)}return t==="Yo"?n.ordinalNumber(o,{unit:"year"}):s(o,t.length)},R:function(e,t){const n=J(e);return s(n,t.length)},u:function(e,t){const n=e.getFullYear();return s(n,t.length)},Q:function(e,t,n){const a=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return s(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,n){const a=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return s(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,n){const a=e.getMonth();switch(t){case"M":case"MM":return g.M(e,t);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,n){const a=e.getMonth();switch(t){case"L":return String(a+1);case"LL":return s(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,n,a){const r=tt(e,a);return t==="wo"?n.ordinalNumber(r,{unit:"week"}):s(r,t.length)},I:function(e,t,n){const a=Ze(e);return t==="Io"?n.ordinalNumber(a,{unit:"week"}):s(a,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):g.d(e,t)},D:function(e,t,n){const a=$e(e);return t==="Do"?n.ordinalNumber(a,{unit:"dayOfYear"}):s(a,t.length)},E:function(e,t,n){const a=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,n,a){const r=e.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return s(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,n,a){const r=e.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return s(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,n){const a=e.getDay(),r=a===0?7:a;switch(t){case"i":return String(r);case"ii":return s(r,t.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,n){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){const a=e.getHours();let r;switch(a===12?r=v.noon:a===0?r=v.midnight:r=a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){const a=e.getHours();let r;switch(a>=17?r=v.evening:a>=12?r=v.afternoon:a>=4?r=v.morning:r=v.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let a=e.getHours()%12;return a===0&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return g.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):g.H(e,t)},K:function(e,t,n){const a=e.getHours()%12;return t==="Ko"?n.ordinalNumber(a,{unit:"hour"}):s(a,t.length)},k:function(e,t,n){let a=e.getHours();return a===0&&(a=24),t==="ko"?n.ordinalNumber(a,{unit:"hour"}):s(a,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):g.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):g.s(e,t)},S:function(e,t){return g.S(e,t)},X:function(e,t,n){const a=e.getTimezoneOffset();if(a===0)return"Z";switch(t){case"X":return H(a);case"XXXX":case"XX":return w(a);default:return w(a,":")}},x:function(e,t,n){const a=e.getTimezoneOffset();switch(t){case"x":return H(a);case"xxxx":case"xx":return w(a);default:return w(a,":")}},O:function(e,t,n){const a=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+I(a,":");default:return"GMT"+w(a,":")}},z:function(e,t,n){const a=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+I(a,":");default:return"GMT"+w(a,":")}},t:function(e,t,n){const a=Math.trunc(+e/1e3);return s(a,t.length)},T:function(e,t,n){return s(+e,t.length)}};function I(e,t=""){const n=e>0?"-":"+",a=Math.abs(e),r=Math.trunc(a/60),o=a%60;return o===0?n+String(r):n+String(r)+t+s(o,2)}function H(e,t){return e%60===0?(e>0?"-":"+")+s(Math.abs(e)/60,2):w(e,t)}function w(e,t=""){const n=e>0?"-":"+",a=Math.abs(e),r=s(Math.trunc(a/60),2),o=s(a%60,2);return n+r+t+o}const L=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},U=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},nt=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],a=n[1],r=n[2];if(!r)return L(e,t);let o;switch(a){case"P":o=t.dateTime({width:"short"});break;case"PP":o=t.dateTime({width:"medium"});break;case"PPP":o=t.dateTime({width:"long"});break;default:o=t.dateTime({width:"full"});break}return o.replace("{{date}}",L(a,t)).replace("{{time}}",U(r,t))},at={p:U,P:nt},rt=/^D+$/,ot=/^Y+$/,it=["D","DD","YY","YYYY"];function st(e){return rt.test(e)}function ct(e){return ot.test(e)}function ut(e,t,n){const a=dt(e,t,n);if(console.warn(a),it.includes(e))throw new RangeError(a)}function dt(e,t,n){const a=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${a} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const lt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ht=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ft=/^'([^]*?)'?$/,mt=/''/g,gt=/[a-zA-Z]/;function yt(e,t,n){const a=W(),r=a.locale??Ue,o=a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=a.weekStartsOn??a.locale?.options?.weekStartsOn??0,c=f(e,n?.in);if(!pe(c))throw new RangeError("Invalid time value");let l=t.match(ht).map(d=>{const u=d[0];if(u==="p"||u==="P"){const b=at[u];return b(d,r.formatLong)}return d}).join("").match(lt).map(d=>{if(d==="''")return{isToken:!1,value:"'"};const u=d[0];if(u==="'")return{isToken:!1,value:pt(d)};if(q[u])return{isToken:!0,value:d};if(u.match(gt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+u+"`");return{isToken:!1,value:d}});r.localize.preprocessor&&(l=r.localize.preprocessor(c,l));const h={firstWeekContainsDate:o,weekStartsOn:i,locale:r};return l.map(d=>{if(!d.isToken)return d.value;const u=d.value;(ct(u)||st(u))&&ut(u,t,String(e));const b=q[u[0]];return b(c,u,r.localize,h)}).join("")}function pt(e){const t=e.match(ft);return t?t[1].replace(mt,"'"):e}var wt=Y('<a class="svelte-dzgvvp"> </a>');function bt(e,t){x(t,!0);const n=j("/tags/[slug]",{slug:t.tag});var a=wt(),r=y(a);m(a),Q(()=>{B(a,"href",n),T(r,`#${t.tag??""}`)}),O(e,a),S()}var vt=Y('<span class="tags col-xs svelte-dx66h"></span>');function kt(e,t){x(t,!0);var n=vt();G(n,20,()=>t.tags,a=>a,(a,r)=>{bt(a,{get tag(){return r}})}),m(n),O(e,n),S()}var Pt=Y('<article><header class="svelte-1uu20r1"><a class="svelte-1uu20r1"> </a></header> <p> </p> <hr/> <footer class="row svelte-1uu20r1"><span class="date col-xs svelte-1uu20r1"><!> <span> </span></span> <!></footer></article>');function Mt(e,t){x(t,!0);const n=j("/notes/[slug]",{slug:t.slug}),a=yt(t.date,"dd.MM.yyyy");var r=Pt(),o=y(r),i=y(o),c=y(i,!0);m(i),m(o);var l=C(o,2),h=y(l,!0);m(l);var d=C(l,4),u=y(d),b=y(u);ce(b,{class:"calendar-icon"});var E=C(b,2),$=y(E,!0);m(E),m(u);var Z=C(u,2);kt(Z,{get tags(){return t.tags}}),m(d),m(r),Q(()=>{B(i,"href",n),T(c,t.title),T(h,t.excerpt),T($,a)}),O(e,r),S()}function Yt(e,t){x(t,!0);var n=X();ie("1iledwa",r=>{te(()=>{ne.title="Notes - Gito's modding ponders"})});var a=A(n);G(a,17,()=>t.data.notes,r=>r.slug,(r,o)=>{Mt(r,V(()=>ae(o)))}),O(e,n),S()}export{Yt as component,Ft as universal};
