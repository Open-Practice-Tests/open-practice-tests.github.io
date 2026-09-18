import{i as e,r as t,t as n}from"./eliminator.CnRb2FKU.js";import{a as r,i,n as a,r as o,t as s}from"./results-tally.niTfb9gt.js";function c(e,t){let n=e.querySelector(`[data-time-category]`),r=e.querySelector(`[data-time-outcome]`),i=e.querySelector(`tbody`),a=Array.from(i.querySelectorAll(`.tr-time-row`)),o=e.querySelector(`.tr-time-empty`),s=e.querySelector(`[data-time-count]`),c=e.querySelector(`.tr-time-scroll`),l=Array.from(e.querySelectorAll(`[data-time-sort]`));n.value=t.category,r.value=t.outcome;let u=()=>{let n=[...a].sort((e,n)=>{let r=t.sort,i=r===`time`?Number(e.dataset.time)-Number(n.dataset.time):r?e.dataset[r].localeCompare(n.dataset[r]):0;return(t.descending?-i:i)||Number(e.dataset.idx)-Number(n.dataset.idx)}),r=0;for(let e of n)e.hidden=t.category!==`all`&&e.dataset.category!==t.category||t.outcome!==`all`&&e.dataset.outcome!==t.outcome,e.querySelector(`button`).tabIndex=!e.hidden&&r===0?0:-1,e.hidden||r++,i.append(e);i.append(o),o.hidden=r>0;let u=`${r} of ${a.length} questions`;s.textContent!==u&&(s.textContent=u);for(let e of l){let n=t.sort===e.dataset.timeSort;e.closest(`th`).setAttribute(`aria-sort`,n?t.descending?`descending`:`ascending`:`none`),e.textContent=n?t.descending?`↓`:`↑`:`↕`;let r=n?!t.descending:e.dataset.timeSort===`time`,i=n&&t.descending!==(e.dataset.timeSort===`time`);e.setAttribute(`aria-label`,i?`Restore question order`:`Sort ${e.dataset.label} ${r?`descending`:`ascending`}`)}c.scrollTop=0;let d=e.querySelector(`.tr-chart-tip`);d&&(d.hidden=!0)};n.addEventListener(`change`,()=>{t.category=n.value,u()}),r.addEventListener(`change`,()=>{t.outcome=r.value,u()});for(let e of l)e.addEventListener(`click`,()=>{let n=e.dataset.timeSort;t.sort===n&&t.descending!==(n===`time`)?(t.sort=null,t.descending=!1):(t.descending=t.sort===n?!t.descending:n===`time`,t.sort=n),u()});u(),s.setAttribute(`role`,`status`)}function l(e){let t=document.activeElement,n=Array.from(e.querySelectorAll(`.tr-time-table`)).map(e=>{let t=e.querySelector(`tbody`),n=Array.from(t.children),r=Array.from(e.querySelectorAll(`[aria-sort]`)).map(e=>({header:e,sort:e.getAttribute(`aria-sort`)}));return Array.from(t.querySelectorAll(`.tr-time-row`)).sort((e,t)=>Number(e.dataset.idx)-Number(t.dataset.idx)).forEach(e=>t.append(e)),r.forEach(({header:e})=>e.setAttribute(`aria-sort`,`none`)),{body:t,children:n,headers:r}});return()=>{n.forEach(({body:e,children:t,headers:n})=>{t.forEach(t=>e.append(t)),n.forEach(({header:e,sort:t})=>e.setAttribute(`aria-sort`,t))}),t?.matches(`.tr-row-btn`)&&t.isConnected&&t.focus({preventScroll:!0})}}var u=`￼`,d=[`.tr-passage`,`.tr-stem`],f=new WeakMap;function p(e){let t=[];return d.forEach((n,r)=>{let i=e.querySelector(n);i&&t.push([r,i])}),t}function m(e){let t=[],n=``,r=e=>{if(e.nodeType===Node.ELEMENT_NODE){let i=e;if(i.matches(`.katex, math, svg`)){t.push({kind:`katex`,node:i,start:n.length,len:1}),n+=u;return}for(let e of Array.from(i.childNodes))r(e);return}if(e.nodeType===Node.TEXT_NODE){let r=e;if(r.data.length===0)return;t.push({kind:`text`,node:r,start:n.length,len:r.data.length}),n+=r.data}};for(let t of Array.from(e.childNodes))r(t);return{units:t,text:n}}function h(e,t,n,r,i){for(let t of e){let e=document.createRange();e.selectNode(t.node);let a;try{a=e.comparePoint(n,r)}catch{continue}if(a<0)return t.start;if(a===0)return t.kind===`text`&&n===t.node?t.start+Math.min(r,t.len):i?t.start+t.len:t.start}return t}function g(e){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return null;let n=t.getRangeAt(0);for(let[t,r]of p(e)){if(!r.contains(n.startContainer)||!r.contains(n.endContainer))continue;let{units:e,text:i}=m(r),a=h(e,i.length,n.startContainer,n.startOffset,!1),o=h(e,i.length,n.endContainer,n.endOffset,!0);for(o<a&&([a,o]=[o,a]);a<o&&/\s/.test(i[a]);)a++;for(;o>a&&/\s/.test(i[o-1]);)o--;return o<=a?null:{c:t,s:a,e:o}}return null}function ee(e,t,n){let r=[...e.highlights[t]??[],n];e.highlights[t]=re(r)}function _(e,t,n){let r=e.highlights[t];!r||n<0||n>=r.length||(r.splice(n,1),r.length===0&&delete e.highlights[t])}function te(e,t){return(e.highlights[t]??[]).length>0}function ne(e,t){delete e.highlights[t]}function re(e){let t=[];for(let n of[0,1]){let r=e.filter(e=>e.c===n&&e.e>e.s).sort((e,t)=>e.s-t.s||e.e-t.e);for(let e of r){let r=t[t.length-1];r&&r.c===n&&e.s<=r.e?r.e=Math.max(r.e,e.e):t.push({...e})}}return t}function ie(e,t){let n=document.createElement(`mark`);n.className=`tr-hl`,n.dataset.hl=String(t),e.parentNode.insertBefore(n,e),n.appendChild(e)}function ae(e,t){let n=JSON.stringify(t);if(e.dataset.hlSig!==n){e.dataset.hlSig=n;for(let[n,r]of p(e)){if(f.has(r)||f.set(r,r.innerHTML),r.innerHTML=f.get(r),!t.some(e=>e.c===n))continue;let{units:e,text:i}=m(r),a=new Map;t.forEach((t,r)=>{if(t.c!==n)return;let o=Math.max(0,Math.min(t.s,i.length)),s=Math.max(o,Math.min(t.e,i.length));if(!(s<=o))for(let t of e){let e=Math.max(o,t.start),n=Math.min(s,t.start+t.len);if(n<=e)continue;let i=a.get(t)??[];i.push([e-t.start,n-t.start,r]),a.set(t,i)}});for(let[e,t]of a){if(e.kind===`katex`){ie(e.node,t[0][2]);continue}let n=e.node;t.sort((e,t)=>t[0]-e[0]);for(let[e,r,i]of t){r<n.data.length&&n.splitText(r);let t=e>0?n.splitText(e):n;if(/\S/.test(t.data)&&ie(t,i),e===0)break}}}}}var v=`opt.tools.panels`,y=16,b=48;function oe(e){try{let t=JSON.parse(localStorage.getItem(v)??`{}`)?.[e];if(t&&[`left`,`top`,`width`,`height`].every(e=>typeof t[e]==`number`))return t}catch{}return null}function se(e,t){try{let n=JSON.parse(localStorage.getItem(v)??`{}`);n[e]=t,localStorage.setItem(v,JSON.stringify(n))}catch{}}function ce(e){let{panel:t,head:n,move:r,close:i,id:a}=e,o=e.sheetBelowPx??768,s=null,c=()=>window.innerWidth<o;function l(){let e=t.getBoundingClientRect();return{left:e.left,top:e.top,width:e.width,height:e.height}}function u(e,n){if(c())return;let r=t.offsetWidth,i=window.innerWidth-b,a=window.innerHeight-b;t.style.left=`${Math.round(Math.max(b-r,Math.min(e,i)))}px`,t.style.top=`${Math.round(Math.max(0,Math.min(n,a)))}px`}function d(e){c()||(t.style.width=`${Math.round(e.width)}px`,t.style.height=`${Math.round(e.height)}px`,u(e.left,e.top))}function f(){let e=Math.min(460,Math.max(320,window.innerWidth-64)),t=Math.min(560,Math.max(280,window.innerHeight-160));return{left:window.innerWidth-e-32,top:96,width:e,height:t}}function p(){c()||se(a,l())}let m=0,h=0;n.addEventListener(`pointerdown`,e=>{if(c())return;let i=e.target.closest(`button`);if(i&&i!==r)return;let a=t.getBoundingClientRect();m=e.clientX-a.left,h=e.clientY-a.top,n.setPointerCapture(e.pointerId),n.dataset.dragging=`1`,e.preventDefault()}),n.addEventListener(`pointermove`,e=>{n.dataset.dragging===`1`&&u(e.clientX-m,e.clientY-h)});let g=e=>{if(n.dataset.dragging===`1`){delete n.dataset.dragging;try{n.releasePointerCapture(e.pointerId)}catch{}p()}};n.addEventListener(`pointerup`,g),n.addEventListener(`pointercancel`,g),r.addEventListener(`keydown`,e=>{let t=e.key===`ArrowLeft`?-16:e.key===`ArrowRight`?y:0,n=e.key===`ArrowUp`?-16:e.key===`ArrowDown`?y:0;if(!t&&!n)return;e.preventDefault();let r=l();u(r.left+t,r.top+n),p()});let ee=0;new ResizeObserver(()=>{t.hidden||(window.clearTimeout(ee),ee=window.setTimeout(p,250))}).observe(t),window.addEventListener(`resize`,()=>{t.hidden||d(oe(a)??f())}),t.addEventListener(`keydown`,e=>{e.key===`Escape`&&(e.stopPropagation(),e.preventDefault(),_.close())}),i.addEventListener(`click`,()=>_.close());let _={el:t,isOpen:()=>!t.hidden,open(e){t.hidden&&(s=e,t.hidden=!1,d(oe(a)??f()),t.focus({preventScroll:!0}))},close(){t.hidden||(t.hidden=!0,s&&document.contains(s)&&s.focus(),s=null)}};return _}var x=`// @ts-check
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
`,S=class extends Error{reason;constructor(e){super(e),this.name=`ArchiveError`,this.reason=e}};function le(e){return e.replace(/@media\s+print\s*\{/gi,`@media all{`)}var ue=/,\s*url\(\s*["']?[^)"']*["']?\s*\)\s*format\(\s*["'](?:woff|truetype|opentype)["']\s*\)/g;function de(e){return e.replace(ue,``)}var C=/url\(\s*(?:"([^"]*)"|'([^']*)'|([^)"'\s][^)]*?))\s*\)/gi;function w(e){return(e[1]??e[2]??e[3]??``).trim()}function T(e){let t=[],n=/@font-face\s*\{/gi,r;for(;r=n.exec(e);){let i=1,a=``,o=r.index+r[0].length;for(;o<e.length&&i>0;o+=1){let t=e[o];a?t===`\\`?o+=1:t===a&&(a=``):t===`"`||t===`'`?a=t:t===`{`?i+=1:t===`}`&&--i}t.push(e.slice(r.index,o)),n.lastIndex=o}return t}function E(e){let t=e.split(/[?#]/)[0],n=t.lastIndexOf(`.`);return n<0?``:t.slice(n+1).toLowerCase()}var D={woff2:`font/woff2`,woff:`font/woff`,ttf:`font/ttf`,otf:`font/otf`};function O(e){let t=E(e),n=D[t];if(!n)throw new S(`A font file has an unknown type (.${t}).`);return n}function k(e){return!/^(data:|#)/i.test(e.trim())}function A(e){let t=new Set;for(let n of T(e))for(let e of n.matchAll(C)){let n=w(e);n&&k(n)&&t.add(n)}return[...t]}function j(e,t){let n=e=>e.replace(C,(e,n,r,i)=>{let a=(n??r??i??``).trim(),o=t.get(a);return o?`url(${o})`:e}),r=``,i=0;for(let t of T(e)){let a=e.indexOf(t,i);a<0||(r+=e.slice(i,a)+n(t),i=a+t.length)}return r+e.slice(i)}function M(e){let t=e.replace(/\/\*[\s\S]*?\*\//g,``);if(/@import\b/i.test(t))throw new S(`A stylesheet uses @import.`);for(let e of t.matchAll(C)){let t=w(e);if(t&&k(t))throw new S(`A stylesheet still references ${t.slice(0,60)}.`)}}function fe(e){if(/<\/style/i.test(e))throw new S(`A stylesheet could not be embedded.`)}function pe(e){if(/<\/|<!--/.test(e))throw new S(`The archive script could not be embedded.`)}function me(e){return JSON.stringify(e).replace(/</g,`\\u003c`)}var N=8388608,he=[`.site-header`,`.site-footer`,`.tr-noprint`,`.tr-panel`,`.tr-modal`,`.tr-start-overlay`,`.tr-pause-overlay`,`.tr-checkwork`,`.tr-sidebar`,`.tr-storage-warning`,`.tr-hl-popover`].join(`, `);async function ge(e){let t=null;try{t=await fetch(e,{cache:`force-cache`})}catch{t=null}return t?.ok?t:fetch(e,{cache:`reload`})}function P(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(String(r.result)),r.onerror=()=>n(new S(`A font file could not be encoded.`)),r.readAsDataURL(e)})}async function _e(e){let t=A(e),n=new Map;return await Promise.all(t.map(async e=>{let t=O(e),r;try{r=await ge(new URL(e,location.href).href)}catch{throw new S(`A font file did not load (${e.slice(0,60)}).`)}if(!r.ok)throw new S(`A font file did not load (${r.status} on ${e.slice(0,60)}).`);n.set(e,await P(new Blob([await r.arrayBuffer()],{type:t})))})),j(e,n)}async function F(){let e=[];for(let t of Array.from(document.styleSheets)){let n=t.ownerNode;if(n instanceof HTMLStyleElement){e.push(n.textContent??``);continue}if(t.href)try{let n=await ge(t.href);if(!n.ok)throw Error(String(n.status));e.push(await n.text())}catch{try{e.push(Array.from(t.cssRules,e=>e.cssText).join(`
`))}catch{throw new S(`A stylesheet did not load.`)}}}return e.join(`
`)}var I=`
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
`;function ve(){let e=new Date,t=e=>String(e).padStart(2,`0`);return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`}async function ye(e){let t=document.documentElement.cloneNode(!0);for(let e of Array.from(t.querySelectorAll(`script`)))e.remove();for(let e of Array.from(t.querySelectorAll(`link[rel="stylesheet"], link[rel="preload"], link[rel="icon"], link[rel="canonical"], meta[property="og:url"]`)))e.remove();for(let e of Array.from(t.querySelectorAll(`.tr-chart-tip`)))e.classList.remove(`tr-noprint`),e.removeAttribute(`aria-hidden`);for(let e of Array.from(t.querySelectorAll(he)))e.remove();for(let e of Array.from(t.querySelectorAll(`.tr-time-table`)))Array.from(e.querySelectorAll(`.tr-time-row`)).sort((e,t)=>Number(e.dataset.idx)-Number(t.dataset.idx)).forEach((t,n)=>{t.hidden=!1,t.querySelector(`.tr-row-btn`).tabIndex=n===0?0:-1,e.querySelector(`tbody`).append(t)}),e.querySelectorAll(`[aria-sort]`).forEach(e=>e.removeAttribute(`aria-sort`));let n=t.querySelector(`#test-runner`);if(!n)throw new S(`The results could not be read.`);n.dataset.printing=`report`;let r=n.querySelector(`[data-role="print-subtitle"]`);r&&(r.textContent=e.subtitle);for(let n of Array.from(t.querySelectorAll(`[aria-label]`))){let t=n.getAttribute(`aria-label`);t.endsWith(`Activate to review this question.`)&&n.setAttribute(`aria-label`,`${t.slice(0,-33)}${e.cta}.`)}for(let e of Array.from(t.querySelectorAll(`img`))){let t=new URL(e.getAttribute(`src`)??``,location.href);if(t.origin!==location.origin||!t.pathname.startsWith(`/content/pilot/`))throw new S(`Unrecognized report image.`);let n=await ge(t.href);if(!n.ok)throw new S(`A report image could not be loaded.`);let r=await n.blob();e.src=await new Promise((e,t)=>{let n=new FileReader;n.onload=()=>e(String(n.result)),n.onerror=t,n.readAsDataURL(r)}),e.removeAttribute(`loading`)}let i=de(le(await F()));i=await _e(i),M(i);let a=`${i}\n${I}`;fe(a);let o=t.querySelector(`head`),s=t.querySelector(`body`);if(!o||!s)throw new S(`The page could not be read.`);let c=t.ownerDocument.createElement(`style`);c.textContent=a,o.appendChild(c),pe(x);let l=me({tips:e.tips,cta:e.cta}),u=t.ownerDocument.createElement(`script`);u.textContent=`${x}\noptArchiveRuntime(${l});\n`,s.appendChild(u);let d=`<!DOCTYPE html>\n${t.outerHTML}`,f=new Blob([d],{type:`text/html;charset=utf-8`});if(f.size>N)throw new S(`The file came out larger than ${Math.round(N/1024/1024)} MB.`);return{blob:f,filename:`${e.testId}-report-${ve()}.html`}}function be(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,r.click(),window.setTimeout(()=>URL.revokeObjectURL(n),6e4)}var xe=5,Se=500,Ce=Se*4,we=3e5,Te=8e3,Ee=44;function L(e,t){return e.querySelector(t)}function R(e,t){return Array.from(e.querySelectorAll(t))}function z(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function De(){let u=document.getElementById(`test-runner`);if(!u||u.dataset.initialized===`1`)return;u.dataset.initialized=`1`;let d=L(u,`#opt-test-meta`);if(!d||!d.textContent)return;let f=JSON.parse(d.textContent);if(!f.parts.length)return;let p=u.dataset.mode===`browse`,m=u.dataset.testsHref||`/`,h=`opt.test.${f.id}.${p?`browse.`:``}state`,re=[h],ie=!0,v=!1;function y(){ie=!1;let e=L(u,`[data-role="storage-warning"]`);e&&(e.hidden=!1)}function b(e){return i(e,f.contentVersion)}function oe(e){if(typeof e.paused!=`boolean`&&(e.paused=!1),typeof e.startedAt!=`number`&&(e.startedAt=Date.now()),typeof e.awaitingModuleStart!=`boolean`&&(e.awaitingModuleStart=!1),(!e.eliminated||typeof e.eliminated!=`object`)&&(e.eliminated={}),(typeof e.eliminatorOn!=`boolean`||e.v<4)&&(e.eliminatorOn=!0),e.v<4)for(let[t,r]of Object.entries(e.answers))n(e,t,r);return(!e.highlights||typeof e.highlights!=`object`)&&(e.highlights={}),typeof e.timerHidden!=`boolean`&&(e.timerHidden=!1),Array.isArray(e.warnedParts)||(e.warnedParts=[]),Array.isArray(e.seenSections)||(e.seenSections=[]),Array.isArray(e.revealed)||(e.revealed=[]),e.v<xe&&(e.v=xe),e}function se(){try{let e=localStorage.getItem(h);if(e===null)return null;try{let t=JSON.parse(e);if(b(t))return oe(t)}catch{}try{let t=h+`.recovery.`;if(!Object.keys(localStorage).some(n=>n.startsWith(t)&&localStorage.getItem(n)===e)){let n=t+Date.now(),r=n,i=0;for(;localStorage.getItem(r)!==null;)r=n+`.`+ ++i;localStorage.setItem(r,e)}}catch{v=!0,y()}return null}catch{return v=!0,y(),null}}function x(){if(!(v||A&&w.lockedParts.length===0||j||!M()))try{localStorage.setItem(h,JSON.stringify(w)),C=!0}catch{ie&&y()}}function le(e){e.partIndex=Math.max(0,Math.min(e.partIndex,f.parts.length-1));let t=f.parts[e.partIndex];return t.questions.some(t=>t.id===e.currentQid)||(e.currentQid=t.questions[0].id),e}let ue=f.parts[0],de=se(),C=de!==null,w=de?le(de):{v:xe,contentVersion:f.contentVersion,attemptId:crypto.randomUUID(),breakUntil:null,awaitingModuleStart:!0,partIndex:0,currentQid:ue.questions[0].id,answers:{},flags:[],timeMs:{},partTimerMs:{},lockedParts:[],paused:!1,completed:!1,startedAt:Date.now(),eliminated:{},eliminatorOn:!0,highlights:{},timerHidden:!1,warnedParts:[],seenSections:[],revealed:[]},T=!1,E=w.partIndex,D=!1,O=!1,k=!1,A=!p&&!w.completed&&!w.breakUntil&&w.awaitingModuleStart,j=!1;function M(){if(j)return!1;try{let e=localStorage.getItem(h);if(!C)return e!==null&&b(JSON.parse(e))?(j=!0,window.location.reload(),!1):!0;if(e!==null&&JSON.parse(e).attemptId===w.attemptId)return!0}catch{return!0}return j=!0,window.location.assign(u.dataset.practiceHref||m),!1}let fe=e=>{e.key===h&&e.newValue===null&&M()};window.addEventListener(`pageshow`,e=>{M()&&e.persisted&&(ie?window.location.reload():_n())});function pe(e){return T||p&&w.revealed.includes(e)}function me(){return T||p}let N={partTitle:L(u,`[data-role="part-title"]`),timer:L(u,`[data-role="timer"]`),timerToggle:L(u,`[data-action="hide-timer"]`),live:L(u,`[data-role="live"]`),toast:L(u,`[data-role="toast"]`),pauseBtn:L(u,`[data-action="pause"]`),printBlankBtn:L(u,`[data-action="print-blank"]`),printSubtitle:L(u,`[data-role="print-subtitle"]`),pauseOverlay:L(u,`[data-role="pause-overlay"]`),resumeBtn:L(u,`[data-action="resume"]`),startOverlay:L(u,`[data-role="start-overlay"]`),browseProgress:L(u,`[data-role="browse-progress"]`),startBody:L(u,`[data-role="start-body"]`),startBtn:L(u,`[data-action="start"]`),grid:L(u,`[data-role="grid"]`),toolbar:L(u,`[data-role="toolbar"]`),elimBtn:L(u,`[data-action="eliminator"]`),clearHlBtn:L(u,`[data-action="clear-highlights"]`),refBtn:L(u,`[data-action="reference"]`),refPanel:L(u,`[data-role="ref-panel"]`),dirBtn:L(u,`[data-action="directions"]`),dirPanel:L(u,`[data-role="dir-panel"]`),checkwork:L(u,`[data-role="checkwork"]`),checkworkTitle:L(u,`[data-role="checkwork-title"]`),checkworkSummary:L(u,`[data-role="checkwork-summary"]`),checkworkGrid:L(u,`[data-role="checkwork-grid"]`),backToQuestionsBtn:L(u,`[data-action="back-to-questions"]`),nextLabel:L(u,`[data-role="next-label"]`),nextArrow:L(u,`[data-role="next-arrow"]`),questionArea:L(u,`.tr-question-area`),hlPopover:L(u,`[data-role="hl-popover"]`),hlAction:L(u,`[data-role="hl-action"]`),flagBtn:L(u,`[data-action="flag"]`),resetModuleBtn:L(u,`[data-action="reset-module"]`),checkModuleBtn:L(u,`[data-action="check-module"]`),prevBtn:L(u,`[data-action="prev"]`),nextBtn:L(u,`[data-action="next"]`),submitBtn:L(u,`[data-role="submit"]`),submitSideBtn:L(u,`[data-role="submit-side"]`),progress:L(u,`[data-role="progress"]`),stepper:L(u,`[data-role="stepper"]`),results:L(u,`[data-role="results"]`),body:L(u,`.tr-body`),navbar:L(u,`.tr-navbar`),navbarTop:L(u,`.tr-navbar-top`),sidebar:L(u,`.tr-sidebar`),topbar:L(u,`.tr-topbar`),modal:L(u,`[data-role="modal"]`),modalTitle:L(u,`[data-role="modal-title"]`),modalBody:L(u,`[data-role="modal-body"]`),modalConfirm:L(u,`[data-role="modal-confirm"]`),modalCancel:L(u,`[data-role="modal-cancel"]`)},he=R(u,`.tr-question`),ge=R(u,`.tr-step`),P=new Map,_e=new Map;f.parts.forEach((e,t)=>{for(let n of e.questions)P.set(n.id,n),_e.set(n.id,t)});function F(){return f.parts[w.partIndex]}function I(){return f.parts[E]}function ve(){return w.partIndex>=f.parts.length-1}function De(e){return(e.timeLimitMinutes??0)*6e4}function B(e){return w.partTimerMs[e.partId]??(w.partTimerMs[e.partId]=f.timerMode===`countdown`?De(e):0),w.partTimerMs[e.partId]}let V=null;function Oe(){return!p&&!A&&!w.paused&&!w.breakUntil&&!w.completed&&!T&&!O}function H(e=document.visibilityState===`visible`){if(V==null)return;let t=Date.now(),n=t-V;if(V=t,n<=0)return;if(e&&!D){let e=w.currentQid;w.timeMs[e]=(w.timeMs[e]??0)+Math.min(n,Ce)}let r=F();B(r),f.timerMode===`countdown`?w.partTimerMs[r.partId]=Math.max(0,w.partTimerMs[r.partId]-n):w.partTimerMs[r.partId]+=n}function U(){Oe()?V??=Date.now():(H(),V=null)}function W(e,t){let n=t===`ceil`?Math.ceil(e/1e3):Math.floor(e/1e3),r=Math.floor(n/3600),i=Math.floor(n%3600/60),a=n%60,o=r>0?String(i).padStart(2,`0`):String(i),s=String(a).padStart(2,`0`);return r>0?`${r}:${o}:${s}`:`${o}:${s}`}function ke(){if(T||p){N.timer.textContent=``,N.timer.hidden=!0;return}N.timer.hidden=w.timerHidden;let e=B(F());f.timerMode===`countdown`?(N.timer.textContent=W(e,`ceil`),N.timer.classList.toggle(`is-low`,e<=6e4)):N.timer.textContent=W(e,`floor`)}function Ae(e){return f.timerMode===`countdown`&&De(e)>0}let je=0,Me=0,G=null;function K(e,t=``){(t===``||G===null||G===t)&&(window.clearTimeout(Me),G=t,N.live.textContent=``,Me=window.setTimeout(()=>{N.live.textContent=e,G=null},30))}function Ne(e){G===e&&(window.clearTimeout(Me),G=null,N.live.textContent=``)}function Pe(e){N.toast.textContent=e,N.toast.hidden=!1,window.clearTimeout(je),je=window.setTimeout(()=>{N.toast.hidden=!0},Te)}let Fe=Date.now();function Ie(){if(j)return;if(w.breakUntil){nn();return}if(H(),ke(),Oe()&&Ae(F())){let e=F(),t=w.partTimerMs[e.partId]??0;if(document.visibilityState===`visible`&&t>0&&t<=we&&De(e)>we&&!w.warnedParts.includes(e.partId)&&(w.warnedParts.push(e.partId),x(),K(`Five minutes remain in this module.`),Pe(`5 minutes remaining`)),t<=0){$e(!0);return}}let e=Date.now();e-Fe>=2e3&&(Fe=e,Oe()&&x())}function Le(e){return he.find(t=>t.dataset.qid===e)}function Re(){return I().questions.findIndex(e=>e.id===w.currentQid)}function ze(e,n,i=T){let a=w.answers[n],o=i?P.get(n)?.correctChoiceId:void 0,s=L(e,`.tr-numeric-input`);if(s){s.value=a??``,s.disabled=T||p&&i;let t=r(s.value);s.setAttribute(`aria-invalid`,String(t.status===`invalid`));let n=L(e,`[data-role="numeric-error"]`);n&&(n.textContent=t.status===`invalid`?t.message:``)}R(e,`.tr-choice`).forEach((e,t)=>{let n=e.dataset.choiceId;e.setAttribute(`aria-checked`,a===n?`true`:`false`),e.classList.remove(`is-correct`,`is-wrong`);let r=T||p&&i;e.disabled=r,e.tabIndex=r?-1:(a?a===n:t===0)?0:-1,i&&(n===o?e.classList.add(`is-correct`):n===a&&e.classList.add(`is-wrong`))}),t(e,w,n,w.eliminatorOn&&!i)}function Be(e){let t=w.answers[e.id],n=`Correct answer: ${e.answer.kind===`numeric`?e.answer.exact:e.correctChoiceId}.`;return p?t==null?n:`${n} ${Ve(e,t)}`:`${n} ${Ve(e,t)} Time on this question: ${W(w.timeMs[e.id]??0,`floor`)}.`}function Ve(e,t){return t==null?`You did not answer this question.`:e.kind===`numeric`&&r(t).status===`invalid`?`Invalid entry: ${t}. No credit.`:s(e,w.answers)===`correct`?`Correct. Your answer: ${t}.`:`Incorrect. Your answer: ${t}.`}function He(e,t,n){e.innerHTML=``,t.questions.forEach((t,r)=>{let i=document.createElement(`button`);i.type=`button`,i.className=`tr-grid-cell`,i.textContent=String(r+1),i.dataset.qid=t.id;let a=w.answers[t.id]!=null,o=w.flags.includes(t.id),c=`Question ${r+1}`;if(a&&pe(t.id)){let e=s(t,w.answers)===`correct`;i.classList.add(e?`is-correct`:`is-incorrect`),c+=e?`, correct`:`, incorrect`}else a?(i.classList.add(`is-answered`),c+=`, answered`):c+=`, not answered`;o&&(i.classList.add(`is-flagged`),c+=`, flagged`),n&&t.id===w.currentQid&&(i.classList.add(`is-current`),c+=`, current`),i.setAttribute(`aria-label`,c),i.addEventListener(`click`,()=>{H(),D=!1,w.currentQid=t.id,q(),x()}),e.appendChild(i)})}function Ue(){let e=I();if(He(N.grid,e,!0),N.browseProgress){let t=e.questions.filter(e=>w.answers[e.id]!=null).length;N.browseProgress.textContent=`${t} of ${e.questions.length} answered in this module`}N.resetModuleBtn&&(N.resetModuleBtn.disabled=!Et(I())),N.checkModuleBtn?.setAttribute(`aria-disabled`,String(wt(I()).length===0))}function We(){let e=I().partId;ge.forEach((t,n)=>{let r=f.parts[n],i=!p&&w.lockedParts.includes(r.partId),a=r.partId===e;t.classList.toggle(`is-locked`,i),t.classList.toggle(`is-current`,a),t.classList.toggle(`is-upcoming`,!p&&!i&&!a),a?t.setAttribute(`aria-current`,`step`):t.removeAttribute(`aria-current`);let o=[];i&&o.push(`submitted`),a&&o.push(`current`),!p&&!i&&!a&&o.push(`not started yet`);let s=T?`Review: `:p?`Go to `:``,c=L(t,`[data-role="step-state"]`);c&&(c.textContent=`${s}${r.sectionTitle}, ${r.partTitle}, step ${n+1} of ${f.parts.length}`+(o.length?`, ${o.join(`, `)}`:``));let l=L(t,`.tr-step-num`);l&&(l.textContent=i?`✓`:l.dataset.num??String(n+1))})}function Ge(){let e=F();N.checkworkTitle.textContent=`Check your work: ${e.sectionTitle}, ${e.partTitle}`;let t=e.questions.length,n=e.questions.filter(e=>w.answers[e.id]!=null).length,r=e.questions.filter(e=>w.flags.includes(e.id)).length;N.checkworkSummary.textContent=`${n} of ${t} answered, ${r} flagged. Select a question to go back to it, or submit this module.`,He(N.checkworkGrid,e,!1)}function Ke(){if(!N.dirPanel)return;let e=I().sectionId;for(let t of R(N.dirPanel,`.tr-directions`))t.hidden=t.dataset.section!==e}function q(){let e=I();Q(),N.checkwork.hidden=!D,N.questionArea.hidden=D,N.sidebar.hidden=D,D&&Ge(),he.forEach(e=>{e.hidden=e.dataset.qid!==w.currentQid});let t=Le(w.currentQid);if(t){ae(t,w.highlights[w.currentQid]??[]);let e=pe(w.currentQid);ze(t,w.currentQid,e);let n=L(t,`[data-role="explanation"]`);if(n&&(n.hidden=!e,e)){let e=P.get(w.currentQid),t=L(n,`[data-role="answer-line"]`);t&&(t.textContent=Be(e))}let r=L(t,`[data-action="reveal"]`);r&&(r.textContent=e?`Reset this question`:`Show solution`)}N.partTitle.textContent=T?`Review: ${e.sectionTitle}, ${e.partTitle}`:`${e.sectionTitle}, ${e.partTitle}`,ke();let n=T||p;N.timerToggle.hidden=n,N.timerToggle.textContent=w.timerHidden?`Show timer`:`Hide timer`,N.pauseBtn.hidden=n;let r=w.flags.includes(w.currentQid);N.flagBtn.setAttribute(`aria-pressed`,r?`true`:`false`),N.flagBtn.textContent=r?`Flagged`:`Flag for review`,N.submitSideBtn.hidden=n,N.elimBtn.hidden=T||D||P.get(w.currentQid)?.kind===`numeric`,N.elimBtn.setAttribute(`aria-pressed`,w.eliminatorOn?`true`:`false`),N.clearHlBtn.hidden=T||D||!te(w,w.currentQid),N.refBtn&&(N.refBtn.hidden=!e.referenceSheet),N.dirBtn&&(N.dirBtn.hidden=!e.hasDirections),Ke(),N.toolbar.hidden=N.elimBtn.hidden&&N.clearHlBtn.hidden&&(!N.refBtn||N.refBtn.hidden)&&(!N.dirBtn||N.dirBtn.hidden);let i=Re();if(D){N.progress.textContent=`Check your work`,N.prevBtn.disabled=!1,N.nextBtn.disabled=!0,N.nextLabel.textContent=`Next`,N.nextArrow.hidden=!1,We();return}N.progress.textContent=`Question ${i+1} of ${e.questions.length}`;let a=i===e.questions.length-1,o=!T&&!p&&a;if(N.nextLabel.textContent=o?`Review your work`:`Next`,N.nextArrow.hidden=o,me()){let t=E===0&&i===0,n=E===f.parts.length-1&&i===e.questions.length-1;N.prevBtn.disabled=t,N.nextBtn.disabled=n}else N.prevBtn.disabled=i===0,N.nextBtn.disabled=!1;N.navbar.hidden=!T,Ue(),We()}let qe=null;function Je(){T||p||D||(H(),qe=w.currentQid,D=!0,q(),X(N.checkworkTitle))}function Ye(){D&&(H(),D=!1,qe&&P.has(qe)&&(w.currentQid=qe),qe=null,q(),X(N.partTitle))}function Xe(e){let t=I(),n=Re()+e;H();let r=null;if(n>=0&&n<t.questions.length)w.currentQid=t.questions[n].id;else if(me()){let t=E+e;if(t>=0&&t<f.parts.length){r=document.activeElement,Ut(),E=t;let n=f.parts[t].questions;w.currentQid=e>0?n[0].id:n[n.length-1].id,p&&(w.partIndex=t)}}q(),r&&(r.focus(),document.activeElement!==r&&X(N.partTitle)),x()}function Ze(e){if(T||!ln())return;let t=e.target.closest(`.tr-choice`);if(!t)return;let r=e.key;if(r!==`ArrowDown`&&r!==`ArrowRight`&&r!==`ArrowUp`&&r!==`ArrowLeft`)return;let i=Le(w.currentQid);if(!i)return;let a=R(i,`.tr-choice`),o=a.indexOf(t);if(o<0)return;e.preventDefault();let s=a[(o+(r===`ArrowDown`||r===`ArrowRight`?1:-1)+a.length)%a.length],c=s.dataset.choiceId;w.answers[w.currentQid]=c,n(w,w.currentQid,c),Ne(`answer-cleared`),q(),s.focus(),x()}function Qe(){return F().questions.filter(e=>w.answers[e.id]==null).length}function $e(e=!1){if(p)return;let t=F();if(H(),Ut(),w.lockedParts.includes(t.partId)||w.lockedParts.push(t.partId),ve()){nt();return}let n=t.sectionId;if(w.partIndex+=1,f.breakMinutes&&F().sectionId!==n&&(w.breakUntil=Date.now()+f.breakMinutes*6e4),w.awaitingModuleStart=!0,A=!w.breakUntil,E=w.partIndex,D=!1,w.currentQid=F().questions[0].id,B(F()),V=null,U(),q(),tt(),x(),w.breakUntil){tn();return}$t(e)}function et(){if(!ln())return;let e=Qe(),t=ve(),n=(e>0?`You have ${e} unanswered question${e===1?``:`s`} in this module. `:``)+`A submitted module cannot be reopened.`+(t?` This is the final module, so you will see your results next.`:``);sn(t?`Submit and see results?`:`Submit this module?`,n,t?`Submit and see results`:`Submit this module`,()=>$e(!1))}function tt(){let e=ve()?`Submit and see results`:`Submit this module`;N.submitBtn.textContent=e,N.submitSideBtn.textContent=e}function nt(){if(!w.completed&&M()){w.completed=!0;try{localStorage.setItem(`opt.test.${f.id}.attempt.${w.attemptId}`,JSON.stringify(w))}catch{}V=null,x(),gt()}}function rt(){return o({parts:f.parts,answers:w.answers,lockedParts:w.lockedParts,timeMs:w.timeMs})}function it(e){let t=a(e);return t===null?`n/a`:`${t}%`}function at(e){return s(e,w.answers)}function ot(e){return e===`correct`?`Correct`:e===`incorrect`?`Incorrect`:`Unanswered`}function st(e){let t=e.questions.map(e=>w.timeMs[e.id]??0),n=t.reduce((e,t)=>e+t,0);return e.questions.map((e,r)=>({q:e,idx:r,ms:t[r],status:at(e),pct:n>0?Math.round(t[r]/n*100):0}))}let ct=`answering time`;function lt(e){let t=e.q.preview?`${e.q.preview} `:``;return`Question ${e.idx+1}, ${e.q.category}. ${t}Time ${W(e.ms,`floor`)}, ${ot(e.status)}, ${e.pct}% of ${ct}. Activate to review this question.`}function ut(e,t,n,r){return{h:`Question ${t+1}, ${e.category}`,p:e.preview??``,m:`${W(r,`floor`)}, ${n}% of ${ct}, ${ot(at(e))}`}}function dt(e,t,n,r){let i=ut(e,t,n,r),a=(e,t)=>{let n=document.createElement(`div`);return n.className=e,n.textContent=t,n},o=[a(`tr-tip-head`,i.h)];return i.p&&o.push(a(`tr-tip-text`,i.p)),o.push(a(`tr-tip-meta`,i.m),a(`tr-tip-cta`,`Click to review`)),o}function ft(e,t,n){let r=parseFloat(getComputedStyle(e).getPropertyValue(`--tr-tip-gap`))||8,i=t.getBoundingClientRect(),a=i.left+t.clientLeft,o=i.top+t.clientTop,s=t.clientWidth,c=e.offsetWidth/2,l=n.left+n.width/2-a,u=c+4,d=s-c-4;e.style.left=`${u>d?s/2:Math.min(Math.max(l,u),d)}px`,e.style.top=`${n.top-o}px`,e.classList.toggle(`is-below`,n.top-e.offsetHeight-r<0)}function pt(e,t){let n=t.length;if(n===0)return``;let r=Math.max(1,...t.map(e=>e.ms)),i=Math.min(684,Math.max(288,n*58)),a=44+i+8,o=i/n,s=Math.max(.75,Math.min(Ee,o-1)),c=n>20?7:n>10?8.5:10,l=n>20?7.5:n>10?9:11,u=e=>e===`correct`?`var(--color-correct)`:e===`incorrect`?`var(--color-incorrect)`:`var(--color-unanswered)`,d=t.map((e,t)=>{let n=e.q,i=e.ms/r*150,a=44+t*o,d=a+(o-s)/2,f=178-i,p=a+o/2,m=e.pct,h=f-6,g=e.status===`unanswered`?` stroke="var(--color-border)" stroke-width="1"`:``,ee=lt(e),_=`<rect class="tr-bar-hit" x="${a.toFixed(2)}" y="28" width="${o.toFixed(2)}" height="150" />`,te=`<rect class="tr-bar-rect" x="${d.toFixed(2)}" y="${f.toFixed(2)}" width="${s.toFixed(2)}" height="${i.toFixed(2)}" fill="${u(e.status)}"${g} />`,ne=`<text x="${p.toFixed(2)}" y="${h.toFixed(2)}" text-anchor="middle" font-size="${l}" fill="var(--color-muted)">${m}%</text>`,re=`<text x="${p.toFixed(2)}" y="${190 .toFixed(2)}" text-anchor="middle" font-size="${c}" fill="var(--color-muted)">${t+1}</text>`;return`<g class="tr-bar" role="button" tabindex="${t===0?`0`:`-1`}" data-qid="${z(n.id)}" data-idx="${t}" data-pct="${m}" aria-label="${z(ee)}">${_}${te}${ne}${re}</g>`}).join(``);return`<svg width="${a}" height="204" viewBox="0 0 ${a} 204" role="group" aria-label="${z(`Per-question time for ${e.sectionTitle}, ${e.partTitle}, colored by whether the answer was correct, incorrect, or left unanswered`)}">
      <line x1="44" y1="178" x2="${a-8}" y2="178" stroke="var(--color-border)" stroke-width="1" aria-hidden="true" />
      <text x="38" y="32" text-anchor="end" font-size="11" fill="var(--color-muted)" aria-hidden="true">${W(r,`ceil`)}</text>
      <text x="38" y="178" text-anchor="end" font-size="11" fill="var(--color-muted)" aria-hidden="true">0:00</text>
      ${d}
    </svg>`}function mt(e){return e.map(e=>{let t=`<button type="button" class="tr-row-btn" tabindex="${e.idx===0?`0`:`-1`}" aria-label="${z(lt(e))}">${e.idx+1}</button>`;return`<tr class="tr-time-row" data-qid="${z(e.q.id)}" data-idx="${e.idx}" data-pct="${e.pct}" data-category="${z(e.q.category)}" data-outcome="${e.status}" data-time="${e.ms}"><td>${t}</td><td>${z(e.q.category)}</td><td>${ot(e.status)}</td><td class="num">${W(e.ms,`floor`)}</td></tr>`}).join(``)}let ht=new Map;function gt(){T=!1,D=!1,Ut(),N.checkwork.hidden=!0,N.questionArea.hidden=!1,N.sidebar.hidden=!1;let{overall:e,sections:t,categories:n,parts:r,timeMs:i,complete:a,unsubmittedParts:o}=rt();N.topbar.hidden=!0,N.stepper.hidden=!0,N.toolbar.hidden=!0,N.navbarTop.hidden=!0,N.body.hidden=!0,N.navbar.hidden=!0,N.results.hidden=!1;let s=(e,t)=>`<tr><td>${z(e)}</td><td class="num">${t.correct}</td><td class="num">${t.incorrect}</td><td class="num">${t.unanswered}</td><td class="num">${t.total}</td><td class="num">${it(t)}</td></tr>`,l=t.map(e=>s(e.title,e)).join(``),u=n.map(e=>s(e.name,e)).join(``),d=r.map(e=>`
          <div class="tr-score-module">
            <div class="tr-score-module-name">${z(e.sectionTitle)}, ${z(e.partTitle)}</div>
            <div class="tr-score-module-score">${e.correct} / ${e.total}</div>
            <div class="tr-score-module-pct">${it(e)}</div>
            ${e.unanswered>0?`<div class="tr-score-module-skip">${e.unanswered} unanswered</div>`:``}
          </div>`).join(``),p=`
        <div class="tr-score-big">${e.correct} / ${e.total}</div>
        <div class="tr-score-sub">${it(e)} correct</div>
        <ul class="tr-score-split" role="list">
          <li><span class="tr-swatch is-correct" aria-hidden="true"></span>${e.correct} correct</li>
          <li><span class="tr-swatch is-incorrect" aria-hidden="true"></span>${e.incorrect} incorrect</li>
          <li><span class="tr-swatch is-unanswered" aria-hidden="true"></span>${e.unanswered} unanswered</li>
        </ul>
        <div class="tr-score-caption">Total active time ${W(i,`floor`)}</div>`,m=a?``:`<p class="tr-score-note" role="status">This attempt is not finished. ${z(o.join(`, `))} ${o.length===1?`was`:`were`} never submitted. The counts below still cover every question in the test, so
        anything you did not reach is counted as unanswered.</p>`,h=f.lessonLinks??{},g=n.filter(e=>e.incorrect+e.unanswered>0&&h[e.name]).slice(0,3).map(e=>{let t=[e.incorrect>0?`${e.incorrect} wrong`:``,e.unanswered>0?`${e.unanswered} unanswered`:``].filter(Boolean).join(` and `);return`
          <li class="tr-next-item">
            <a class="tr-btn" href="${z(h[e.name].href)}">${z(h[e.name].label)}</a>
            <span class="tr-next-why">${t} of ${e.total} in ${z(e.name)}.</span>
          </li>`}).join(``),ee=e.total>0&&e.correct===e.total?`<div><h2>Review next</h2>
             <p class="tr-score-note">You answered every question correctly.</p></div>`:g?`<div><h2>Review next</h2>
               <ul class="tr-next-list" role="list">${g}</ul></div>`:``,_=`
      <div class="tr-modal-actions tr-results-actions tr-noprint">
        <button type="button" class="tr-btn tr-btn-primary" data-role="review">Review answers</button>
        <button type="button" class="tr-btn" data-role="print-report">
          <svg class="tr-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>Generate PDF report
        </button>
        <button type="button" class="tr-btn" data-role="archive">
          <svg class="tr-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg><span data-role="archive-label">${Lt}</span>
        </button>
        <button type="button" class="tr-btn" data-role="reset">Reset this test</button>
      </div>
    `;N.results.innerHTML=`
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
          ${f.parts.map(e=>{let t=st(e);return`
            <div class="tr-chart-block" data-time-part="${z(e.partId)}">
              <h3 class="tr-chart-title" id="tr-time-${z(e.partId)}">${z(e.sectionTitle)}, ${z(e.partTitle)}</h3>
              <div class="tr-chart">${pt(e,t)}</div>
              <div class="tr-table-scroll tr-time-scroll" tabindex="0" role="region" aria-labelledby="tr-time-${z(e.partId)}">
                <table class="tr-table tr-time-table">
                  <thead><tr><th scope="col">#</th>
                    <th scope="col" aria-sort="none" aria-labelledby="tr-time-category-${z(e.partId)}"><span id="tr-time-category-${z(e.partId)}">Category</span> <button type="button" class="tr-time-sort tr-noprint" data-time-sort="category" data-label="Category" aria-label="Sort Category ascending">↕</button>
                      <select class="tr-time-filter tr-noprint" data-time-category aria-label="Filter Category"><option value="all">All categories</option>${[...new Set(t.map(e=>e.q.category))].sort((e,t)=>e.localeCompare(t)).map(e=>`<option value="${z(e)}">${z(e)}</option>`).join(``)}</select>
                    </th>
                    <th scope="col" aria-sort="none" aria-labelledby="tr-time-outcome-${z(e.partId)}"><span id="tr-time-outcome-${z(e.partId)}">Outcome</span> <button type="button" class="tr-time-sort tr-noprint" data-time-sort="outcome" data-label="Outcome" aria-label="Sort Outcome ascending">↕</button>
                      <select class="tr-time-filter tr-noprint" data-time-outcome aria-label="Filter Outcome"><option value="all">All outcomes</option><option value="correct">Correct</option><option value="incorrect">Incorrect</option><option value="unanswered">Unanswered</option></select>
                    </th>
                    <th scope="col" class="num" aria-sort="none" aria-labelledby="tr-time-duration-${z(e.partId)}"><span id="tr-time-duration-${z(e.partId)}">Time</span> <button type="button" class="tr-time-sort tr-noprint" data-time-sort="time" data-label="Time" aria-label="Sort Time descending">↕</button></th>
                  </tr></thead>
                  <tbody>${mt(t)}<tr class="tr-time-empty tr-noprint" hidden><td colspan="4">No questions match these filters.</td></tr></tbody>
                </table>
              </div>
              <p class="tr-score-note tr-noprint" data-time-count></p>
              <div class="tr-chart-tip tr-noprint" aria-hidden="true" hidden></div>
            </div>
          `}).join(``)}
        </div>
      </div>
      ${_}
    `;for(let e of R(N.results,`.tr-chart-block`)){let t=e.dataset.timePart;ht.has(t)||ht.set(t,{category:`all`,outcome:`all`,sort:null,descending:!1}),c(e,ht.get(t)),xt(e)}for(let e of R(N.results,`[data-role="review"]`))e.addEventListener(`click`,()=>St());for(let e of R(N.results,`[data-role="print-report"]`))e.addEventListener(`click`,Pt);for(let e of R(N.results,`[data-role="archive"]`))e.addEventListener(`click`,()=>{zt(e)});for(let e of R(N.results,`[data-role="reset"]`))e.addEventListener(`click`,Ot);_t()}function _t(){for(let e of R(N.results,`[data-role="archive"]`))e.disabled=k,L(e,`[data-role="archive-label"]`).textContent=k?Rt:Lt}function J(e){return e instanceof Element?e.closest(`.tr-bar, .tr-time-row`):null}function vt(e){return(e.classList.contains(`tr-bar`)?L(e,`.tr-bar-rect`)??e:e).getBoundingClientRect()}function yt(e){return e.classList.contains(`tr-bar`)?e:L(e,`.tr-row-btn`)}function bt(e){let t=_e.get(e);t!=null&&St({partIndex:t,qid:e})}function xt(e){let t=L(e,`.tr-chart-tip`);if(!t)return;let n=()=>[R(e,`.tr-bar`),R(e,`.tr-time-row:not([hidden])`)],r=()=>{t.hidden=!0},i=(e,t)=>{for(let n of e){let e=yt(n);e&&e.setAttribute(`tabindex`,n===t?`0`:`-1`)}},a=(e,t)=>{let n=e[Math.min(e.length-1,Math.max(0,t))];n&&(i(e,n),yt(n)?.focus())},o=n=>{let r=n.dataset.qid,i=r==null?void 0:P.get(r);if(!i)return;let a=Number(n.dataset.idx??0),o=Number(n.dataset.pct??0);t.replaceChildren(...dt(i,a,o,w.timeMs[i.id]??0)),t.hidden=!1,ft(t,e,vt(n))};e.addEventListener(`click`,e=>{let t=J(e.target)?.dataset.qid;t&&bt(t)}),e.addEventListener(`keydown`,e=>{let t=J(e.target);if(!t)return;let r=n().find(e=>e.includes(t));if(!r)return;let i=r.indexOf(t),o=t.dataset.qid;e.key===`Enter`||e.key===` `?(e.preventDefault(),o&&bt(o)):e.key===`ArrowRight`||e.key===`ArrowDown`?(e.preventDefault(),a(r,i+1)):e.key===`ArrowLeft`||e.key===`ArrowUp`?(e.preventDefault(),a(r,i-1)):e.key===`Home`?(e.preventDefault(),a(r,0)):e.key===`End`&&(e.preventDefault(),a(r,r.length-1))}),e.addEventListener(`pointerover`,e=>{let t=J(e.target);t&&t!==J(e.relatedTarget)&&o(t)}),e.addEventListener(`pointerout`,e=>{let t=J(e.target);t&&t!==J(e.relatedTarget)&&r()}),e.addEventListener(`focusin`,e=>{let t=J(e.target);if(!t)return;let r=n().find(e=>e.includes(t));r&&i(r,t),o(t)}),e.addEventListener(`focusout`,r),e.addEventListener(`mouseleave`,r);let s=e.querySelector(`.tr-time-scroll`);s?.addEventListener(`scroll`,()=>{let t=J(document.activeElement);if(t?.matches(`.tr-time-row:not([hidden])`)){let n=t.getBoundingClientRect(),r=s.getBoundingClientRect(),i=e.querySelector(`thead th`).getBoundingClientRect();if(n.bottom>Math.max(r.top,i.bottom)&&n.top<r.bottom){o(t);return}}r()})}let Y=null;function X(e){e?.focus({preventScroll:!0})}function St(e){T=!0,D=!1,E=e?e.partIndex:0,w.currentQid=e?e.qid:f.parts[0].questions[0].id,N.results.hidden=!0,N.topbar.hidden=!1,N.stepper.hidden=!1,N.navbarTop.hidden=!1,N.body.hidden=!1,N.navbar.hidden=!1,N.timer.hidden=!0,N.flagBtn.hidden=!0,Y||(Y=document.createElement(`button`),Y.type=`button`,Y.className=`tr-btn tr-btn-primary`,Y.textContent=`Back to results`,Y.addEventListener(`click`,Ct),N.navbar.appendChild(Y)),Y.hidden=!1,q(),X(N.partTitle),window.scrollTo(0,0)}function Ct(){T=!1,N.timer.hidden=!1,N.flagBtn.hidden=!1,Y&&(Y.hidden=!0),gt(),X(L(N.results,`.tr-score-hero`)),window.scrollTo(0,0)}function wt(e){return e.questions.filter(e=>w.answers[e.id]!=null&&!w.revealed.includes(e.id))}function Tt(){if(!p)return;let e=I(),t=wt(e);t.length&&(w.revealed.push(...t.map(e=>e.id)),q(),x(),K(`Checked ${t.length} attempted question${t.length===1?``:`s`} in ${e.sectionTitle}, ${e.partTitle}. Select a question to review its solution.`))}function Et(e){return e.questions.some(({id:e})=>w.answers[e]!==void 0||w.flags.includes(e)||w.revealed.includes(e)||(w.eliminated[e]?.length??0)>0||(w.highlights[e]?.length??0)>0||(w.timeMs[e]??0)>0)}function Dt(){if(!p)return;let e=I();Et(e)&&sn(`Reset ${e.sectionTitle}, ${e.partTitle}?`,`This clears all answers, revealed solutions, flags, highlights, and crossed-out choices in this module. Other modules and timed attempts are kept.`,`Reset this module`,()=>{let t=new Set(e.questions.map(e=>e.id));for(let e of t)delete w.answers[e],delete w.timeMs[e],delete w.eliminated[e],delete w.highlights[e];w.flags=w.flags.filter(e=>!t.has(e)),w.revealed=w.revealed.filter(e=>!t.has(e)),q(),x(),N.flagBtn.focus(),K(`${e.sectionTitle}, ${e.partTitle} has been reset.`)})}function Ot(){sn(`Reset this test?`,`This clears the current test so you can try again. Completed attempt snapshots remain in this browser. Save a PDF or interactive report if you want a copy you can open later. You will go back to the tests page.`,`Clear and reset`,()=>{j=!0;try{for(let e of re)localStorage.removeItem(e)}catch{}window.location.assign(m)})}function kt(){for(let e of f.parts)for(let t of e.questions){let e=Le(t.id);if(!e)continue;ze(e,t.id,!0);let n=L(e,`[data-role="explanation"]`),r=n&&L(n,`[data-role="answer-line"]`);r&&(r.textContent=Be(t))}}let At=`Blank test, no answers`;function jt(){return`Results report, generated ${new Date().toLocaleDateString(void 0,{year:`numeric`,month:`long`,day:`numeric`})}`}let Mt=null;function Nt(){Mt??=l(N.results)}function Pt(){kt(),N.printSubtitle.textContent=jt(),u.dataset.printing=`report`,Nt(),window.print()}function Ft(){let e={};for(let t of f.parts)for(let n of st(t))e[n.q.id]=ut(n.q,n.idx,n.pct,n.ms);return e}let It=`Could not build the report file. Generate PDF report still works.`,Lt=`Download interactive report`,Rt=`Building`;async function zt(e){if(k)return;let t=R(N.results,`[data-role="archive"]`).indexOf(e);k=!0;try{_t(),kt();let{blob:e,filename:n}=await ye({subtitle:jt(),testId:f.id,cta:`Click to jump to this question`,tips:Ft()});if(be(e,n),k=!1,_t(),O){let e=`Report sent to your downloads as ${n}.`;Pe(e),K(e)}else R(N.results,`[data-role="archive"]`)[t]?.focus(),cn(`Report sent to your downloads`,`Your browser is saving it as ${n}. If it asks where to put the file, pick a folder. It holds the whole attempt: every question, your answer against the correct one, the explanations, and the timing charts. Open it in any browser, online or off.`)}catch(e){let t=e instanceof S?` ${e.reason}`:``;Pe(It+t),K(It+t)}finally{k=!1,_t()}}function Bt(){N.printSubtitle.textContent=At,delete u.dataset.printing,window.print()}let Vt=[];function Ht(e,t,n,r){let i=ce({panel:e,head:L(e,`[data-role="${r}-head"]`),move:L(e,`[data-role="${r}-move"]`),close:L(e,`[data-role="${r}-close"]`),id:n});return Vt.push(i),t.addEventListener(`click`,()=>{i.isOpen()?i.close():i.open(t)}),new MutationObserver(()=>t.setAttribute(`aria-expanded`,i.isOpen()?`true`:`false`)).observe(e,{attributes:!0,attributeFilter:[`hidden`]}),i}N.refPanel&&N.refBtn&&Ht(N.refPanel,N.refBtn,`reference`,`ref`),N.dirPanel&&N.dirBtn&&Ht(N.dirPanel,N.dirBtn,`directions`,`dir`);function Ut(){for(let e of Vt)e.close()}let Z=null;function Q(){N.hlPopover.hidden||(N.hlPopover.hidden=!0,Z=null)}function Wt(e,t,n,r){Z=n,N.hlAction.textContent=t,N.hlPopover.hidden=!1;let i=N.questionArea.getBoundingClientRect(),a=N.hlPopover.offsetWidth,o=N.hlPopover.offsetHeight,s=Math.max(0,Math.min(e.left+e.width/2-i.left-a/2,N.questionArea.clientWidth-a)),c=e.top-o-6<0?e.bottom-i.top+6:e.top-i.top-o-6;N.hlPopover.style.left=`${s}px`,N.hlPopover.style.top=`${c}px`,r&&N.hlAction.focus()}function Gt(e){if(T){Q();return}let t=Le(w.currentQid),n=t&&g(t);if(!n){Q();return}Wt(window.getSelection().getRangeAt(0).getBoundingClientRect(),`Highlight`,{kind:`add`,range:n},e)}N.body.addEventListener(`pointerup`,e=>{let t=e.target;if(N.hlPopover.contains(t))return;let n=t.closest(`mark.tr-hl`),r=window.getSelection();if(n&&(!r||r.isCollapsed)){if(T)return;Wt(n.getBoundingClientRect(),`Remove highlight`,{kind:`remove`,index:Number(n.dataset.hl)},!1);return}Gt(!1)}),N.body.addEventListener(`keyup`,e=>{e.key===`Shift`?Gt(!0):e.shiftKey&&Gt(!1)}),N.hlPopover.addEventListener(`keydown`,e=>{e.key===`Escape`&&(e.stopPropagation(),e.preventDefault(),Q(),X(N.partTitle))}),N.hlAction.addEventListener(`click`,()=>{if(!Z)return;let e=w.currentQid,t=N.hlPopover.contains(document.activeElement);Z.kind===`add`?ee(w,e,Z.range):_(w,e,Z.index),Q(),window.getSelection()?.removeAllRanges(),q(),x(),t&&X(N.clearHlBtn.hidden?N.partTitle:N.clearHlBtn)}),N.clearHlBtn.addEventListener(`click`,()=>{ne(w,w.currentQid),Q(),q(),x(),X(N.partTitle)});let Kt=L(document,`.site-header`),qt=L(document,`.site-footer`),Jt=[...Kt?[Kt]:[],...qt?[qt]:[],N.topbar,N.stepper,N.toolbar,N.navbarTop,N.body,N.navbar,N.results,...N.refPanel?[N.refPanel]:[],...N.dirPanel?[N.dirPanel]:[]];function Yt(e){for(let t of Jt)e?t.setAttribute(`inert`,``):t.removeAttribute(`inert`)}let Xt=null,Zt=null;function $(e,t){Xt=document.activeElement,Yt(!0),Zt=t,e.focus()}function Qt(){Yt(!1),Zt=null,Xt&&document.contains(Xt)&&Xt.focus(),Xt=null}function $t(e=!1){if(!N.startOverlay||!N.startBody||!N.startBtn)return;let t=F(),n=f.timerMode===`countdown`?t.timeLimitMinutes??0:0,r=L(N.startOverlay,`#tr-start-title`);r.textContent=`${t.sectionTitle}, ${t.partTitle}: directions`,N.startBtn.textContent=`Start ${t.partTitle}`,N.startBody.textContent=(e?`The previous module ran out of time and was submitted. `:``)+`Read the directions below. ${n?`You have ${n} minutes. `:``}The timer starts only when you press "Start ${t.partTitle}". You can pause any time.`;for(let e of N.startOverlay.querySelectorAll(`[data-start-section]`))e.hidden=e.dataset.startSection!==t.sectionId;let i=L(N.startOverlay,`#tr-start-format`);i&&(i.hidden=w.partIndex>0),N.startOverlay.hidden=!1;let a=L(N.startOverlay,`[data-role="start-scroll"]`);a&&(a.scrollTop=0),$(r,()=>{})}function en(){A&&(A=!1,w.awaitingModuleStart=!1,N.startOverlay&&(N.startOverlay.hidden=!0),Qt(),w.lockedParts.length===0&&(w.startedAt=Date.now()),U(),X(N.partTitle),x())}function tn(){let e=L(u,`[data-role="break-overlay"]`);e&&(e.hidden=!1,$(L(e,`#break-title`),()=>{}),nn())}function nn(){if(!w.breakUntil)return;let e=w.breakUntil-Date.now(),t=L(u,`[data-role="break-timer"]`);t&&(t.textContent=W(Math.max(0,e),`ceil`));let n=L(u,`[data-role="break-status"]`),r=L(u,`[data-action="start-next-section"]`),i=e<=0,a=L(u,`#break-title`),o=i?`Ready for Math?`:`Take a 10-minute break`;a&&a.textContent!==o&&(a.textContent=o);let s=i?`Your 10-minute break is complete. Start Math when you’re ready; your full module time is waiting.`:`Math will wait for you. Its timer starts only when you choose to begin.`;if(n&&n.textContent!==s&&(n.textContent=s),r){let e=i?`Start Math`:`End break and start Math`;r.textContent!==e&&(r.textContent=e),r.classList.toggle(`tr-btn-primary`,i)}}function rn(){if(p||w.completed||A||!w.breakUntil)return;w.breakUntil=null,w.awaitingModuleStart=!0,A=!0;let e=L(u,`[data-role="break-overlay"]`);e&&(e.hidden=!0),Qt(),w.currentQid=F().questions[0].id,E=w.partIndex,V=null,X(N.partTitle),q(),U(),tt(),x(),$t()}function an(e){e!==w.paused&&(H(),w.paused=e,N.pauseOverlay.hidden=!e,e?(U(),$(N.resumeBtn,()=>an(!1))):(Qt(),U()),x())}function on(){N.modalConfirm.replaceWith(N.modalConfirm.cloneNode(!0)),N.modalCancel.replaceWith(N.modalCancel.cloneNode(!0)),N.modalConfirm=L(u,`[data-role="modal-confirm"]`),N.modalCancel=L(u,`[data-role="modal-cancel"]`)}function sn(e,t,n,r){on(),N.modalTitle.textContent=e,N.modalBody.textContent=t,N.modalConfirm.textContent=n,N.modalCancel.hidden=!1,O=!0,U(),N.modal.hidden=!1;let i=()=>{N.modal.hidden=!0,O=!1,Qt(),U()};N.modalConfirm.addEventListener(`click`,()=>{i(),r()}),N.modalCancel.addEventListener(`click`,i),$(N.modalConfirm,i)}function cn(e,t){on(),N.modalTitle.textContent=e,N.modalBody.textContent=t,N.modalConfirm.textContent=`OK`,N.modalCancel.hidden=!0,O=!0,U(),N.modal.hidden=!1;let n=()=>{N.modal.hidden=!0,O=!1,Qt(),U()};N.modalConfirm.addEventListener(`click`,n),$(N.modalConfirm,n)}function ln(){return p?!0:A||T||w.completed||w.paused||w.breakUntil||O?!1:(H(),Ae(F())&&B(F())<=0?($e(!0),!1):!0)}N.body.addEventListener(`click`,t=>{if(!ln())return;let r=t.target,i=r.closest(`[data-action="reveal"]`);if(i){let e=i.dataset.qid;if(!p||e!==w.currentQid)return;let t=w.revealed.indexOf(e);t>=0?(w.revealed.splice(t,1),delete w.answers[e]):w.revealed.push(e),q(),x();return}let a=r.closest(`.tr-elim`);if(a){if(T)return;let t=a.dataset.qid;if(t!==w.currentQid)return;let n=a.dataset.choiceId;Ne(`answer-cleared`),e(w,t,n)&&w.answers[t]===n&&(delete w.answers[t],K(`Choice ${n} crossed out. Your answer is cleared.`,`answer-cleared`)),q(),x();return}let o=r.closest(`.tr-choice`);if(!o||T)return;let s=o.dataset.qid;if(s!==w.currentQid)return;let c=o.dataset.choiceId;if(p&&w.answers[s]===c){delete w.answers[s],q(),x();return}w.answers[s]=c,n(w,s,c),Ne(`answer-cleared`),q(),x()}),N.body.addEventListener(`input`,e=>{let t=e.target;if(!(t instanceof HTMLInputElement)||!t.classList.contains(`tr-numeric-input`))return;let n=t.dataset.qid;if(!ln()||T||!p&&(w.completed||w.paused||w.breakUntil)||p&&pe(n)||n!==w.currentQid)return;t.value.trim()?w.answers[n]=t.value:delete w.answers[n];let i=r(t.value);t.setAttribute(`aria-invalid`,String(i.status===`invalid`));let a=L(Le(n),`[data-role="numeric-error"]`);a&&(a.textContent=i.status===`invalid`?i.message:``),Ue(),x()}),N.body.addEventListener(`keydown`,Ze),N.prevBtn.addEventListener(`click`,()=>{if(D){Ye();return}Xe(-1)}),N.nextBtn.addEventListener(`click`,()=>{if(D)return;let e=Re();if(!T&&!p&&e===I().questions.length-1){Je();return}Xe(1)}),N.backToQuestionsBtn.addEventListener(`click`,Ye),p&&(N.resetModuleBtn?.addEventListener(`click`,Dt),N.checkModuleBtn?.addEventListener(`click`,Tt),N.stepper.addEventListener(`click`,e=>{let t=e.target.closest(`.tr-step-btn`);if(!t)return;let n=f.parts.findIndex(e=>e.partId===t.dataset.part);n<0||n===E||(Ut(),E=n,w.partIndex=n,w.currentQid=f.parts[n].questions[0].id,q(),X(N.partTitle),x())})),N.timerToggle.addEventListener(`click`,()=>{w.timerHidden=!w.timerHidden,q(),x()}),N.flagBtn.addEventListener(`click`,()=>{let e=w.currentQid,t=w.flags.indexOf(e);t>=0?w.flags.splice(t,1):w.flags.push(e),q(),x()}),N.elimBtn.addEventListener(`click`,()=>{w.eliminatorOn=!w.eliminatorOn,q(),x()}),N.submitBtn.addEventListener(`click`,et),N.submitSideBtn.addEventListener(`click`,et),N.pauseBtn.addEventListener(`click`,()=>an(!0)),N.resumeBtn.addEventListener(`click`,()=>an(!1)),N.startBtn?.addEventListener(`click`,en),L(u,`[data-action="start-next-section"]`)?.addEventListener(`click`,rn),N.printBlankBtn.addEventListener(`click`,Bt);let un=()=>{H(document.visibilityState!==`visible`),w.breakUntil&&nn(),document.visibilityState===`visible`?Ie():x()},dn=e=>{e.key===`Escape`&&Zt&&(e.preventDefault(),Zt())},fn=()=>{Mt?.(),Mt=null;let e=u.dataset.printing===`report`;delete u.dataset.printing,N.printSubtitle.textContent=At,e&&cn(`Your report went to the print dialog`,`If you picked Save as PDF, the file is wherever your browser puts downloads. If you closed the dialog, or sent it to a printer by mistake, press Generate PDF report again.`)};if(p){w.paused=!1,w.completed=!1;let e=Number(u.dataset.initialModule);Number.isInteger(e)&&e>=0&&e<f.parts.length&&(w.partIndex=e,E=e,w.currentQid=F().questions[0].id),q()}else B(F()),tt(),w.completed?gt():(q(),A?$t():w.breakUntil?tn():w.paused&&(N.pauseOverlay.hidden=!1,$(N.resumeBtn,()=>an(!1))),U());x();let pn=p?0:window.setInterval(Ie,Se),mn=!1,hn=()=>{mn||(p||(H(),x()),V=null,mn=!0,window.clearInterval(pn),window.clearTimeout(je),document.removeEventListener(`visibilitychange`,un),document.removeEventListener(`keydown`,dn),window.removeEventListener(`afterprint`,fn),window.removeEventListener(`beforeprint`,Nt),window.removeEventListener(`storage`,fe),window.removeEventListener(`pagehide`,hn),document.removeEventListener(`astro:before-swap`,hn))};function gn(){document.addEventListener(`visibilitychange`,un),document.addEventListener(`keydown`,dn),window.addEventListener(`afterprint`,fn),window.addEventListener(`beforeprint`,Nt),window.addEventListener(`storage`,fe),window.addEventListener(`pagehide`,hn,{once:!0}),document.addEventListener(`astro:before-swap`,hn,{once:!0})}function _n(){mn&&(mn=!1,gn(),U(),p||Ie(),pn=p?0:window.setInterval(Ie,Se))}gn()}De();