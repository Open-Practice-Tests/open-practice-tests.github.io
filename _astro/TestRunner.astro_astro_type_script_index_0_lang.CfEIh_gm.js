import{i as e,r as t,t as n}from"./eliminator.CnRb2FKU.js";import{a as r,i,n as a,r as o,t as s}from"./results-tally.niTfb9gt.js";var c=`￼`,l=[`.tr-passage`,`.tr-stem`],u=new WeakMap;function d(e){let t=[];return l.forEach((n,r)=>{let i=e.querySelector(n);i&&t.push([r,i])}),t}function f(e){let t=[],n=``,r=e=>{if(e.nodeType===Node.ELEMENT_NODE){let i=e;if(i.matches(`.katex, math, svg`)){t.push({kind:`katex`,node:i,start:n.length,len:1}),n+=c;return}for(let e of Array.from(i.childNodes))r(e);return}if(e.nodeType===Node.TEXT_NODE){let r=e;if(r.data.length===0)return;t.push({kind:`text`,node:r,start:n.length,len:r.data.length}),n+=r.data}};for(let t of Array.from(e.childNodes))r(t);return{units:t,text:n}}function p(e,t,n,r,i){for(let t of e){let e=document.createRange();e.selectNode(t.node);let a;try{a=e.comparePoint(n,r)}catch{continue}if(a<0)return t.start;if(a===0)return t.kind===`text`&&n===t.node?t.start+Math.min(r,t.len):i?t.start+t.len:t.start}return t}function m(e){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return null;let n=t.getRangeAt(0);for(let[t,r]of d(e)){if(!r.contains(n.startContainer)||!r.contains(n.endContainer))continue;let{units:e,text:i}=f(r),a=p(e,i.length,n.startContainer,n.startOffset,!1),o=p(e,i.length,n.endContainer,n.endOffset,!0);for(o<a&&([a,o]=[o,a]);a<o&&/\s/.test(i[a]);)a++;for(;o>a&&/\s/.test(i[o-1]);)o--;return o<=a?null:{c:t,s:a,e:o}}return null}function h(e,t,n){let r=[...e.highlights[t]??[],n];e.highlights[t]=te(r)}function g(e,t,n){let r=e.highlights[t];!r||n<0||n>=r.length||(r.splice(n,1),r.length===0&&delete e.highlights[t])}function ee(e,t){return(e.highlights[t]??[]).length>0}function _(e,t){delete e.highlights[t]}function te(e){let t=[];for(let n of[0,1]){let r=e.filter(e=>e.c===n&&e.e>e.s).sort((e,t)=>e.s-t.s||e.e-t.e);for(let e of r){let r=t[t.length-1];r&&r.c===n&&e.s<=r.e?r.e=Math.max(r.e,e.e):t.push({...e})}}return t}function v(e,t){let n=document.createElement(`mark`);n.className=`tr-hl`,n.dataset.hl=String(t),e.parentNode.insertBefore(n,e),n.appendChild(e)}function ne(e,t){let n=JSON.stringify(t);if(e.dataset.hlSig!==n){e.dataset.hlSig=n;for(let[n,r]of d(e)){if(u.has(r)||u.set(r,r.innerHTML),r.innerHTML=u.get(r),!t.some(e=>e.c===n))continue;let{units:e,text:i}=f(r),a=new Map;t.forEach((t,r)=>{if(t.c!==n)return;let o=Math.max(0,Math.min(t.s,i.length)),s=Math.max(o,Math.min(t.e,i.length));if(!(s<=o))for(let t of e){let e=Math.max(o,t.start),n=Math.min(s,t.start+t.len);if(n<=e)continue;let i=a.get(t)??[];i.push([e-t.start,n-t.start,r]),a.set(t,i)}});for(let[e,t]of a){if(e.kind===`katex`){v(e.node,t[0][2]);continue}let n=e.node;t.sort((e,t)=>t[0]-e[0]);for(let[e,r,i]of t){r<n.data.length&&n.splitText(r);let t=e>0?n.splitText(e):n;if(/\S/.test(t.data)&&v(t,i),e===0)break}}}}}var y=`opt.tools.panels`,b=16,x=48;function re(e){try{let t=JSON.parse(localStorage.getItem(y)??`{}`)?.[e];if(t&&[`left`,`top`,`width`,`height`].every(e=>typeof t[e]==`number`))return t}catch{}return null}function ie(e,t){try{let n=JSON.parse(localStorage.getItem(y)??`{}`);n[e]=t,localStorage.setItem(y,JSON.stringify(n))}catch{}}function ae(e){let{panel:t,head:n,move:r,close:i,id:a}=e,o=e.sheetBelowPx??768,s=null,c=()=>window.innerWidth<o;function l(){let e=t.getBoundingClientRect();return{left:e.left,top:e.top,width:e.width,height:e.height}}function u(e,n){if(c())return;let r=t.offsetWidth,i=window.innerWidth-x,a=window.innerHeight-x;t.style.left=`${Math.round(Math.max(x-r,Math.min(e,i)))}px`,t.style.top=`${Math.round(Math.max(0,Math.min(n,a)))}px`}function d(e){c()||(t.style.width=`${Math.round(e.width)}px`,t.style.height=`${Math.round(e.height)}px`,u(e.left,e.top))}function f(){let e=Math.min(460,Math.max(320,window.innerWidth-64)),t=Math.min(560,Math.max(280,window.innerHeight-160));return{left:window.innerWidth-e-32,top:96,width:e,height:t}}function p(){c()||ie(a,l())}let m=0,h=0;n.addEventListener(`pointerdown`,e=>{if(c())return;let i=e.target.closest(`button`);if(i&&i!==r)return;let a=t.getBoundingClientRect();m=e.clientX-a.left,h=e.clientY-a.top,n.setPointerCapture(e.pointerId),n.dataset.dragging=`1`,e.preventDefault()}),n.addEventListener(`pointermove`,e=>{n.dataset.dragging===`1`&&u(e.clientX-m,e.clientY-h)});let g=e=>{if(n.dataset.dragging===`1`){delete n.dataset.dragging;try{n.releasePointerCapture(e.pointerId)}catch{}p()}};n.addEventListener(`pointerup`,g),n.addEventListener(`pointercancel`,g),r.addEventListener(`keydown`,e=>{let t=e.key===`ArrowLeft`?-16:e.key===`ArrowRight`?b:0,n=e.key===`ArrowUp`?-16:e.key===`ArrowDown`?b:0;if(!t&&!n)return;e.preventDefault();let r=l();u(r.left+t,r.top+n),p()});let ee=0;new ResizeObserver(()=>{t.hidden||(window.clearTimeout(ee),ee=window.setTimeout(p,250))}).observe(t),window.addEventListener(`resize`,()=>{t.hidden||d(re(a)??f())}),t.addEventListener(`keydown`,e=>{e.key===`Escape`&&(e.stopPropagation(),e.preventDefault(),_.close())}),i.addEventListener(`click`,()=>_.close());let _={el:t,isOpen:()=>!t.hidden,open(e){t.hidden&&(s=e,t.hidden=!1,d(re(a)??f()),t.focus({preventScroll:!0}))},close(){t.hidden||(t.hidden=!0,s&&document.contains(s)&&s.focus(),s=null)}};return _}var S=`// @ts-check
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
`,C=class extends Error{reason;constructor(e){super(e),this.name=`ArchiveError`,this.reason=e}};function oe(e){return e.replace(/@media\s+print\s*\{/gi,`@media all{`)}var se=/,\s*url\(\s*["']?[^)"']*["']?\s*\)\s*format\(\s*["'](?:woff|truetype|opentype)["']\s*\)/g;function ce(e){return e.replace(se,``)}var w=/url\(\s*(?:"([^"]*)"|'([^']*)'|([^)"'\s][^)]*?))\s*\)/gi;function T(e){return(e[1]??e[2]??e[3]??``).trim()}function E(e){let t=[],n=/@font-face\s*\{/gi,r;for(;r=n.exec(e);){let i=1,a=``,o=r.index+r[0].length;for(;o<e.length&&i>0;o+=1){let t=e[o];a?t===`\\`?o+=1:t===a&&(a=``):t===`"`||t===`'`?a=t:t===`{`?i+=1:t===`}`&&--i}t.push(e.slice(r.index,o)),n.lastIndex=o}return t}function D(e){let t=e.split(/[?#]/)[0],n=t.lastIndexOf(`.`);return n<0?``:t.slice(n+1).toLowerCase()}var O={woff2:`font/woff2`,woff:`font/woff`,ttf:`font/ttf`,otf:`font/otf`};function k(e){let t=D(e),n=O[t];if(!n)throw new C(`A font file has an unknown type (.${t}).`);return n}function A(e){return!/^(data:|#)/i.test(e.trim())}function j(e){let t=new Set;for(let n of E(e))for(let e of n.matchAll(w)){let n=T(e);n&&A(n)&&t.add(n)}return[...t]}function M(e,t){let n=e=>e.replace(w,(e,n,r,i)=>{let a=(n??r??i??``).trim(),o=t.get(a);return o?`url(${o})`:e}),r=``,i=0;for(let t of E(e)){let a=e.indexOf(t,i);a<0||(r+=e.slice(i,a)+n(t),i=a+t.length)}return r+e.slice(i)}function N(e){let t=e.replace(/\/\*[\s\S]*?\*\//g,``);if(/@import\b/i.test(t))throw new C(`A stylesheet uses @import.`);for(let e of t.matchAll(w)){let t=T(e);if(t&&A(t))throw new C(`A stylesheet still references ${t.slice(0,60)}.`)}}function le(e){if(/<\/style/i.test(e))throw new C(`A stylesheet could not be embedded.`)}function ue(e){if(/<\/|<!--/.test(e))throw new C(`The archive script could not be embedded.`)}function de(e){return JSON.stringify(e).replace(/</g,`\\u003c`)}var P=8388608,fe=[`.site-header`,`.site-footer`,`.tr-noprint`,`.tr-panel`,`.tr-modal`,`.tr-start-overlay`,`.tr-pause-overlay`,`.tr-checkwork`,`.tr-sidebar`,`.tr-storage-warning`,`.tr-hl-popover`].join(`, `);async function pe(e){let t=null;try{t=await fetch(e,{cache:`force-cache`})}catch{t=null}return t?.ok?t:fetch(e,{cache:`reload`})}function F(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(String(r.result)),r.onerror=()=>n(new C(`A font file could not be encoded.`)),r.readAsDataURL(e)})}async function me(e){let t=j(e),n=new Map;return await Promise.all(t.map(async e=>{let t=k(e),r;try{r=await pe(new URL(e,location.href).href)}catch{throw new C(`A font file did not load (${e.slice(0,60)}).`)}if(!r.ok)throw new C(`A font file did not load (${r.status} on ${e.slice(0,60)}).`);n.set(e,await F(new Blob([await r.arrayBuffer()],{type:t})))})),M(e,n)}async function I(){let e=[];for(let t of Array.from(document.styleSheets)){let n=t.ownerNode;if(n instanceof HTMLStyleElement){e.push(n.textContent??``);continue}if(t.href)try{let n=await pe(t.href);if(!n.ok)throw Error(String(n.status));e.push(await n.text())}catch{try{e.push(Array.from(t.cssRules,e=>e.cssText).join(`
`))}catch{throw new C(`A stylesheet did not load.`)}}}return e.join(`
`)}var L=`
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
`;function he(){let e=new Date,t=e=>String(e).padStart(2,`0`);return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`}async function ge(e){let t=document.documentElement.cloneNode(!0);for(let e of Array.from(t.querySelectorAll(`script`)))e.remove();for(let e of Array.from(t.querySelectorAll(`link[rel="stylesheet"], link[rel="preload"], link[rel="icon"], link[rel="canonical"], meta[property="og:url"]`)))e.remove();for(let e of Array.from(t.querySelectorAll(`.tr-chart-tip`)))e.classList.remove(`tr-noprint`),e.removeAttribute(`aria-hidden`);for(let e of Array.from(t.querySelectorAll(fe)))e.remove();let n=t.querySelector(`#test-runner`);if(!n)throw new C(`The results could not be read.`);n.dataset.printing=`report`;let r=n.querySelector(`[data-role="print-subtitle"]`);r&&(r.textContent=e.subtitle);for(let n of Array.from(t.querySelectorAll(`[aria-label]`))){let t=n.getAttribute(`aria-label`);t.endsWith(`Activate to review this question.`)&&n.setAttribute(`aria-label`,`${t.slice(0,-33)}${e.cta}.`)}for(let e of Array.from(t.querySelectorAll(`img`))){let t=new URL(e.getAttribute(`src`)??``,location.href);if(t.origin!==location.origin||!t.pathname.startsWith(`/content/pilot/`))throw new C(`Unrecognized report image.`);let n=await pe(t.href);if(!n.ok)throw new C(`A report image could not be loaded.`);let r=await n.blob();e.src=await new Promise((e,t)=>{let n=new FileReader;n.onload=()=>e(String(n.result)),n.onerror=t,n.readAsDataURL(r)}),e.removeAttribute(`loading`)}let i=ce(oe(await I()));i=await me(i),N(i);let a=`${i}\n${L}`;le(a);let o=t.querySelector(`head`),s=t.querySelector(`body`);if(!o||!s)throw new C(`The page could not be read.`);let c=t.ownerDocument.createElement(`style`);c.textContent=a,o.appendChild(c),ue(S);let l=de({tips:e.tips,cta:e.cta}),u=t.ownerDocument.createElement(`script`);u.textContent=`${S}\noptArchiveRuntime(${l});\n`,s.appendChild(u);let d=`<!DOCTYPE html>\n${t.outerHTML}`,f=new Blob([d],{type:`text/html;charset=utf-8`});if(f.size>P)throw new C(`The file came out larger than ${Math.round(P/1024/1024)} MB.`);return{blob:f,filename:`${e.testId}-report-${he()}.html`}}function _e(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,r.click(),window.setTimeout(()=>URL.revokeObjectURL(n),6e4)}var ve=5,ye=500,be=ye*4,xe=3e5,Se=8e3,Ce=44;function R(e,t){return e.querySelector(t)}function z(e,t){return Array.from(e.querySelectorAll(t))}function B(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function we(){let c=document.getElementById(`test-runner`);if(!c||c.dataset.initialized===`1`)return;c.dataset.initialized=`1`;let l=R(c,`#opt-test-meta`);if(!l||!l.textContent)return;let u=JSON.parse(l.textContent);if(!u.parts.length)return;let d=c.dataset.mode===`browse`,f=c.dataset.testsHref||`/`,p=`opt.test.${u.id}.${d?`browse.`:``}state`,te=[p],v=!0,y=!1;function b(){v=!1;let e=R(c,`[data-role="storage-warning"]`);e&&(e.hidden=!1)}function x(e){return i(e,u.contentVersion)}function re(e){if(typeof e.paused!=`boolean`&&(e.paused=!1),typeof e.startedAt!=`number`&&(e.startedAt=Date.now()),typeof e.awaitingModuleStart!=`boolean`&&(e.awaitingModuleStart=!1),(!e.eliminated||typeof e.eliminated!=`object`)&&(e.eliminated={}),(typeof e.eliminatorOn!=`boolean`||e.v<4)&&(e.eliminatorOn=!0),e.v<4)for(let[t,r]of Object.entries(e.answers))n(e,t,r);return(!e.highlights||typeof e.highlights!=`object`)&&(e.highlights={}),typeof e.timerHidden!=`boolean`&&(e.timerHidden=!1),Array.isArray(e.warnedParts)||(e.warnedParts=[]),Array.isArray(e.seenSections)||(e.seenSections=[]),Array.isArray(e.revealed)||(e.revealed=[]),e.v<ve&&(e.v=ve),e}function ie(){try{let e=localStorage.getItem(p);if(e===null)return null;try{let t=JSON.parse(e);if(x(t))return re(t)}catch{}try{localStorage.setItem(p+`.recovery.`+Date.now(),e)}catch{y=!0,b()}return null}catch{return y=!0,b(),null}}function S(){if(!(y||j&&T.lockedParts.length===0||M||!N()))try{localStorage.setItem(p,JSON.stringify(T)),w=!0}catch{v&&b()}}function oe(e){e.partIndex=Math.max(0,Math.min(e.partIndex,u.parts.length-1));let t=u.parts[e.partIndex];return t.questions.some(t=>t.id===e.currentQid)||(e.currentQid=t.questions[0].id),e}let se=u.parts[0],ce=ie(),w=ce!==null,T=ce?oe(ce):{v:ve,contentVersion:u.contentVersion,attemptId:crypto.randomUUID(),breakUntil:null,awaitingModuleStart:!0,partIndex:0,currentQid:se.questions[0].id,answers:{},flags:[],timeMs:{},partTimerMs:{},lockedParts:[],paused:!1,completed:!1,startedAt:Date.now(),eliminated:{},eliminatorOn:!0,highlights:{},timerHidden:!1,warnedParts:[],seenSections:[],revealed:[]},E=!1,D=T.partIndex,O=!1,k=!1,A=!1,j=!d&&!T.completed&&!T.breakUntil&&T.awaitingModuleStart,M=!1;function N(){if(M)return!1;try{let e=localStorage.getItem(p);if(!w)return e!==null&&x(JSON.parse(e))?(M=!0,window.location.reload(),!1):!0;if(e!==null&&JSON.parse(e).attemptId===T.attemptId)return!0}catch{return!0}return M=!0,window.location.assign(c.dataset.practiceHref||f),!1}let le=e=>{e.key===p&&e.newValue===null&&N()};window.addEventListener(`storage`,le),window.addEventListener(`pageshow`,()=>N());function ue(e){return E||d&&T.revealed.includes(e)}function de(){return E||d}let P={partTitle:R(c,`[data-role="part-title"]`),timer:R(c,`[data-role="timer"]`),timerToggle:R(c,`[data-action="hide-timer"]`),live:R(c,`[data-role="live"]`),toast:R(c,`[data-role="toast"]`),pauseBtn:R(c,`[data-action="pause"]`),printBlankBtn:R(c,`[data-action="print-blank"]`),printSubtitle:R(c,`[data-role="print-subtitle"]`),pauseOverlay:R(c,`[data-role="pause-overlay"]`),resumeBtn:R(c,`[data-action="resume"]`),startOverlay:R(c,`[data-role="start-overlay"]`),browseProgress:R(c,`[data-role="browse-progress"]`),startBody:R(c,`[data-role="start-body"]`),startBtn:R(c,`[data-action="start"]`),grid:R(c,`[data-role="grid"]`),toolbar:R(c,`[data-role="toolbar"]`),elimBtn:R(c,`[data-action="eliminator"]`),clearHlBtn:R(c,`[data-action="clear-highlights"]`),refBtn:R(c,`[data-action="reference"]`),refPanel:R(c,`[data-role="ref-panel"]`),dirBtn:R(c,`[data-action="directions"]`),dirPanel:R(c,`[data-role="dir-panel"]`),checkwork:R(c,`[data-role="checkwork"]`),checkworkTitle:R(c,`[data-role="checkwork-title"]`),checkworkSummary:R(c,`[data-role="checkwork-summary"]`),checkworkGrid:R(c,`[data-role="checkwork-grid"]`),backToQuestionsBtn:R(c,`[data-action="back-to-questions"]`),nextLabel:R(c,`[data-role="next-label"]`),nextArrow:R(c,`[data-role="next-arrow"]`),questionArea:R(c,`.tr-question-area`),hlPopover:R(c,`[data-role="hl-popover"]`),hlAction:R(c,`[data-role="hl-action"]`),flagBtn:R(c,`[data-action="flag"]`),resetModuleBtn:R(c,`[data-action="reset-module"]`),checkModuleBtn:R(c,`[data-action="check-module"]`),prevBtn:R(c,`[data-action="prev"]`),nextBtn:R(c,`[data-action="next"]`),submitBtn:R(c,`[data-role="submit"]`),submitSideBtn:R(c,`[data-role="submit-side"]`),progress:R(c,`[data-role="progress"]`),stepper:R(c,`[data-role="stepper"]`),results:R(c,`[data-role="results"]`),body:R(c,`.tr-body`),navbar:R(c,`.tr-navbar`),navbarTop:R(c,`.tr-navbar-top`),sidebar:R(c,`.tr-sidebar`),topbar:R(c,`.tr-topbar`),modal:R(c,`[data-role="modal"]`),modalTitle:R(c,`[data-role="modal-title"]`),modalBody:R(c,`[data-role="modal-body"]`),modalConfirm:R(c,`[data-role="modal-confirm"]`),modalCancel:R(c,`[data-role="modal-cancel"]`)},fe=z(c,`.tr-question`),pe=z(c,`.tr-step`),F=new Map,me=new Map;u.parts.forEach((e,t)=>{for(let n of e.questions)F.set(n.id,n),me.set(n.id,t)});function I(){return u.parts[T.partIndex]}function L(){return u.parts[D]}function he(){return T.partIndex>=u.parts.length-1}function we(e){return(e.timeLimitMinutes??0)*6e4}function Te(e){return T.partTimerMs[e.partId]??(T.partTimerMs[e.partId]=u.timerMode===`countdown`?we(e):0),T.partTimerMs[e.partId]}let V=null;function Ee(){return!d&&!j&&!T.paused&&!T.breakUntil&&!T.completed&&!E&&!k}function H(e=document.visibilityState===`visible`){if(V==null)return;let t=Date.now(),n=t-V;if(V=t,n<=0)return;if(e){let e=T.currentQid;T.timeMs[e]=(T.timeMs[e]??0)+Math.min(n,be)}let r=I();Te(r),u.timerMode===`countdown`?T.partTimerMs[r.partId]=Math.max(0,T.partTimerMs[r.partId]-n):T.partTimerMs[r.partId]+=n}function U(){Ee()?V??=Date.now():(H(),V=null)}function W(e,t){let n=t===`ceil`?Math.ceil(e/1e3):Math.floor(e/1e3),r=Math.floor(n/3600),i=Math.floor(n%3600/60),a=n%60,o=r>0?String(i).padStart(2,`0`):String(i),s=String(a).padStart(2,`0`);return r>0?`${r}:${o}:${s}`:`${o}:${s}`}function De(){if(E||d){P.timer.textContent=``,P.timer.hidden=!0;return}P.timer.hidden=T.timerHidden;let e=Te(I());u.timerMode===`countdown`?(P.timer.textContent=W(e,`ceil`),P.timer.classList.toggle(`is-low`,e<=6e4)):P.timer.textContent=W(e,`floor`)}function Oe(e){return u.timerMode===`countdown`&&we(e)>0}let ke=0,Ae=0,G=null;function K(e,t=``){(t===``||G===null||G===t)&&(window.clearTimeout(Ae),G=t,P.live.textContent=``,Ae=window.setTimeout(()=>{P.live.textContent=e,G=null},30))}function je(e){G===e&&(window.clearTimeout(Ae),G=null,P.live.textContent=``)}function Me(e){P.toast.textContent=e,P.toast.hidden=!1,window.clearTimeout(ke),ke=window.setTimeout(()=>{P.toast.hidden=!0},Se)}let Ne=Date.now();function Pe(){if(M)return;if(T.breakUntil){Zt();return}if(H(),De(),Ee()&&Oe(I())){let e=I(),t=T.partTimerMs[e.partId]??0;if(document.visibilityState===`visible`&&t>0&&t<=xe&&we(e)>xe&&!T.warnedParts.includes(e.partId)&&(T.warnedParts.push(e.partId),S(),K(`Five minutes remain in this module.`),Me(`5 minutes remaining`)),t<=0){Ze(!0);return}}let e=Date.now();e-Ne>=2e3&&(Ne=e,Ee()&&S())}function Fe(e){return fe.find(t=>t.dataset.qid===e)}function Ie(){return L().questions.findIndex(e=>e.id===T.currentQid)}function Le(e,n,i=E){let a=T.answers[n],o=i?F.get(n)?.correctChoiceId:void 0,s=R(e,`.tr-numeric-input`);if(s){s.value=a??``,s.disabled=E||d&&i;let t=r(s.value);s.setAttribute(`aria-invalid`,String(t.status===`invalid`));let n=R(e,`[data-role="numeric-error"]`);n&&(n.textContent=t.status===`invalid`?t.message:``)}z(e,`.tr-choice`).forEach((e,t)=>{let n=e.dataset.choiceId;e.setAttribute(`aria-checked`,a===n?`true`:`false`),e.classList.remove(`is-correct`,`is-wrong`);let r=E||d&&i;e.disabled=r,e.tabIndex=r?-1:(a?a===n:t===0)?0:-1,i&&(n===o?e.classList.add(`is-correct`):n===a&&e.classList.add(`is-wrong`))}),t(e,T,n,T.eliminatorOn&&!i)}function Re(e){let t=T.answers[e.id],n=`Correct answer: ${e.answer.kind===`numeric`?e.answer.exact:e.correctChoiceId}.`;return d?t==null?n:`${n} ${ze(e,t)}`:`${n} ${ze(e,t)} Time on this question: ${W(T.timeMs[e.id]??0,`floor`)}.`}function ze(e,t){return t==null?`You did not answer this question.`:e.kind===`numeric`&&r(t).status===`invalid`?`Invalid entry: ${t}. No credit.`:s(e,T.answers)===`correct`?`Correct. Your answer: ${t}.`:`Incorrect. Your answer: ${t}.`}function Be(e,t,n){e.innerHTML=``,t.questions.forEach((t,r)=>{let i=document.createElement(`button`);i.type=`button`,i.className=`tr-grid-cell`,i.textContent=String(r+1),i.dataset.qid=t.id;let a=T.answers[t.id]!=null,o=T.flags.includes(t.id),c=`Question ${r+1}`;if(a&&ue(t.id)){let e=s(t,T.answers)===`correct`;i.classList.add(e?`is-correct`:`is-incorrect`),c+=e?`, correct`:`, incorrect`}else a?(i.classList.add(`is-answered`),c+=`, answered`):c+=`, not answered`;o&&(i.classList.add(`is-flagged`),c+=`, flagged`),n&&t.id===T.currentQid&&(i.classList.add(`is-current`),c+=`, current`),i.setAttribute(`aria-label`,c),i.addEventListener(`click`,()=>{H(),O=!1,T.currentQid=t.id,q(),S()}),e.appendChild(i)})}function Ve(){let e=L();if(Be(P.grid,e,!0),P.browseProgress){let t=e.questions.filter(e=>T.answers[e.id]!=null).length;P.browseProgress.textContent=`${t} of ${e.questions.length} answered in this module`}P.resetModuleBtn&&(P.resetModuleBtn.disabled=!Ct(L())),P.checkModuleBtn?.setAttribute(`aria-disabled`,String(xt(L()).length===0))}function He(){let e=L().partId;pe.forEach((t,n)=>{let r=u.parts[n],i=!d&&T.lockedParts.includes(r.partId),a=r.partId===e;t.classList.toggle(`is-locked`,i),t.classList.toggle(`is-current`,a),t.classList.toggle(`is-upcoming`,!d&&!i&&!a),a?t.setAttribute(`aria-current`,`step`):t.removeAttribute(`aria-current`);let o=[];i&&o.push(`submitted`),a&&o.push(`current`),!d&&!i&&!a&&o.push(`not started yet`);let s=E?`Review: `:d?`Go to `:``,c=R(t,`[data-role="step-state"]`);c&&(c.textContent=`${s}${r.sectionTitle}, ${r.partTitle}, step ${n+1} of ${u.parts.length}`+(o.length?`, ${o.join(`, `)}`:``));let l=R(t,`.tr-step-num`);l&&(l.textContent=i?`✓`:l.dataset.num??String(n+1))})}function Ue(){let e=I();P.checkworkTitle.textContent=`Check your work: ${e.sectionTitle}, ${e.partTitle}`;let t=e.questions.length,n=e.questions.filter(e=>T.answers[e.id]!=null).length,r=e.questions.filter(e=>T.flags.includes(e.id)).length;P.checkworkSummary.textContent=`${n} of ${t} answered, ${r} flagged. Select a question to go back to it, or submit this module.`,Be(P.checkworkGrid,e,!1)}function We(){if(!P.dirPanel)return;let e=L().sectionId;for(let t of z(P.dirPanel,`.tr-directions`))t.hidden=t.dataset.section!==e}function q(){let e=L();Q(),P.checkwork.hidden=!O,P.questionArea.hidden=O,P.sidebar.hidden=O,O&&Ue(),fe.forEach(e=>{e.hidden=e.dataset.qid!==T.currentQid});let t=Fe(T.currentQid);if(t){ne(t,T.highlights[T.currentQid]??[]);let e=ue(T.currentQid);Le(t,T.currentQid,e);let n=R(t,`[data-role="explanation"]`);if(n&&(n.hidden=!e,e)){let e=F.get(T.currentQid),t=R(n,`[data-role="answer-line"]`);t&&(t.textContent=Re(e))}let r=R(t,`[data-action="reveal"]`);r&&(r.textContent=e?`Reset this question`:`Show solution`)}P.partTitle.textContent=E?`Review: ${e.sectionTitle}, ${e.partTitle}`:`${e.sectionTitle}, ${e.partTitle}`,De();let n=E||d;P.timerToggle.hidden=n,P.timerToggle.textContent=T.timerHidden?`Show timer`:`Hide timer`,P.pauseBtn.hidden=n;let r=T.flags.includes(T.currentQid);P.flagBtn.setAttribute(`aria-pressed`,r?`true`:`false`),P.flagBtn.textContent=r?`Flagged`:`Flag for review`,P.submitSideBtn.hidden=n,P.elimBtn.hidden=E||O||F.get(T.currentQid)?.kind===`numeric`,P.elimBtn.setAttribute(`aria-pressed`,T.eliminatorOn?`true`:`false`),P.clearHlBtn.hidden=E||O||!ee(T,T.currentQid),P.refBtn&&(P.refBtn.hidden=!e.referenceSheet),P.dirBtn&&(P.dirBtn.hidden=!e.hasDirections),We(),P.toolbar.hidden=P.elimBtn.hidden&&P.clearHlBtn.hidden&&(!P.refBtn||P.refBtn.hidden)&&(!P.dirBtn||P.dirBtn.hidden);let i=Ie();if(O){P.progress.textContent=`Check your work`,P.prevBtn.disabled=!1,P.nextBtn.disabled=!0,P.nextLabel.textContent=`Next`,P.nextArrow.hidden=!1,He();return}P.progress.textContent=`Question ${i+1} of ${e.questions.length}`;let a=i===e.questions.length-1,o=!E&&!d&&a;if(P.nextLabel.textContent=o?`Review your work`:`Next`,P.nextArrow.hidden=o,de()){let t=D===0&&i===0,n=D===u.parts.length-1&&i===e.questions.length-1;P.prevBtn.disabled=t,P.nextBtn.disabled=n}else P.prevBtn.disabled=i===0,P.nextBtn.disabled=!1;P.navbar.hidden=!E,Ve(),He()}let Ge=null;function Ke(){E||d||O||(H(),Ge=T.currentQid,O=!0,q(),X(P.checkworkTitle))}function qe(){O&&(O=!1,Ge&&F.has(Ge)&&(T.currentQid=Ge),Ge=null,q(),X(P.partTitle))}function Je(e){let t=L(),n=Ie()+e;H();let r=null;if(n>=0&&n<t.questions.length)T.currentQid=t.questions[n].id;else if(de()){let t=D+e;if(t>=0&&t<u.parts.length){r=document.activeElement,Rt(),D=t;let n=u.parts[t].questions;T.currentQid=e>0?n[0].id:n[n.length-1].id,d&&(T.partIndex=t)}}q(),r&&(r.focus(),document.activeElement!==r&&X(P.partTitle)),S()}function Ye(e){if(E||!rn())return;let t=e.target.closest(`.tr-choice`);if(!t)return;let r=e.key;if(r!==`ArrowDown`&&r!==`ArrowRight`&&r!==`ArrowUp`&&r!==`ArrowLeft`)return;let i=Fe(T.currentQid);if(!i)return;let a=z(i,`.tr-choice`),o=a.indexOf(t);if(o<0)return;e.preventDefault();let s=a[(o+(r===`ArrowDown`||r===`ArrowRight`?1:-1)+a.length)%a.length],c=s.dataset.choiceId;T.answers[T.currentQid]=c,n(T,T.currentQid,c),je(`answer-cleared`),q(),s.focus(),S()}function Xe(){return I().questions.filter(e=>T.answers[e.id]==null).length}function Ze(e=!1){if(d)return;let t=I();if(H(),Rt(),T.lockedParts.includes(t.partId)||T.lockedParts.push(t.partId),he()){et();return}let n=t.sectionId;if(T.partIndex+=1,u.breakMinutes&&I().sectionId!==n&&(T.breakUntil=Date.now()+u.breakMinutes*6e4),T.awaitingModuleStart=!0,j=!T.breakUntil,D=T.partIndex,O=!1,T.currentQid=I().questions[0].id,Te(I()),V=null,U(),q(),$e(),S(),T.breakUntil){Xt();return}Jt(e)}function Qe(){if(!rn())return;let e=Xe(),t=he(),n=(e>0?`You have ${e} unanswered question${e===1?``:`s`} in this module. `:``)+`A submitted module cannot be reopened.`+(t?` This is the final module, so you will see your results next.`:``);tn(t?`Submit and see results?`:`Submit this module?`,n,t?`Submit and see results`:`Submit this module`,()=>Ze(!1))}function $e(){let e=he()?`Submit and see results`:`Submit this module`;P.submitBtn.textContent=e,P.submitSideBtn.textContent=e}function et(){if(!T.completed&&N()){T.completed=!0;try{localStorage.setItem(`opt.test.${u.id}.attempt.${T.attemptId}`,JSON.stringify(T))}catch{}V=null,S(),pt()}}function tt(){return o({parts:u.parts,answers:T.answers,lockedParts:T.lockedParts,timeMs:T.timeMs})}function nt(e){let t=a(e);return t===null?`n/a`:`${t}%`}function rt(e){return s(e,T.answers)}function it(e){return e===`correct`?`Correct`:e===`incorrect`?`Incorrect`:`Unanswered`}function at(e){let t=e.questions.map(e=>T.timeMs[e.id]??0),n=t.reduce((e,t)=>e+t,0);return e.questions.map((e,r)=>({q:e,idx:r,ms:t[r],status:rt(e),pct:n>0?Math.round(t[r]/n*100):0}))}let ot=`answering time`;function st(e){let t=e.q.preview?`${e.q.preview} `:``;return`Question ${e.idx+1}, ${e.q.category}. ${t}Time ${W(e.ms,`floor`)}, ${it(e.status)}, ${e.pct}% of ${ot}. Activate to review this question.`}function ct(e,t,n,r){return{h:`Question ${t+1}, ${e.category}`,p:e.preview??``,m:`${W(r,`floor`)}, ${n}% of ${ot}, ${it(rt(e))}`}}function lt(e,t,n,r){let i=ct(e,t,n,r),a=(e,t)=>{let n=document.createElement(`div`);return n.className=e,n.textContent=t,n},o=[a(`tr-tip-head`,i.h)];return i.p&&o.push(a(`tr-tip-text`,i.p)),o.push(a(`tr-tip-meta`,i.m),a(`tr-tip-cta`,`Click to review`)),o}function ut(e,t,n){let r=parseFloat(getComputedStyle(e).getPropertyValue(`--tr-tip-gap`))||8,i=t.getBoundingClientRect(),a=i.left+t.clientLeft,o=i.top+t.clientTop,s=t.clientWidth,c=e.offsetWidth/2,l=n.left+n.width/2-a,u=c+4,d=s-c-4;e.style.left=`${u>d?s/2:Math.min(Math.max(l,u),d)}px`,e.style.top=`${n.top-o}px`,e.classList.toggle(`is-below`,n.top-e.offsetHeight-r<0)}function dt(e,t){let n=t.length;if(n===0)return``;let r=Math.max(1,...t.map(e=>e.ms)),i=Math.min(684,Math.max(288,n*58)),a=44+i+8,o=i/n,s=Math.max(.75,Math.min(Ce,o-1)),c=n>20?7:n>10?8.5:10,l=n>20?7.5:n>10?9:11,u=e=>e===`correct`?`var(--color-correct)`:e===`incorrect`?`var(--color-incorrect)`:`var(--color-unanswered)`,d=t.map((e,t)=>{let n=e.q,i=e.ms/r*150,a=44+t*o,d=a+(o-s)/2,f=178-i,p=a+o/2,m=e.pct,h=f-6,g=e.status===`unanswered`?` stroke="var(--color-border)" stroke-width="1"`:``,ee=st(e),_=`<rect class="tr-bar-hit" x="${a.toFixed(2)}" y="28" width="${o.toFixed(2)}" height="150" />`,te=`<rect class="tr-bar-rect" x="${d.toFixed(2)}" y="${f.toFixed(2)}" width="${s.toFixed(2)}" height="${i.toFixed(2)}" fill="${u(e.status)}"${g} />`,v=`<text x="${p.toFixed(2)}" y="${h.toFixed(2)}" text-anchor="middle" font-size="${l}" fill="var(--color-muted)">${m}%</text>`,ne=`<text x="${p.toFixed(2)}" y="${190 .toFixed(2)}" text-anchor="middle" font-size="${c}" fill="var(--color-muted)">${t+1}</text>`;return`<g class="tr-bar" role="button" tabindex="${t===0?`0`:`-1`}" data-qid="${B(n.id)}" data-idx="${t}" data-pct="${m}" aria-label="${B(ee)}">${_}${te}${v}${ne}</g>`}).join(``);return`<svg width="${a}" height="204" viewBox="0 0 ${a} 204" role="group" aria-label="${B(`Per-question time for ${e.sectionTitle}, ${e.partTitle}, colored by whether the answer was correct, incorrect, or left unanswered`)}">
      <line x1="44" y1="178" x2="${a-8}" y2="178" stroke="var(--color-border)" stroke-width="1" aria-hidden="true" />
      <text x="38" y="32" text-anchor="end" font-size="11" fill="var(--color-muted)" aria-hidden="true">${W(r,`ceil`)}</text>
      <text x="38" y="178" text-anchor="end" font-size="11" fill="var(--color-muted)" aria-hidden="true">0:00</text>
      ${d}
    </svg>`}function ft(e){return e.map(e=>{let t=`<button type="button" class="tr-row-btn" tabindex="${e.idx===0?`0`:`-1`}" aria-label="${B(st(e))}">${e.idx+1}</button>`;return`<tr class="tr-time-row" data-qid="${B(e.q.id)}" data-idx="${e.idx}" data-pct="${e.pct}"><td>${t}</td><td>${B(e.q.category)}</td><td>${it(e.status)}</td><td class="num">${W(e.ms,`floor`)}</td></tr>`}).join(``)}function pt(){E=!1,O=!1,Rt(),P.checkwork.hidden=!0,P.questionArea.hidden=!1,P.sidebar.hidden=!1;let{overall:e,sections:t,categories:n,parts:r,timeMs:i,complete:a,unsubmittedParts:o}=tt();P.topbar.hidden=!0,P.stepper.hidden=!0,P.toolbar.hidden=!0,P.navbarTop.hidden=!0,P.body.hidden=!0,P.navbar.hidden=!0,P.results.hidden=!1;let s=(e,t)=>`<tr><td>${B(e)}</td><td class="num">${t.correct}</td><td class="num">${t.incorrect}</td><td class="num">${t.unanswered}</td><td class="num">${t.total}</td><td class="num">${nt(t)}</td></tr>`,l=t.map(e=>s(e.title,e)).join(``),d=n.map(e=>s(e.name,e)).join(``),f=r.map(e=>`
          <div class="tr-score-module">
            <div class="tr-score-module-name">${B(e.sectionTitle)}, ${B(e.partTitle)}</div>
            <div class="tr-score-module-score">${e.correct} / ${e.total}</div>
            <div class="tr-score-module-pct">${nt(e)}</div>
            ${e.unanswered>0?`<div class="tr-score-module-skip">${e.unanswered} unanswered</div>`:``}
          </div>`).join(``),p=`
        <div class="tr-score-big">${e.correct} / ${e.total}</div>
        <div class="tr-score-sub">${nt(e)} correct</div>
        <ul class="tr-score-split" role="list">
          <li><span class="tr-swatch is-correct" aria-hidden="true"></span>${e.correct} correct</li>
          <li><span class="tr-swatch is-incorrect" aria-hidden="true"></span>${e.incorrect} incorrect</li>
          <li><span class="tr-swatch is-unanswered" aria-hidden="true"></span>${e.unanswered} unanswered</li>
        </ul>
        <div class="tr-score-caption">Total active time ${W(i,`floor`)}</div>`,m=a?``:`<p class="tr-score-note" role="status">This attempt is not finished. ${B(o.join(`, `))} ${o.length===1?`was`:`were`} never submitted. The counts below still cover every question in the test, so
        anything you did not reach is counted as unanswered.</p>`,h=u.lessonLinks??{},g=n.filter(e=>e.incorrect+e.unanswered>0&&h[e.name]).slice(0,3).map(e=>{let t=[e.incorrect>0?`${e.incorrect} wrong`:``,e.unanswered>0?`${e.unanswered} unanswered`:``].filter(Boolean).join(` and `);return`
          <li class="tr-next-item">
            <a class="tr-btn" href="${B(h[e.name].href)}">${B(h[e.name].label)}</a>
            <span class="tr-next-why">${t} of ${e.total} in ${B(e.name)}.</span>
          </li>`}).join(``),ee=e.total>0&&e.correct===e.total?`<div><h2>Review next</h2>
             <p class="tr-score-note">You answered every question correctly.</p></div>`:g?`<div><h2>Review next</h2>
               <ul class="tr-next-list" role="list">${g}</ul></div>`:``,_=`
      <div class="tr-modal-actions tr-results-actions tr-noprint">
        <button type="button" class="tr-btn tr-btn-primary" data-role="review">Review answers</button>
        ${T.completed&&c.dataset.reviewHref?`<a class="tr-btn" href="${B(c.dataset.reviewHref)}?attempt=${encodeURIComponent(T.attemptId)}">Review with filters and study links</a>`:``}
        <button type="button" class="tr-btn" data-role="print-report">
          <svg class="tr-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>Generate PDF report
        </button>
        <button type="button" class="tr-btn" data-role="archive">
          <svg class="tr-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg><span data-role="archive-label">${Mt}</span>
        </button>
        <button type="button" class="tr-btn" data-role="reset">Reset this test</button>
      </div>
    `;P.results.innerHTML=`
      <div class="tr-score-hero" tabindex="-1">
        ${p}
        <div class="tr-score-modules">${f}</div>
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
            <tbody>${d}</tbody>
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
          ${u.parts.map(e=>{let t=at(e);return`
            <div class="tr-chart-block">
              <h3 class="tr-chart-title">${B(e.sectionTitle)}, ${B(e.partTitle)}</h3>
              <div class="tr-chart">${dt(e,t)}</div>
              <table class="tr-table">
                <thead><tr><th>#</th><th>Category</th><th>Result</th><th class="num">Time</th></tr></thead>
                <tbody>${ft(t)}</tbody>
              </table>
              <div class="tr-chart-tip tr-noprint" aria-hidden="true" hidden></div>
            </div>
          `}).join(``)}
        </div>
      </div>
      ${_}
    `;for(let e of z(P.results,`.tr-chart-block`))vt(e);for(let e of z(P.results,`[data-role="review"]`))e.addEventListener(`click`,()=>yt());for(let e of z(P.results,`[data-role="print-report"]`))e.addEventListener(`click`,kt);for(let e of z(P.results,`[data-role="archive"]`))e.addEventListener(`click`,()=>{Pt(e)});for(let e of z(P.results,`[data-role="reset"]`))e.addEventListener(`click`,Tt);mt()}function mt(){for(let e of z(P.results,`[data-role="archive"]`))e.disabled=A,R(e,`[data-role="archive-label"]`).textContent=A?Nt:Mt}function J(e){return e instanceof Element?e.closest(`.tr-bar, .tr-time-row`):null}function ht(e){return(e.classList.contains(`tr-bar`)?R(e,`.tr-bar-rect`)??e:e).getBoundingClientRect()}function gt(e){return e.classList.contains(`tr-bar`)?e:R(e,`.tr-row-btn`)}function _t(e){let t=me.get(e);t!=null&&yt({partIndex:t,qid:e})}function vt(e){let t=R(e,`.tr-chart-tip`);if(!t)return;let n=[z(e,`.tr-bar`),z(e,`.tr-time-row`)],r=()=>{t.hidden=!0},i=(e,t)=>{for(let n of e){let e=gt(n);e&&e.setAttribute(`tabindex`,n===t?`0`:`-1`)}},a=(e,t)=>{let n=e[Math.min(e.length-1,Math.max(0,t))];n&&(i(e,n),gt(n)?.focus())},o=n=>{let r=n.dataset.qid,i=r==null?void 0:F.get(r);if(!i)return;let a=Number(n.dataset.idx??0),o=Number(n.dataset.pct??0);t.replaceChildren(...lt(i,a,o,T.timeMs[i.id]??0)),t.hidden=!1,ut(t,e,ht(n))};e.addEventListener(`click`,e=>{let t=J(e.target)?.dataset.qid;t&&_t(t)}),e.addEventListener(`keydown`,e=>{let t=J(e.target);if(!t)return;let r=n.find(e=>e.includes(t));if(!r)return;let i=r.indexOf(t),o=t.dataset.qid;e.key===`Enter`||e.key===` `?(e.preventDefault(),o&&_t(o)):e.key===`ArrowRight`||e.key===`ArrowDown`?(e.preventDefault(),a(r,i+1)):e.key===`ArrowLeft`||e.key===`ArrowUp`?(e.preventDefault(),a(r,i-1)):e.key===`Home`?(e.preventDefault(),a(r,0)):e.key===`End`&&(e.preventDefault(),a(r,r.length-1))}),e.addEventListener(`pointerover`,e=>{let t=J(e.target);t&&t!==J(e.relatedTarget)&&o(t)}),e.addEventListener(`pointerout`,e=>{let t=J(e.target);t&&t!==J(e.relatedTarget)&&r()}),e.addEventListener(`focusin`,e=>{let t=J(e.target);if(!t)return;let r=n.find(e=>e.includes(t));r&&i(r,t),o(t)}),e.addEventListener(`focusout`,r),e.addEventListener(`mouseleave`,r)}let Y=null;function X(e){e?.focus({preventScroll:!0})}function yt(e){E=!0,O=!1,D=e?e.partIndex:0,T.currentQid=e?e.qid:u.parts[0].questions[0].id,P.results.hidden=!0,P.topbar.hidden=!1,P.stepper.hidden=!1,P.navbarTop.hidden=!1,P.body.hidden=!1,P.navbar.hidden=!1,P.timer.hidden=!0,P.flagBtn.hidden=!0,Y||(Y=document.createElement(`button`),Y.type=`button`,Y.className=`tr-btn tr-btn-primary`,Y.textContent=`Back to results`,Y.addEventListener(`click`,bt),P.navbar.appendChild(Y)),Y.hidden=!1,q(),X(P.partTitle),window.scrollTo(0,0)}function bt(){E=!1,P.timer.hidden=!1,P.flagBtn.hidden=!1,Y&&(Y.hidden=!0),pt(),X(R(P.results,`.tr-score-hero`)),window.scrollTo(0,0)}function xt(e){return e.questions.filter(e=>T.answers[e.id]!=null&&!T.revealed.includes(e.id))}function St(){if(!d)return;let e=L(),t=xt(e);t.length&&(T.revealed.push(...t.map(e=>e.id)),q(),S(),K(`Checked ${t.length} attempted question${t.length===1?``:`s`} in ${e.sectionTitle}, ${e.partTitle}. Select a question to review its solution.`))}function Ct(e){return e.questions.some(({id:e})=>T.answers[e]!==void 0||T.flags.includes(e)||T.revealed.includes(e)||(T.eliminated[e]?.length??0)>0||(T.highlights[e]?.length??0)>0||(T.timeMs[e]??0)>0)}function wt(){if(!d)return;let e=L();Ct(e)&&tn(`Reset ${e.sectionTitle}, ${e.partTitle}?`,`This clears all answers, revealed solutions, flags, highlights, and crossed-out choices in this module. Other modules and timed attempts are kept.`,`Reset this module`,()=>{let t=new Set(e.questions.map(e=>e.id));for(let e of t)delete T.answers[e],delete T.timeMs[e],delete T.eliminated[e],delete T.highlights[e];T.flags=T.flags.filter(e=>!t.has(e)),T.revealed=T.revealed.filter(e=>!t.has(e)),q(),S(),P.flagBtn.focus(),K(`${e.sectionTitle}, ${e.partTitle} has been reset.`)})}function Tt(){tn(`Reset this test?`,`This clears the current test so you can try again. Completed attempt snapshots remain in this browser. Save a PDF or interactive report if you want a copy you can open later. You will go back to the tests page.`,`Clear and reset`,()=>{M=!0;try{for(let e of te)localStorage.removeItem(e)}catch{}window.location.assign(f)})}function Et(){for(let e of u.parts)for(let t of e.questions){let e=Fe(t.id);if(!e)continue;Le(e,t.id,!0);let n=R(e,`[data-role="explanation"]`),r=n&&R(n,`[data-role="answer-line"]`);r&&(r.textContent=Re(t))}}let Dt=`Blank test, no answers`;function Ot(){return`Results report, generated ${new Date().toLocaleDateString(void 0,{year:`numeric`,month:`long`,day:`numeric`})}`}function kt(){Et(),P.printSubtitle.textContent=Ot(),c.dataset.printing=`report`,window.print()}function At(){let e={};for(let t of u.parts)for(let n of at(t))e[n.q.id]=ct(n.q,n.idx,n.pct,n.ms);return e}let jt=`Could not build the report file. Generate PDF report still works.`,Mt=`Download interactive report`,Nt=`Building`;async function Pt(e){if(A)return;let t=z(P.results,`[data-role="archive"]`).indexOf(e);A=!0;try{mt(),Et();let{blob:e,filename:n}=await ge({subtitle:Ot(),testId:u.id,cta:`Click to jump to this question`,tips:At()});if(_e(e,n),A=!1,mt(),k){let e=`Report sent to your downloads as ${n}.`;Me(e),K(e)}else z(P.results,`[data-role="archive"]`)[t]?.focus(),nn(`Report sent to your downloads`,`Your browser is saving it as ${n}. If it asks where to put the file, pick a folder. It holds the whole attempt: every question, your answer against the correct one, the explanations, and the timing charts. Open it in any browser, online or off.`)}catch(e){let t=e instanceof C?` ${e.reason}`:``;Me(jt+t),K(jt+t)}finally{A=!1,mt()}}function Ft(){P.printSubtitle.textContent=Dt,delete c.dataset.printing,window.print()}let It=[];function Lt(e,t,n,r){let i=ae({panel:e,head:R(e,`[data-role="${r}-head"]`),move:R(e,`[data-role="${r}-move"]`),close:R(e,`[data-role="${r}-close"]`),id:n});return It.push(i),t.addEventListener(`click`,()=>{i.isOpen()?i.close():i.open(t)}),new MutationObserver(()=>t.setAttribute(`aria-expanded`,i.isOpen()?`true`:`false`)).observe(e,{attributes:!0,attributeFilter:[`hidden`]}),i}P.refPanel&&P.refBtn&&Lt(P.refPanel,P.refBtn,`reference`,`ref`),P.dirPanel&&P.dirBtn&&Lt(P.dirPanel,P.dirBtn,`directions`,`dir`);function Rt(){for(let e of It)e.close()}let Z=null;function Q(){P.hlPopover.hidden||(P.hlPopover.hidden=!0,Z=null)}function zt(e,t,n,r){Z=n,P.hlAction.textContent=t,P.hlPopover.hidden=!1;let i=P.questionArea.getBoundingClientRect(),a=P.hlPopover.offsetWidth,o=P.hlPopover.offsetHeight,s=Math.max(0,Math.min(e.left+e.width/2-i.left-a/2,P.questionArea.clientWidth-a)),c=e.top-o-6<0?e.bottom-i.top+6:e.top-i.top-o-6;P.hlPopover.style.left=`${s}px`,P.hlPopover.style.top=`${c}px`,r&&P.hlAction.focus()}function Bt(e){if(E){Q();return}let t=Fe(T.currentQid),n=t&&m(t);if(!n){Q();return}zt(window.getSelection().getRangeAt(0).getBoundingClientRect(),`Highlight`,{kind:`add`,range:n},e)}P.body.addEventListener(`pointerup`,e=>{let t=e.target;if(P.hlPopover.contains(t))return;let n=t.closest(`mark.tr-hl`),r=window.getSelection();if(n&&(!r||r.isCollapsed)){if(E)return;zt(n.getBoundingClientRect(),`Remove highlight`,{kind:`remove`,index:Number(n.dataset.hl)},!1);return}Bt(!1)}),P.body.addEventListener(`keyup`,e=>{e.key===`Shift`?Bt(!0):e.shiftKey&&Bt(!1)}),P.hlPopover.addEventListener(`keydown`,e=>{e.key===`Escape`&&(e.stopPropagation(),e.preventDefault(),Q(),X(P.partTitle))}),P.hlAction.addEventListener(`click`,()=>{if(!Z)return;let e=T.currentQid,t=P.hlPopover.contains(document.activeElement);Z.kind===`add`?h(T,e,Z.range):g(T,e,Z.index),Q(),window.getSelection()?.removeAllRanges(),q(),S(),t&&X(P.clearHlBtn.hidden?P.partTitle:P.clearHlBtn)}),P.clearHlBtn.addEventListener(`click`,()=>{_(T,T.currentQid),Q(),q(),S(),X(P.partTitle)});let Vt=R(document,`.site-header`),Ht=R(document,`.site-footer`),Ut=[...Vt?[Vt]:[],...Ht?[Ht]:[],P.topbar,P.stepper,P.toolbar,P.navbarTop,P.body,P.navbar,P.results,...P.refPanel?[P.refPanel]:[],...P.dirPanel?[P.dirPanel]:[]];function Wt(e){for(let t of Ut)e?t.setAttribute(`inert`,``):t.removeAttribute(`inert`)}let Gt=null,Kt=null;function $(e,t){Gt=document.activeElement,Wt(!0),Kt=t,e.focus()}function qt(){Wt(!1),Kt=null,Gt&&document.contains(Gt)&&Gt.focus(),Gt=null}function Jt(e=!1){if(!P.startOverlay||!P.startBody||!P.startBtn)return;let t=I(),n=u.timerMode===`countdown`?t.timeLimitMinutes??0:0,r=R(P.startOverlay,`#tr-start-title`);r.textContent=`${t.sectionTitle}, ${t.partTitle}: directions`,P.startBtn.textContent=`Start ${t.partTitle}`,P.startBody.textContent=(e?`The previous module ran out of time and was submitted. `:``)+`Read the directions below. ${n?`You have ${n} minutes. `:``}The timer starts only when you press "Start ${t.partTitle}". You can pause any time.`;for(let e of P.startOverlay.querySelectorAll(`[data-start-section]`))e.hidden=e.dataset.startSection!==t.sectionId;let i=R(P.startOverlay,`#tr-start-format`);i&&(i.hidden=T.partIndex>0),P.startOverlay.hidden=!1;let a=R(P.startOverlay,`[data-role="start-scroll"]`);a&&(a.scrollTop=0),$(r,()=>{})}function Yt(){j&&(j=!1,T.awaitingModuleStart=!1,P.startOverlay&&(P.startOverlay.hidden=!0),qt(),T.lockedParts.length===0&&(T.startedAt=Date.now()),U(),X(P.partTitle),S())}function Xt(){let e=R(c,`[data-role="break-overlay"]`);e&&(e.hidden=!1,$(R(e,`#break-title`),()=>{}),Zt())}function Zt(){if(!T.breakUntil)return;let e=T.breakUntil-Date.now(),t=R(c,`[data-role="break-timer"]`);t&&(t.textContent=W(Math.max(0,e),`ceil`));let n=R(c,`[data-role="break-status"]`),r=R(c,`[data-action="start-next-section"]`),i=e<=0,a=R(c,`#break-title`),o=i?`Ready for Math?`:`Take a 10-minute break`;a&&a.textContent!==o&&(a.textContent=o);let s=i?`Your 10-minute break is complete. Start Math when you’re ready; your full module time is waiting.`:`Math will wait for you. Its timer starts only when you choose to begin.`;if(n&&n.textContent!==s&&(n.textContent=s),r){let e=i?`Start Math`:`End break and start Math`;r.textContent!==e&&(r.textContent=e),r.classList.toggle(`tr-btn-primary`,i)}}function Qt(){if(d||T.completed||j||!T.breakUntil)return;T.breakUntil=null,T.awaitingModuleStart=!0,j=!0;let e=R(c,`[data-role="break-overlay"]`);e&&(e.hidden=!0),qt(),T.currentQid=I().questions[0].id,D=T.partIndex,V=null,X(P.partTitle),q(),U(),$e(),S(),Jt()}function $t(e){e!==T.paused&&(H(),T.paused=e,P.pauseOverlay.hidden=!e,e?(U(),$(P.resumeBtn,()=>$t(!1))):(qt(),U()),S())}function en(){P.modalConfirm.replaceWith(P.modalConfirm.cloneNode(!0)),P.modalCancel.replaceWith(P.modalCancel.cloneNode(!0)),P.modalConfirm=R(c,`[data-role="modal-confirm"]`),P.modalCancel=R(c,`[data-role="modal-cancel"]`)}function tn(e,t,n,r){en(),P.modalTitle.textContent=e,P.modalBody.textContent=t,P.modalConfirm.textContent=n,P.modalCancel.hidden=!1,k=!0,U(),P.modal.hidden=!1;let i=()=>{P.modal.hidden=!0,k=!1,qt(),U()};P.modalConfirm.addEventListener(`click`,()=>{i(),r()}),P.modalCancel.addEventListener(`click`,i),$(P.modalConfirm,i)}function nn(e,t){en(),P.modalTitle.textContent=e,P.modalBody.textContent=t,P.modalConfirm.textContent=`OK`,P.modalCancel.hidden=!0,k=!0,U(),P.modal.hidden=!1;let n=()=>{P.modal.hidden=!0,k=!1,qt(),U()};P.modalConfirm.addEventListener(`click`,n),$(P.modalConfirm,n)}function rn(){return d?!0:j||E||T.completed||T.paused||T.breakUntil||k?!1:(H(),Oe(I())&&Te(I())<=0?(Ze(!0),!1):!0)}P.body.addEventListener(`click`,t=>{if(!rn())return;let r=t.target,i=r.closest(`[data-action="reveal"]`);if(i){let e=i.dataset.qid;if(!d||e!==T.currentQid)return;let t=T.revealed.indexOf(e);t>=0?(T.revealed.splice(t,1),delete T.answers[e]):T.revealed.push(e),q(),S();return}let a=r.closest(`.tr-elim`);if(a){if(E)return;let t=a.dataset.qid;if(t!==T.currentQid)return;let n=a.dataset.choiceId;je(`answer-cleared`),e(T,t,n)&&T.answers[t]===n&&(delete T.answers[t],K(`Choice ${n} crossed out. Your answer is cleared.`,`answer-cleared`)),q(),S();return}let o=r.closest(`.tr-choice`);if(!o||E)return;let s=o.dataset.qid;if(s!==T.currentQid)return;let c=o.dataset.choiceId;if(d&&T.answers[s]===c){delete T.answers[s],q(),S();return}T.answers[s]=c,n(T,s,c),je(`answer-cleared`),q(),S()}),P.body.addEventListener(`input`,e=>{let t=e.target;if(!(t instanceof HTMLInputElement)||!t.classList.contains(`tr-numeric-input`))return;let n=t.dataset.qid;if(!rn()||E||!d&&(T.completed||T.paused||T.breakUntil)||d&&ue(n)||n!==T.currentQid)return;t.value.trim()?T.answers[n]=t.value:delete T.answers[n];let i=r(t.value);t.setAttribute(`aria-invalid`,String(i.status===`invalid`));let a=R(Fe(n),`[data-role="numeric-error"]`);a&&(a.textContent=i.status===`invalid`?i.message:``),Ve(),S()}),P.body.addEventListener(`keydown`,Ye),P.prevBtn.addEventListener(`click`,()=>{if(O){qe();return}Je(-1)}),P.nextBtn.addEventListener(`click`,()=>{if(O)return;let e=Ie();if(!E&&!d&&e===L().questions.length-1){Ke();return}Je(1)}),P.backToQuestionsBtn.addEventListener(`click`,qe),d&&(P.resetModuleBtn?.addEventListener(`click`,wt),P.checkModuleBtn?.addEventListener(`click`,St),P.stepper.addEventListener(`click`,e=>{let t=e.target.closest(`.tr-step-btn`);if(!t)return;let n=u.parts.findIndex(e=>e.partId===t.dataset.part);n<0||n===D||(Rt(),D=n,T.partIndex=n,T.currentQid=u.parts[n].questions[0].id,q(),X(P.partTitle),S())})),P.timerToggle.addEventListener(`click`,()=>{T.timerHidden=!T.timerHidden,q(),S()}),P.flagBtn.addEventListener(`click`,()=>{let e=T.currentQid,t=T.flags.indexOf(e);t>=0?T.flags.splice(t,1):T.flags.push(e),q(),S()}),P.elimBtn.addEventListener(`click`,()=>{T.eliminatorOn=!T.eliminatorOn,q(),S()}),P.submitBtn.addEventListener(`click`,Qe),P.submitSideBtn.addEventListener(`click`,Qe),P.pauseBtn.addEventListener(`click`,()=>$t(!0)),P.resumeBtn.addEventListener(`click`,()=>$t(!1)),P.startBtn?.addEventListener(`click`,Yt),R(c,`[data-action="start-next-section"]`)?.addEventListener(`click`,Qt),P.printBlankBtn.addEventListener(`click`,Ft);let an=()=>{H(document.visibilityState!==`visible`),T.breakUntil&&Zt(),document.visibilityState===`visible`?Pe():S()},on=e=>{e.key===`Escape`&&Kt&&(e.preventDefault(),Kt())},sn=()=>{let e=c.dataset.printing===`report`;delete c.dataset.printing,P.printSubtitle.textContent=Dt,e&&nn(`Your report went to the print dialog`,`If you picked Save as PDF, the file is wherever your browser puts downloads. If you closed the dialog, or sent it to a printer by mistake, press Generate PDF report again.`)};if(document.addEventListener(`visibilitychange`,an),document.addEventListener(`keydown`,on),window.addEventListener(`afterprint`,sn),d){T.paused=!1,T.completed=!1;let e=Number(c.dataset.initialModule);Number.isInteger(e)&&e>=0&&e<u.parts.length&&(T.partIndex=e,D=e,T.currentQid=I().questions[0].id),q()}else Te(I()),$e(),T.completed?pt():(q(),j?Jt():T.breakUntil?Xt():T.paused&&(P.pauseOverlay.hidden=!1,$(P.resumeBtn,()=>$t(!1))),U());S();let cn=d?0:window.setInterval(Pe,ye),ln=()=>{d||(H(),S()),window.clearInterval(cn),window.clearTimeout(ke),document.removeEventListener(`visibilitychange`,an),document.removeEventListener(`keydown`,on),window.removeEventListener(`afterprint`,sn),window.removeEventListener(`storage`,le)};window.addEventListener(`pagehide`,ln,{once:!0}),document.addEventListener(`astro:before-swap`,ln,{once:!0})}we();