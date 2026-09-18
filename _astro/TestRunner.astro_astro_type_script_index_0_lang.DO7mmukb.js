import{i as e,r as t,t as n}from"./eliminator.CnRb2FKU.js";function r(e){let t=e.trim().replaceAll(`−`,`-`);if(!t)return{status:`blank`,message:``};if(t.length>(t.startsWith(`-`)?6:5))return{status:`invalid`,message:`Use up to 5 characters, or 6 including a leading minus.`};if(!/^-?(?:\d+|\d*\.\d+|\d+\/\d+)$/.test(t))return{status:`invalid`,message:`Enter an integer, decimal, or fraction such as -12, 5.75, or 23/4. Do not include units.`};let n=t.startsWith(`-`),r=n?t.slice(1):t,i,a;if(r.includes(`/`)){let e=r.split(`/`);if(i=BigInt(e[0]),a=BigInt(e[1]),a===0n)return{status:`invalid`,message:`The denominator cannot be zero.`}}else if(r.includes(`.`)){let[e,t]=r.split(`.`);i=BigInt((e||`0`)+t),a=10n**BigInt(t.length)}else i=BigInt(r),a=1n;return{status:`valid`,numerator:n?-i:i,denominator:a,normalized:t}}function i(e,t){let n=r(e),i=r(t);return n.status===`valid`&&i.status===`valid`&&n.numerator*i.denominator===i.numerator*n.denominator}var a=e=>typeof e==`object`&&!!e&&!Array.isArray(e),o=e=>typeof e==`number`&&Number.isFinite(e)&&e>=0,s=e=>typeof e==`number`&&Number.isSafeInteger(e)&&e>=0,c=e=>typeof e==`string`,l=e=>typeof e==`boolean`,u=e=>Array.isArray(e)&&e.every(c),d=e=>t=>a(t)&&Object.values(t).every(e),f=e=>Array.isArray(e)&&e.every(e=>a(e)&&(e.c===0||e.c===1)&&s(e.s)&&s(e.e)&&Number(e.e)>Number(e.s));function p(e,t){if(!a(e))return!1;let n={v:e=>s(e)&&Number(e)>=1,attemptId:c,breakUntil:e=>e===null||o(e),partIndex:s,currentQid:c,answers:d(c),flags:u,timeMs:d(o),partTimerMs:d(o),lockedParts:u,completed:l},r={awaitingModuleStart:l,paused:l,startedAt:o,eliminated:d(u),eliminatorOn:l,highlights:d(f),timerHidden:l,warnedParts:u,seenSections:u,revealed:u};return e.contentVersion===t&&Object.entries(n).every(([t,n])=>n(e[t]))&&Object.entries(r).every(([t,n])=>!(t in e)||n(e[t]))}var m=`￼`,h=[`.tr-passage`,`.tr-stem`],g=new WeakMap;function _(e){let t=[];return h.forEach((n,r)=>{let i=e.querySelector(n);i&&t.push([r,i])}),t}function v(e){let t=[],n=``,r=e=>{if(e.nodeType===Node.ELEMENT_NODE){let i=e;if(i.matches(`.katex, math, svg`)){t.push({kind:`katex`,node:i,start:n.length,len:1}),n+=m;return}for(let e of Array.from(i.childNodes))r(e);return}if(e.nodeType===Node.TEXT_NODE){let r=e;if(r.data.length===0)return;t.push({kind:`text`,node:r,start:n.length,len:r.data.length}),n+=r.data}};for(let t of Array.from(e.childNodes))r(t);return{units:t,text:n}}function ee(e,t,n,r,i){for(let t of e){let e=document.createRange();e.selectNode(t.node);let a;try{a=e.comparePoint(n,r)}catch{continue}if(a<0)return t.start;if(a===0)return t.kind===`text`&&n===t.node?t.start+Math.min(r,t.len):i?t.start+t.len:t.start}return t}function te(e){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return null;let n=t.getRangeAt(0);for(let[t,r]of _(e)){if(!r.contains(n.startContainer)||!r.contains(n.endContainer))continue;let{units:e,text:i}=v(r),a=ee(e,i.length,n.startContainer,n.startOffset,!1),o=ee(e,i.length,n.endContainer,n.endOffset,!0);for(o<a&&([a,o]=[o,a]);a<o&&/\s/.test(i[a]);)a++;for(;o>a&&/\s/.test(i[o-1]);)o--;return o<=a?null:{c:t,s:a,e:o}}return null}function ne(e,t,n){let r=[...e.highlights[t]??[],n];e.highlights[t]=oe(r)}function re(e,t,n){let r=e.highlights[t];!r||n<0||n>=r.length||(r.splice(n,1),r.length===0&&delete e.highlights[t])}function ie(e,t){return(e.highlights[t]??[]).length>0}function ae(e,t){delete e.highlights[t]}function oe(e){let t=[];for(let n of[0,1]){let r=e.filter(e=>e.c===n&&e.e>e.s).sort((e,t)=>e.s-t.s||e.e-t.e);for(let e of r){let r=t[t.length-1];r&&r.c===n&&e.s<=r.e?r.e=Math.max(r.e,e.e):t.push({...e})}}return t}function se(e,t){let n=document.createElement(`mark`);n.className=`tr-hl`,n.dataset.hl=String(t),e.parentNode.insertBefore(n,e),n.appendChild(e)}function ce(e,t){let n=JSON.stringify(t);if(e.dataset.hlSig!==n){e.dataset.hlSig=n;for(let[n,r]of _(e)){if(g.has(r)||g.set(r,r.innerHTML),r.innerHTML=g.get(r),!t.some(e=>e.c===n))continue;let{units:e,text:i}=v(r),a=new Map;t.forEach((t,r)=>{if(t.c!==n)return;let o=Math.max(0,Math.min(t.s,i.length)),s=Math.max(o,Math.min(t.e,i.length));if(!(s<=o))for(let t of e){let e=Math.max(o,t.start),n=Math.min(s,t.start+t.len);if(n<=e)continue;let i=a.get(t)??[];i.push([e-t.start,n-t.start,r]),a.set(t,i)}});for(let[e,t]of a){if(e.kind===`katex`){se(e.node,t[0][2]);continue}let n=e.node;t.sort((e,t)=>t[0]-e[0]);for(let[e,r,i]of t){r<n.data.length&&n.splitText(r);let t=e>0?n.splitText(e):n;if(/\S/.test(t.data)&&se(t,i),e===0)break}}}}}var y=`opt.tools.panels`,b=16,x=48;function S(e){try{let t=JSON.parse(localStorage.getItem(y)??`{}`)?.[e];if(t&&[`left`,`top`,`width`,`height`].every(e=>typeof t[e]==`number`))return t}catch{}return null}function C(e,t){try{let n=JSON.parse(localStorage.getItem(y)??`{}`);n[e]=t,localStorage.setItem(y,JSON.stringify(n))}catch{}}function le(e){let{panel:t,head:n,move:r,close:i,id:a}=e,o=e.sheetBelowPx??768,s=null,c=()=>window.innerWidth<o;function l(){let e=t.getBoundingClientRect();return{left:e.left,top:e.top,width:e.width,height:e.height}}function u(e,n){if(c())return;let r=t.offsetWidth,i=window.innerWidth-x,a=window.innerHeight-x;t.style.left=`${Math.round(Math.max(x-r,Math.min(e,i)))}px`,t.style.top=`${Math.round(Math.max(0,Math.min(n,a)))}px`}function d(e){c()||(t.style.width=`${Math.round(e.width)}px`,t.style.height=`${Math.round(e.height)}px`,u(e.left,e.top))}function f(){let e=Math.min(460,Math.max(320,window.innerWidth-64)),t=Math.min(560,Math.max(280,window.innerHeight-160));return{left:window.innerWidth-e-32,top:96,width:e,height:t}}function p(){c()||C(a,l())}let m=0,h=0;n.addEventListener(`pointerdown`,e=>{if(c())return;let i=e.target.closest(`button`);if(i&&i!==r)return;let a=t.getBoundingClientRect();m=e.clientX-a.left,h=e.clientY-a.top,n.setPointerCapture(e.pointerId),n.dataset.dragging=`1`,e.preventDefault()}),n.addEventListener(`pointermove`,e=>{n.dataset.dragging===`1`&&u(e.clientX-m,e.clientY-h)});let g=e=>{if(n.dataset.dragging===`1`){delete n.dataset.dragging;try{n.releasePointerCapture(e.pointerId)}catch{}p()}};n.addEventListener(`pointerup`,g),n.addEventListener(`pointercancel`,g),r.addEventListener(`keydown`,e=>{let t=e.key===`ArrowLeft`?-16:e.key===`ArrowRight`?b:0,n=e.key===`ArrowUp`?-16:e.key===`ArrowDown`?b:0;if(!t&&!n)return;e.preventDefault();let r=l();u(r.left+t,r.top+n),p()});let _=0;new ResizeObserver(()=>{t.hidden||(window.clearTimeout(_),_=window.setTimeout(p,250))}).observe(t),window.addEventListener(`resize`,()=>{t.hidden||d(S(a)??f())}),t.addEventListener(`keydown`,e=>{e.key===`Escape`&&(e.stopPropagation(),e.preventDefault(),v.close())}),i.addEventListener(`click`,()=>v.close());let v={el:t,isOpen:()=>!t.hidden,open(e){t.hidden&&(s=e,t.hidden=!1,d(S(a)??f()),t.focus({preventScroll:!0}))},close(){t.hidden||(t.hidden=!0,s&&document.contains(s)&&s.focus(),s=null)}};return v}var w=`// @ts-check
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
`,T=class extends Error{reason;constructor(e){super(e),this.name=`ArchiveError`,this.reason=e}};function E(e){return e.replace(/@media\s+print\s*\{/gi,`@media all{`)}var ue=/,\s*url\(\s*["']?[^)"']*["']?\s*\)\s*format\(\s*["'](?:woff|truetype|opentype)["']\s*\)/g;function de(e){return e.replace(ue,``)}var D=/url\(\s*(?:"([^"]*)"|'([^']*)'|([^)"'\s][^)]*?))\s*\)/gi;function O(e){return(e[1]??e[2]??e[3]??``).trim()}function fe(e){let t=[],n=/@font-face\s*\{/gi,r;for(;r=n.exec(e);){let i=1,a=``,o=r.index+r[0].length;for(;o<e.length&&i>0;o+=1){let t=e[o];a?t===`\\`?o+=1:t===a&&(a=``):t===`"`||t===`'`?a=t:t===`{`?i+=1:t===`}`&&--i}t.push(e.slice(r.index,o)),n.lastIndex=o}return t}function pe(e){let t=e.split(/[?#]/)[0],n=t.lastIndexOf(`.`);return n<0?``:t.slice(n+1).toLowerCase()}var k={woff2:`font/woff2`,woff:`font/woff`,ttf:`font/ttf`,otf:`font/otf`};function me(e){let t=pe(e),n=k[t];if(!n)throw new T(`A font file has an unknown type (.${t}).`);return n}function A(e){return!/^(data:|#)/i.test(e.trim())}function j(e){let t=new Set;for(let n of fe(e))for(let e of n.matchAll(D)){let n=O(e);n&&A(n)&&t.add(n)}return[...t]}function he(e,t){let n=e=>e.replace(D,(e,n,r,i)=>{let a=(n??r??i??``).trim(),o=t.get(a);return o?`url(${o})`:e}),r=``,i=0;for(let t of fe(e)){let a=e.indexOf(t,i);a<0||(r+=e.slice(i,a)+n(t),i=a+t.length)}return r+e.slice(i)}function ge(e){let t=e.replace(/\/\*[\s\S]*?\*\//g,``);if(/@import\b/i.test(t))throw new T(`A stylesheet uses @import.`);for(let e of t.matchAll(D)){let t=O(e);if(t&&A(t))throw new T(`A stylesheet still references ${t.slice(0,60)}.`)}}function M(e){if(/<\/style/i.test(e))throw new T(`A stylesheet could not be embedded.`)}function N(e){if(/<\/|<!--/.test(e))throw new T(`The archive script could not be embedded.`)}function _e(e){return JSON.stringify(e).replace(/</g,`\\u003c`)}var P=8388608,F=[`.site-header`,`.site-footer`,`.tr-noprint`,`.tr-panel`,`.tr-modal`,`.tr-start-overlay`,`.tr-pause-overlay`,`.tr-checkwork`,`.tr-sidebar`,`.tr-storage-warning`,`.tr-hl-popover`].join(`, `);async function I(e){let t=null;try{t=await fetch(e,{cache:`force-cache`})}catch{t=null}return t?.ok?t:fetch(e,{cache:`reload`})}function ve(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(String(r.result)),r.onerror=()=>n(new T(`A font file could not be encoded.`)),r.readAsDataURL(e)})}async function ye(e){let t=j(e),n=new Map;return await Promise.all(t.map(async e=>{let t=me(e),r;try{r=await I(new URL(e,location.href).href)}catch{throw new T(`A font file did not load (${e.slice(0,60)}).`)}if(!r.ok)throw new T(`A font file did not load (${r.status} on ${e.slice(0,60)}).`);n.set(e,await ve(new Blob([await r.arrayBuffer()],{type:t})))})),he(e,n)}async function be(){let e=[];for(let t of Array.from(document.styleSheets)){let n=t.ownerNode;if(n instanceof HTMLStyleElement){e.push(n.textContent??``);continue}if(t.href)try{let n=await I(t.href);if(!n.ok)throw Error(String(n.status));e.push(await n.text())}catch{try{e.push(Array.from(t.cssRules,e=>e.cssText).join(`
`))}catch{throw new T(`A stylesheet did not load.`)}}}return e.join(`
`)}var xe=`
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
`;function L(){let e=new Date,t=e=>String(e).padStart(2,`0`);return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`}async function Se(e){let t=document.documentElement.cloneNode(!0);for(let e of Array.from(t.querySelectorAll(`script`)))e.remove();for(let e of Array.from(t.querySelectorAll(`link[rel="stylesheet"], link[rel="preload"], link[rel="icon"], link[rel="canonical"], meta[property="og:url"]`)))e.remove();for(let e of Array.from(t.querySelectorAll(`.tr-chart-tip`)))e.classList.remove(`tr-noprint`),e.removeAttribute(`aria-hidden`);for(let e of Array.from(t.querySelectorAll(F)))e.remove();let n=t.querySelector(`#test-runner`);if(!n)throw new T(`The results could not be read.`);n.dataset.printing=`report`;let r=n.querySelector(`[data-role="print-subtitle"]`);r&&(r.textContent=e.subtitle);for(let n of Array.from(t.querySelectorAll(`[aria-label]`))){let t=n.getAttribute(`aria-label`);t.endsWith(`Activate to review this question.`)&&n.setAttribute(`aria-label`,`${t.slice(0,-33)}${e.cta}.`)}for(let e of Array.from(t.querySelectorAll(`img`))){let t=new URL(e.getAttribute(`src`)??``,location.href);if(t.origin!==location.origin||!t.pathname.startsWith(`/content/pilot/`))throw new T(`Unrecognized report image.`);let n=await I(t.href);if(!n.ok)throw new T(`A report image could not be loaded.`);let r=await n.blob();e.src=await new Promise((e,t)=>{let n=new FileReader;n.onload=()=>e(String(n.result)),n.onerror=t,n.readAsDataURL(r)}),e.removeAttribute(`loading`)}let i=de(E(await be()));i=await ye(i),ge(i);let a=`${i}\n${xe}`;M(a);let o=t.querySelector(`head`),s=t.querySelector(`body`);if(!o||!s)throw new T(`The page could not be read.`);let c=t.ownerDocument.createElement(`style`);c.textContent=a,o.appendChild(c),N(w);let l=_e({tips:e.tips,cta:e.cta}),u=t.ownerDocument.createElement(`script`);u.textContent=`${w}\noptArchiveRuntime(${l});\n`,s.appendChild(u);let d=`<!DOCTYPE html>\n${t.outerHTML}`,f=new Blob([d],{type:`text/html;charset=utf-8`});if(f.size>P)throw new T(`The file came out larger than ${Math.round(P/1024/1024)} MB.`);return{blob:f,filename:`${e.testId}-report-${L()}.html`}}function Ce(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,r.click(),window.setTimeout(()=>URL.revokeObjectURL(n),6e4)}function R(){return{correct:0,incorrect:0,unanswered:0,total:0}}function z(e,t){e.total++,e[t]++}function we(e,t){let n=t[e.id];return n==null||n.trim()===``?`unanswered`:e.kind===`numeric`&&e.answer?.kind===`numeric`?i(n,e.answer.exact)?`correct`:`incorrect`:n===e.correctChoiceId?`correct`:`incorrect`}function Te(e){return e.total<=0?null:Math.round(e.correct/e.total*100)}function Ee(e){let t=R(),n=[],r=new Map,i=[],a=new Map,o=[],s=new Set(e.lockedParts),c=[],l=0;for(let u of e.parts){s.has(u.partId)||c.push(`${u.sectionTitle} ${u.partTitle}`);let d={sectionTitle:u.sectionTitle,partTitle:u.partTitle,...R()};o.push(d);let f=r.get(u.sectionId);f||(f={id:u.sectionId,title:u.sectionTitle,...R()},r.set(u.sectionId,f),n.push(f));for(let n of u.questions){let r=we(n,e.answers);z(t,r),z(f,r),z(d,r);let o=a.get(n.category);o||(o={name:n.category,...R()},a.set(n.category,o),i.push(o)),z(o,r),l+=e.timeMs[n.id]??0}}return i.sort((e,t)=>(Te(e)??-1)-(Te(t)??-1)),{overall:t,sections:n,categories:i,parts:o,timeMs:l,complete:c.length===0,unsubmittedParts:c}}var De=5,Oe=500,ke=Oe*4,Ae=3e5,je=8e3,Me=44;function B(e,t){return e.querySelector(t)}function V(e,t){return Array.from(e.querySelectorAll(t))}function H(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function Ne(){let i=document.getElementById(`test-runner`);if(!i||i.dataset.initialized===`1`)return;i.dataset.initialized=`1`;let a=B(i,`#opt-test-meta`);if(!a||!a.textContent)return;let o=JSON.parse(a.textContent);if(!o.parts.length)return;let s=i.dataset.mode===`browse`,c=i.dataset.testsHref||`/`,l=`opt.test.${o.id}.${s?`browse.`:``}state`,u=[l],d=!0,f=!1;function m(){d=!1;let e=B(i,`[data-role="storage-warning"]`);e&&(e.hidden=!1)}function h(e){return p(e,o.contentVersion)}function g(e){if(typeof e.paused!=`boolean`&&(e.paused=!1),typeof e.startedAt!=`number`&&(e.startedAt=Date.now()),typeof e.awaitingModuleStart!=`boolean`&&(e.awaitingModuleStart=!1),(!e.eliminated||typeof e.eliminated!=`object`)&&(e.eliminated={}),(typeof e.eliminatorOn!=`boolean`||e.v<4)&&(e.eliminatorOn=!0),e.v<4)for(let[t,r]of Object.entries(e.answers))n(e,t,r);return(!e.highlights||typeof e.highlights!=`object`)&&(e.highlights={}),typeof e.timerHidden!=`boolean`&&(e.timerHidden=!1),Array.isArray(e.warnedParts)||(e.warnedParts=[]),Array.isArray(e.seenSections)||(e.seenSections=[]),Array.isArray(e.revealed)||(e.revealed=[]),e.v<De&&(e.v=De),e}function _(){try{let e=localStorage.getItem(l);if(e===null)return null;try{let t=JSON.parse(e);if(h(t))return g(t)}catch{}try{localStorage.setItem(l+`.recovery.`+Date.now(),e)}catch{f=!0,m()}return null}catch{return f=!0,m(),null}}function v(){if(!(f||E&&y.lockedParts.length===0||ue))try{localStorage.setItem(l,JSON.stringify(y))}catch{d&&m()}}function ee(e){e.partIndex=Math.max(0,Math.min(e.partIndex,o.parts.length-1));let t=o.parts[e.partIndex];return t.questions.some(t=>t.id===e.currentQid)||(e.currentQid=t.questions[0].id),e}let oe=o.parts[0],se=_(),y=se?ee(se):{v:De,contentVersion:o.contentVersion,attemptId:crypto.randomUUID(),breakUntil:null,awaitingModuleStart:!0,partIndex:0,currentQid:oe.questions[0].id,answers:{},flags:[],timeMs:{},partTimerMs:{},lockedParts:[],paused:!1,completed:!1,startedAt:Date.now(),eliminated:{},eliminatorOn:!0,highlights:{},timerHidden:!1,warnedParts:[],seenSections:[],revealed:[]},b=!1,x=y.partIndex,S=!1,C=!1,w=!1,E=!s&&!y.completed&&!y.breakUntil&&y.awaitingModuleStart,ue=!1;function de(e){return b||s&&y.revealed.includes(e)}function D(){return b||s}let O={partTitle:B(i,`[data-role="part-title"]`),timer:B(i,`[data-role="timer"]`),timerToggle:B(i,`[data-action="hide-timer"]`),live:B(i,`[data-role="live"]`),toast:B(i,`[data-role="toast"]`),pauseBtn:B(i,`[data-action="pause"]`),printBlankBtn:B(i,`[data-action="print-blank"]`),printSubtitle:B(i,`[data-role="print-subtitle"]`),pauseOverlay:B(i,`[data-role="pause-overlay"]`),resumeBtn:B(i,`[data-action="resume"]`),startOverlay:B(i,`[data-role="start-overlay"]`),browseProgress:B(i,`[data-role="browse-progress"]`),startBody:B(i,`[data-role="start-body"]`),startBtn:B(i,`[data-action="start"]`),grid:B(i,`[data-role="grid"]`),toolbar:B(i,`[data-role="toolbar"]`),elimBtn:B(i,`[data-action="eliminator"]`),clearHlBtn:B(i,`[data-action="clear-highlights"]`),refBtn:B(i,`[data-action="reference"]`),refPanel:B(i,`[data-role="ref-panel"]`),dirBtn:B(i,`[data-action="directions"]`),dirPanel:B(i,`[data-role="dir-panel"]`),checkwork:B(i,`[data-role="checkwork"]`),checkworkTitle:B(i,`[data-role="checkwork-title"]`),checkworkSummary:B(i,`[data-role="checkwork-summary"]`),checkworkGrid:B(i,`[data-role="checkwork-grid"]`),backToQuestionsBtn:B(i,`[data-action="back-to-questions"]`),nextLabel:B(i,`[data-role="next-label"]`),nextArrow:B(i,`[data-role="next-arrow"]`),questionArea:B(i,`.tr-question-area`),hlPopover:B(i,`[data-role="hl-popover"]`),hlAction:B(i,`[data-role="hl-action"]`),flagBtn:B(i,`[data-action="flag"]`),resetModuleBtn:B(i,`[data-action="reset-module"]`),checkModuleBtn:B(i,`[data-action="check-module"]`),prevBtn:B(i,`[data-action="prev"]`),nextBtn:B(i,`[data-action="next"]`),submitBtn:B(i,`[data-role="submit"]`),submitSideBtn:B(i,`[data-role="submit-side"]`),progress:B(i,`[data-role="progress"]`),stepper:B(i,`[data-role="stepper"]`),results:B(i,`[data-role="results"]`),body:B(i,`.tr-body`),navbar:B(i,`.tr-navbar`),navbarTop:B(i,`.tr-navbar-top`),sidebar:B(i,`.tr-sidebar`),topbar:B(i,`.tr-topbar`),modal:B(i,`[data-role="modal"]`),modalTitle:B(i,`[data-role="modal-title"]`),modalBody:B(i,`[data-role="modal-body"]`),modalConfirm:B(i,`[data-role="modal-confirm"]`),modalCancel:B(i,`[data-role="modal-cancel"]`)},fe=V(i,`.tr-question`),pe=V(i,`.tr-step`),k=new Map,me=new Map;o.parts.forEach((e,t)=>{for(let n of e.questions)k.set(n.id,n),me.set(n.id,t)});function A(){return o.parts[y.partIndex]}function j(){return o.parts[x]}function he(){return y.partIndex>=o.parts.length-1}function ge(e){return(e.timeLimitMinutes??0)*6e4}function M(e){return y.partTimerMs[e.partId]??(y.partTimerMs[e.partId]=o.timerMode===`countdown`?ge(e):0),y.partTimerMs[e.partId]}let N=null;function _e(){return!s&&!E&&!y.paused&&!y.breakUntil&&!y.completed&&!b&&!C}function P(e=document.visibilityState===`visible`){if(N==null)return;let t=Date.now(),n=t-N;if(N=t,n<=0)return;if(e){let e=y.currentQid;y.timeMs[e]=(y.timeMs[e]??0)+Math.min(n,ke)}let r=A();M(r),o.timerMode===`countdown`?y.partTimerMs[r.partId]=Math.max(0,y.partTimerMs[r.partId]-n):y.partTimerMs[r.partId]+=n}function F(){_e()?N??=Date.now():(P(),N=null)}function I(e,t){let n=t===`ceil`?Math.ceil(e/1e3):Math.floor(e/1e3),r=Math.floor(n/3600),i=Math.floor(n%3600/60),a=n%60,o=r>0?String(i).padStart(2,`0`):String(i),s=String(a).padStart(2,`0`);return r>0?`${r}:${o}:${s}`:`${o}:${s}`}function ve(){if(b||s){O.timer.textContent=``,O.timer.hidden=!0;return}O.timer.hidden=y.timerHidden;let e=M(A());o.timerMode===`countdown`?(O.timer.textContent=I(e,`ceil`),O.timer.classList.toggle(`is-low`,e<=6e4)):O.timer.textContent=I(e,`floor`)}function ye(e){return o.timerMode===`countdown`&&ge(e)>0}let be=0,xe=0,L=null;function R(e,t=``){(t===``||L===null||L===t)&&(window.clearTimeout(xe),L=t,O.live.textContent=``,xe=window.setTimeout(()=>{O.live.textContent=e,L=null},30))}function z(e){L===e&&(window.clearTimeout(xe),L=null,O.live.textContent=``)}function Ne(e){O.toast.textContent=e,O.toast.hidden=!1,window.clearTimeout(be),be=window.setTimeout(()=>{O.toast.hidden=!0},je)}let Pe=Date.now();function Fe(){if(y.breakUntil){Jt();return}if(P(),ve(),_e()&&ye(A())){let e=A(),t=y.partTimerMs[e.partId]??0;if(document.visibilityState===`visible`&&t>0&&t<=Ae&&ge(e)>Ae&&!y.warnedParts.includes(e.partId)&&(y.warnedParts.push(e.partId),v(),R(`Five minutes remain in this module.`),Ne(`5 minutes remaining`)),t<=0){Xe(!0);return}}let e=Date.now();e-Pe>=2e3&&(Pe=e,_e()&&v())}function U(e){return fe.find(t=>t.dataset.qid===e)}function Ie(){return j().questions.findIndex(e=>e.id===y.currentQid)}function Le(e,n,i=b){let a=y.answers[n],o=i?k.get(n)?.correctChoiceId:void 0,c=B(e,`.tr-numeric-input`);if(c){c.value=a??``,c.disabled=b||s&&i;let t=r(c.value);c.setAttribute(`aria-invalid`,String(t.status===`invalid`));let n=B(e,`[data-role="numeric-error"]`);n&&(n.textContent=t.status===`invalid`?t.message:``)}V(e,`.tr-choice`).forEach((e,t)=>{let n=e.dataset.choiceId;e.setAttribute(`aria-checked`,a===n?`true`:`false`),e.classList.remove(`is-correct`,`is-wrong`);let r=b||s&&i;e.disabled=r,e.tabIndex=r?-1:(a?a===n:t===0)?0:-1,i&&(n===o?e.classList.add(`is-correct`):n===a&&e.classList.add(`is-wrong`))}),t(e,y,n,y.eliminatorOn&&!i)}function Re(e){let t=y.answers[e.id],n=`Correct answer: ${e.answer.kind===`numeric`?e.answer.exact:e.correctChoiceId}.`;return s?t==null?n:`${n} ${ze(e,t)}`:`${n} ${ze(e,t)} Time on this question: ${I(y.timeMs[e.id]??0,`floor`)}.`}function ze(e,t){return t==null?`You did not answer this question.`:e.kind===`numeric`&&r(t).status===`invalid`?`Invalid entry: ${t}. No credit.`:we(e,y.answers)===`correct`?`Correct. Your answer: ${t}.`:`Incorrect. Your answer: ${t}.`}function Be(e,t,n){e.innerHTML=``,t.questions.forEach((t,r)=>{let i=document.createElement(`button`);i.type=`button`,i.className=`tr-grid-cell`,i.textContent=String(r+1),i.dataset.qid=t.id;let a=y.answers[t.id]!=null,o=y.flags.includes(t.id),s=`Question ${r+1}`;if(a&&de(t.id)){let e=we(t,y.answers)===`correct`;i.classList.add(e?`is-correct`:`is-incorrect`),s+=e?`, correct`:`, incorrect`}else a?(i.classList.add(`is-answered`),s+=`, answered`):s+=`, not answered`;o&&(i.classList.add(`is-flagged`),s+=`, flagged`),n&&t.id===y.currentQid&&(i.classList.add(`is-current`),s+=`, current`),i.setAttribute(`aria-label`,s),i.addEventListener(`click`,()=>{P(),S=!1,y.currentQid=t.id,W(),v()}),e.appendChild(i)})}function Ve(){let e=j();if(Be(O.grid,e,!0),O.browseProgress){let t=e.questions.filter(e=>y.answers[e.id]!=null).length;O.browseProgress.textContent=`${t} of ${e.questions.length} answered in this module`}O.resetModuleBtn&&(O.resetModuleBtn.disabled=!St(j())),O.checkModuleBtn?.setAttribute(`aria-disabled`,String(bt(j()).length===0))}function He(){let e=j().partId;pe.forEach((t,n)=>{let r=o.parts[n],i=!s&&y.lockedParts.includes(r.partId),a=r.partId===e;t.classList.toggle(`is-locked`,i),t.classList.toggle(`is-current`,a),t.classList.toggle(`is-upcoming`,!s&&!i&&!a),a?t.setAttribute(`aria-current`,`step`):t.removeAttribute(`aria-current`);let c=[];i&&c.push(`submitted`),a&&c.push(`current`),!s&&!i&&!a&&c.push(`not started yet`);let l=b?`Review: `:s?`Go to `:``,u=B(t,`[data-role="step-state"]`);u&&(u.textContent=`${l}${r.sectionTitle}, ${r.partTitle}, step ${n+1} of ${o.parts.length}`+(c.length?`, ${c.join(`, `)}`:``));let d=B(t,`.tr-step-num`);d&&(d.textContent=i?`✓`:d.dataset.num??String(n+1))})}function Ue(){let e=A();O.checkworkTitle.textContent=`Check your work: ${e.sectionTitle}, ${e.partTitle}`;let t=e.questions.length,n=e.questions.filter(e=>y.answers[e.id]!=null).length,r=e.questions.filter(e=>y.flags.includes(e.id)).length;O.checkworkSummary.textContent=`${n} of ${t} answered, ${r} flagged. Select a question to go back to it, or submit this module.`,Be(O.checkworkGrid,e,!1)}function We(){if(!O.dirPanel)return;let e=j().sectionId;for(let t of V(O.dirPanel,`.tr-directions`))t.hidden=t.dataset.section!==e}function W(){let e=j();X(),O.checkwork.hidden=!S,O.questionArea.hidden=S,O.sidebar.hidden=S,S&&Ue(),fe.forEach(e=>{e.hidden=e.dataset.qid!==y.currentQid});let t=U(y.currentQid);if(t){ce(t,y.highlights[y.currentQid]??[]);let e=de(y.currentQid);Le(t,y.currentQid,e);let n=B(t,`[data-role="explanation"]`);if(n&&(n.hidden=!e,e)){let e=k.get(y.currentQid),t=B(n,`[data-role="answer-line"]`);t&&(t.textContent=Re(e))}let r=B(t,`[data-action="reveal"]`);r&&(r.textContent=e?`Reset this question`:`Show solution`)}O.partTitle.textContent=b?`Review: ${e.sectionTitle}, ${e.partTitle}`:`${e.sectionTitle}, ${e.partTitle}`,ve();let n=b||s;O.timerToggle.hidden=n,O.timerToggle.textContent=y.timerHidden?`Show timer`:`Hide timer`,O.pauseBtn.hidden=n;let r=y.flags.includes(y.currentQid);O.flagBtn.setAttribute(`aria-pressed`,r?`true`:`false`),O.flagBtn.textContent=r?`Flagged`:`Flag for review`,O.submitSideBtn.hidden=n,O.elimBtn.hidden=b||S||k.get(y.currentQid)?.kind===`numeric`,O.elimBtn.setAttribute(`aria-pressed`,y.eliminatorOn?`true`:`false`),O.clearHlBtn.hidden=b||S||!ie(y,y.currentQid),O.refBtn&&(O.refBtn.hidden=!e.referenceSheet),O.dirBtn&&(O.dirBtn.hidden=!e.hasDirections),We(),O.toolbar.hidden=O.elimBtn.hidden&&O.clearHlBtn.hidden&&(!O.refBtn||O.refBtn.hidden)&&(!O.dirBtn||O.dirBtn.hidden);let i=Ie();if(S){O.progress.textContent=`Check your work`,O.prevBtn.disabled=!1,O.nextBtn.disabled=!0,O.nextLabel.textContent=`Next`,O.nextArrow.hidden=!1,He();return}O.progress.textContent=`Question ${i+1} of ${e.questions.length}`;let a=i===e.questions.length-1,c=!b&&!s&&a;if(O.nextLabel.textContent=c?`Review your work`:`Next`,O.nextArrow.hidden=c,D()){let t=x===0&&i===0,n=x===o.parts.length-1&&i===e.questions.length-1;O.prevBtn.disabled=t,O.nextBtn.disabled=n}else O.prevBtn.disabled=i===0,O.nextBtn.disabled=!1;O.navbar.hidden=!b,Ve(),He()}let G=null;function Ge(){b||s||S||(P(),G=y.currentQid,S=!0,W(),J(O.checkworkTitle))}function Ke(){S&&(S=!1,G&&k.has(G)&&(y.currentQid=G),G=null,W(),J(O.partTitle))}function qe(e){let t=j(),n=Ie()+e;P();let r=null;if(n>=0&&n<t.questions.length)y.currentQid=t.questions[n].id;else if(D()){let t=x+e;if(t>=0&&t<o.parts.length){r=document.activeElement,Lt(),x=t;let n=o.parts[t].questions;y.currentQid=e>0?n[0].id:n[n.length-1].id,s&&(y.partIndex=t)}}W(),r&&(r.focus(),document.activeElement!==r&&J(O.partTitle)),v()}function Je(e){if(b||!en())return;let t=e.target.closest(`.tr-choice`);if(!t)return;let r=e.key;if(r!==`ArrowDown`&&r!==`ArrowRight`&&r!==`ArrowUp`&&r!==`ArrowLeft`)return;let i=U(y.currentQid);if(!i)return;let a=V(i,`.tr-choice`),o=a.indexOf(t);if(o<0)return;e.preventDefault();let s=a[(o+(r===`ArrowDown`||r===`ArrowRight`?1:-1)+a.length)%a.length],c=s.dataset.choiceId;y.answers[y.currentQid]=c,n(y,y.currentQid,c),z(`answer-cleared`),W(),s.focus(),v()}function Ye(){return A().questions.filter(e=>y.answers[e.id]==null).length}function Xe(e=!1){if(s)return;let t=A();if(P(),Lt(),y.lockedParts.includes(t.partId)||y.lockedParts.push(t.partId),he()){$e();return}let n=t.sectionId;if(y.partIndex+=1,o.breakMinutes&&A().sectionId!==n&&(y.breakUntil=Date.now()+o.breakMinutes*6e4),y.awaitingModuleStart=!0,E=!y.breakUntil,x=y.partIndex,S=!1,y.currentQid=A().questions[0].id,M(A()),N=null,F(),W(),Qe(),v(),y.breakUntil){qt();return}Gt(e)}function Ze(){if(!en())return;let e=Ye(),t=he(),n=(e>0?`You have ${e} unanswered question${e===1?``:`s`} in this module. `:``)+`A submitted module cannot be reopened.`+(t?` This is the final module, so you will see your results next.`:``);Qt(t?`Submit and see results?`:`Submit this module?`,n,t?`Submit and see results`:`Submit this module`,()=>Xe(!1))}function Qe(){let e=he()?`Submit and see results`:`Submit this module`;O.submitBtn.textContent=e,O.submitSideBtn.textContent=e}function $e(){if(!y.completed){y.completed=!0;try{localStorage.setItem(`opt.test.${o.id}.attempt.${y.attemptId}`,JSON.stringify(y))}catch{}N=null,v(),ft()}}function et(){return Ee({parts:o.parts,answers:y.answers,lockedParts:y.lockedParts,timeMs:y.timeMs})}function tt(e){let t=Te(e);return t===null?`n/a`:`${t}%`}function nt(e){return we(e,y.answers)}function rt(e){return e===`correct`?`Correct`:e===`incorrect`?`Incorrect`:`Unanswered`}function it(e){let t=e.questions.map(e=>y.timeMs[e.id]??0),n=t.reduce((e,t)=>e+t,0);return e.questions.map((e,r)=>({q:e,idx:r,ms:t[r],status:nt(e),pct:n>0?Math.round(t[r]/n*100):0}))}let at=`answering time`;function ot(e){let t=e.q.preview?`${e.q.preview} `:``;return`Question ${e.idx+1}, ${e.q.category}. ${t}Time ${I(e.ms,`floor`)}, ${rt(e.status)}, ${e.pct}% of ${at}. Activate to review this question.`}function st(e,t,n,r){return{h:`Question ${t+1}, ${e.category}`,p:e.preview??``,m:`${I(r,`floor`)}, ${n}% of ${at}, ${rt(nt(e))}`}}function ct(e,t,n,r){let i=st(e,t,n,r),a=(e,t)=>{let n=document.createElement(`div`);return n.className=e,n.textContent=t,n},o=[a(`tr-tip-head`,i.h)];return i.p&&o.push(a(`tr-tip-text`,i.p)),o.push(a(`tr-tip-meta`,i.m),a(`tr-tip-cta`,`Click to review`)),o}function lt(e,t,n){let r=parseFloat(getComputedStyle(e).getPropertyValue(`--tr-tip-gap`))||8,i=t.getBoundingClientRect(),a=i.left+t.clientLeft,o=i.top+t.clientTop,s=t.clientWidth,c=e.offsetWidth/2,l=n.left+n.width/2-a,u=c+4,d=s-c-4;e.style.left=`${u>d?s/2:Math.min(Math.max(l,u),d)}px`,e.style.top=`${n.top-o}px`,e.classList.toggle(`is-below`,n.top-e.offsetHeight-r<0)}function ut(e,t){let n=t.length;if(n===0)return``;let r=Math.max(1,...t.map(e=>e.ms)),i=Math.min(684,Math.max(288,n*58)),a=44+i+8,o=i/n,s=Math.max(.75,Math.min(Me,o-1)),c=n>20?7:n>10?8.5:10,l=n>20?7.5:n>10?9:11,u=e=>e===`correct`?`var(--color-correct)`:e===`incorrect`?`var(--color-incorrect)`:`var(--color-unanswered)`,d=t.map((e,t)=>{let n=e.q,i=e.ms/r*150,a=44+t*o,d=a+(o-s)/2,f=178-i,p=a+o/2,m=e.pct,h=f-6,g=e.status===`unanswered`?` stroke="var(--color-border)" stroke-width="1"`:``,_=ot(e),v=`<rect class="tr-bar-hit" x="${a.toFixed(2)}" y="28" width="${o.toFixed(2)}" height="150" />`,ee=`<rect class="tr-bar-rect" x="${d.toFixed(2)}" y="${f.toFixed(2)}" width="${s.toFixed(2)}" height="${i.toFixed(2)}" fill="${u(e.status)}"${g} />`,te=`<text x="${p.toFixed(2)}" y="${h.toFixed(2)}" text-anchor="middle" font-size="${l}" fill="var(--color-muted)">${m}%</text>`,ne=`<text x="${p.toFixed(2)}" y="${190 .toFixed(2)}" text-anchor="middle" font-size="${c}" fill="var(--color-muted)">${t+1}</text>`;return`<g class="tr-bar" role="button" tabindex="${t===0?`0`:`-1`}" data-qid="${H(n.id)}" data-idx="${t}" data-pct="${m}" aria-label="${H(_)}">${v}${ee}${te}${ne}</g>`}).join(``);return`<svg width="${a}" height="204" viewBox="0 0 ${a} 204" role="group" aria-label="${H(`Per-question time for ${e.sectionTitle}, ${e.partTitle}, colored by whether the answer was correct, incorrect, or left unanswered`)}">
      <line x1="44" y1="178" x2="${a-8}" y2="178" stroke="var(--color-border)" stroke-width="1" aria-hidden="true" />
      <text x="38" y="32" text-anchor="end" font-size="11" fill="var(--color-muted)" aria-hidden="true">${I(r,`ceil`)}</text>
      <text x="38" y="178" text-anchor="end" font-size="11" fill="var(--color-muted)" aria-hidden="true">0:00</text>
      ${d}
    </svg>`}function dt(e){return e.map(e=>{let t=`<button type="button" class="tr-row-btn" tabindex="${e.idx===0?`0`:`-1`}" aria-label="${H(ot(e))}">${e.idx+1}</button>`;return`<tr class="tr-time-row" data-qid="${H(e.q.id)}" data-idx="${e.idx}" data-pct="${e.pct}"><td>${t}</td><td>${H(e.q.category)}</td><td>${rt(e.status)}</td><td class="num">${I(e.ms,`floor`)}</td></tr>`}).join(``)}function ft(){b=!1,S=!1,Lt(),O.checkwork.hidden=!0,O.questionArea.hidden=!1,O.sidebar.hidden=!1;let{overall:e,sections:t,categories:n,parts:r,timeMs:i,complete:a,unsubmittedParts:s}=et();O.topbar.hidden=!0,O.stepper.hidden=!0,O.toolbar.hidden=!0,O.navbarTop.hidden=!0,O.body.hidden=!0,O.navbar.hidden=!0,O.results.hidden=!1;let c=(e,t)=>`<tr><td>${H(e)}</td><td class="num">${t.correct}</td><td class="num">${t.incorrect}</td><td class="num">${t.unanswered}</td><td class="num">${t.total}</td><td class="num">${tt(t)}</td></tr>`,l=t.map(e=>c(e.title,e)).join(``),u=n.map(e=>c(e.name,e)).join(``),d=r.map(e=>`
          <div class="tr-score-module">
            <div class="tr-score-module-name">${H(e.sectionTitle)}, ${H(e.partTitle)}</div>
            <div class="tr-score-module-score">${e.correct} / ${e.total}</div>
            <div class="tr-score-module-pct">${tt(e)}</div>
            ${e.unanswered>0?`<div class="tr-score-module-skip">${e.unanswered} unanswered</div>`:``}
          </div>`).join(``),f=`
        <div class="tr-score-big">${e.correct} / ${e.total}</div>
        <div class="tr-score-sub">${tt(e)} correct</div>
        <ul class="tr-score-split" role="list">
          <li><span class="tr-swatch is-correct" aria-hidden="true"></span>${e.correct} correct</li>
          <li><span class="tr-swatch is-incorrect" aria-hidden="true"></span>${e.incorrect} incorrect</li>
          <li><span class="tr-swatch is-unanswered" aria-hidden="true"></span>${e.unanswered} unanswered</li>
        </ul>
        <div class="tr-score-caption">Total active time ${I(i,`floor`)}</div>`,p=a?``:`<p class="tr-score-note" role="status">This attempt is not finished. ${H(s.join(`, `))} ${s.length===1?`was`:`were`} never submitted. The counts below still cover every question in the test, so
        anything you did not reach is counted as unanswered.</p>`,m=o.lessonLinks??{},h=n.filter(e=>e.incorrect+e.unanswered>0&&m[e.name]).slice(0,3).map(e=>{let t=[e.incorrect>0?`${e.incorrect} wrong`:``,e.unanswered>0?`${e.unanswered} unanswered`:``].filter(Boolean).join(` and `);return`
          <li class="tr-next-item">
            <a class="tr-btn" href="${H(m[e.name].href)}">${H(m[e.name].label)}</a>
            <span class="tr-next-why">${t} of ${e.total} in ${H(e.name)}.</span>
          </li>`}).join(``),g=e.total>0&&e.correct===e.total?`<div><h2>Review next</h2>
             <p class="tr-score-note">You answered every question correctly.</p></div>`:h?`<div><h2>Review next</h2>
               <ul class="tr-next-list" role="list">${h}</ul></div>`:``,_=`
      <div class="tr-modal-actions tr-results-actions tr-noprint">
        <button type="button" class="tr-btn tr-btn-primary" data-role="review">Review answers</button>
        <button type="button" class="tr-btn" data-role="print-report">
          <svg class="tr-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>Generate PDF report
        </button>
        <button type="button" class="tr-btn" data-role="archive">
          <svg class="tr-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg><span data-role="archive-label">${jt}</span>
        </button>
        <button type="button" class="tr-btn" data-role="reset">Reset this test</button>
      </div>
    `;O.results.innerHTML=`
      <div class="tr-score-hero" tabindex="-1">
        ${f}
        <div class="tr-score-modules">${d}</div>
        ${p}
        <p class="tr-score-note">These are raw practice results. The supplied forms are fixed, and their raw counts do not convert to an SAT scaled score.</p>
      </div>
      ${_}
      ${g}
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
          ${o.parts.map(e=>{let t=it(e);return`
            <div class="tr-chart-block">
              <h3 class="tr-chart-title">${H(e.sectionTitle)}, ${H(e.partTitle)}</h3>
              <div class="tr-chart">${ut(e,t)}</div>
              <table class="tr-table">
                <thead><tr><th>#</th><th>Category</th><th>Result</th><th class="num">Time</th></tr></thead>
                <tbody>${dt(t)}</tbody>
              </table>
              <div class="tr-chart-tip tr-noprint" aria-hidden="true" hidden></div>
            </div>
          `}).join(``)}
        </div>
      </div>
      ${_}
    `;for(let e of V(O.results,`.tr-chart-block`))_t(e);for(let e of V(O.results,`[data-role="review"]`))e.addEventListener(`click`,()=>vt());for(let e of V(O.results,`[data-role="print-report"]`))e.addEventListener(`click`,Ot);for(let e of V(O.results,`[data-role="archive"]`))e.addEventListener(`click`,()=>{Nt(e)});for(let e of V(O.results,`[data-role="reset"]`))e.addEventListener(`click`,wt);pt()}function pt(){for(let e of V(O.results,`[data-role="archive"]`))e.disabled=w,B(e,`[data-role="archive-label"]`).textContent=w?Mt:jt}function K(e){return e instanceof Element?e.closest(`.tr-bar, .tr-time-row`):null}function mt(e){return(e.classList.contains(`tr-bar`)?B(e,`.tr-bar-rect`)??e:e).getBoundingClientRect()}function ht(e){return e.classList.contains(`tr-bar`)?e:B(e,`.tr-row-btn`)}function gt(e){let t=me.get(e);t!=null&&vt({partIndex:t,qid:e})}function _t(e){let t=B(e,`.tr-chart-tip`);if(!t)return;let n=[V(e,`.tr-bar`),V(e,`.tr-time-row`)],r=()=>{t.hidden=!0},i=(e,t)=>{for(let n of e){let e=ht(n);e&&e.setAttribute(`tabindex`,n===t?`0`:`-1`)}},a=(e,t)=>{let n=e[Math.min(e.length-1,Math.max(0,t))];n&&(i(e,n),ht(n)?.focus())},o=n=>{let r=n.dataset.qid,i=r==null?void 0:k.get(r);if(!i)return;let a=Number(n.dataset.idx??0),o=Number(n.dataset.pct??0);t.replaceChildren(...ct(i,a,o,y.timeMs[i.id]??0)),t.hidden=!1,lt(t,e,mt(n))};e.addEventListener(`click`,e=>{let t=K(e.target)?.dataset.qid;t&&gt(t)}),e.addEventListener(`keydown`,e=>{let t=K(e.target);if(!t)return;let r=n.find(e=>e.includes(t));if(!r)return;let i=r.indexOf(t),o=t.dataset.qid;e.key===`Enter`||e.key===` `?(e.preventDefault(),o&&gt(o)):e.key===`ArrowRight`||e.key===`ArrowDown`?(e.preventDefault(),a(r,i+1)):e.key===`ArrowLeft`||e.key===`ArrowUp`?(e.preventDefault(),a(r,i-1)):e.key===`Home`?(e.preventDefault(),a(r,0)):e.key===`End`&&(e.preventDefault(),a(r,r.length-1))}),e.addEventListener(`pointerover`,e=>{let t=K(e.target);t&&t!==K(e.relatedTarget)&&o(t)}),e.addEventListener(`pointerout`,e=>{let t=K(e.target);t&&t!==K(e.relatedTarget)&&r()}),e.addEventListener(`focusin`,e=>{let t=K(e.target);if(!t)return;let r=n.find(e=>e.includes(t));r&&i(r,t),o(t)}),e.addEventListener(`focusout`,r),e.addEventListener(`mouseleave`,r)}let q=null;function J(e){e?.focus({preventScroll:!0})}function vt(e){b=!0,S=!1,x=e?e.partIndex:0,y.currentQid=e?e.qid:o.parts[0].questions[0].id,O.results.hidden=!0,O.topbar.hidden=!1,O.stepper.hidden=!1,O.navbarTop.hidden=!1,O.body.hidden=!1,O.navbar.hidden=!1,O.timer.hidden=!0,O.flagBtn.hidden=!0,q||(q=document.createElement(`button`),q.type=`button`,q.className=`tr-btn tr-btn-primary`,q.textContent=`Back to results`,q.addEventListener(`click`,yt),O.navbar.appendChild(q)),q.hidden=!1,W(),J(O.partTitle),window.scrollTo(0,0)}function yt(){b=!1,O.timer.hidden=!1,O.flagBtn.hidden=!1,q&&(q.hidden=!0),ft(),J(B(O.results,`.tr-score-hero`)),window.scrollTo(0,0)}function bt(e){return e.questions.filter(e=>y.answers[e.id]!=null&&!y.revealed.includes(e.id))}function xt(){if(!s)return;let e=j(),t=bt(e);t.length&&(y.revealed.push(...t.map(e=>e.id)),W(),v(),R(`Checked ${t.length} attempted question${t.length===1?``:`s`} in ${e.sectionTitle}, ${e.partTitle}. Select a question to review its solution.`))}function St(e){return e.questions.some(({id:e})=>y.answers[e]!==void 0||y.flags.includes(e)||y.revealed.includes(e)||(y.eliminated[e]?.length??0)>0||(y.highlights[e]?.length??0)>0||(y.timeMs[e]??0)>0)}function Ct(){if(!s)return;let e=j();St(e)&&Qt(`Reset ${e.sectionTitle}, ${e.partTitle}?`,`This clears all answers, revealed solutions, flags, highlights, and crossed-out choices in this module. Other modules and timed attempts are kept.`,`Reset this module`,()=>{let t=new Set(e.questions.map(e=>e.id));for(let e of t)delete y.answers[e],delete y.timeMs[e],delete y.eliminated[e],delete y.highlights[e];y.flags=y.flags.filter(e=>!t.has(e)),y.revealed=y.revealed.filter(e=>!t.has(e)),W(),v(),O.flagBtn.focus(),R(`${e.sectionTitle}, ${e.partTitle} has been reset.`)})}function wt(){Qt(`Reset this test?`,`This clears the current test so you can try again. Completed attempt snapshots remain in this browser. Save a PDF or interactive report if you want a copy you can open later. You will go back to the tests page.`,`Clear and reset`,()=>{ue=!0;try{for(let e of u)localStorage.removeItem(e)}catch{}window.location.assign(c)})}function Tt(){for(let e of o.parts)for(let t of e.questions){let e=U(t.id);if(!e)continue;Le(e,t.id,!0);let n=B(e,`[data-role="explanation"]`),r=n&&B(n,`[data-role="answer-line"]`);r&&(r.textContent=Re(t))}}let Et=`Blank test, no answers`;function Dt(){return`Results report, generated ${new Date().toLocaleDateString(void 0,{year:`numeric`,month:`long`,day:`numeric`})}`}function Ot(){Tt(),O.printSubtitle.textContent=Dt(),i.dataset.printing=`report`,window.print()}function kt(){let e={};for(let t of o.parts)for(let n of it(t))e[n.q.id]=st(n.q,n.idx,n.pct,n.ms);return e}let At=`Could not build the report file. Generate PDF report still works.`,jt=`Download interactive report`,Mt=`Building`;async function Nt(e){if(w)return;let t=V(O.results,`[data-role="archive"]`).indexOf(e);w=!0;try{pt(),Tt();let{blob:e,filename:n}=await Se({subtitle:Dt(),testId:o.id,cta:`Click to jump to this question`,tips:kt()});if(Ce(e,n),w=!1,pt(),C){let e=`Report sent to your downloads as ${n}.`;Ne(e),R(e)}else V(O.results,`[data-role="archive"]`)[t]?.focus(),$t(`Report sent to your downloads`,`Your browser is saving it as ${n}. If it asks where to put the file, pick a folder. It holds the whole attempt: every question, your answer against the correct one, the explanations, and the timing charts. Open it in any browser, online or off.`)}catch(e){let t=e instanceof T?` ${e.reason}`:``;Ne(At+t),R(At+t)}finally{w=!1,pt()}}function Pt(){O.printSubtitle.textContent=Et,delete i.dataset.printing,window.print()}let Ft=[];function It(e,t,n,r){let i=le({panel:e,head:B(e,`[data-role="${r}-head"]`),move:B(e,`[data-role="${r}-move"]`),close:B(e,`[data-role="${r}-close"]`),id:n});return Ft.push(i),t.addEventListener(`click`,()=>{i.isOpen()?i.close():i.open(t)}),new MutationObserver(()=>t.setAttribute(`aria-expanded`,i.isOpen()?`true`:`false`)).observe(e,{attributes:!0,attributeFilter:[`hidden`]}),i}O.refPanel&&O.refBtn&&It(O.refPanel,O.refBtn,`reference`,`ref`),O.dirPanel&&O.dirBtn&&It(O.dirPanel,O.dirBtn,`directions`,`dir`);function Lt(){for(let e of Ft)e.close()}let Y=null;function X(){O.hlPopover.hidden||(O.hlPopover.hidden=!0,Y=null)}function Rt(e,t,n,r){Y=n,O.hlAction.textContent=t,O.hlPopover.hidden=!1;let i=O.questionArea.getBoundingClientRect(),a=O.hlPopover.offsetWidth,o=O.hlPopover.offsetHeight,s=Math.max(0,Math.min(e.left+e.width/2-i.left-a/2,O.questionArea.clientWidth-a)),c=e.top-o-6<0?e.bottom-i.top+6:e.top-i.top-o-6;O.hlPopover.style.left=`${s}px`,O.hlPopover.style.top=`${c}px`,r&&O.hlAction.focus()}function zt(e){if(b){X();return}let t=U(y.currentQid),n=t&&te(t);if(!n){X();return}Rt(window.getSelection().getRangeAt(0).getBoundingClientRect(),`Highlight`,{kind:`add`,range:n},e)}O.body.addEventListener(`pointerup`,e=>{let t=e.target;if(O.hlPopover.contains(t))return;let n=t.closest(`mark.tr-hl`),r=window.getSelection();if(n&&(!r||r.isCollapsed)){if(b)return;Rt(n.getBoundingClientRect(),`Remove highlight`,{kind:`remove`,index:Number(n.dataset.hl)},!1);return}zt(!1)}),O.body.addEventListener(`keyup`,e=>{e.key===`Shift`?zt(!0):e.shiftKey&&zt(!1)}),O.hlPopover.addEventListener(`keydown`,e=>{e.key===`Escape`&&(e.stopPropagation(),e.preventDefault(),X(),J(O.partTitle))}),O.hlAction.addEventListener(`click`,()=>{if(!Y)return;let e=y.currentQid,t=O.hlPopover.contains(document.activeElement);Y.kind===`add`?ne(y,e,Y.range):re(y,e,Y.index),X(),window.getSelection()?.removeAllRanges(),W(),v(),t&&J(O.clearHlBtn.hidden?O.partTitle:O.clearHlBtn)}),O.clearHlBtn.addEventListener(`click`,()=>{ae(y,y.currentQid),X(),W(),v(),J(O.partTitle)});let Bt=B(document,`.site-header`),Vt=B(document,`.site-footer`),Ht=[...Bt?[Bt]:[],...Vt?[Vt]:[],O.topbar,O.stepper,O.toolbar,O.navbarTop,O.body,O.navbar,O.results,...O.refPanel?[O.refPanel]:[],...O.dirPanel?[O.dirPanel]:[]];function Ut(e){for(let t of Ht)e?t.setAttribute(`inert`,``):t.removeAttribute(`inert`)}let Z=null,Wt=null;function Q(e,t){Z=document.activeElement,Ut(!0),Wt=t,e.focus()}function $(){Ut(!1),Wt=null,Z&&document.contains(Z)&&Z.focus(),Z=null}function Gt(e=!1){if(!O.startOverlay||!O.startBody||!O.startBtn)return;let t=A(),n=o.timerMode===`countdown`?t.timeLimitMinutes??0:0,r=B(O.startOverlay,`#tr-start-title`);r.textContent=`${t.sectionTitle}, ${t.partTitle}: directions`,O.startBtn.textContent=`Start ${t.partTitle}`,O.startBody.textContent=(e?`The previous module ran out of time and was submitted. `:``)+`Read the directions below. ${n?`You have ${n} minutes. `:``}The timer starts only when you press "Start ${t.partTitle}". You can pause any time.`;for(let e of O.startOverlay.querySelectorAll(`[data-start-section]`))e.hidden=e.dataset.startSection!==t.sectionId;let i=B(O.startOverlay,`#tr-start-format`);i&&(i.hidden=y.partIndex>0),O.startOverlay.hidden=!1;let a=B(O.startOverlay,`[data-role="start-scroll"]`);a&&(a.scrollTop=0),Q(r,()=>{})}function Kt(){E&&(E=!1,y.awaitingModuleStart=!1,O.startOverlay&&(O.startOverlay.hidden=!0),$(),y.lockedParts.length===0&&(y.startedAt=Date.now()),F(),J(O.partTitle),v())}function qt(){let e=B(i,`[data-role="break-overlay"]`);e&&(e.hidden=!1,Q(B(e,`#break-title`),()=>{}),Jt())}function Jt(){if(!y.breakUntil)return;let e=y.breakUntil-Date.now(),t=B(i,`[data-role="break-timer"]`);t&&(t.textContent=I(Math.max(0,e),`ceil`));let n=B(i,`[data-role="break-status"]`),r=B(i,`[data-action="start-next-section"]`),a=e<=0,o=B(i,`#break-title`),s=a?`Ready for Math?`:`Take a 10-minute break`;o&&o.textContent!==s&&(o.textContent=s);let c=a?`Your 10-minute break is complete. Start Math when you’re ready; your full module time is waiting.`:`Math will wait for you. Its timer starts only when you choose to begin.`;if(n&&n.textContent!==c&&(n.textContent=c),r){let e=a?`Start Math`:`End break and start Math`;r.textContent!==e&&(r.textContent=e),r.classList.toggle(`tr-btn-primary`,a)}}function Yt(){if(s||y.completed||E||!y.breakUntil)return;y.breakUntil=null,y.awaitingModuleStart=!0,E=!0;let e=B(i,`[data-role="break-overlay"]`);e&&(e.hidden=!0),$(),y.currentQid=A().questions[0].id,x=y.partIndex,N=null,J(O.partTitle),W(),F(),Qe(),v(),Gt()}function Xt(e){e!==y.paused&&(P(),y.paused=e,O.pauseOverlay.hidden=!e,e?(F(),Q(O.resumeBtn,()=>Xt(!1))):($(),F()),v())}function Zt(){O.modalConfirm.replaceWith(O.modalConfirm.cloneNode(!0)),O.modalCancel.replaceWith(O.modalCancel.cloneNode(!0)),O.modalConfirm=B(i,`[data-role="modal-confirm"]`),O.modalCancel=B(i,`[data-role="modal-cancel"]`)}function Qt(e,t,n,r){Zt(),O.modalTitle.textContent=e,O.modalBody.textContent=t,O.modalConfirm.textContent=n,O.modalCancel.hidden=!1,C=!0,F(),O.modal.hidden=!1;let i=()=>{O.modal.hidden=!0,C=!1,$(),F()};O.modalConfirm.addEventListener(`click`,()=>{i(),r()}),O.modalCancel.addEventListener(`click`,i),Q(O.modalConfirm,i)}function $t(e,t){Zt(),O.modalTitle.textContent=e,O.modalBody.textContent=t,O.modalConfirm.textContent=`OK`,O.modalCancel.hidden=!0,C=!0,F(),O.modal.hidden=!1;let n=()=>{O.modal.hidden=!0,C=!1,$(),F()};O.modalConfirm.addEventListener(`click`,n),Q(O.modalConfirm,n)}function en(){return s?!0:E||b||y.completed||y.paused||y.breakUntil||C?!1:(P(),ye(A())&&M(A())<=0?(Xe(!0),!1):!0)}O.body.addEventListener(`click`,t=>{if(!en())return;let r=t.target,i=r.closest(`[data-action="reveal"]`);if(i){let e=i.dataset.qid;if(!s||e!==y.currentQid)return;let t=y.revealed.indexOf(e);t>=0?(y.revealed.splice(t,1),delete y.answers[e]):y.revealed.push(e),W(),v();return}let a=r.closest(`.tr-elim`);if(a){if(b)return;let t=a.dataset.qid;if(t!==y.currentQid)return;let n=a.dataset.choiceId;z(`answer-cleared`),e(y,t,n)&&y.answers[t]===n&&(delete y.answers[t],R(`Choice ${n} crossed out. Your answer is cleared.`,`answer-cleared`)),W(),v();return}let o=r.closest(`.tr-choice`);if(!o||b)return;let c=o.dataset.qid;if(c!==y.currentQid)return;let l=o.dataset.choiceId;if(s&&y.answers[c]===l){delete y.answers[c],W(),v();return}y.answers[c]=l,n(y,c,l),z(`answer-cleared`),W(),v()}),O.body.addEventListener(`input`,e=>{let t=e.target;if(!(t instanceof HTMLInputElement)||!t.classList.contains(`tr-numeric-input`))return;let n=t.dataset.qid;if(!en()||b||!s&&(y.completed||y.paused||y.breakUntil)||s&&de(n)||n!==y.currentQid)return;t.value.trim()?y.answers[n]=t.value:delete y.answers[n];let i=r(t.value);t.setAttribute(`aria-invalid`,String(i.status===`invalid`));let a=B(U(n),`[data-role="numeric-error"]`);a&&(a.textContent=i.status===`invalid`?i.message:``),Ve(),v()}),O.body.addEventListener(`keydown`,Je),O.prevBtn.addEventListener(`click`,()=>{if(S){Ke();return}qe(-1)}),O.nextBtn.addEventListener(`click`,()=>{if(S)return;let e=Ie();if(!b&&!s&&e===j().questions.length-1){Ge();return}qe(1)}),O.backToQuestionsBtn.addEventListener(`click`,Ke),s&&(O.resetModuleBtn?.addEventListener(`click`,Ct),O.checkModuleBtn?.addEventListener(`click`,xt),O.stepper.addEventListener(`click`,e=>{let t=e.target.closest(`.tr-step-btn`);if(!t)return;let n=o.parts.findIndex(e=>e.partId===t.dataset.part);n<0||n===x||(Lt(),x=n,y.partIndex=n,y.currentQid=o.parts[n].questions[0].id,W(),J(O.partTitle),v())})),O.timerToggle.addEventListener(`click`,()=>{y.timerHidden=!y.timerHidden,W(),v()}),O.flagBtn.addEventListener(`click`,()=>{let e=y.currentQid,t=y.flags.indexOf(e);t>=0?y.flags.splice(t,1):y.flags.push(e),W(),v()}),O.elimBtn.addEventListener(`click`,()=>{y.eliminatorOn=!y.eliminatorOn,W(),v()}),O.submitBtn.addEventListener(`click`,Ze),O.submitSideBtn.addEventListener(`click`,Ze),O.pauseBtn.addEventListener(`click`,()=>Xt(!0)),O.resumeBtn.addEventListener(`click`,()=>Xt(!1)),O.startBtn?.addEventListener(`click`,Kt),B(i,`[data-action="start-next-section"]`)?.addEventListener(`click`,Yt),O.printBlankBtn.addEventListener(`click`,Pt);let tn=()=>{P(document.visibilityState!==`visible`),y.breakUntil&&Jt(),document.visibilityState===`visible`?Fe():v()},nn=e=>{e.key===`Escape`&&Wt&&(e.preventDefault(),Wt())},rn=()=>{let e=i.dataset.printing===`report`;delete i.dataset.printing,O.printSubtitle.textContent=Et,e&&$t(`Your report went to the print dialog`,`If you picked Save as PDF, the file is wherever your browser puts downloads. If you closed the dialog, or sent it to a printer by mistake, press Generate PDF report again.`)};if(document.addEventListener(`visibilitychange`,tn),document.addEventListener(`keydown`,nn),window.addEventListener(`afterprint`,rn),s){y.paused=!1,y.completed=!1;let e=Number(i.dataset.initialModule);Number.isInteger(e)&&e>=0&&e<o.parts.length&&(y.partIndex=e,x=e,y.currentQid=A().questions[0].id),W()}else M(A()),Qe(),y.completed?ft():(W(),E?Gt():y.breakUntil?qt():y.paused&&(O.pauseOverlay.hidden=!1,Q(O.resumeBtn,()=>Xt(!1))),F());v();let an=s?0:window.setInterval(Fe,Oe),on=()=>{s||(P(),v()),window.clearInterval(an),window.clearTimeout(be),document.removeEventListener(`visibilitychange`,tn),document.removeEventListener(`keydown`,nn),window.removeEventListener(`afterprint`,rn)};window.addEventListener(`pagehide`,on,{once:!0}),document.addEventListener(`astro:before-swap`,on,{once:!0})}Ne();