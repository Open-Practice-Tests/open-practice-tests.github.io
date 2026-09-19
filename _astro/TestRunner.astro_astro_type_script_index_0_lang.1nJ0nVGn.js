import{i as e,r as t,t as n}from"./eliminator.CnRb2FKU.js";import{i as r,n as i,r as a,t as o}from"./results-tally.CbjVm9dL.js";import{t as s}from"./saved-state.BIcxsWkG.js";function c(e,t){let n=e.querySelector(`[data-time-category]`),r=e.querySelector(`[data-time-outcome]`),i=e.querySelector(`tbody`),a=Array.from(i.querySelectorAll(`.tr-time-row`)),o=e.querySelector(`.tr-time-empty`),s=e.querySelector(`[data-time-count]`),c=e.querySelector(`.tr-time-scroll`),l=Array.from(e.querySelectorAll(`[data-time-sort]`));n.value=t.category,r.value=t.outcome;let u=()=>{let n=[...a].sort((e,n)=>{let r=t.sort,i=r===`time`?Number(e.dataset.time)-Number(n.dataset.time):r?e.dataset[r].localeCompare(n.dataset[r]):0;return(t.descending?-i:i)||Number(e.dataset.idx)-Number(n.dataset.idx)}),r=0;for(let e of n)e.hidden=t.category!==`all`&&e.dataset.category!==t.category||t.outcome!==`all`&&e.dataset.outcome!==t.outcome,e.querySelector(`button`).tabIndex=!e.hidden&&r===0?0:-1,e.hidden||r++,i.append(e);i.append(o),o.hidden=r>0;let u=`${r} of ${a.length} questions`;s.textContent!==u&&(s.textContent=u);for(let e of l){let n=t.sort===e.dataset.timeSort;e.closest(`th`).setAttribute(`aria-sort`,n?t.descending?`descending`:`ascending`:`none`),e.textContent=n?t.descending?`↓`:`↑`:`↕`;let r=n?!t.descending:e.dataset.timeSort===`time`,i=n&&t.descending!==(e.dataset.timeSort===`time`);e.setAttribute(`aria-label`,i?`Restore question order`:`Sort ${e.dataset.label} ${r?`descending`:`ascending`}`)}c.scrollTop=0;let d=e.querySelector(`.tr-chart-tip`);d&&(d.hidden=!0)};n.addEventListener(`change`,()=>{t.category=n.value,u()}),r.addEventListener(`change`,()=>{t.outcome=r.value,u()});for(let e of l)e.addEventListener(`click`,()=>{let n=e.dataset.timeSort;t.sort===n&&t.descending!==(n===`time`)?(t.sort=null,t.descending=!1):(t.descending=t.sort===n?!t.descending:n===`time`,t.sort=n),u()});u(),s.setAttribute(`role`,`status`)}function l(e){let t=document.activeElement,n=Array.from(e.querySelectorAll(`.tr-time-table`)).map(e=>{let t=e.querySelector(`tbody`),n=Array.from(t.children),r=Array.from(e.querySelectorAll(`[aria-sort]`)).map(e=>({header:e,sort:e.getAttribute(`aria-sort`)}));return Array.from(t.querySelectorAll(`.tr-time-row`)).sort((e,t)=>Number(e.dataset.idx)-Number(t.dataset.idx)).forEach(e=>t.append(e)),r.forEach(({header:e})=>e.setAttribute(`aria-sort`,`none`)),{body:t,children:n,headers:r}});return()=>{n.forEach(({body:e,children:t,headers:n})=>{t.forEach(t=>e.append(t)),n.forEach(({header:e,sort:t})=>e.setAttribute(`aria-sort`,t))}),t?.matches(`.tr-row-btn`)&&t.isConnected&&t.focus({preventScroll:!0})}}var u=`￼`,d=[`.tr-passage`,`.tr-stem`],f=new WeakMap;function p(e){let t=[];return d.forEach((n,r)=>{let i=e.querySelector(n);i&&t.push([r,i])}),t}function m(e){let t=[],n=``,r=e=>{if(e.nodeType===Node.ELEMENT_NODE){let i=e;if(i.matches(`.katex, math, svg`)){t.push({kind:`katex`,node:i,start:n.length,len:1}),n+=u;return}for(let e of Array.from(i.childNodes))r(e);return}if(e.nodeType===Node.TEXT_NODE){let r=e;if(r.data.length===0)return;t.push({kind:`text`,node:r,start:n.length,len:r.data.length}),n+=r.data}};for(let t of Array.from(e.childNodes))r(t);return{units:t,text:n}}function h(e,t,n,r,i){for(let t of e){let e=document.createRange();e.selectNode(t.node);let a;try{a=e.comparePoint(n,r)}catch{continue}if(a<0)return t.start;if(a===0)return t.kind===`text`&&n===t.node?t.start+Math.min(r,t.len):i?t.start+t.len:t.start}return t}function g(e){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return null;let n=t.getRangeAt(0);for(let[t,r]of p(e)){if(!r.contains(n.startContainer)||!r.contains(n.endContainer))continue;let{units:e,text:i}=m(r),a=h(e,i.length,n.startContainer,n.startOffset,!1),o=h(e,i.length,n.endContainer,n.endOffset,!0);for(o<a&&([a,o]=[o,a]);a<o&&/\s/.test(i[a]);)a++;for(;o>a&&/\s/.test(i[o-1]);)o--;return o<=a?null:{c:t,s:a,e:o}}return null}function ee(e,t,n){let r=[...e.highlights[t]??[],n];e.highlights[t]=re(r)}function _(e,t,n){let r=e.highlights[t];!r||n<0||n>=r.length||(r.splice(n,1),r.length===0&&delete e.highlights[t])}function te(e,t){return(e.highlights[t]??[]).length>0}function ne(e,t){delete e.highlights[t]}function re(e){let t=[];for(let n of[0,1]){let r=e.filter(e=>e.c===n&&e.e>e.s).sort((e,t)=>e.s-t.s||e.e-t.e);for(let e of r){let r=t[t.length-1];r&&r.c===n&&e.s<=r.e?r.e=Math.max(r.e,e.e):t.push({...e})}}return t}function ie(e,t){let n=document.createElement(`mark`);n.className=`tr-hl`,n.dataset.hl=String(t),e.parentNode.insertBefore(n,e),n.appendChild(e)}function ae(e,t){let n=JSON.stringify(t);if(e.dataset.hlSig!==n){e.dataset.hlSig=n;for(let[n,r]of p(e)){if(f.has(r)||f.set(r,r.innerHTML),r.innerHTML=f.get(r),!t.some(e=>e.c===n))continue;let{units:e,text:i}=m(r),a=new Map;t.forEach((t,r)=>{if(t.c!==n)return;let o=Math.max(0,Math.min(t.s,i.length)),s=Math.max(o,Math.min(t.e,i.length));if(!(s<=o))for(let t of e){let e=Math.max(o,t.start),n=Math.min(s,t.start+t.len);if(n<=e)continue;let i=a.get(t)??[];i.push([e-t.start,n-t.start,r]),a.set(t,i)}});for(let[e,t]of a){if(e.kind===`katex`){ie(e.node,t[0][2]);continue}let n=e.node;t.sort((e,t)=>t[0]-e[0]);for(let[e,r,i]of t){r<n.data.length&&n.splitText(r);let t=e>0?n.splitText(e):n;if(/\S/.test(t.data)&&ie(t,i),e===0)break}}}}}var v=`opt.tools.panels`,oe=16,se=48;function ce(e){try{let t=JSON.parse(localStorage.getItem(v)??`{}`)?.[e];if(t&&[`left`,`top`,`width`,`height`].every(e=>typeof t[e]==`number`))return t}catch{}return null}function le(e,t){try{let n=JSON.parse(localStorage.getItem(v)??`{}`);n[e]=t,localStorage.setItem(v,JSON.stringify(n))}catch{}}function ue(e){let{panel:t,head:n,move:r,close:i,id:a}=e,o=e.sheetBelowPx??768,s=null,c=()=>window.innerWidth<o;function l(){let e=t.getBoundingClientRect();return{left:e.left,top:e.top,width:e.width,height:e.height}}function u(e,n){if(c())return;let r=t.offsetWidth,i=window.innerWidth-se,a=window.innerHeight-se;t.style.left=`${Math.round(Math.max(se-r,Math.min(e,i)))}px`,t.style.top=`${Math.round(Math.max(0,Math.min(n,a)))}px`}function d(e){c()||(t.style.width=`${Math.round(e.width)}px`,t.style.height=`${Math.round(e.height)}px`,u(e.left,e.top))}function f(){let e=Math.min(460,Math.max(320,window.innerWidth-64)),t=Math.min(560,Math.max(280,window.innerHeight-160));return{left:window.innerWidth-e-32,top:96,width:e,height:t}}function p(){c()||le(a,l())}let m=0,h=0;n.addEventListener(`pointerdown`,e=>{if(c())return;let i=e.target.closest(`button`);if(i&&i!==r)return;let a=t.getBoundingClientRect();m=e.clientX-a.left,h=e.clientY-a.top,n.setPointerCapture(e.pointerId),n.dataset.dragging=`1`,e.preventDefault()}),n.addEventListener(`pointermove`,e=>{n.dataset.dragging===`1`&&u(e.clientX-m,e.clientY-h)});let g=e=>{if(n.dataset.dragging===`1`){delete n.dataset.dragging;try{n.releasePointerCapture(e.pointerId)}catch{}p()}};n.addEventListener(`pointerup`,g),n.addEventListener(`pointercancel`,g),r.addEventListener(`keydown`,e=>{let t=e.key===`ArrowLeft`?-16:e.key===`ArrowRight`?oe:0,n=e.key===`ArrowUp`?-16:e.key===`ArrowDown`?oe:0;if(!t&&!n)return;e.preventDefault();let r=l();u(r.left+t,r.top+n),p()});let ee=0;new ResizeObserver(()=>{t.hidden||(window.clearTimeout(ee),ee=window.setTimeout(p,250))}).observe(t),window.addEventListener(`resize`,()=>{t.hidden||d(ce(a)??f())}),t.addEventListener(`keydown`,e=>{e.key===`Escape`&&(e.stopPropagation(),e.preventDefault(),_.close())}),i.addEventListener(`click`,()=>_.close());let _={el:t,isOpen:()=>!t.hidden,open(e){t.hidden&&(s=e,t.hidden=!1,d(ce(a)??f()),t.focus({preventScroll:!0}))},close(){t.hidden||(t.hidden=!0,s&&document.contains(s)&&s.focus(),s=null)}};return _}var y=`// @ts-check
/**
 * The script that ships INSIDE a downloaded report.
 *
 * \`archive.ts\` reads this file's text (\`?raw\`) and bakes it into every archive, so it
 * has to stay standalone: no imports, nothing from \`test-engine.ts\`, no \`localStorage\`,
 * no \`fetch\`. An archive is opened from \`file://\`, where the last two would be blocked
 * or would throw, and where there is no engine, no saved attempt and no \`#opt-test-meta\`
 * to read.
 *
 * It restores exactly two behaviors from the live results screen: the tooltip on a time
 * chart's bars and its table's rows, and the click that takes you to a question. On the
 * site that click enters review; here it scrolls, because the archive has no review mode
 * and needs none, the whole transcript being on the page already.
 *
 * The tooltip's three lines arrive pre-composed in \`data.tips\`, written by the engine
 * from the same \`tipLines\` the live site uses. Composing them here would be a second
 * copy of the wording, and the phrase "% of answering time" has already been wrong once.
 *
 * @typedef {{ h: string, p: string, m: string }} ArchiveTip
 *   h heading line, p stem preview (may be empty), m the time/share/result line
 */

/** @param {{ tips: Record<string, ArchiveTip>, cta: string }} data */
function optArchiveRuntime(data) {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // qid -> its article in the transcript. Walked rather than looked up with a
  // \`[data-qid="..."]\` selector, so a qid holding a character the selector grammar
  // reserves needs no escaping. Scoped to \`.tr-question\` because bars, rows and
  // articles all carry \`data-qid\` and only the article is a scroll target.
  /** @type {Element[]} */
  var articles = [].slice.call(document.querySelectorAll(".tr-question[data-qid]"));
  /** @type {Record<string, Element>} */
  var byQid = Object.create(null);
  articles.forEach(function (a) {
    byQid[String(a.getAttribute("data-qid"))] = a;
  });

  [].forEach.call(document.querySelectorAll(".tr-chart-block"), wireBlock);

  /** @param {Element} block */
  function wireBlock(block) {
    var found = block.querySelector(".tr-chart-tip");
    if (!(found instanceof HTMLElement)) return;
    // \`const\`, so the narrowing above survives into every closure below.
    const tip = found;
    // Bars and rows rove separately, each its own single tab stop, as on the site.
    /** @type {Element[][]} */
    var groups = [
      [].slice.call(block.querySelectorAll(".tr-bar")),
      [].slice.call(block.querySelectorAll(".tr-time-row")),
    ];
    // The gap between an anchor and its tooltip lives in CSS (\`--tr-tip-gap\`, which
    // both tooltip transforms use); read it once so the "room above?" test cannot
    // drift from the transform that actually places the tooltip.
    var gap = parseFloat(getComputedStyle(tip).getPropertyValue("--tr-tip-gap")) || 8;

    /**
     * The hoverable thing under an event, and only within this block: three kinds of
     * element carry \`data-qid\`, and a document-wide lookup would find the wrong one.
     * @param {EventTarget | null} t
     */
    function targetOf(t) {
      if (!(t instanceof Element)) return null;
      var el = t.closest(".tr-bar, .tr-time-row");
      return el && block.contains(el) ? el : null;
    }

    function hide() {
      tip.hidden = true;
    }

    /**
     * @param {string} cls
     * @param {string} text
     */
    function line(cls, text) {
      var el = document.createElement("div");
      el.className = cls;
      el.textContent = text; // the preview is content, not markup
      return el;
    }

    /** The element that takes focus: a bar is focusable, a row's button is. */
    /** @param {Element} el */
    function focusableOf(el) {
      return el.classList.contains("tr-bar") ? el : el.querySelector(".tr-row-btn");
    }

    /** @param {Element} el */
    function show(el) {
      var t = data.tips[String(el.getAttribute("data-qid"))];
      if (!t) return;
      var lines = [line("tr-tip-head", t.h)];
      if (t.p) lines.push(line("tr-tip-text", t.p));
      lines.push(line("tr-tip-meta", t.m), line("tr-tip-cta", data.cta));
      tip.replaceChildren.apply(tip, lines);

      // The same measurement the site's \`placeTip\` makes, with the origin box read
      // from \`offsetParent\` rather than named. Today that resolves to \`.tr-chart-block\`,
      // which is what the site positions against too.
      tip.hidden = false;
      var box = tip.offsetParent;
      if (!(box instanceof HTMLElement)) return;
      var boxRect = box.getBoundingClientRect();
      // getBoundingClientRect is a border box, but an absolutely positioned child is
      // offset from its containing block's PADDING box, so discount the border rather
      // than landing 1px off.
      var originX = boxRect.left + box.clientLeft;
      var originY = boxRect.top + box.clientTop;
      var innerW = box.clientWidth;
      var anchor = el.classList.contains("tr-bar")
        ? el.querySelector(".tr-bar-rect") || el
        : el;
      var r = anchor.getBoundingClientRect();
      var half = tip.offsetWidth / 2;
      var center = r.left + r.width / 2 - originX;
      var min = half + 4;
      var max = innerW - half - 4;
      // A tooltip wider than its own box cannot be clamped; center it instead.
      tip.style.left =
        (min > max ? innerW / 2 : Math.min(Math.max(center, min), max)) + "px";
      tip.style.top = r.top - originY + "px";
      tip.classList.toggle("is-below", r.top - tip.offsetHeight - gap < 0);
    }

    /** @param {Element} el */
    function jump(el) {
      var q = byQid[String(el.getAttribute("data-qid"))];
      if (!q) return;
      articles.forEach(function (a) {
        a.classList.remove("is-archive-target");
      });
      q.classList.add("is-archive-target");
      q.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      // Scrolling moves the viewport but not focus, which would leave a keyboard user
      // on a control now far off screen. The article is not focusable on the site;
      // it is made so here, and only here.
      q.setAttribute("tabindex", "-1");
      /** @type {HTMLElement} */ (q).focus({ preventScroll: true });
    }

    /**
     * @param {Element[]} targets
     * @param {Element | null} next
     */
    function rove(targets, next) {
      targets.forEach(function (t) {
        var f = focusableOf(t);
        if (f) f.setAttribute("tabindex", t === next ? "0" : "-1");
      });
    }

    /**
     * @param {Element[]} targets
     * @param {number} i
     */
    function focusAt(targets, i) {
      var next = targets[Math.min(targets.length - 1, Math.max(0, i))];
      if (!next) return;
      rove(targets, next);
      var f = focusableOf(next);
      if (f instanceof HTMLElement || f instanceof SVGElement) f.focus();
    }

    /** @param {Element} el */
    function groupOf(el) {
      for (var i = 0; i < groups.length; i++) {
        if (groups[i].indexOf(el) >= 0) return groups[i];
      }
      return null;
    }

    block.addEventListener("pointerover", function (e) {
      // Ignore moves between children of the same target, or crossing a bar's four
      // child nodes rebuilds and re-measures the tooltip each time.
      var el = targetOf(e.target);
      if (el && el !== targetOf(/** @type {PointerEvent} */ (e).relatedTarget)) show(el);
    });
    block.addEventListener("pointerout", function (e) {
      var el = targetOf(e.target);
      if (el && el !== targetOf(/** @type {PointerEvent} */ (e).relatedTarget)) hide();
    });
    block.addEventListener("mouseleave", hide);
    block.addEventListener("focusin", function (e) {
      var el = targetOf(e.target);
      if (!el) return;
      var g = groupOf(el);
      if (g) rove(g, el);
      show(el);
    });
    block.addEventListener("focusout", hide);
    block.addEventListener("click", function (e) {
      var el = targetOf(e.target);
      if (el) jump(el);
    });
    block.addEventListener("keydown", function (e) {
      var el = targetOf(e.target);
      if (!el) return;
      var g = groupOf(el);
      if (!g) return;
      var i = g.indexOf(el);
      var key = /** @type {KeyboardEvent} */ (e).key;
      if (key === "Enter" || key === " ") {
        e.preventDefault(); // Space would otherwise scroll the page
        jump(el);
      } else if (key === "ArrowRight" || key === "ArrowDown") {
        e.preventDefault();
        focusAt(g, i + 1);
      } else if (key === "ArrowLeft" || key === "ArrowUp") {
        e.preventDefault();
        focusAt(g, i - 1);
      } else if (key === "Home") {
        e.preventDefault();
        focusAt(g, 0);
      } else if (key === "End") {
        e.preventDefault();
        focusAt(g, g.length - 1);
      }
    });
  }
}
`,b=class extends Error{reason;constructor(e){super(e),this.name=`ArchiveError`,this.reason=e}};function de(e){return e.replace(/@media\s+print\s*\{/gi,`@media all{`)}var fe=/,\s*url\(\s*["']?[^)"']*["']?\s*\)\s*format\(\s*["'](?:woff|truetype|opentype)["']\s*\)/g;function pe(e){return e.replace(fe,``)}var x=/url\(\s*(?:"([^"]*)"|'([^']*)'|([^)"'\s][^)]*?))\s*\)/gi;function S(e){return(e[1]??e[2]??e[3]??``).trim()}function C(e){let t=[],n=/@font-face\s*\{/gi,r;for(;r=n.exec(e);){let i=1,a=``,o=r.index+r[0].length;for(;o<e.length&&i>0;o+=1){let t=e[o];a?t===`\\`?o+=1:t===a&&(a=``):t===`"`||t===`'`?a=t:t===`{`?i+=1:t===`}`&&--i}t.push(e.slice(r.index,o)),n.lastIndex=o}return t}function w(e){let t=e.split(/[?#]/)[0],n=t.lastIndexOf(`.`);return n<0?``:t.slice(n+1).toLowerCase()}var T={woff2:`font/woff2`,woff:`font/woff`,ttf:`font/ttf`,otf:`font/otf`};function E(e){let t=w(e),n=T[t];if(!n)throw new b(`A font file has an unknown type (.${t}).`);return n}function D(e){return!/^(data:|#)/i.test(e.trim())}function O(e){let t=new Set;for(let n of C(e))for(let e of n.matchAll(x)){let n=S(e);n&&D(n)&&t.add(n)}return[...t]}function k(e,t){let n=e=>e.replace(x,(e,n,r,i)=>{let a=(n??r??i??``).trim(),o=t.get(a);return o?`url(${o})`:e}),r=``,i=0;for(let t of C(e)){let a=e.indexOf(t,i);a<0||(r+=e.slice(i,a)+n(t),i=a+t.length)}return r+e.slice(i)}function A(e){let t=e.replace(/\/\*[\s\S]*?\*\//g,``);if(/@import\b/i.test(t))throw new b(`A stylesheet uses @import.`);for(let e of t.matchAll(x)){let t=S(e);if(t&&D(t))throw new b(`A stylesheet still references ${t.slice(0,60)}.`)}}function me(e){if(/<\/style/i.test(e))throw new b(`A stylesheet could not be embedded.`)}function he(e){if(/<\/|<!--/.test(e))throw new b(`The archive script could not be embedded.`)}function ge(e){return JSON.stringify(e).replace(/</g,`\\u003c`)}var j=8388608,_e=[`.site-header`,`.site-footer`,`.tr-noprint`,`.tr-panel`,`.tr-modal`,`.tr-start-overlay`,`.tr-pause-overlay`,`.tr-checkwork`,`.tr-sidebar`,`.tr-storage-warning`,`.tr-hl-popover`].join(`, `);async function ve(e){let t=null;try{t=await fetch(e,{cache:`force-cache`})}catch{t=null}return t?.ok?t:fetch(e,{cache:`reload`})}function M(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(String(r.result)),r.onerror=()=>n(new b(`A font file could not be encoded.`)),r.readAsDataURL(e)})}async function ye(e){let t=O(e),n=new Map;return await Promise.all(t.map(async e=>{let t=E(e),r;try{r=await ve(new URL(e,location.href).href)}catch{throw new b(`A font file did not load (${e.slice(0,60)}).`)}if(!r.ok)throw new b(`A font file did not load (${r.status} on ${e.slice(0,60)}).`);n.set(e,await M(new Blob([await r.arrayBuffer()],{type:t})))})),k(e,n)}async function N(){let e=[];for(let t of Array.from(document.styleSheets)){let n=t.ownerNode;if(n instanceof HTMLStyleElement){e.push(n.textContent??``);continue}if(t.href)try{let n=await ve(t.href);if(!n.ok)throw Error(String(n.status));e.push(await n.text())}catch{try{e.push(Array.from(t.cssRules,e=>e.cssText).join(`
`))}catch{throw new b(`A stylesheet did not load.`)}}}return e.join(`
`)}var P=`
@media screen {
  .site-main { max-width: 21cm; padding: 1.5cm; margin: 0 auto; }
  /* Nothing sticky sits above a question here, so a jump would land it flush
     against the viewport edge. */
  .tr-question { scroll-margin-top: 1rem; }
  .tr-question.is-archive-target { outline: 2px solid var(--color-accent); outline-offset: 4px; }
  .tr-question:focus { outline: none; }
}
@media print {
  /* The tooltip is live on screen here and no longer carries .tr-noprint, so say this
     rather than trusting it to be hidden when the print dialog opens. */
  .tr .tr-chart-tip { display: none !important; }
}
`;function F(){let e=new Date,t=e=>String(e).padStart(2,`0`);return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`}async function be(e){let t=document.documentElement.cloneNode(!0);for(let e of Array.from(t.querySelectorAll(`script`)))e.remove();for(let e of Array.from(t.querySelectorAll(`link[rel="stylesheet"], link[rel="preload"], link[rel="icon"], link[rel="canonical"], meta[property="og:url"]`)))e.remove();for(let e of Array.from(t.querySelectorAll(`.tr-chart-tip`)))e.classList.remove(`tr-noprint`),e.removeAttribute(`aria-hidden`);for(let e of Array.from(t.querySelectorAll(_e)))e.remove();for(let e of Array.from(t.querySelectorAll(`.tr-time-table`)))Array.from(e.querySelectorAll(`.tr-time-row`)).sort((e,t)=>Number(e.dataset.idx)-Number(t.dataset.idx)).forEach((t,n)=>{t.hidden=!1,t.querySelector(`.tr-row-btn`).tabIndex=n===0?0:-1,e.querySelector(`tbody`).append(t)}),e.querySelectorAll(`[aria-sort]`).forEach(e=>e.removeAttribute(`aria-sort`));let n=t.querySelector(`#test-runner`);if(!n)throw new b(`The results could not be read.`);n.dataset.printing=`report`;let r=n.querySelector(`[data-role="print-subtitle"]`);r&&(r.textContent=e.subtitle);for(let n of Array.from(t.querySelectorAll(`[aria-label]`))){let t=n.getAttribute(`aria-label`);t.endsWith(`Activate to review this question.`)&&n.setAttribute(`aria-label`,`${t.slice(0,-33)}${e.cta}.`)}for(let e of Array.from(t.querySelectorAll(`img`))){let t=new URL(e.getAttribute(`src`)??``,location.href);if(t.origin!==location.origin||!t.pathname.startsWith(`/content/pilot/`))throw new b(`Unrecognized report image.`);let n=await ve(t.href);if(!n.ok)throw new b(`A report image could not be loaded.`);let r=await n.blob();e.src=await new Promise((e,t)=>{let n=new FileReader;n.onload=()=>e(String(n.result)),n.onerror=t,n.readAsDataURL(r)}),e.removeAttribute(`loading`)}let i=pe(de(await N()));i=await ye(i),A(i);let a=`${i}\n${P}`;me(a);let o=t.querySelector(`head`),s=t.querySelector(`body`);if(!o||!s)throw new b(`The page could not be read.`);let c=t.ownerDocument.createElement(`style`);c.textContent=a,o.appendChild(c),he(y);let l=ge({tips:e.tips,cta:e.cta}),u=t.ownerDocument.createElement(`script`);u.textContent=`${y}\noptArchiveRuntime(${l});\n`,s.appendChild(u);let d=`<!DOCTYPE html>\n${t.outerHTML}`,f=new Blob([d],{type:`text/html;charset=utf-8`});if(f.size>j)throw new b(`The file came out larger than ${Math.round(j/1024/1024)} MB.`);return{blob:f,filename:`${e.testId}-report-${F()}.html`}}function xe(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,r.click(),window.setTimeout(()=>URL.revokeObjectURL(n),6e4)}var Se=5,Ce=500,we=Ce*4,Te=3e5,Ee=8e3,De=44;function I(e,t){return e.querySelector(t)}function L(e,t){return Array.from(e.querySelectorAll(t))}function R(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function z(){let u=document.getElementById(`test-runner`);if(!u||u.dataset.initialized===`1`)return;u.dataset.initialized=`1`;let d=I(u,`#opt-test-meta`);if(!d||!d.textContent)return;let f=JSON.parse(d.textContent);if(!f.parts.length)return;let p=u.dataset.mode===`browse`,m=u.dataset.testsHref||`/`,h=`opt.test.${f.id}.${p?`browse.`:``}state`,re=[h],ie=!0,v=!1;function oe(){ie=!1;let e=I(u,`[data-role="storage-warning"]`);e&&(e.hidden=!1)}function se(e){return s(e,f.contentVersion)}function ce(e){if(typeof e.paused!=`boolean`&&(e.paused=!1),typeof e.startedAt!=`number`&&(e.startedAt=Date.now()),typeof e.awaitingModuleStart!=`boolean`&&(e.awaitingModuleStart=!1),(!e.eliminated||typeof e.eliminated!=`object`)&&(e.eliminated={}),(typeof e.eliminatorOn!=`boolean`||e.v<4)&&(e.eliminatorOn=!0),e.v<4)for(let[t,r]of Object.entries(e.answers))n(e,t,r);return(!e.highlights||typeof e.highlights!=`object`)&&(e.highlights={}),typeof e.timerHidden!=`boolean`&&(e.timerHidden=!1),Array.isArray(e.warnedParts)||(e.warnedParts=[]),Array.isArray(e.seenSections)||(e.seenSections=[]),Array.isArray(e.revealed)||(e.revealed=[]),e.v<Se&&(e.v=Se),e}function le(){try{let e=localStorage.getItem(h);if(e===null)return null;try{let t=JSON.parse(e);if(se(t))return ce(t)}catch{}try{let t=h+`.recovery.`;if(!Object.keys(localStorage).some(n=>n.startsWith(t)&&localStorage.getItem(n)===e)){let n=t+Date.now(),r=n,i=0;for(;localStorage.getItem(r)!==null;)r=n+`.`+ ++i;localStorage.setItem(r,e)}}catch{v=!0,oe()}return null}catch{return v=!0,oe(),null}}function y(){if(!(v||O&&S.lockedParts.length===0||k||!A()))try{localStorage.setItem(h,JSON.stringify(S)),x=!0}catch{ie&&oe()}}function de(e){e.partIndex=Math.max(0,Math.min(e.partIndex,f.parts.length-1));let t=f.parts[e.partIndex];return t.questions.some(t=>t.id===e.currentQid)||(e.currentQid=t.questions[0].id),e}let fe=f.parts[0],pe=le(),x=pe!==null,S=pe?de(pe):{v:Se,contentVersion:f.contentVersion,attemptId:crypto.randomUUID(),breakUntil:null,awaitingModuleStart:!0,partIndex:0,currentQid:fe.questions[0].id,answers:{},flags:[],timeMs:{},partTimerMs:{},lockedParts:[],paused:!1,completed:!1,startedAt:Date.now(),eliminated:{},eliminatorOn:!0,highlights:{},timerHidden:!1,warnedParts:[],seenSections:[],revealed:[]},C=!1,w=S.partIndex,T=!1,E=!1,D=!1,O=!p&&!S.completed&&!S.breakUntil&&S.awaitingModuleStart,k=!1;function A(){if(k)return!1;try{let e=localStorage.getItem(h);if(!x)return e!==null&&se(JSON.parse(e))?(k=!0,window.location.reload(),!1):!0;if(e!==null&&JSON.parse(e).attemptId===S.attemptId)return!0}catch{return!0}return k=!0,window.location.assign(u.dataset.practiceHref||m),!1}let me=e=>{e.key===h&&e.newValue===null&&A()};window.addEventListener(`pageshow`,e=>{A()&&e.persisted&&(ie?window.location.reload():yn())});function he(e){return C||p&&S.revealed.includes(e)}function ge(){return C||p}let j={partTitle:I(u,`[data-role="part-title"]`),timer:I(u,`[data-role="timer"]`),timerToggle:I(u,`[data-action="hide-timer"]`),live:I(u,`[data-role="live"]`),toast:I(u,`[data-role="toast"]`),pauseBtn:I(u,`[data-action="pause"]`),printBlankBtn:I(u,`[data-action="print-blank"]`),printSubtitle:I(u,`[data-role="print-subtitle"]`),pauseOverlay:I(u,`[data-role="pause-overlay"]`),resumeBtn:I(u,`[data-action="resume"]`),startOverlay:I(u,`[data-role="start-overlay"]`),browseProgress:I(u,`[data-role="browse-progress"]`),startBody:I(u,`[data-role="start-body"]`),startBtn:I(u,`[data-action="start"]`),grid:I(u,`[data-role="grid"]`),toolbar:I(u,`[data-role="toolbar"]`),elimBtn:I(u,`[data-action="eliminator"]`),clearHlBtn:I(u,`[data-action="clear-highlights"]`),refBtn:I(u,`[data-action="reference"]`),refPanel:I(u,`[data-role="ref-panel"]`),dirBtn:I(u,`[data-action="directions"]`),dirPanel:I(u,`[data-role="dir-panel"]`),checkwork:I(u,`[data-role="checkwork"]`),checkworkTitle:I(u,`[data-role="checkwork-title"]`),checkworkSummary:I(u,`[data-role="checkwork-summary"]`),checkworkGrid:I(u,`[data-role="checkwork-grid"]`),backToQuestionsBtn:I(u,`[data-action="back-to-questions"]`),nextLabel:I(u,`[data-role="next-label"]`),nextArrow:I(u,`[data-role="next-arrow"]`),questionArea:I(u,`.tr-question-area`),hlPopover:I(u,`[data-role="hl-popover"]`),hlAction:I(u,`[data-role="hl-action"]`),flagBtn:I(u,`[data-action="flag"]`),resetModuleBtn:I(u,`[data-action="reset-module"]`),checkModuleBtn:I(u,`[data-action="check-module"]`),prevBtn:I(u,`[data-action="prev"]`),nextBtn:I(u,`[data-action="next"]`),submitBtn:I(u,`[data-role="submit"]`),submitSideBtn:I(u,`[data-role="submit-side"]`),progress:I(u,`[data-role="progress"]`),stepper:I(u,`[data-role="stepper"]`),results:I(u,`[data-role="results"]`),body:I(u,`.tr-body`),navbar:I(u,`.tr-navbar`),navbarTop:I(u,`.tr-navbar-top`),sidebar:I(u,`.tr-sidebar`),topbar:I(u,`.tr-topbar`),modal:I(u,`[data-role="modal"]`),modalTitle:I(u,`[data-role="modal-title"]`),modalBody:I(u,`[data-role="modal-body"]`),modalConfirm:I(u,`[data-role="modal-confirm"]`),modalCancel:I(u,`[data-role="modal-cancel"]`)},_e=L(u,`.tr-question`),ve=L(u,`.tr-step`),M=new Map,ye=new Map;f.parts.forEach((e,t)=>{for(let n of e.questions)M.set(n.id,n),ye.set(n.id,t)});function N(){return f.parts[S.partIndex]}function P(){return f.parts[w]}let F=`all`;function z(){return f.parts.flatMap((e,t)=>!p||F===`all`||e.sectionId===F?[t]:[])}function Oe(){return S.partIndex>=f.parts.length-1}function ke(e){return(e.timeLimitMinutes??0)*6e4}function B(e){return S.partTimerMs[e.partId]??(S.partTimerMs[e.partId]=f.timerMode===`countdown`?ke(e):0),S.partTimerMs[e.partId]}let V=null;function Ae(){return!p&&!O&&!S.paused&&!S.breakUntil&&!S.completed&&!C&&!E}function H(e=document.visibilityState===`visible`){if(V==null)return;let t=Date.now(),n=t-V;if(V=t,n<=0)return;if(e&&!T){let e=S.currentQid;S.timeMs[e]=(S.timeMs[e]??0)+Math.min(n,we)}let r=N();B(r),f.timerMode===`countdown`?S.partTimerMs[r.partId]=Math.max(0,S.partTimerMs[r.partId]-n):S.partTimerMs[r.partId]+=n}function U(){Ae()?V??=Date.now():(H(),V=null)}function W(e,t){let n=t===`ceil`?Math.ceil(e/1e3):Math.floor(e/1e3),r=Math.floor(n/3600),i=Math.floor(n%3600/60),a=n%60,o=r>0?String(i).padStart(2,`0`):String(i),s=String(a).padStart(2,`0`);return r>0?`${r}:${o}:${s}`:`${o}:${s}`}function je(){if(C||p){j.timer.textContent=``,j.timer.hidden=!0;return}j.timer.hidden=S.timerHidden;let e=B(N());f.timerMode===`countdown`?(j.timer.textContent=W(e,`ceil`),j.timer.classList.toggle(`is-low`,e<=6e4)):j.timer.textContent=W(e,`floor`)}function Me(e){return f.timerMode===`countdown`&&ke(e)>0}let Ne=0,Pe=0,G=null;function K(e,t=``){(t===``||G===null||G===t)&&(window.clearTimeout(Pe),G=t,j.live.textContent=``,Pe=window.setTimeout(()=>{j.live.textContent=e,G=null},30))}function Fe(e){G===e&&(window.clearTimeout(Pe),G=null,j.live.textContent=``)}function Ie(e){j.toast.textContent=e,j.toast.hidden=!1,window.clearTimeout(Ne),Ne=window.setTimeout(()=>{j.toast.hidden=!0},Ee)}let Le=Date.now();function Re(){if(k)return;if(S.breakUntil){an();return}if(H(),je(),Ae()&&Me(N())){let e=N(),t=S.partTimerMs[e.partId]??0;if(document.visibilityState===`visible`&&t>0&&t<=Te&&ke(e)>Te&&!S.warnedParts.includes(e.partId)&&(S.warnedParts.push(e.partId),y(),K(`Five minutes remain in this module.`),Ie(`5 minutes remaining`)),t<=0){tt(!0);return}}let e=Date.now();e-Le>=2e3&&(Le=e,Ae()&&y())}function ze(e){return _e.find(t=>t.dataset.qid===e)}function Be(){return P().questions.findIndex(e=>e.id===S.currentQid)}function Ve(e,n,i=C){let a=S.answers[n],o=i?M.get(n)?.correctChoiceId:void 0,s=I(e,`.tr-numeric-input`);if(s){s.value=a??``,s.disabled=C||p&&i;let t=r(s.value);s.setAttribute(`aria-invalid`,String(t.status===`invalid`));let n=I(e,`[data-role="numeric-error"]`);n&&(n.textContent=t.status===`invalid`?t.message:``)}L(e,`.tr-choice`).forEach((e,t)=>{let n=e.dataset.choiceId;e.setAttribute(`aria-checked`,a===n?`true`:`false`),e.classList.remove(`is-correct`,`is-wrong`);let r=C||p&&i;e.disabled=r,e.tabIndex=r?-1:(a?a===n:t===0)?0:-1,i&&(n===o?e.classList.add(`is-correct`):n===a&&e.classList.add(`is-wrong`))}),t(e,S,n,S.eliminatorOn&&!i)}function He(e){let t=S.answers[e.id],n=`Correct answer: ${e.answer.kind===`numeric`?e.answer.exact:e.correctChoiceId}.`;return p?t==null?n:`${n} ${Ue(e,t)}`:`${n} ${Ue(e,t)} Time on this question: ${W(S.timeMs[e.id]??0,`floor`)}.`}function Ue(e,t){return t==null?`You did not answer this question.`:e.kind===`numeric`&&r(t).status===`invalid`?`Invalid entry: ${t}. No credit.`:o(e,S.answers)===`correct`?`Correct. Your answer: ${t}.`:`Incorrect. Your answer: ${t}.`}function We(e,t,n){e.innerHTML=``,t.questions.forEach((t,r)=>{let i=document.createElement(`button`);i.type=`button`,i.className=`tr-grid-cell`,i.textContent=String(r+1),i.dataset.qid=t.id;let a=S.answers[t.id]!=null,s=S.flags.includes(t.id),c=`Question ${r+1}`;if(a&&he(t.id)){let e=o(t,S.answers)===`correct`;i.classList.add(e?`is-correct`:`is-incorrect`),c+=e?`, correct`:`, incorrect`}else a?(i.classList.add(`is-answered`),c+=`, answered`):c+=`, not answered`;s&&(i.classList.add(`is-flagged`),c+=`, flagged`),n&&t.id===S.currentQid&&(i.classList.add(`is-current`),c+=`, current`),i.setAttribute(`aria-label`,c),i.addEventListener(`click`,()=>{H(),T=!1,S.currentQid=t.id,q(),y()}),e.appendChild(i)})}function Ge(){let e=P();if(We(j.grid,e,!0),j.browseProgress){let t=e.questions.filter(e=>S.answers[e.id]!=null).length;j.browseProgress.textContent=`${t} of ${e.questions.length} answered in this module`}j.resetModuleBtn&&(j.resetModuleBtn.disabled=!Ot(P())),j.checkModuleBtn?.setAttribute(`aria-disabled`,String(Et(P()).length===0))}function Ke(){let e=z(),t=I(u,`[data-role="browse-filter"]`);if(t&&(t.value=F),p)for(let e of L(j.stepper,`[data-section]`))e.hidden=F!==`all`&&e.dataset.section!==F;let n=P().partId;ve.forEach((t,r)=>{let i=f.parts[r],a=!p&&S.lockedParts.includes(i.partId),o=i.partId===n;t.classList.toggle(`is-locked`,a),t.classList.toggle(`is-current`,o),t.classList.toggle(`is-upcoming`,!p&&!a&&!o),o?t.setAttribute(`aria-current`,`step`):t.removeAttribute(`aria-current`);let s=[];a&&s.push(`submitted`),o&&s.push(`current`),!p&&!a&&!o&&s.push(`not started yet`);let c=C?`Review: `:p?`Go to `:``,l=I(t,`[data-role="step-state"]`);l&&(l.textContent=`${c}${i.sectionTitle}, ${i.partTitle}, step ${e.indexOf(r)+1} of ${e.length}`+(s.length?`, ${s.join(`, `)}`:``));let u=I(t,`.tr-step-num`);u&&(u.textContent=a?`✓`:u.dataset.num??String(r+1))})}function qe(){let e=N();j.checkworkTitle.textContent=`Check your work: ${e.sectionTitle}, ${e.partTitle}`;let t=e.questions.length,n=e.questions.filter(e=>S.answers[e.id]!=null).length,r=e.questions.filter(e=>S.flags.includes(e.id)).length;j.checkworkSummary.textContent=`${n} of ${t} answered, ${r} flagged. Select a question to go back to it, or submit this module.`,We(j.checkworkGrid,e,!1)}function Je(){if(!j.dirPanel)return;let e=P().sectionId;for(let t of L(j.dirPanel,`.tr-directions`))t.hidden=t.dataset.section!==e}function q(){let e=P();Q(),j.checkwork.hidden=!T,j.questionArea.hidden=T,j.sidebar.hidden=T,T&&qe(),_e.forEach(e=>{e.hidden=e.dataset.qid!==S.currentQid});let t=ze(S.currentQid);if(t){ae(t,S.highlights[S.currentQid]??[]);let e=he(S.currentQid);Ve(t,S.currentQid,e);let n=I(t,`[data-role="explanation"]`);if(n&&(n.hidden=!e,e)){let e=M.get(S.currentQid),t=I(n,`[data-role="answer-line"]`);t&&(t.textContent=He(e))}let r=I(t,`[data-action="reveal"]`);r&&(r.textContent=e?`Reset this question`:`Show solution`)}j.partTitle.textContent=C?`Review: ${e.sectionTitle}, ${e.partTitle}`:`${e.sectionTitle}, ${e.partTitle}`,je();let n=C||p;j.timerToggle.hidden=n,j.timerToggle.textContent=S.timerHidden?`Show timer`:`Hide timer`,j.pauseBtn.hidden=n;let r=S.flags.includes(S.currentQid);j.flagBtn.setAttribute(`aria-pressed`,r?`true`:`false`),j.flagBtn.textContent=r?`Flagged`:`Flag for review`,j.submitSideBtn.hidden=n,j.elimBtn.hidden=C||T||M.get(S.currentQid)?.kind===`numeric`,j.elimBtn.setAttribute(`aria-pressed`,S.eliminatorOn?`true`:`false`),j.clearHlBtn.hidden=C||T||!te(S,S.currentQid),j.refBtn&&(j.refBtn.hidden=!e.referenceSheet),j.dirBtn&&(j.dirBtn.hidden=!e.hasDirections),Je(),j.toolbar.hidden=j.elimBtn.hidden&&j.clearHlBtn.hidden&&(!j.refBtn||j.refBtn.hidden)&&(!j.dirBtn||j.dirBtn.hidden);let i=Be();if(T){j.progress.textContent=`Check your work`,j.prevBtn.disabled=!1,j.nextBtn.disabled=!0,j.nextLabel.textContent=`Next`,j.nextArrow.hidden=!1,Ke();return}j.progress.textContent=`Question ${i+1} of ${e.questions.length}`;let a=i===e.questions.length-1,o=!C&&!p&&a;if(j.nextLabel.textContent=o?`Review your work`:`Next`,j.nextArrow.hidden=o,ge()){let t=z(),n=w===t[0]&&i===0,r=w===t[t.length-1]&&i===e.questions.length-1;j.prevBtn.disabled=n,j.nextBtn.disabled=r}else j.prevBtn.disabled=i===0,j.nextBtn.disabled=!1;j.navbar.hidden=!C,Ge(),Ke()}let Ye=null;function Xe(){C||p||T||(H(),Ye=S.currentQid,T=!0,q(),X(j.checkworkTitle))}function Ze(){T&&(H(),T=!1,Ye&&M.has(Ye)&&(S.currentQid=Ye),Ye=null,q(),X(j.partTitle))}function Qe(e){let t=P(),n=Be()+e;H();let r=null;if(n>=0&&n<t.questions.length)S.currentQid=t.questions[n].id;else if(ge()){let t=z(),n=t[t.indexOf(w)+e];if(n!==void 0){r=document.activeElement,Gt(),w=n;let t=f.parts[n].questions;S.currentQid=e>0?t[0].id:t[t.length-1].id,p&&(S.partIndex=n)}}q(),r&&(r.focus(),document.activeElement!==r&&X(j.partTitle)),y()}function $e(e){if(C||!dn())return;let t=e.target.closest(`.tr-choice`);if(!t)return;let r=e.key;if(r!==`ArrowDown`&&r!==`ArrowRight`&&r!==`ArrowUp`&&r!==`ArrowLeft`)return;let i=ze(S.currentQid);if(!i)return;let a=L(i,`.tr-choice`),o=a.indexOf(t);if(o<0)return;e.preventDefault();let s=a[(o+(r===`ArrowDown`||r===`ArrowRight`?1:-1)+a.length)%a.length],c=s.dataset.choiceId;S.answers[S.currentQid]=c,n(S,S.currentQid,c),Fe(`answer-cleared`),q(),s.focus(),y()}function et(){return N().questions.filter(e=>S.answers[e.id]==null).length}function tt(e=!1){if(p)return;let t=N();if(H(),Gt(),S.lockedParts.includes(t.partId)||S.lockedParts.push(t.partId),Oe()){it();return}let n=t.sectionId;if(S.partIndex+=1,f.breakMinutes&&N().sectionId!==n&&(S.breakUntil=Date.now()+f.breakMinutes*6e4),S.awaitingModuleStart=!0,O=!S.breakUntil,w=S.partIndex,T=!1,S.currentQid=N().questions[0].id,B(N()),V=null,U(),q(),rt(),y(),S.breakUntil){rn();return}tn(e)}function nt(){if(!dn())return;let e=et(),t=Oe(),n=(e>0?`You have ${e} unanswered question${e===1?``:`s`} in this module. `:``)+`A submitted module cannot be reopened.`+(t?` This is the final module, so you will see your results next.`:``);ln(t?`Submit and see results?`:`Submit this module?`,n,t?`Submit and see results`:`Submit this module`,()=>tt(!1))}function rt(){let e=Oe()?`Submit and see results`:`Submit this module`;j.submitBtn.textContent=e,j.submitSideBtn.textContent=e}function it(){if(!S.completed&&A()){S.completed=!0;try{localStorage.setItem(`opt.test.${f.id}.attempt.${S.attemptId}`,JSON.stringify(S))}catch{}V=null,y(),vt()}}function at(){return a({parts:f.parts,answers:S.answers,lockedParts:S.lockedParts,timeMs:S.timeMs})}function ot(e){let t=i(e);return t===null?`n/a`:`${t}%`}function st(e){return o(e,S.answers)}function ct(e){return e===`correct`?`Correct`:e===`incorrect`?`Incorrect`:`Unanswered`}function lt(e){let t=e.questions.map(e=>S.timeMs[e.id]??0),n=t.reduce((e,t)=>e+t,0);return e.questions.map((e,r)=>({q:e,idx:r,ms:t[r],status:st(e),pct:n>0?Math.round(t[r]/n*100):0}))}let ut=`answering time`;function dt(e){let t=e.q.preview?`${e.q.preview} `:``;return`Question ${e.idx+1}, ${e.q.category}. ${t}Time ${W(e.ms,`floor`)}, ${ct(e.status)}, ${e.pct}% of ${ut}. Activate to review this question.`}function ft(e,t,n,r){return{h:`Question ${t+1}, ${e.category}`,p:e.preview??``,m:`${W(r,`floor`)}, ${n}% of ${ut}, ${ct(st(e))}`}}function pt(e,t,n,r){let i=ft(e,t,n,r),a=(e,t)=>{let n=document.createElement(`div`);return n.className=e,n.textContent=t,n},o=[a(`tr-tip-head`,i.h)];return i.p&&o.push(a(`tr-tip-text`,i.p)),o.push(a(`tr-tip-meta`,i.m),a(`tr-tip-cta`,`Click to review`)),o}function mt(e,t,n){let r=parseFloat(getComputedStyle(e).getPropertyValue(`--tr-tip-gap`))||8,i=t.getBoundingClientRect(),a=i.left+t.clientLeft,o=i.top+t.clientTop,s=t.clientWidth,c=e.offsetWidth/2,l=n.left+n.width/2-a,u=c+4,d=s-c-4;e.style.left=`${u>d?s/2:Math.min(Math.max(l,u),d)}px`,e.style.top=`${n.top-o}px`,e.classList.toggle(`is-below`,n.top-e.offsetHeight-r<0)}function ht(e,t){let n=t.length;if(n===0)return``;let r=Math.max(1,...t.map(e=>e.ms)),i=Math.min(684,Math.max(288,n*58)),a=44+i+8,o=i/n,s=Math.max(.75,Math.min(De,o-1)),c=n>20?7:n>10?8.5:10,l=n>20?7.5:n>10?9:11,u=e=>e===`correct`?`var(--color-correct)`:e===`incorrect`?`var(--color-incorrect)`:`var(--color-unanswered)`,d=t.map((e,t)=>{let n=e.q,i=e.ms/r*150,a=44+t*o,d=a+(o-s)/2,f=178-i,p=a+o/2,m=e.pct,h=f-6,g=e.status===`unanswered`?` stroke="var(--color-border)" stroke-width="1"`:``,ee=dt(e),_=`<rect class="tr-bar-hit" x="${a.toFixed(2)}" y="28" width="${o.toFixed(2)}" height="150" />`,te=`<rect class="tr-bar-rect" x="${d.toFixed(2)}" y="${f.toFixed(2)}" width="${s.toFixed(2)}" height="${i.toFixed(2)}" fill="${u(e.status)}"${g} />`,ne=`<text x="${p.toFixed(2)}" y="${h.toFixed(2)}" text-anchor="middle" font-size="${l}" fill="var(--color-muted)">${m}%</text>`,re=`<text x="${p.toFixed(2)}" y="${190 .toFixed(2)}" text-anchor="middle" font-size="${c}" fill="var(--color-muted)">${t+1}</text>`;return`<g class="tr-bar" role="button" tabindex="${t===0?`0`:`-1`}" data-qid="${R(n.id)}" data-idx="${t}" data-pct="${m}" aria-label="${R(ee)}">${_}${te}${ne}${re}</g>`}).join(``);return`<svg width="${a}" height="204" viewBox="0 0 ${a} 204" role="group" aria-label="${R(`Per-question time for ${e.sectionTitle}, ${e.partTitle}, colored by whether the answer was correct, incorrect, or left unanswered`)}">
      <line x1="44" y1="178" x2="${a-8}" y2="178" stroke="var(--color-border)" stroke-width="1" aria-hidden="true" />
      <text x="38" y="32" text-anchor="end" font-size="11" fill="var(--color-muted)" aria-hidden="true">${W(r,`ceil`)}</text>
      <text x="38" y="178" text-anchor="end" font-size="11" fill="var(--color-muted)" aria-hidden="true">0:00</text>
      ${d}
    </svg>`}function gt(e){return e.map(e=>{let t=`<button type="button" class="tr-row-btn" tabindex="${e.idx===0?`0`:`-1`}" aria-label="${R(dt(e))}">${e.idx+1}</button>`;return`<tr class="tr-time-row" data-qid="${R(e.q.id)}" data-idx="${e.idx}" data-pct="${e.pct}" data-category="${R(e.q.category)}" data-outcome="${e.status}" data-time="${e.ms}"><td>${t}</td><td>${R(e.q.category)}</td><td>${ct(e.status)}</td><td class="num">${W(e.ms,`floor`)}</td></tr>`}).join(``)}let _t=new Map;function vt(){C=!1,T=!1,Gt(),j.checkwork.hidden=!0,j.questionArea.hidden=!1,j.sidebar.hidden=!1;let{overall:e,sections:t,categories:n,parts:r,timeMs:i,complete:a,unsubmittedParts:o}=at();j.topbar.hidden=!0,j.stepper.hidden=!0,j.toolbar.hidden=!0,j.navbarTop.hidden=!0,j.body.hidden=!0,j.navbar.hidden=!0,j.results.hidden=!1;let s=(e,t)=>`<tr><td>${R(e)}</td><td class="num">${t.correct}</td><td class="num">${t.incorrect}</td><td class="num">${t.unanswered}</td><td class="num">${t.total}</td><td class="num">${ot(t)}</td></tr>`,l=t.map(e=>s(e.title,e)).join(``),u=n.map(e=>s(e.name,e)).join(``),d=r.map(e=>`
          <div class="tr-score-module">
            <div class="tr-score-module-name">${R(e.sectionTitle)}, ${R(e.partTitle)}</div>
            <div class="tr-score-module-score">${e.correct} / ${e.total}</div>
            <div class="tr-score-module-pct">${ot(e)}</div>
            ${e.unanswered>0?`<div class="tr-score-module-skip">${e.unanswered} unanswered</div>`:``}
          </div>`).join(``),p=`
        <div class="tr-score-big">${e.correct} / ${e.total}</div>
        <div class="tr-score-sub">${ot(e)} correct</div>
        <ul class="tr-score-split" role="list">
          <li><span class="tr-swatch is-correct" aria-hidden="true"></span>${e.correct} correct</li>
          <li><span class="tr-swatch is-incorrect" aria-hidden="true"></span>${e.incorrect} incorrect</li>
          <li><span class="tr-swatch is-unanswered" aria-hidden="true"></span>${e.unanswered} unanswered</li>
        </ul>
        <div class="tr-score-caption">Total active time ${W(i,`floor`)}</div>`,m=a?``:`<p class="tr-score-note" role="status">This attempt is not finished. ${R(o.join(`, `))} ${o.length===1?`was`:`were`} never submitted. The counts below still cover every question in the test, so
        anything you did not reach is counted as unanswered.</p>`,h=f.lessonLinks??{},g=n.filter(e=>e.incorrect+e.unanswered>0&&h[e.name]).slice(0,3).map(e=>{let t=[e.incorrect>0?`${e.incorrect} wrong`:``,e.unanswered>0?`${e.unanswered} unanswered`:``].filter(Boolean).join(` and `);return`
          <li class="tr-next-item">
            <a class="tr-btn" href="${R(h[e.name].href)}">${R(h[e.name].label)}</a>
            <span class="tr-next-why">${t} of ${e.total} in ${R(e.name)}.</span>
          </li>`}).join(``),ee=e.total>0&&e.correct===e.total?`<div><h2>Review next</h2>
             <p class="tr-score-note">You answered every question correctly.</p></div>`:g?`<div><h2>Review next</h2>
               <ul class="tr-next-list" role="list">${g}</ul></div>`:``,_=`
      <div class="tr-modal-actions tr-results-actions tr-noprint">
        <button type="button" class="tr-btn tr-btn-primary" data-role="review">Review answers</button>
        <button type="button" class="tr-btn" data-role="print-report">
          <svg class="tr-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>Generate PDF report
        </button>
        <button type="button" class="tr-btn" data-role="archive">
          <svg class="tr-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg><span data-role="archive-label">${zt}</span>
        </button>
        <button type="button" class="tr-btn" data-role="reset">Reset this test</button>
      </div>
    `;j.results.innerHTML=`
      <div class="tr-score-hero" tabindex="-1">
        ${p}
        <div class="tr-score-modules">${d}</div>
        ${m}
        <p class="tr-score-note">These are raw practice results. The supplied forms are fixed, and their raw counts do not convert to an SAT scaled score.</p>
      </div>
      ${_}
      ${ee}
      <div>
        <h2 id="tr-h-section">By section</h2>
        <div class="tr-table-scroll" tabindex="0" role="region" aria-labelledby="tr-h-section">
          <table class="tr-table">
            <thead><tr><th>Section</th><th class="num">Correct</th><th class="num">Incorrect</th><th class="num">Unanswered</th><th class="num">Questions</th><th class="num">Percent</th></tr></thead>
            <tbody>${l}</tbody>
          </table>
        </div>
      </div>
      <div>
        <h2 id="tr-h-category">By category</h2>
        <div class="tr-table-scroll" tabindex="0" role="region" aria-labelledby="tr-h-category">
          <table class="tr-table">
            <thead><tr><th>Category</th><th class="num">Correct</th><th class="num">Incorrect</th><th class="num">Unanswered</th><th class="num">Questions</th><th class="num">Percent</th></tr></thead>
            <tbody>${u}</tbody>
          </table>
        </div>
        <p class="tr-score-note">Read the question count beside each percentage. A category with
          only a few questions on this test cannot tell you much on its own.</p>
      </div>
      <div>
        <h2>Time per question</h2>
        <ul class="tr-legend tr-chart-legend">
          <li><span class="tr-swatch is-correct" aria-hidden="true"></span> Correct</li>
          <li><span class="tr-swatch is-incorrect" aria-hidden="true"></span> Incorrect</li>
          <li><span class="tr-swatch is-unanswered" aria-hidden="true"></span> Unanswered</li>
        </ul>
        <div class="tr-chart-list">
          ${f.parts.map(e=>{let t=lt(e);return`
            <div class="tr-chart-block" data-time-part="${R(e.partId)}">
              <h3 class="tr-chart-title" id="tr-time-${R(e.partId)}">${R(e.sectionTitle)}, ${R(e.partTitle)}</h3>
              <div class="tr-chart">${ht(e,t)}</div>
              <div class="tr-table-scroll tr-time-scroll" tabindex="0" role="region" aria-labelledby="tr-time-${R(e.partId)}">
                <table class="tr-table tr-time-table">
                  <thead><tr><th scope="col">#</th>
                    <th scope="col" aria-sort="none" aria-labelledby="tr-time-category-${R(e.partId)}"><span id="tr-time-category-${R(e.partId)}">Category</span> <button type="button" class="tr-time-sort tr-noprint" data-time-sort="category" data-label="Category" aria-label="Sort Category ascending">↕</button>
                      <select class="tr-time-filter tr-noprint" data-time-category aria-label="Filter Category"><option value="all">All categories</option>${[...new Set(t.map(e=>e.q.category))].sort((e,t)=>e.localeCompare(t)).map(e=>`<option value="${R(e)}">${R(e)}</option>`).join(``)}</select>
                    </th>
                    <th scope="col" aria-sort="none" aria-labelledby="tr-time-outcome-${R(e.partId)}"><span id="tr-time-outcome-${R(e.partId)}">Outcome</span> <button type="button" class="tr-time-sort tr-noprint" data-time-sort="outcome" data-label="Outcome" aria-label="Sort Outcome ascending">↕</button>
                      <select class="tr-time-filter tr-noprint" data-time-outcome aria-label="Filter Outcome"><option value="all">All outcomes</option><option value="correct">Correct</option><option value="incorrect">Incorrect</option><option value="unanswered">Unanswered</option></select>
                    </th>
                    <th scope="col" class="num" aria-sort="none" aria-labelledby="tr-time-duration-${R(e.partId)}"><span id="tr-time-duration-${R(e.partId)}">Time</span> <button type="button" class="tr-time-sort tr-noprint" data-time-sort="time" data-label="Time" aria-label="Sort Time descending">↕</button></th>
                  </tr></thead>
                  <tbody>${gt(t)}<tr class="tr-time-empty tr-noprint" hidden><td colspan="4">No questions match these filters.</td></tr></tbody>
                </table>
              </div>
              <p class="tr-score-note tr-noprint" data-time-count></p>
              <div class="tr-chart-tip tr-noprint" aria-hidden="true" hidden></div>
            </div>
          `}).join(``)}
        </div>
      </div>
      ${_}
    `;for(let e of L(j.results,`.tr-chart-block`)){let t=e.dataset.timePart;_t.has(t)||_t.set(t,{category:`all`,outcome:`all`,sort:null,descending:!1}),c(e,_t.get(t)),Ct(e)}for(let e of L(j.results,`[data-role="review"]`))e.addEventListener(`click`,()=>wt());for(let e of L(j.results,`[data-role="print-report"]`))e.addEventListener(`click`,It);for(let e of L(j.results,`[data-role="archive"]`))e.addEventListener(`click`,()=>{Vt(e)});for(let e of L(j.results,`[data-role="reset"]`))e.addEventListener(`click`,At);yt()}function yt(){for(let e of L(j.results,`[data-role="archive"]`))e.disabled=D,I(e,`[data-role="archive-label"]`).textContent=D?Bt:zt}function J(e){return e instanceof Element?e.closest(`.tr-bar, .tr-time-row`):null}function bt(e){return(e.classList.contains(`tr-bar`)?I(e,`.tr-bar-rect`)??e:e).getBoundingClientRect()}function xt(e){return e.classList.contains(`tr-bar`)?e:I(e,`.tr-row-btn`)}function St(e){let t=ye.get(e);t!=null&&wt({partIndex:t,qid:e})}function Ct(e){let t=I(e,`.tr-chart-tip`);if(!t)return;let n=()=>[L(e,`.tr-bar`),L(e,`.tr-time-row:not([hidden])`)],r=()=>{t.hidden=!0},i=(e,t)=>{for(let n of e){let e=xt(n);e&&e.setAttribute(`tabindex`,n===t?`0`:`-1`)}},a=(e,t)=>{let n=e[Math.min(e.length-1,Math.max(0,t))];n&&(i(e,n),xt(n)?.focus())},o=n=>{let r=n.dataset.qid,i=r==null?void 0:M.get(r);if(!i)return;let a=Number(n.dataset.idx??0),o=Number(n.dataset.pct??0);t.replaceChildren(...pt(i,a,o,S.timeMs[i.id]??0)),t.hidden=!1,mt(t,e,bt(n))};e.addEventListener(`click`,e=>{let t=J(e.target)?.dataset.qid;t&&St(t)}),e.addEventListener(`keydown`,e=>{let t=J(e.target);if(!t)return;let r=n().find(e=>e.includes(t));if(!r)return;let i=r.indexOf(t),o=t.dataset.qid;e.key===`Enter`||e.key===` `?(e.preventDefault(),o&&St(o)):e.key===`ArrowRight`||e.key===`ArrowDown`?(e.preventDefault(),a(r,i+1)):e.key===`ArrowLeft`||e.key===`ArrowUp`?(e.preventDefault(),a(r,i-1)):e.key===`Home`?(e.preventDefault(),a(r,0)):e.key===`End`&&(e.preventDefault(),a(r,r.length-1))}),e.addEventListener(`pointerover`,e=>{let t=J(e.target);t&&t!==J(e.relatedTarget)&&o(t)}),e.addEventListener(`pointerout`,e=>{let t=J(e.target);t&&t!==J(e.relatedTarget)&&r()}),e.addEventListener(`focusin`,e=>{let t=J(e.target);if(!t)return;let r=n().find(e=>e.includes(t));r&&i(r,t),o(t)}),e.addEventListener(`focusout`,r),e.addEventListener(`mouseleave`,r);let s=e.querySelector(`.tr-time-scroll`);s?.addEventListener(`scroll`,()=>{let t=J(document.activeElement);if(t?.matches(`.tr-time-row:not([hidden])`)){let n=t.getBoundingClientRect(),r=s.getBoundingClientRect(),i=e.querySelector(`thead th`).getBoundingClientRect();if(n.bottom>Math.max(r.top,i.bottom)&&n.top<r.bottom){o(t);return}}r()})}let Y=null;function X(e){e?.focus({preventScroll:!0})}function wt(e){C=!0,T=!1,w=e?e.partIndex:0,S.currentQid=e?e.qid:f.parts[0].questions[0].id,j.results.hidden=!0,j.topbar.hidden=!1,j.stepper.hidden=!1,j.navbarTop.hidden=!1,j.body.hidden=!1,j.navbar.hidden=!1,j.timer.hidden=!0,j.flagBtn.hidden=!0,Y||(Y=document.createElement(`button`),Y.type=`button`,Y.className=`tr-btn tr-btn-primary`,Y.textContent=`Back to results`,Y.addEventListener(`click`,Tt),j.navbar.appendChild(Y)),Y.hidden=!1,q(),X(j.partTitle),window.scrollTo(0,0)}function Tt(){C=!1,j.timer.hidden=!1,j.flagBtn.hidden=!1,Y&&(Y.hidden=!0),vt(),X(I(j.results,`.tr-score-hero`)),window.scrollTo(0,0)}function Et(e){return e.questions.filter(e=>S.answers[e.id]!=null&&!S.revealed.includes(e.id))}function Dt(){if(!p)return;let e=P(),t=Et(e);t.length&&(S.revealed.push(...t.map(e=>e.id)),q(),y(),K(`Checked ${t.length} attempted question${t.length===1?``:`s`} in ${e.sectionTitle}, ${e.partTitle}. Select a question to review its solution.`))}function Ot(e){return e.questions.some(({id:e})=>S.answers[e]!==void 0||S.flags.includes(e)||S.revealed.includes(e)||(S.eliminated[e]?.length??0)>0||(S.highlights[e]?.length??0)>0||(S.timeMs[e]??0)>0)}function kt(){if(!p)return;let e=P();Ot(e)&&ln(`Reset ${e.sectionTitle}, ${e.partTitle}?`,`This clears all answers, revealed solutions, flags, highlights, and crossed-out choices in this module. Other modules and timed attempts are kept.`,`Reset this module`,()=>{let t=new Set(e.questions.map(e=>e.id));for(let e of t)delete S.answers[e],delete S.timeMs[e],delete S.eliminated[e],delete S.highlights[e];S.flags=S.flags.filter(e=>!t.has(e)),S.revealed=S.revealed.filter(e=>!t.has(e)),q(),y(),j.flagBtn.focus(),K(`${e.sectionTitle}, ${e.partTitle} has been reset.`)})}function At(){ln(`Reset this test?`,`This clears the current test so you can try again. Completed attempt snapshots remain in this browser. Save a PDF or interactive report if you want a copy you can open later. You will go back to the tests page.`,`Clear and reset`,()=>{k=!0;try{for(let e of re)localStorage.removeItem(e)}catch{}window.location.assign(m)})}function jt(){for(let e of f.parts)for(let t of e.questions){let e=ze(t.id);if(!e)continue;Ve(e,t.id,!0);let n=I(e,`[data-role="explanation"]`),r=n&&I(n,`[data-role="answer-line"]`);r&&(r.textContent=He(t))}}let Mt=`Blank test, no answers`;function Nt(){return`Results report, generated ${new Date().toLocaleDateString(void 0,{year:`numeric`,month:`long`,day:`numeric`})}`}let Pt=null;function Ft(){Pt??=l(j.results)}function It(){jt(),j.printSubtitle.textContent=Nt(),u.dataset.printing=`report`,Ft(),window.print()}function Lt(){let e={};for(let t of f.parts)for(let n of lt(t))e[n.q.id]=ft(n.q,n.idx,n.pct,n.ms);return e}let Rt=`Could not build the report file. Generate PDF report still works.`,zt=`Download interactive report`,Bt=`Building`;async function Vt(e){if(D)return;let t=L(j.results,`[data-role="archive"]`).indexOf(e);D=!0;try{yt(),jt();let{blob:e,filename:n}=await be({subtitle:Nt(),testId:f.id,cta:`Click to jump to this question`,tips:Lt()});if(xe(e,n),D=!1,yt(),E){let e=`Report sent to your downloads as ${n}.`;Ie(e),K(e)}else L(j.results,`[data-role="archive"]`)[t]?.focus(),un(`Report sent to your downloads`,`Your browser is saving it as ${n}. If it asks where to put the file, pick a folder. It holds the whole attempt: every question, your answer against the correct one, the explanations, and the timing charts. Open it in any browser, online or off.`)}catch(e){let t=e instanceof b?` ${e.reason}`:``;Ie(Rt+t),K(Rt+t)}finally{D=!1,yt()}}function Ht(){j.printSubtitle.textContent=Mt,delete u.dataset.printing,window.print()}let Ut=[];function Wt(e,t,n,r){let i=ue({panel:e,head:I(e,`[data-role="${r}-head"]`),move:I(e,`[data-role="${r}-move"]`),close:I(e,`[data-role="${r}-close"]`),id:n});return Ut.push(i),t.addEventListener(`click`,()=>{i.isOpen()?i.close():i.open(t)}),new MutationObserver(()=>t.setAttribute(`aria-expanded`,i.isOpen()?`true`:`false`)).observe(e,{attributes:!0,attributeFilter:[`hidden`]}),i}j.refPanel&&j.refBtn&&Wt(j.refPanel,j.refBtn,`reference`,`ref`),j.dirPanel&&j.dirBtn&&Wt(j.dirPanel,j.dirBtn,`directions`,`dir`);function Gt(){for(let e of Ut)e.close()}let Z=null;function Q(){j.hlPopover.hidden||(j.hlPopover.hidden=!0,Z=null)}function Kt(e,t,n,r){Z=n,j.hlAction.textContent=t,j.hlPopover.hidden=!1;let i=j.questionArea.getBoundingClientRect(),a=j.hlPopover.offsetWidth,o=j.hlPopover.offsetHeight,s=Math.max(0,Math.min(e.left+e.width/2-i.left-a/2,j.questionArea.clientWidth-a)),c=e.top-o-6<0?e.bottom-i.top+6:e.top-i.top-o-6;j.hlPopover.style.left=`${s}px`,j.hlPopover.style.top=`${c}px`,r&&j.hlAction.focus()}function qt(e){if(C){Q();return}let t=ze(S.currentQid),n=t&&g(t);if(!n){Q();return}Kt(window.getSelection().getRangeAt(0).getBoundingClientRect(),`Highlight`,{kind:`add`,range:n},e)}j.body.addEventListener(`pointerup`,e=>{let t=e.target;if(j.hlPopover.contains(t))return;let n=t.closest(`mark.tr-hl`),r=window.getSelection();if(n&&(!r||r.isCollapsed)){if(C)return;Kt(n.getBoundingClientRect(),`Remove highlight`,{kind:`remove`,index:Number(n.dataset.hl)},!1);return}qt(!1)}),j.body.addEventListener(`keyup`,e=>{e.key===`Shift`?qt(!0):e.shiftKey&&qt(!1)}),j.hlPopover.addEventListener(`keydown`,e=>{e.key===`Escape`&&(e.stopPropagation(),e.preventDefault(),Q(),X(j.partTitle))}),j.hlAction.addEventListener(`click`,()=>{if(!Z)return;let e=S.currentQid,t=j.hlPopover.contains(document.activeElement);Z.kind===`add`?ee(S,e,Z.range):_(S,e,Z.index),Q(),window.getSelection()?.removeAllRanges(),q(),y(),t&&X(j.clearHlBtn.hidden?j.partTitle:j.clearHlBtn)}),j.clearHlBtn.addEventListener(`click`,()=>{ne(S,S.currentQid),Q(),q(),y(),X(j.partTitle)});let Jt=I(document,`.site-header`),Yt=I(document,`.site-footer`),Xt=[...Jt?[Jt]:[],...Yt?[Yt]:[],j.topbar,j.stepper,j.toolbar,j.navbarTop,j.body,j.navbar,j.results,...j.refPanel?[j.refPanel]:[],...j.dirPanel?[j.dirPanel]:[]];function Zt(e){for(let t of Xt)e?t.setAttribute(`inert`,``):t.removeAttribute(`inert`)}let Qt=null,$t=null;function $(e,t){Qt=document.activeElement,Zt(!0),$t=t,e.focus()}function en(){Zt(!1),$t=null,Qt&&document.contains(Qt)&&Qt.focus(),Qt=null}function tn(e=!1){if(!j.startOverlay||!j.startBody||!j.startBtn)return;let t=N(),n=f.timerMode===`countdown`?t.timeLimitMinutes??0:0,r=I(j.startOverlay,`#tr-start-title`);r.textContent=`${t.sectionTitle}, ${t.partTitle}: directions`,j.startBtn.textContent=`Start ${t.partTitle}`,j.startBody.textContent=(e?`The previous module ran out of time and was submitted. `:``)+`Read the directions below. ${n?`You have ${n} minutes. `:``}The timer starts only when you press "Start ${t.partTitle}". You can pause any time.`;for(let e of j.startOverlay.querySelectorAll(`[data-start-section]`))e.hidden=e.dataset.startSection!==t.sectionId;let i=I(j.startOverlay,`#tr-start-format`);i&&(i.hidden=S.partIndex>0),j.startOverlay.hidden=!1;let a=I(j.startOverlay,`[data-role="start-scroll"]`);a&&(a.scrollTop=0),$(r,()=>{})}function nn(){O&&(O=!1,S.awaitingModuleStart=!1,j.startOverlay&&(j.startOverlay.hidden=!0),en(),S.lockedParts.length===0&&(S.startedAt=Date.now()),U(),X(j.partTitle),y())}function rn(){let e=I(u,`[data-role="break-overlay"]`);e&&(e.hidden=!1,$(I(e,`#break-title`),()=>{}),an())}function an(){if(!S.breakUntil)return;let e=S.breakUntil-Date.now(),t=I(u,`[data-role="break-timer"]`);t&&(t.textContent=W(Math.max(0,e),`ceil`));let n=I(u,`[data-role="break-status"]`),r=I(u,`[data-action="start-next-section"]`),i=e<=0,a=I(u,`#break-title`),o=i?`Ready for Math?`:`Take a 10-minute break`;a&&a.textContent!==o&&(a.textContent=o);let s=i?`Your 10-minute break is complete. Start Math when you’re ready; your full module time is waiting.`:`Math will wait for you. Its timer starts only when you choose to begin.`;if(n&&n.textContent!==s&&(n.textContent=s),r){let e=i?`Start Math`:`End break and start Math`;r.textContent!==e&&(r.textContent=e),r.classList.toggle(`tr-btn-primary`,i)}}function on(){if(p||S.completed||O||!S.breakUntil)return;S.breakUntil=null,S.awaitingModuleStart=!0,O=!0;let e=I(u,`[data-role="break-overlay"]`);e&&(e.hidden=!0),en(),S.currentQid=N().questions[0].id,w=S.partIndex,V=null,X(j.partTitle),q(),U(),rt(),y(),tn()}function sn(e){e!==S.paused&&(H(),S.paused=e,j.pauseOverlay.hidden=!e,e?(U(),$(j.resumeBtn,()=>sn(!1))):(en(),U()),y())}function cn(){j.modalConfirm.replaceWith(j.modalConfirm.cloneNode(!0)),j.modalCancel.replaceWith(j.modalCancel.cloneNode(!0)),j.modalConfirm=I(u,`[data-role="modal-confirm"]`),j.modalCancel=I(u,`[data-role="modal-cancel"]`)}function ln(e,t,n,r){cn(),j.modalTitle.textContent=e,j.modalBody.textContent=t,j.modalConfirm.textContent=n,j.modalCancel.hidden=!1,E=!0,U(),j.modal.hidden=!1;let i=()=>{j.modal.hidden=!0,E=!1,en(),U()};j.modalConfirm.addEventListener(`click`,()=>{i(),r()}),j.modalCancel.addEventListener(`click`,i),$(j.modalConfirm,i)}function un(e,t){cn(),j.modalTitle.textContent=e,j.modalBody.textContent=t,j.modalConfirm.textContent=`OK`,j.modalCancel.hidden=!0,E=!0,U(),j.modal.hidden=!1;let n=()=>{j.modal.hidden=!0,E=!1,en(),U()};j.modalConfirm.addEventListener(`click`,n),$(j.modalConfirm,n)}function dn(){return p?!0:O||C||S.completed||S.paused||S.breakUntil||E?!1:(H(),Me(N())&&B(N())<=0?(tt(!0),!1):!0)}j.body.addEventListener(`click`,t=>{if(!dn())return;let r=t.target,i=r.closest(`[data-action="reveal"]`);if(i){let e=i.dataset.qid;if(!p||e!==S.currentQid)return;let t=S.revealed.indexOf(e);t>=0?(S.revealed.splice(t,1),delete S.answers[e]):S.revealed.push(e),q(),y();return}let a=r.closest(`.tr-elim`);if(a){if(C)return;let t=a.dataset.qid;if(t!==S.currentQid)return;let n=a.dataset.choiceId;Fe(`answer-cleared`),e(S,t,n)&&S.answers[t]===n&&(delete S.answers[t],K(`Choice ${n} crossed out. Your answer is cleared.`,`answer-cleared`)),q(),y();return}let o=r.closest(`.tr-choice`);if(!o||C)return;let s=o.dataset.qid;if(s!==S.currentQid)return;let c=o.dataset.choiceId;if(p&&S.answers[s]===c){delete S.answers[s],q(),y();return}S.answers[s]=c,n(S,s,c),Fe(`answer-cleared`),q(),y()}),j.body.addEventListener(`input`,e=>{let t=e.target;if(!(t instanceof HTMLInputElement)||!t.classList.contains(`tr-numeric-input`))return;let n=t.dataset.qid;if(!dn()||C||!p&&(S.completed||S.paused||S.breakUntil)||p&&he(n)||n!==S.currentQid)return;t.value.trim()?S.answers[n]=t.value:delete S.answers[n];let i=r(t.value);t.setAttribute(`aria-invalid`,String(i.status===`invalid`));let a=I(ze(n),`[data-role="numeric-error"]`);a&&(a.textContent=i.status===`invalid`?i.message:``),Ge(),y()}),j.body.addEventListener(`keydown`,$e),j.prevBtn.addEventListener(`click`,()=>{if(T){Ze();return}Qe(-1)}),j.nextBtn.addEventListener(`click`,()=>{if(T)return;let e=Be();if(!C&&!p&&e===P().questions.length-1){Xe();return}Qe(1)}),j.backToQuestionsBtn.addEventListener(`click`,Ze),p&&(I(u,`[data-role="browse-filter"]`)?.addEventListener(`change`,e=>{let t=e.currentTarget.value;if(t!==`all`&&!f.parts.some(e=>e.sectionId===t))return;H(),F=t;let n=!z().includes(w);n&&(Gt(),w=z()[0],S.partIndex=w,S.currentQid=P().questions[0].id),q(),n&&K(`${P().sectionTitle}, ${P().partTitle}. Question 1 of ${P().questions.length}.`),y()}),j.resetModuleBtn?.addEventListener(`click`,kt),j.checkModuleBtn?.addEventListener(`click`,Dt),j.stepper.addEventListener(`click`,e=>{let t=e.target.closest(`.tr-step-btn`);if(!t)return;let n=f.parts.findIndex(e=>e.partId===t.dataset.part);n<0||n===w||!z().includes(n)||(Gt(),w=n,S.partIndex=n,S.currentQid=f.parts[n].questions[0].id,q(),X(j.partTitle),y())})),j.timerToggle.addEventListener(`click`,()=>{S.timerHidden=!S.timerHidden,q(),y()}),j.flagBtn.addEventListener(`click`,()=>{let e=S.currentQid,t=S.flags.indexOf(e);t>=0?S.flags.splice(t,1):S.flags.push(e),q(),y()}),j.elimBtn.addEventListener(`click`,()=>{S.eliminatorOn=!S.eliminatorOn,q(),y()}),j.submitBtn.addEventListener(`click`,nt),j.submitSideBtn.addEventListener(`click`,nt),j.pauseBtn.addEventListener(`click`,()=>sn(!0)),j.resumeBtn.addEventListener(`click`,()=>sn(!1)),j.startBtn?.addEventListener(`click`,nn),I(u,`[data-action="start-next-section"]`)?.addEventListener(`click`,on),j.printBlankBtn.addEventListener(`click`,Ht);let fn=()=>{H(document.visibilityState!==`visible`),S.breakUntil&&an(),document.visibilityState===`visible`?Re():y()},pn=e=>{e.key===`Escape`&&$t&&(e.preventDefault(),$t())},mn=()=>{Pt?.(),Pt=null;let e=u.dataset.printing===`report`;delete u.dataset.printing,j.printSubtitle.textContent=Mt,e&&un(`Your report went to the print dialog`,`If you picked Save as PDF, the file is wherever your browser puts downloads. If you closed the dialog, or sent it to a printer by mistake, press Generate PDF report again.`)};if(p){S.paused=!1,S.completed=!1;let e=Number(u.dataset.initialModule);Number.isInteger(e)&&e>=0&&e<f.parts.length&&(S.partIndex=e,w=e,S.currentQid=N().questions[0].id),q()}else B(N()),rt(),S.completed?vt():(q(),O?tn():S.breakUntil?rn():S.paused&&(j.pauseOverlay.hidden=!1,$(j.resumeBtn,()=>sn(!1))),U());y();let hn=p?0:window.setInterval(Re,Ce),gn=!1,_n=()=>{gn||(p||(H(),y()),V=null,gn=!0,window.clearInterval(hn),window.clearTimeout(Ne),document.removeEventListener(`visibilitychange`,fn),document.removeEventListener(`keydown`,pn),window.removeEventListener(`afterprint`,mn),window.removeEventListener(`beforeprint`,Ft),window.removeEventListener(`storage`,me),window.removeEventListener(`pagehide`,_n),document.removeEventListener(`astro:before-swap`,_n))};function vn(){document.addEventListener(`visibilitychange`,fn),document.addEventListener(`keydown`,pn),window.addEventListener(`afterprint`,mn),window.addEventListener(`beforeprint`,Ft),window.addEventListener(`storage`,me),window.addEventListener(`pagehide`,_n,{once:!0}),document.addEventListener(`astro:before-swap`,_n,{once:!0})}function yn(){gn&&(gn=!1,vn(),U(),p||Re(),hn=p?0:window.setInterval(Re,Ce))}vn()}z();