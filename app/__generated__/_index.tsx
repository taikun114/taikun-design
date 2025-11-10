/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Body as Body, Link as Link, Link as Link_1 } from "@webstudio-is/sdk-components-react-router";
import { Slot as Slot, Fragment as Fragment_1, HtmlEmbed as HtmlEmbed, Button as Button, Text as Text, Box as Box, Paragraph as Paragraph, Image as Image } from "@webstudio-is/sdk-components-react";
import { NavigationMenu as NavigationMenu, NavigationMenuList as NavigationMenuList, NavigationMenuItem as NavigationMenuItem, NavigationMenuLink as NavigationMenuLink, NavigationMenuTrigger as NavigationMenuTrigger, NavigationMenuContent as NavigationMenuContent, NavigationMenuViewport as NavigationMenuViewport } from "@webstudio-is/sdk-components-react-radix";
import { AnimateChildren as AnimateChildren } from "@webstudio-is/sdk-components-animation";


      export const projectId = "2cd79ce0-3989-403a-8afe-0a7521841b51";

      export const lastPublished = "2025-11-10T08:24:10.555Z";

      export const siteName = "TAIKUN.design";

      export const breakpoints = [{"id":"uDG426cw_yjxvJghC8SXG"},{"id":"OqceE0ambnah9AD7EawWO","maxWidth":991},{"id":"BXOnMEffkgQGqL5mnINO7","maxWidth":767},{"id":"7ONjZtBEEUHO79pwxXXHx","maxWidth":479}];

      export const favIconAsset: string | undefined =
        "favicon__m7IdZ3K0Zj6mYBB_NRV8.png";

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        []

      export const pageBackgroundImageAssets: string[] =
        []

      
            
            const Script = ({children, ...props}: Record<string, string | boolean>) => {
              if (children == null) {
                return <script {...props} />;
              }

              return <script {...props} dangerouslySetInnerHTML={{__html: children}} />;
            };
            const Style = ({children, ...props}: Record<string, string | boolean>) => {
              if (children == null) {
                return <style {...props} />;
              }

              return <style {...props} dangerouslySetInnerHTML={{__html: children}} />;
            };
            

            export const CustomCode = () => {
              return (<><meta name={"viewport"} content={"initial-scale=1, viewport-fit=cover"}></meta>{"\n\n"}<Style>{"\n  @media (prefers-color-scheme: dark) {\n    img {\n      filter: brightness(90%);\n    }\n  }\n  html {\n    scroll-padding-top: 6rem;\n    scroll-behavior: smooth;\n  }\n"}</Style>{"\n\n"}<Style>{"\n@import url('https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&family=Murecho:wght@100..900&display=swap');\n"}</Style>{"\n\n"}<Script defer src={"https://umami.taikun.blog/script.js"} data-website-id={"cb08106a-feb9-43d2-8bff-4faf2b5e686e"}></Script>{"\n\n"}<link rel={"stylesheet"} href={"https://unpkg.com/nprogress@0.2.0/nprogress.css"}></link><Script src={"https://unpkg.com/nprogress@0.2.0/nprogress.js"}></Script>{"\n\n"}<Style>{"\n  #nprogress .bar {\n    background-color: light-dark(#22354ecc, #d9eafecc) !important;\n  }\n"}</Style>{"\n\n"}<Script>{"\n  (function () {\n    // NProgress 設定\n    NProgress.configure({ showSpinner: false, trickleSpeed: 100 });\n\n    let startTime = 0;\n    const MIN_DURATION = 300; // 最低表示時間 0.3秒\n\n    // --- 🧱 NProgressのコンテナを <html> に移動してDOMリセット対策 ---\n    function ensureNProgressContainer() {\n      if (!document.getElementById(\"nprogress\")) return;\n      const np = document.getElementById(\"nprogress\");\n      if (np.parentNode !== document.documentElement) {\n        document.documentElement.appendChild(np);\n      }\n    }\n\n    // --- 進行開始 ---\n    function startProgress() {\n      ensureNProgressContainer();\n      if (NProgress.isStarted()) return;\n      startTime = Date.now();\n      NProgress.start();\n    }\n\n    // --- 完了 ---\n    function endProgress() {\n      const elapsed = Date.now() - startTime;\n      const remaining = Math.max(MIN_DURATION - elapsed, 0);\n      setTimeout(() => {\n        ensureNProgressContainer();\n        NProgress.done();\n      }, remaining);\n    }\n\n    // --- history APIフック ---\n    const originalPush = history.pushState;\n    const originalReplace = history.replaceState;\n\n    history.pushState = function (...args) {\n      startProgress();\n      const result = originalPush.apply(this, args);\n      endProgress();\n      return result;\n    };\n\n    history.replaceState = function (...args) {\n      startProgress();\n      const result = originalReplace.apply(this, args);\n      endProgress();\n      return result;\n    };\n\n    // --- 戻る／進む操作 ---\n    window.addEventListener(\"popstate\", () => {\n      startProgress();\n      setTimeout(endProgress, MIN_DURATION);\n    });\n\n    // --- 内部リンククリックで即スタート ---\n    document.addEventListener(\"click\", (e) => {\n      const link = e.target.closest(\"a\");\n      if (!link) return;\n      const isInternal =\n        link.host === window.location.host &&\n        !link.target &&\n        !link.hasAttribute(\"download\") &&\n        !link.href.startsWith(\"mailto:\");\n      if (isInternal) startProgress();\n    });\n\n    // --- 初回ロード時 ---\n    window.addEventListener(\"load\", () => {\n      ensureNProgressContainer();\n      NProgress.done();\n    });\n\n    // --- SPAの再描画タイミング対策 ---\n    const observer = new MutationObserver(() => ensureNProgressContainer());\n    observer.observe(document.documentElement, { childList: true, subtree: true });\n  })();\n"}</Script>{" \n"}</>);
            }
          

      const Page = (_props: { system: any; }) => {
const system = _props.system;
return <Body
className={`w-element ct4g75r c1jwp7ay`}>
<Image
src={"/assets/philip-oroni-DT3Pj-Sxu_E-unsplash_znXryv-mOj3d5pzF6__N2.webp"}
width={3840}
height={2160}
alt={""}
loading={"eager"}
fetchPriority={"high"}
className={`w-image c1uhg4lu c1r6gls1 choxsbt c1d0k284 c58tzbx c1jbuqru cxmjziy cwuyehs c1xa9i4n`} />
<AnimateChildren
action={{"type":"view","animations":[{"name":"New Animation","description":"Create a new animation.","keyframes":[{"offset":0,"styles":{"backdrop-filter":{"type":"tuple","value":[{"type":"keyword","value":"none"}]},"background-color":{"type":"keyword","value":"transparent"}}}],"timing":{"easing":"linear","fill":"both","rangeStart":["contain",{"type":"unit","value":50,"unit":"%"}],"rangeEnd":["cover",{"type":"unit","value":100,"unit":"%"}]}}],"isPinned":true,"debug":true}}>
<div
className={`w-element c1uhg4lu c1r6gls1 choxsbt c1db2mhz c1hqo6wn c58tzbx c1jbuqru c1xa9i4n cxmjziy cwuyehs`} />
</AnimateChildren>
<Slot>
<Fragment_1>
<header
className={`w-element c11jmddu c7a8s9g c1f2dxbp choxsbt cxmjziy c1f1jont cjxy5gi ct4g75r c1y1b6pq cj6mhg5 cn7ss8j cihy26h`}>
<div
className={`w-element c19si1a0 c11jmddu c1aner8p ct4g75r c19ld4t3 cocsuzz`}>
<Link
href={"/"}
className={`w-element ccf5130`}>
<HtmlEmbed
code={"<picture>\n  <source\n    media=\"(prefers-color-scheme: dark)\"\n    srcset=\"https://room.taikun.blog/wp-content/uploads/2025/10/3c2aa8b99f6f0ff4fd4e6030ea1cbefa.webp\"\n  />\n  <img\n    src=\"https://room.taikun.blog/wp-content/uploads/2025/10/6ca3dcb83b74d6c99ebd9e6901792564.webp\"\n    alt=\"TAIKUN.design Logo\"\n    height=\"55\"\n  />\n</picture>\n"}
className={`w-html-embed ct4g75r cwxsh0x c9v8fxr`} />
</Link>
<NavigationMenu
className={`w-navigation-menu c1m016cw c2ww99b citip5r`}>
<NavigationMenuList
className={`w-menu-list ct4g75r cda76y0 cls9b32 c1wvty80 c1rq55y7 cocsuzz c1y1b6pq c134oyhg cfjvzvs cn40kyc cam8jm9`}>
<NavigationMenuItem
data-ws-index="0"
className={`w-menu-item`}>
<NavigationMenuLink>
<Link_1
href={"/"}
className={`w-link cj8oioq cocsuzz c1y1b6pq cco206n c1ukjave c1ry58bl claofh5 cwy62ol c1m3lanm crgs22s c14ow0v7 c1ehzuir cwljrli c157istk c1m3qbs6 caxeu2k c11r3mbb ctkw6e7 czl1oq1 cjguz9e c150yh7g c10b6v8 c1v1vg3v c18vmskg c1rk13jm c1xsk8d6 cg0iyc2 chn33ep cfdop85 cdhdmik`}>
{"ホーム"}
</Link_1>
</NavigationMenuLink>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="1"
className={`w-menu-item`}>
<NavigationMenuTrigger>
<Button
className={`w-button cj8oioq cocsuzz c1y1b6pq c157istk cco206n c1ukjave c1ry58bl claofh5 cwy62ol c1m3lanm crgs22s c14ow0v7 c1iuves6 c1m3qbs6 caxeu2k c11r3mbb ctkw6e7 c1vatvfb c1ti8bjw cfjls63 ce2zwk0 czl1oq1 cjguz9e c150yh7g c10b6v8 c1v1vg3v c18vmskg c1rk13jm c1xsk8d6 c1uxvgeo c17bypyq c1mca3li c1e4c1v5 c167vyz5 chn33ep cfdop85 c1lflt38 c1ibudx9 c1jd08ry c1wcs2ef cg3axee c1b0zwzq`}>
<Text
className={`w-text cwljrli`}>
{"ページ"}
</Text>
<Box
className={`w-box c10sqp4 ckib5o5 c1rqhae7 cind1dh c1h9nl72 c1kojgtj cjguz9e c1nh4pz cdmoyki c1v1vg3v`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m4 6 4 4 4-4\"/></svg>"}
className={`w-html-embed cwljrli`} />
</Box>
</Button>
</NavigationMenuTrigger>
<NavigationMenuContent
className={`w-menu-content c1whxnw8 c158z65t c1uz88ym cwg8145 c1eyvve6 ct4gadu c198cupr c1hp69fk`}>
<Box
className={`w-box ct4g75r c9nulm2 crt9jac`}>
<Box
className={`w-box c582q8m ct4g75r c9nulm2 crt9jac c1tjbx48`}>
<Slot>
<Fragment_1>
<NavigationMenuLink>
<Link_1
href={"/profile"}
className={`w-link cawwx57 ct4g75r c1tjbx48 c16pbu2i c134oyhg cfjvzvs c1m3qbs6 caxeu2k ctkw6e7 c11r3mbb cugs37s c1ehzuir czl1oq1 cjguz9e c150yh7g c10b6v8 c1v1vg3v cx8kb7m c1dtvkfo c1b0zwzq c822nso c12sln3g c1djmiof`}>
<Text
className={`w-text cco206n c1gy61b2 cugs37s cwljrli`}>
{"プロフィール"}
</Text>
<Paragraph
className={`w-paragraph cfhla1d c9t2x99 c1okfwr3 cco206n c6fmvsk cdypgbk cn40kyc`}>
{"私について詳しく"}
</Paragraph>
</Link_1>
</NavigationMenuLink>
<NavigationMenuLink>
<Link_1
href={"/apps"}
className={`w-link cawwx57 ct4g75r c1tjbx48 c16pbu2i c134oyhg cfjvzvs c1m3qbs6 caxeu2k ctkw6e7 c11r3mbb cugs37s c1ehzuir czl1oq1 cjguz9e c150yh7g c10b6v8 c1v1vg3v cx8kb7m c1dtvkfo c1b0zwzq c822nso c12sln3g c1djmiof`}>
<Text
className={`w-text cco206n c1gy61b2 cugs37s cwljrli`}>
{"アプリ"}
</Text>
<Paragraph
className={`w-paragraph cfhla1d c9t2x99 c1okfwr3 cco206n c6fmvsk cdypgbk cn40kyc`}>
{"私が開発しているアプリ"}
</Paragraph>
</Link_1>
</NavigationMenuLink>
<NavigationMenuLink>
<Link_1
href={"/contact"}
className={`w-link cawwx57 ct4g75r c1tjbx48 c16pbu2i c134oyhg cfjvzvs c1m3qbs6 caxeu2k ctkw6e7 c11r3mbb cugs37s c1ehzuir ckl24bg czl1oq1 cjguz9e c150yh7g c10b6v8 c1v1vg3v cx8kb7m c1dtvkfo c1b0zwzq c822nso c12sln3g c1djmiof`}>
<Text
className={`w-text cco206n c1gy61b2 cugs37s cwljrli`}>
{"お問い合わせ"}
</Text>
<Paragraph
className={`w-paragraph cfhla1d c9t2x99 c1okfwr3 cco206n c6fmvsk cdypgbk cn40kyc`}>
{"私への連絡先はこちら"}
</Paragraph>
</Link_1>
</NavigationMenuLink>
<NavigationMenuLink>
<Link_1
href={"/privacy-policy"}
className={`w-link cawwx57 ct4g75r c1tjbx48 c16pbu2i c134oyhg cfjvzvs cugs37s c1ehzuir czl1oq1 cjguz9e c150yh7g c10b6v8 c1v1vg3v c1m3qbs6 caxeu2k c11r3mbb ctkw6e7 cx8kb7m c1dtvkfo c1b0zwzq c822nso c12sln3g c1djmiof`}>
<Text
className={`w-text cco206n c1gy61b2 cugs37s cwljrli`}>
{"プライバシーポリシー"}
</Text>
<Paragraph
className={`w-paragraph cfhla1d c9t2x99 c1okfwr3 cco206n c6fmvsk cdypgbk cn40kyc`}>
{"このサイトでの個人情報の取り扱いについて"}
</Paragraph>
</Link_1>
</NavigationMenuLink>
</Fragment_1>
</Slot>
</Box>
</Box>
</NavigationMenuContent>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="2"
className={`w-menu-item`}>
<NavigationMenuTrigger>
<Button
className={`w-button cj8oioq cocsuzz c1y1b6pq c1m3qbs6 caxeu2k ctkw6e7 c11r3mbb cco206n c1ukjave c1ry58bl claofh5 cwy62ol c1m3lanm crgs22s c14ow0v7 c1iuves6 c157istk c1vatvfb c1ti8bjw cfjls63 ce2zwk0 czl1oq1 cjguz9e c150yh7g c10b6v8 c1v1vg3v c18vmskg c1rk13jm c1xsk8d6 c167vyz5 chn33ep cfdop85 c1b0zwzq c1lflt38`}>
<Text
className={`w-text cwljrli`}>
{"サイト"}
</Text>
<Box
className={`w-box c10sqp4 ckib5o5 c1rqhae7 cind1dh c1h9nl72 c1kojgtj cjguz9e c1nh4pz cdmoyki c1v1vg3v`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m4 6 4 4 4-4\"/></svg>"}
className={`w-html-embed cwljrli`} />
</Box>
</Button>
</NavigationMenuTrigger>
<NavigationMenuContent
className={`w-menu-content c1whxnw8 c158z65t c1uz88ym cwg8145 c1eyvve6 ct4gadu c198cupr c1hp69fk`}>
<Box
className={`w-box ct4g75r c9nulm2 crt9jac`}>
<Box
className={`w-box c582q8m ct4g75r c9nulm2 crt9jac c1tjbx48`}>
<Slot>
<Fragment_1>
<NavigationMenuLink>
<Link_1
href={"https://www.taikun-room.com/"}
target={"_blank"}
data-umami-event={"taikun-room-link"}
data-umami-event-region={"ja"}
className={`w-link cawwx57 ct4g75r c1tjbx48 c16pbu2i c134oyhg cfjvzvs cugs37s c1ehzuir czl1oq1 cjguz9e c150yh7g c10b6v8 c1v1vg3v c1m3qbs6 caxeu2k c11r3mbb ctkw6e7 cx8kb7m c1dtvkfo c1b0zwzq c822nso c12sln3g c1djmiof`}>
<Text
className={`w-text cco206n c1gy61b2 cugs37s cwljrli`}>
{"たいくんの部屋"}
</Text>
<Paragraph
className={`w-paragraph cfhla1d c9t2x99 c1okfwr3 cco206n c6fmvsk cdypgbk cn40kyc`}>
{"Apple関係やパソコンなどについての情報はこちら"}
</Paragraph>
</Link_1>
</NavigationMenuLink>
<NavigationMenuLink>
<Link_1
href={"https://www.taikun-life.com/"}
target={"_blank"}
data-umami-event={"taikun-life-link"}
data-umami-event-region={"ja"}
className={`w-link cawwx57 ct4g75r c1tjbx48 c16pbu2i c134oyhg cfjvzvs cugs37s c1ehzuir czl1oq1 cjguz9e c150yh7g c10b6v8 c1v1vg3v c1m3qbs6 caxeu2k c11r3mbb ctkw6e7 cx8kb7m c1dtvkfo c1b0zwzq c822nso c12sln3g c1djmiof`}>
<Text
className={`w-text cco206n c1gy61b2 cugs37s cwljrli`}>
{"たいくんの生活"}
</Text>
<Paragraph
className={`w-paragraph cfhla1d c9t2x99 c1okfwr3 cco206n c6fmvsk cdypgbk cn40kyc`}>
{"スマートホームや生活などについての情報はこちら"}
</Paragraph>
</Link_1>
</NavigationMenuLink>
<NavigationMenuLink>
<Link_1
href={"https://www.taikun.blog/"}
target={"_blank"}
data-umami-event={"taikun-blog-link"}
data-umami-event-region={"ja"}
className={`w-link cawwx57 ct4g75r c1tjbx48 c16pbu2i c134oyhg cfjvzvs cugs37s c1ehzuir czl1oq1 cjguz9e c150yh7g c10b6v8 c1v1vg3v c1m3qbs6 caxeu2k c11r3mbb ctkw6e7 cx8kb7m c1dtvkfo c1b0zwzq c822nso c12sln3g c1djmiof`}>
<Text
className={`w-text cco206n c1gy61b2 cugs37s cwljrli`}>
{"たいくんの日記"}
</Text>
<Paragraph
className={`w-paragraph cfhla1d c9t2x99 c1okfwr3 cco206n c6fmvsk cdypgbk cn40kyc`}>
{"ジャンルを問わない気軽で様々な情報についてはこちら"}
</Paragraph>
</Link_1>
</NavigationMenuLink>
<NavigationMenuLink>
<Link_1
href={"https://shop.taikun.design/"}
target={"_blank"}
data-umami-event={"taikun-shop-link"}
data-umami-event-region={"ja"}
className={`w-link cawwx57 ct4g75r c1tjbx48 c16pbu2i c134oyhg cfjvzvs cugs37s c1ehzuir czl1oq1 cjguz9e c150yh7g c10b6v8 c1v1vg3v c1m3qbs6 caxeu2k c11r3mbb ctkw6e7 cx8kb7m c1dtvkfo c1b0zwzq c822nso c12sln3g c1djmiof`}>
<Text
className={`w-text cco206n c1gy61b2 cugs37s cwljrli`}>
{"たいくんのお店"}
</Text>
<Paragraph
className={`w-paragraph cfhla1d c9t2x99 c1okfwr3 cco206n c6fmvsk cdypgbk cn40kyc`}>
{"私が販売しているものはこちら"}
</Paragraph>
</Link_1>
</NavigationMenuLink>
<NavigationMenuLink>
<Link_1
href={"https://status.taikun.blog/"}
target={"_blank"}
data-umami-event={"taikun-status-link"}
data-umami-event-region={"ja"}
className={`w-link cawwx57 ct4g75r c1tjbx48 c16pbu2i c134oyhg cfjvzvs cugs37s c1ehzuir czl1oq1 cjguz9e c150yh7g c10b6v8 c1v1vg3v c1m3qbs6 caxeu2k c11r3mbb ctkw6e7 cx8kb7m c1dtvkfo c1b0zwzq c822nso c12sln3g c1djmiof`}>
<Text
className={`w-text cco206n c1gy61b2 cugs37s cwljrli`}>
{"たいくんのウェブサイト状況"}
</Text>
<Paragraph
className={`w-paragraph cfhla1d c9t2x99 c1okfwr3 cco206n c6fmvsk cdypgbk cn40kyc`}>
{"私が運営しているウェブサイトの状況はこちら"}
</Paragraph>
</Link_1>
</NavigationMenuLink>
</Fragment_1>
</Slot>
</Box>
</Box>
</NavigationMenuContent>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="3"
className={`w-menu-item`}>
<NavigationMenuTrigger>
<Button
className={`w-button cj8oioq cocsuzz c1y1b6pq c1m3qbs6 caxeu2k ctkw6e7 c11r3mbb cco206n c1ukjave c1ry58bl claofh5 cwy62ol c1m3lanm crgs22s c14ow0v7 c1iuves6 c157istk c1vatvfb c1ti8bjw cfjls63 ce2zwk0 czl1oq1 cjguz9e c150yh7g c10b6v8 c1v1vg3v c18vmskg c1rk13jm c1xsk8d6 c167vyz5 chn33ep cfdop85 c1b0zwzq c1lflt38`}>
<Text
className={`w-text cwljrli`}>
{"Japanese"}
</Text>
<Box
className={`w-box c10sqp4 ckib5o5 c1rqhae7 cind1dh c1h9nl72 c1kojgtj cjguz9e c1nh4pz cdmoyki c1v1vg3v`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m4 6 4 4 4-4\"/></svg>"}
className={`w-html-embed cwljrli`} />
</Box>
</Button>
</NavigationMenuTrigger>
<NavigationMenuContent
className={`w-menu-content c1whxnw8 c158z65t c1uz88ym cwg8145 c1eyvve6 c1hp69fk`}>
<Box
className={`w-box ct4g75r c9nulm2 crt9jac`}>
<Box
className={`w-box c582q8m ct4g75r c9nulm2 crt9jac c1tjbx48`}>
<Slot>
<Fragment_1>
<NavigationMenuLink>
<Link_1
href={system?.pathname === '/en' ? '/' : (system?.pathname?.startsWith?.('/en') ? system?.pathname?.replace?.('/en', '') : system?.pathname)}
className={`w-link cawwx57 ct4g75r c1tjbx48 c16pbu2i c134oyhg cfjvzvs cugs37s c1ehzuir czl1oq1 cjguz9e c150yh7g c10b6v8 c1v1vg3v c1m3qbs6 caxeu2k c11r3mbb ctkw6e7 cx8kb7m c1dtvkfo c1b0zwzq c822nso c12sln3g c1djmiof`}>
<Text
className={`w-text cco206n c1gy61b2 cugs37s cwljrli`}>
{"Japanese (日本語)"}
</Text>
</Link_1>
</NavigationMenuLink>
<NavigationMenuLink>
<Link_1
href={system?.pathname?.startsWith?.('/en') ? system?.pathname : (system?.pathname === '/' ? '/en' : '/en' + system?.pathname)}
className={`w-link cawwx57 ct4g75r c1tjbx48 c16pbu2i c134oyhg cfjvzvs cugs37s c1ehzuir czl1oq1 cjguz9e c150yh7g c10b6v8 c1v1vg3v c1m3qbs6 caxeu2k c11r3mbb ctkw6e7 cx8kb7m c1dtvkfo c1b0zwzq c822nso c12sln3g c1djmiof`}>
<Text
className={`w-text cco206n c1gy61b2 cugs37s cwljrli`}>
{"English"}
</Text>
</Link_1>
</NavigationMenuLink>
</Fragment_1>
</Slot>
</Box>
</Box>
</NavigationMenuContent>
</NavigationMenuItem>
</NavigationMenuList>
<Box
className={`w-box cv8t2l7 c1secrwn ct4g75r c1y1b6pq c1xa9i4n`}>
<NavigationMenuViewport
className={`w-menu-viewport c1m016cw cidpb5r cfhla1d c9t2x99 cs7860o c1uyh9k6 c1cjsarj chgvdfb cdyorid c1mbw45i c1rpzhwl c16gohy0 cv37mi0 c1mz09bo c1yl218 cjguz9e c150yh7g c10b6v8 c1v1vg3v`} />
</Box>
</NavigationMenu>
<NavigationMenu
className={`w-navigation-menu c1m016cw c2ww99b c1q58oy7 c1gr52yy`}>
<NavigationMenuList
className={`w-menu-list ct4g75r cda76y0 cls9b32 c1wvty80 c1rq55y7 cocsuzz c1y1b6pq c134oyhg cfjvzvs cn40kyc cam8jm9`}>
<NavigationMenuItem
data-ws-index="0"
className={`w-menu-item`}>
<NavigationMenuTrigger>
<Button
className={`w-button cj8oioq cocsuzz c1y1b6pq c1m3qbs6 caxeu2k ctkw6e7 c11r3mbb cco206n c1ukjave c1ry58bl claofh5 cwy62ol c1m3lanm crgs22s c14ow0v7 c1iuves6 c157istk c1vatvfb c1ti8bjw cfjls63 ce2zwk0 czl1oq1 cjguz9e c150yh7g c10b6v8 c1v1vg3v c18vmskg c1rk13jm c1xsk8d6 c167vyz5 chn33ep cfdop85 c1b0zwzq c1lflt38`}>
<Text
className={`w-text cwljrli`}>
{"JA"}
</Text>
<Box
className={`w-box c10sqp4 ckib5o5 c1rqhae7 cind1dh c1h9nl72 c1kojgtj cjguz9e c1nh4pz cdmoyki c1v1vg3v`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m4 6 4 4 4-4\"/></svg>"}
className={`w-html-embed cwljrli`} />
</Box>
</Button>
</NavigationMenuTrigger>
<NavigationMenuContent
className={`w-menu-content c1whxnw8 c158z65t c1uz88ym cwg8145 c1eyvve6 c1hp69fk`}>
<Box
className={`w-box ct4g75r c9nulm2 crt9jac`}>
<Box
className={`w-box c582q8m ct4g75r c9nulm2 crt9jac c1tjbx48`}>
<Slot>
<Fragment_1>
<NavigationMenuLink>
<Link_1
href={system?.pathname === '/en' ? '/' : (system?.pathname?.startsWith?.('/en') ? system?.pathname?.replace?.('/en', '') : system?.pathname)}
className={`w-link cawwx57 ct4g75r c1tjbx48 c16pbu2i c134oyhg cfjvzvs cugs37s c1ehzuir czl1oq1 cjguz9e c150yh7g c10b6v8 c1v1vg3v c1m3qbs6 caxeu2k c11r3mbb ctkw6e7 cx8kb7m c1dtvkfo c1b0zwzq c822nso c12sln3g c1djmiof`}>
<Text
className={`w-text cco206n c1gy61b2 cugs37s cwljrli`}>
{"Japanese (日本語)"}
</Text>
</Link_1>
</NavigationMenuLink>
<NavigationMenuLink>
<Link_1
href={system?.pathname?.startsWith?.('/en') ? system?.pathname : (system?.pathname === '/' ? '/en' : '/en' + system?.pathname)}
className={`w-link cawwx57 ct4g75r c1tjbx48 c16pbu2i c134oyhg cfjvzvs cugs37s c1ehzuir czl1oq1 cjguz9e c150yh7g c10b6v8 c1v1vg3v c1m3qbs6 caxeu2k c11r3mbb ctkw6e7 cx8kb7m c1dtvkfo c1b0zwzq c822nso c12sln3g c1djmiof`}>
<Text
className={`w-text cco206n c1gy61b2 cugs37s cwljrli`}>
{"English"}
</Text>
</Link_1>
</NavigationMenuLink>
</Fragment_1>
</Slot>
</Box>
</Box>
</NavigationMenuContent>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="1"
className={`w-menu-item`}>
<NavigationMenuTrigger>
<Button
aria-label={"ナビゲーションメニュー"}
className={`w-button cj8oioq cocsuzz c1y1b6pq c1tivusm cco206n c1ukjave c1ry58bl claofh5 cubyhfd c1m3qbs6 caxeu2k c11r3mbb ctkw6e7 c1vatvfb c1ti8bjw cfjls63 ce2zwk0 czl1oq1 cjguz9e c150yh7g c10b6v8 c1v1vg3v cndp0st c1ro71nd c17tcyw3 c18vmskg c1rk13jm c1xsk8d6 c1uxvgeo c17bypyq c1mca3li c1e4c1v5 cmmgvpm chn33ep cfdop85 c1lflt38 c1ibudx9 c1jd08ry c1wcs2ef cg3axee clesgb5`}>
<Box
className={`w-box c1rqhae7 cind1dh c1h9nl72`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"#ffffff\" d=\"M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z\"/></svg>"}
className={`w-html-embed cwljrli`} />
</Box>
</Button>
</NavigationMenuTrigger>
<NavigationMenuContent
className={`w-menu-content c1whxnw8 c158z65t c1uz88ym cwg8145 c1eyvve6 ct4gadu c198cupr c1hp69fk`}>
<Box
className={`w-box ct4g75r c9nulm2 crt9jac`}>
<Box
className={`w-box c582q8m ct4g75r c9nulm2 crt9jac c1tjbx48`}>
<Slot>
<Fragment_1>
<NavigationMenuLink>
<Link_1
href={"/profile"}
className={`w-link cawwx57 ct4g75r c1tjbx48 c16pbu2i c134oyhg cfjvzvs c1m3qbs6 caxeu2k ctkw6e7 c11r3mbb cugs37s c1ehzuir czl1oq1 cjguz9e c150yh7g c10b6v8 c1v1vg3v cx8kb7m c1dtvkfo c1b0zwzq c822nso c12sln3g c1djmiof`}>
<Text
className={`w-text cco206n c1gy61b2 cugs37s cwljrli`}>
{"プロフィール"}
</Text>
<Paragraph
className={`w-paragraph cfhla1d c9t2x99 c1okfwr3 cco206n c6fmvsk cdypgbk cn40kyc`}>
{"私について詳しく"}
</Paragraph>
</Link_1>
</NavigationMenuLink>
<NavigationMenuLink>
<Link_1
href={"/apps"}
className={`w-link cawwx57 ct4g75r c1tjbx48 c16pbu2i c134oyhg cfjvzvs c1m3qbs6 caxeu2k ctkw6e7 c11r3mbb cugs37s c1ehzuir czl1oq1 cjguz9e c150yh7g c10b6v8 c1v1vg3v cx8kb7m c1dtvkfo c1b0zwzq c822nso c12sln3g c1djmiof`}>
<Text
className={`w-text cco206n c1gy61b2 cugs37s cwljrli`}>
{"アプリ"}
</Text>
<Paragraph
className={`w-paragraph cfhla1d c9t2x99 c1okfwr3 cco206n c6fmvsk cdypgbk cn40kyc`}>
{"私が開発しているアプリ"}
</Paragraph>
</Link_1>
</NavigationMenuLink>
<NavigationMenuLink>
<Link_1
href={"/contact"}
className={`w-link cawwx57 ct4g75r c1tjbx48 c16pbu2i c134oyhg cfjvzvs c1m3qbs6 caxeu2k ctkw6e7 c11r3mbb cugs37s c1ehzuir ckl24bg czl1oq1 cjguz9e c150yh7g c10b6v8 c1v1vg3v cx8kb7m c1dtvkfo c1b0zwzq c822nso c12sln3g c1djmiof`}>
<Text
className={`w-text cco206n c1gy61b2 cugs37s cwljrli`}>
{"お問い合わせ"}
</Text>
<Paragraph
className={`w-paragraph cfhla1d c9t2x99 c1okfwr3 cco206n c6fmvsk cdypgbk cn40kyc`}>
{"私への連絡先はこちら"}
</Paragraph>
</Link_1>
</NavigationMenuLink>
<NavigationMenuLink>
<Link_1
href={"/privacy-policy"}
className={`w-link cawwx57 ct4g75r c1tjbx48 c16pbu2i c134oyhg cfjvzvs cugs37s c1ehzuir czl1oq1 cjguz9e c150yh7g c10b6v8 c1v1vg3v c1m3qbs6 caxeu2k c11r3mbb ctkw6e7 cx8kb7m c1dtvkfo c1b0zwzq c822nso c12sln3g c1djmiof`}>
<Text
className={`w-text cco206n c1gy61b2 cugs37s cwljrli`}>
{"プライバシーポリシー"}
</Text>
<Paragraph
className={`w-paragraph cfhla1d c9t2x99 c1okfwr3 cco206n c6fmvsk cdypgbk cn40kyc`}>
{"このサイトでの個人情報の取り扱いについて"}
</Paragraph>
</Link_1>
</NavigationMenuLink>
</Fragment_1>
</Slot>
<Slot>
<Fragment_1>
<NavigationMenuLink>
<Link_1
href={"https://www.taikun-room.com/"}
target={"_blank"}
data-umami-event={"taikun-room-link"}
data-umami-event-region={"ja"}
className={`w-link cawwx57 ct4g75r c1tjbx48 c16pbu2i c134oyhg cfjvzvs cugs37s c1ehzuir czl1oq1 cjguz9e c150yh7g c10b6v8 c1v1vg3v c1m3qbs6 caxeu2k c11r3mbb ctkw6e7 cx8kb7m c1dtvkfo c1b0zwzq c822nso c12sln3g c1djmiof`}>
<Text
className={`w-text cco206n c1gy61b2 cugs37s cwljrli`}>
{"たいくんの部屋"}
</Text>
<Paragraph
className={`w-paragraph cfhla1d c9t2x99 c1okfwr3 cco206n c6fmvsk cdypgbk cn40kyc`}>
{"Apple関係やパソコンなどについての情報はこちら"}
</Paragraph>
</Link_1>
</NavigationMenuLink>
<NavigationMenuLink>
<Link_1
href={"https://www.taikun-life.com/"}
target={"_blank"}
data-umami-event={"taikun-life-link"}
data-umami-event-region={"ja"}
className={`w-link cawwx57 ct4g75r c1tjbx48 c16pbu2i c134oyhg cfjvzvs cugs37s c1ehzuir czl1oq1 cjguz9e c150yh7g c10b6v8 c1v1vg3v c1m3qbs6 caxeu2k c11r3mbb ctkw6e7 cx8kb7m c1dtvkfo c1b0zwzq c822nso c12sln3g c1djmiof`}>
<Text
className={`w-text cco206n c1gy61b2 cugs37s cwljrli`}>
{"たいくんの生活"}
</Text>
<Paragraph
className={`w-paragraph cfhla1d c9t2x99 c1okfwr3 cco206n c6fmvsk cdypgbk cn40kyc`}>
{"スマートホームや生活などについての情報はこちら"}
</Paragraph>
</Link_1>
</NavigationMenuLink>
<NavigationMenuLink>
<Link_1
href={"https://www.taikun.blog/"}
target={"_blank"}
data-umami-event={"taikun-blog-link"}
data-umami-event-region={"ja"}
className={`w-link cawwx57 ct4g75r c1tjbx48 c16pbu2i c134oyhg cfjvzvs cugs37s c1ehzuir czl1oq1 cjguz9e c150yh7g c10b6v8 c1v1vg3v c1m3qbs6 caxeu2k c11r3mbb ctkw6e7 cx8kb7m c1dtvkfo c1b0zwzq c822nso c12sln3g c1djmiof`}>
<Text
className={`w-text cco206n c1gy61b2 cugs37s cwljrli`}>
{"たいくんの日記"}
</Text>
<Paragraph
className={`w-paragraph cfhla1d c9t2x99 c1okfwr3 cco206n c6fmvsk cdypgbk cn40kyc`}>
{"ジャンルを問わない気軽で様々な情報についてはこちら"}
</Paragraph>
</Link_1>
</NavigationMenuLink>
<NavigationMenuLink>
<Link_1
href={"https://shop.taikun.design/"}
target={"_blank"}
data-umami-event={"taikun-shop-link"}
data-umami-event-region={"ja"}
className={`w-link cawwx57 ct4g75r c1tjbx48 c16pbu2i c134oyhg cfjvzvs cugs37s c1ehzuir czl1oq1 cjguz9e c150yh7g c10b6v8 c1v1vg3v c1m3qbs6 caxeu2k c11r3mbb ctkw6e7 cx8kb7m c1dtvkfo c1b0zwzq c822nso c12sln3g c1djmiof`}>
<Text
className={`w-text cco206n c1gy61b2 cugs37s cwljrli`}>
{"たいくんのお店"}
</Text>
<Paragraph
className={`w-paragraph cfhla1d c9t2x99 c1okfwr3 cco206n c6fmvsk cdypgbk cn40kyc`}>
{"私が販売しているものはこちら"}
</Paragraph>
</Link_1>
</NavigationMenuLink>
<NavigationMenuLink>
<Link_1
href={"https://status.taikun.blog/"}
target={"_blank"}
data-umami-event={"taikun-status-link"}
data-umami-event-region={"ja"}
className={`w-link cawwx57 ct4g75r c1tjbx48 c16pbu2i c134oyhg cfjvzvs cugs37s c1ehzuir czl1oq1 cjguz9e c150yh7g c10b6v8 c1v1vg3v c1m3qbs6 caxeu2k c11r3mbb ctkw6e7 cx8kb7m c1dtvkfo c1b0zwzq c822nso c12sln3g c1djmiof`}>
<Text
className={`w-text cco206n c1gy61b2 cugs37s cwljrli`}>
{"たいくんのウェブサイト状況"}
</Text>
<Paragraph
className={`w-paragraph cfhla1d c9t2x99 c1okfwr3 cco206n c6fmvsk cdypgbk cn40kyc`}>
{"私が運営しているウェブサイトの状況はこちら"}
</Paragraph>
</Link_1>
</NavigationMenuLink>
</Fragment_1>
</Slot>
</Box>
</Box>
</NavigationMenuContent>
</NavigationMenuItem>
</NavigationMenuList>
<Box
className={`w-box cv8t2l7 ct4g75r c1y1b6pq c1secrwn c1xa9i4n c1d3tk8j c9djcgv`}>
<NavigationMenuViewport
className={`w-menu-viewport c1m016cw cidpb5r cfhla1d c9t2x99 cs7860o c1uyh9k6 c1cjsarj chgvdfb cdyorid c1mbw45i c1rpzhwl c16gohy0 cv37mi0 c1mz09bo c1yl218 cjguz9e c150yh7g c10b6v8 c1v1vg3v`} />
</Box>
</NavigationMenu>
</div>
</header>
</Fragment_1>
</Slot>
<div
className={`w-element c11jmddu ct4g75r c1tjbx48 cb0rz9d cpgk30y`}>
<div
className={`w-element c11jmddu ct4g75r cocsuzz cwy62ol c1n88sfr crgs22s c1dix9sw c1y1b6pq c126u88p c4hsupa c11uniw5 c1gb4fx1`}>
<AnimateChildren
action={{"type":"view","animations":[{"name":"New Animation","description":"Create a new animation.","keyframes":[{"offset":1,"styles":{"translate":{"type":"tuple","value":[{"type":"unit","unit":"px","value":0},{"type":"unit","unit":"vh","value":35}]},"scale":{"type":"tuple","value":[{"type":"unit","unit":"%","value":80},{"type":"unit","unit":"%","value":80}]}}}],"timing":{"easing":"linear","fill":"both","rangeStart":["contain",{"type":"unit","value":50,"unit":"%"}],"rangeEnd":["cover",{"type":"unit","value":100,"unit":"%"}]}}],"isPinned":true}}>
<div
className={`w-element c16qpq94 c5n0g1o c1wbymx1 css4u8g cyr6vdj cg1hler cocsuzz c1y1b6pq ckcx4zm c1g5fj4a clap96c c190be04 c1a34am0 cyeq9zr c17k0e6m c11h7cy5 cppwozy coodrml c1aesd75 c16hvtgk c117eu1a cpotu89 c18koysr c184v0fa`}>
<Image
src={"/assets/taikun-design-full-white_4x_YHVfY2SEJ-AMoe3JxGCsp.webp"}
width={1312}
height={324}
alt={""}
loading={"eager"}
fetchPriority={"high"}
className={`w-image cfgut53 ctgvzkp c18y60fr c11jmddu c19si1a0`} />
</div>
</AnimateChildren>
<AnimateChildren
action={{"type":"view","axis":"y","animations":[{"name":"Fade Out","description":"Fade out the element as it scrolls out of view.","keyframes":[{"offset":0,"styles":{"filter":{"type":"tuple","value":[{"type":"function","name":"blur","args":{"type":"tuple","value":[{"type":"unit","unit":"px","value":0}]}}]}}},{"offset":1,"styles":{"opacity":{"type":"unit","unit":"%","value":0},"filter":{"type":"tuple","value":[{"type":"function","name":"blur","args":{"type":"tuple","value":[{"type":"unit","unit":"px","value":32}]}}]}}}],"timing":{"easing":"linear","fill":"backwards","rangeStart":["contain",{"type":"unit","value":0,"unit":"%"}],"rangeEnd":["cover",{"type":"unit","value":700,"unit":"px"}]}}],"insetStart":{"type":"unit","value":50,"unit":"%"},"insetEnd":{"type":"unit","value":64,"unit":"px"},"isPinned":true,"debug":false}}>
<div
className={`w-element cv8t2l7 c5zod9f ct4g75r c1tjbx48 cocsuzz c1p61p2a czvf8rz c6owbbv c1nrkz9b`}>
<Box
className={`w-box c1pmxdes ch32ctd c1h9nl72 c16n9ye3`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"currentColor\" d=\"M297.4 169.4C309.9 156.9 330.2 156.9 342.7 169.4L534.7 361.4C547.2 373.9 547.2 394.2 534.7 406.7C522.2 419.2 501.9 419.2 489.4 406.7L320 237.3L150.6 406.6C138.1 419.1 117.8 419.1 105.3 406.6C92.8 394.1 92.8 373.8 105.3 361.3L297.3 169.3z\"/></svg>"}
className={`w-html-embed`} />
</Box>
<p
className={`w-element cc0vgw3 c1tr50rt`}>
{"スクロールして詳細を見る"}
</p>
</div>
</AnimateChildren>
</div>
<div
className={`w-element c1n88sfr c1dix9sw ct4g75r c1tjbx48 cocsuzz c1sghiiy cfnahqf c15vm1iq crzadsa cqb0ii c11uniw5 c1gb4fx1 c3zc8ga cc2lcwm`}>
<div
className={`w-element c11jmddu c1abhfw2 ct4g75r c1tjbx48 c9nulm2 crt9jac`}>
<AnimateChildren
action={{"type":"view","animations":[{"name":"Parallax In","description":"Parallax the element as it scrolls into the view.","keyframes":[{"offset":0,"styles":{"translate":{"type":"tuple","value":[{"type":"unit","unit":"number","value":0},{"type":"unit","unit":"px","value":300}]}}}],"timing":{"easing":"ease","fill":"backwards","duration":{"type":"unit","value":1,"unit":"s"},"rangeStart":["cover",{"type":"unit","value":0,"unit":"%"}],"rangeEnd":["cover",{"type":"unit","value":100,"unit":"%"}]}}],"insetEnd":{"type":"keyword","value":"auto"},"isPinned":true}}>
<div
className={`w-element c1npwdyc c1wckod3 ct4g75r c3if8z9 c1tjbx48 c1p61p2a czvf8rz c11h7cy5 coodrml c1aesd75`}>
<h2
id={"profile"}
className={`w-element cc0vgw3 c1tr50rt c1nrkz9b c1qfww1d cab9hk`}>
{"プロフィール"}
</h2>
<p
className={`w-element cc0vgw3 c1tr50rt c1nrkz9b c1113fza c5eec9w`}>
{"私の自己紹介"}
</p>
</div>
<Link
href={"/profile"}
className={`w-element ct4g75r c1ehzuir c1c6hbjj cpqya63 c1tje76w c12kbdwo c1iczteg csu86aj c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v c11h7cy5 cr8uxk4 c1xvoxib c1glxk1h c3ojm4n c9zpm68 ${"button-link"}`}>
<div
className={`w-element crosfk7 c1f1jont c58ziie clap96c c190be04 ct4g75r c3binlp c1p61p2a czvf8rz c11jmddu c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v cbhth2e cky4y32 cdd73g8 cuft8f1 c1a6qjea`}>
<div
className={`w-element ct4g75r crt9jac c9nulm2 c11jmddu c1w59rtg`}>
<Slot>
<Fragment_1>
<div
className={`w-element c16n9ye3 c1h9nl72 ct4g75r c1tjbx48 c1y1b6pq`}>
<Image
src={"/assets/P1002900-Enhanced-NR_hD6jPnELnUBh0bg4_Ycyw.webp"}
width={1775}
height={1775}
alt={""}
loading={"lazy"}
className={`w-image c1uf8c0t cuyh25w co7usez c782zb9 c1q3g2hw c1m8fxnl c1d0k284 cysmikg cnhgshd`} />
<Image
src={"/assets/P1002900-Enhanced-NR_hD6jPnELnUBh0bg4_Ycyw.webp"}
width={1775}
height={1775}
alt={""}
loading={"lazy"}
className={`w-image c1uf8c0t cuyh25w co7usez c782zb9 c1q3g2hw c1m8fxnl c1d0k284 c1m016cw c1dt2aby cqu6eha`} />
</div>
</Fragment_1>
</Slot>
<div
className={`w-element c19si1a0 ct4g75r c1tjbx48 c1jprj79 c9hg2hx c1b6k19k c1y1b6pq c11jmddu`}>
<p
className={`w-element cc0vgw3 c1tr50rt c5eec9w`}>
{"私の名前は"}
</p>
<div
className={`w-element ct4g75r c1ku7qgc czvf8rz c1yafmq3 c1b6k19k`}>
<p
className={`w-element cc0vgw3 c1tr50rt cab9hk c1gy61b2 c166ei3g`}>
{"今浦 大雅"}
</p>
<p
className={`w-element cc0vgw3 c1tr50rt c5eec9w c166ei3g`}>
{"です。"}
</p>
</div>
<p
className={`w-element cg5mfwo c1tr50rt ckagbgx ctv6apc`}>
{"Apple愛好家 / コレクター、グラフィックデザイナー、ブロガー など..."}
</p>
</div>
</div>
<Box
className={`w-box c19si1a0 c1fhmk8y c1h9nl72 c16n9ye3 ct4g75r c13akerz c1mvilga c1yle5ob c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v ${"button-icon"}`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"currentColor\" d=\"M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z\"/></svg>"}
className={`w-html-embed`} />
</Box>
</div>
<HtmlEmbed
code={"<style>\n  .button-link:hover .button-icon {\n    translate: 8px 0px 0px;\n  }\n</style>"}
executeScriptOnCanvas={true}
className={`w-html-embed`} />
</Link>
</AnimateChildren>
</div>
<div
className={`w-element c11jmddu c1abhfw2 ct4g75r c1tjbx48 c9nulm2 crt9jac`}>
<AnimateChildren
action={{"type":"view","animations":[{"name":"Parallax In","description":"Parallax the element as it scrolls into the view.","keyframes":[{"offset":0,"styles":{"translate":{"type":"tuple","value":[{"type":"unit","unit":"number","value":0},{"type":"unit","unit":"px","value":300}]}}}],"timing":{"easing":"ease","fill":"backwards","duration":{"type":"unit","value":1,"unit":"s"},"rangeStart":["cover",{"type":"unit","value":0,"unit":"%"}],"rangeEnd":["cover",{"type":"unit","value":100,"unit":"%"}]}}],"insetEnd":{"type":"keyword","value":"auto"},"isPinned":true}}>
<div
className={`w-element c1npwdyc c1wckod3 ct4g75r c3if8z9 c1tjbx48 c1p61p2a czvf8rz c11h7cy5 coodrml c1aesd75`}>
<h2
id={"blogs"}
className={`w-element cc0vgw3 c1tr50rt c1nrkz9b c1qfww1d cab9hk`}>
{"ブログ"}
</h2>
<p
className={`w-element cc0vgw3 c1tr50rt c1nrkz9b c1113fza c5eec9w`}>
{"私が運営しているブログ"}
</p>
</div>
<Link
href={"https://www.taikun-room.com/"}
target={"_blank"}
data-umami-event={"taikun-room-link"}
data-umami-event-region={"ja"}
className={`w-element ct4g75r c1ehzuir c1c6hbjj cpqya63 c1tje76w c12kbdwo c1iczteg csu86aj c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v c11h7cy5 cr8uxk4 c1xvoxib c1glxk1h c3ojm4n c9zpm68`}>
<div
className={`w-element crosfk7 c1f1jont c58ziie clap96c c190be04 ct4g75r c3binlp c1p61p2a czvf8rz c11jmddu c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v cbhth2e cky4y32 cdd73g8 cuft8f1 c1a6qjea`}>
<div
className={`w-element ct4g75r crt9jac c9nulm2 c11jmddu c1w59rtg`}>
<div
className={`w-element c16n9ye3 c1h9nl72 ct4g75r c1tjbx48 c1y1b6pq c5048pw`}>
<HtmlEmbed
code={"<picture>\n  <source\n    media=\"(prefers-color-scheme: dark)\"\n    srcset=\"https://room.taikun.blog/wp-content/uploads/2025/05/taikun-room-mini-white.png\"\n  />\n  <img\n    src=\"https://room.taikun.blog/wp-content/uploads/2025/05/taikun-room-mini.png\"\n    alt=\"\"\n    width=\"128\"\n  />\n</picture>\n"}
className={`w-html-embed ct4g75r c1fgf442 ctgvzkp c1uf8c0t cocsuzz c18o0bzn cg5mfwo cnhgshd cawvggl`} />
<HtmlEmbed
code={"<picture>\n  <source\n    media=\"(prefers-color-scheme: dark)\"\n    srcset=\"https://room.taikun.blog/wp-content/uploads/2025/05/taikun-room-mini-white.png\"\n  />\n  <img\n    src=\"https://room.taikun.blog/wp-content/uploads/2025/05/taikun-room-mini.png\"\n    alt=\"\"\n    width=\"128\"\n  />\n</picture>\n"}
className={`w-html-embed ct4g75r c1fgf442 ctgvzkp c1uf8c0t cocsuzz c1m016cw ca1kfbf cxel989`} />
</div>
<div
className={`w-element c19si1a0 ct4g75r c1tjbx48 c1jprj79 c9hg2hx c1b6k19k c1y1b6pq c11jmddu`}>
<p
className={`w-element cc0vgw3 c1tr50rt c5eec9w`}>
{"www.taikun-room.com"}
</p>
<h3
className={`w-element cab9hk cc0vgw3 c1tr50rt c1gy61b2 cp2eoky`}>
{"たいくんの部屋"}
</h3>
<p
className={`w-element cg5mfwo c1tr50rt ckagbgx ctv6apc`}>
{"Apple製品に関するマニアックな情報を、誰よりも詳しくわかりやすく解説したり、おすすめのアプリを紹介したりしています。"}
</p>
</div>
</div>
<Box
className={`w-box c19si1a0 ch32ctd c1h9nl72 c16n9ye3 ct4g75r c13akerz c1mvilga`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"currentColor\" d=\"M384 64C366.3 64 352 78.3 352 96C352 113.7 366.3 128 384 128L466.7 128L265.3 329.4C252.8 341.9 252.8 362.2 265.3 374.7C277.8 387.2 298.1 387.2 310.6 374.7L512 173.3L512 256C512 273.7 526.3 288 544 288C561.7 288 576 273.7 576 256L576 96C576 78.3 561.7 64 544 64L384 64zM144 160C99.8 160 64 195.8 64 240L64 496C64 540.2 99.8 576 144 576L400 576C444.2 576 480 540.2 480 496L480 416C480 398.3 465.7 384 448 384C430.3 384 416 398.3 416 416L416 496C416 504.8 408.8 512 400 512L144 512C135.2 512 128 504.8 128 496L128 240C128 231.2 135.2 224 144 224L224 224C241.7 224 256 209.7 256 192C256 174.3 241.7 160 224 160L144 160z\"/></svg>"}
className={`w-html-embed`} />
</Box>
</div>
</Link>
<Link
href={"https://www.taikun-life.com/"}
target={"_blank"}
data-umami-event={"taikun-life-link"}
data-umami-event-region={"ja"}
className={`w-element ct4g75r c1ehzuir c1c6hbjj cpqya63 c1tje76w c12kbdwo c1iczteg csu86aj c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v c11h7cy5 cr8uxk4 c1xvoxib c1glxk1h c3ojm4n c9zpm68`}>
<div
className={`w-element crosfk7 c1f1jont c58ziie clap96c c190be04 ct4g75r c3binlp c1p61p2a czvf8rz c11jmddu c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v cbhth2e cky4y32 cdd73g8 cuft8f1 c1a6qjea`}>
<div
className={`w-element ct4g75r crt9jac c9nulm2 c11jmddu c1w59rtg`}>
<div
className={`w-element c16n9ye3 c1h9nl72 ct4g75r c1tjbx48 c1y1b6pq c5048pw`}>
<HtmlEmbed
code={"<picture>\n  <source\n    media=\"(prefers-color-scheme: dark)\"\n    srcset=\"https://life.taikun.blog/wp-content/uploads/2025/05/taikun-life-mini-white.png\"\n  />\n  <img\n    src=\"https://life.taikun.blog/wp-content/uploads/2025/05/taikun-life-mini.png\"\n    alt=\"\"\n    width=\"128\"\n  />\n</picture>\n"}
className={`w-html-embed ct4g75r c1fgf442 ctgvzkp c1uf8c0t cocsuzz cysmikg cg5mfwo cnhgshd cawvggl`} />
<HtmlEmbed
code={"<picture>\n  <source\n    media=\"(prefers-color-scheme: dark)\"\n    srcset=\"https://life.taikun.blog/wp-content/uploads/2025/05/taikun-life-mini-white.png\"\n  />\n  <img\n    src=\"https://life.taikun.blog/wp-content/uploads/2025/05/taikun-life-mini.png\"\n    alt=\"\"\n    width=\"128\"\n  />\n</picture>\n"}
className={`w-html-embed ct4g75r c1fgf442 ctgvzkp c1uf8c0t cocsuzz c1m016cw ca1kfbf cxel989`} />
</div>
<div
className={`w-element c19si1a0 ct4g75r c1tjbx48 c1jprj79 c9hg2hx c1b6k19k c1y1b6pq c11jmddu`}>
<p
className={`w-element cc0vgw3 c1tr50rt c5eec9w`}>
{"www.taikun-life.com"}
</p>
<h3
className={`w-element cab9hk cc0vgw3 c1tr50rt c1gy61b2 cp2eoky`}>
{"たいくんの生活"}
</h3>
<p
className={`w-element cg5mfwo c1tr50rt ckagbgx ctv6apc`}>
{"スマートホームに関する情報や生活に関する情報を、マニアックな視点・身体障害者からの目線で詳しくお届けしています。"}
</p>
</div>
</div>
<Box
className={`w-box c19si1a0 ch32ctd c1h9nl72 c16n9ye3 ct4g75r c13akerz c1mvilga`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"currentColor\" d=\"M384 64C366.3 64 352 78.3 352 96C352 113.7 366.3 128 384 128L466.7 128L265.3 329.4C252.8 341.9 252.8 362.2 265.3 374.7C277.8 387.2 298.1 387.2 310.6 374.7L512 173.3L512 256C512 273.7 526.3 288 544 288C561.7 288 576 273.7 576 256L576 96C576 78.3 561.7 64 544 64L384 64zM144 160C99.8 160 64 195.8 64 240L64 496C64 540.2 99.8 576 144 576L400 576C444.2 576 480 540.2 480 496L480 416C480 398.3 465.7 384 448 384C430.3 384 416 398.3 416 416L416 496C416 504.8 408.8 512 400 512L144 512C135.2 512 128 504.8 128 496L128 240C128 231.2 135.2 224 144 224L224 224C241.7 224 256 209.7 256 192C256 174.3 241.7 160 224 160L144 160z\"/></svg>"}
className={`w-html-embed`} />
</Box>
</div>
</Link>
<Link
href={"https://www.taikun.blog/"}
target={"_blank"}
data-umami-event={"taikun-blog-link"}
data-umami-event-region={"ja"}
className={`w-element ct4g75r c1ehzuir c1c6hbjj cpqya63 c1tje76w c12kbdwo c1iczteg csu86aj c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v c11h7cy5 cr8uxk4 c1xvoxib c1glxk1h c3ojm4n c9zpm68`}>
<div
className={`w-element crosfk7 c1f1jont c58ziie clap96c c190be04 ct4g75r c3binlp c1p61p2a czvf8rz c11jmddu c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v cbhth2e cky4y32 cdd73g8 cuft8f1 c1a6qjea`}>
<div
className={`w-element ct4g75r crt9jac c9nulm2 c11jmddu c1w59rtg`}>
<div
className={`w-element c16n9ye3 c1h9nl72 ct4g75r c1tjbx48 c1y1b6pq c5048pw`}>
<HtmlEmbed
code={"<picture>\n  <source\n    media=\"(prefers-color-scheme: dark)\"\n    srcset=\"https://blog.taikun.blog/wp-content/uploads/2025/09/taikun-blog-mini-white.png\"\n  />\n  <img\n    src=\"https://blog.taikun.blog/wp-content/uploads/2025/09/taikun-blog-mini.png\"\n    alt=\"\"\n    width=\"128\"\n  />\n</picture>\n"}
className={`w-html-embed ct4g75r c1fgf442 ctgvzkp c1uf8c0t cocsuzz c18o0bzn cg5mfwo cnhgshd c1jt0nst`} />
<HtmlEmbed
code={"<picture>\n  <source\n    media=\"(prefers-color-scheme: dark)\"\n    srcset=\"https://blog.taikun.blog/wp-content/uploads/2025/09/taikun-blog-mini-white.png\"\n  />\n  <img\n    src=\"https://blog.taikun.blog/wp-content/uploads/2025/09/taikun-blog-mini.png\"\n    alt=\"\"\n    width=\"128\"\n  />\n</picture>\n"}
className={`w-html-embed ct4g75r c1fgf442 ctgvzkp c1uf8c0t cocsuzz c1m016cw ca1kfbf cxel989`} />
</div>
<div
className={`w-element c19si1a0 ct4g75r c1tjbx48 c1jprj79 c9hg2hx c1b6k19k c1y1b6pq c11jmddu`}>
<p
className={`w-element cc0vgw3 c1tr50rt c5eec9w`}>
{"www.taikun.blog"}
</p>
<h3
className={`w-element cab9hk cc0vgw3 c1tr50rt c1gy61b2 cp2eoky`}>
{"たいくんの日記"}
</h3>
<p
className={`w-element cg5mfwo c1tr50rt ckagbgx ctv6apc`}>
{"私が感じたことや共有したいこと、ふと思いついたことなど、ジャンルを問わず、様々な情報をゆる〜く発信しています。"}
</p>
</div>
</div>
<Box
className={`w-box c19si1a0 ch32ctd c1h9nl72 c16n9ye3 ct4g75r c13akerz c1mvilga`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"currentColor\" d=\"M384 64C366.3 64 352 78.3 352 96C352 113.7 366.3 128 384 128L466.7 128L265.3 329.4C252.8 341.9 252.8 362.2 265.3 374.7C277.8 387.2 298.1 387.2 310.6 374.7L512 173.3L512 256C512 273.7 526.3 288 544 288C561.7 288 576 273.7 576 256L576 96C576 78.3 561.7 64 544 64L384 64zM144 160C99.8 160 64 195.8 64 240L64 496C64 540.2 99.8 576 144 576L400 576C444.2 576 480 540.2 480 496L480 416C480 398.3 465.7 384 448 384C430.3 384 416 398.3 416 416L416 496C416 504.8 408.8 512 400 512L144 512C135.2 512 128 504.8 128 496L128 240C128 231.2 135.2 224 144 224L224 224C241.7 224 256 209.7 256 192C256 174.3 241.7 160 224 160L144 160z\"/></svg>"}
className={`w-html-embed`} />
</Box>
</div>
</Link>
</AnimateChildren>
</div>
<div
className={`w-element c11jmddu c1abhfw2 ct4g75r c1tjbx48 c9nulm2 crt9jac`}>
<AnimateChildren
action={{"type":"view","animations":[{"name":"Parallax In","description":"Parallax the element as it scrolls into the view.","keyframes":[{"offset":0,"styles":{"translate":{"type":"tuple","value":[{"type":"unit","unit":"number","value":0},{"type":"unit","unit":"px","value":300}]}}}],"timing":{"easing":"ease","fill":"backwards","duration":{"type":"unit","value":1,"unit":"s"},"rangeStart":["cover",{"type":"unit","value":0,"unit":"%"}],"rangeEnd":["cover",{"type":"unit","value":100,"unit":"%"}]}}],"insetEnd":{"type":"keyword","value":"auto"},"isPinned":true}}>
<div
className={`w-element c1npwdyc c1wckod3 ct4g75r c3if8z9 c1tjbx48 c1p61p2a czvf8rz c11h7cy5 coodrml c1aesd75`}>
<h2
id={"apps"}
className={`w-element cc0vgw3 c1tr50rt c1nrkz9b c1qfww1d cab9hk`}>
{"アプリ"}
</h2>
<p
className={`w-element cc0vgw3 c1tr50rt c1nrkz9b c1113fza c5eec9w`}>
{"私が開発している注目のアプリ"}
</p>
</div>
<Link
href={"https://clip-hold.taikun.design/jp"}
target={"_blank"}
data-umami-event={"clip-hold-link"}
data-umami-event-region={"ja"}
className={`w-element ct4g75r c1ehzuir c1c6hbjj cpqya63 c1tje76w c12kbdwo c1iczteg csu86aj c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v c11h7cy5 cr8uxk4 c1xvoxib c1glxk1h c3ojm4n c9zpm68`}>
<div
className={`w-element crosfk7 c1f1jont c58ziie clap96c c190be04 ct4g75r c3binlp c1p61p2a czvf8rz c11jmddu c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v ckrh36b c5n0g1o c1wbymx1 css4u8g cyr6vdj cg1hler c9elfib cbhth2e cppwozy cky4y32 cdd73g8 cuft8f1 c1a6qjea`}>
<div
className={`w-element ct4g75r crt9jac c9nulm2 c11jmddu c1w59rtg`}>
<div
className={`w-element c16n9ye3 c1h9nl72 ct4g75r c1tjbx48 c1y1b6pq`}>
<HtmlEmbed
code={"<picture>\n  <source\n    media=\"(prefers-color-scheme: dark)\"\n    srcset=\"https://github.com/taikun114/Clip-Hold/blob/dev/docs/images/AppIconLiquidGlassDark@1x.webp?raw=true\"\n  />\n  <img\n    src=\"https://github.com/taikun114/Clip-Hold/blob/dev/docs/images/AppIconLiquidGlassLight@1x.webp?raw=true\"\n    alt=\"Clip Hold Logo\"\n    height=\"128\"\n    width=\"128\"\n  />\n</picture>\n"}
className={`w-html-embed ct4g75r cuyh25w ctgvzkp c1uf8c0t cocsuzz c1udsxt8 cbepowb cnhgshd`} />
<HtmlEmbed
code={"<picture>\n  <source\n    media=\"(prefers-color-scheme: dark)\"\n    srcset=\"https://github.com/taikun114/Clip-Hold/blob/dev/docs/images/AppIconLiquidGlassDark@1x.webp?raw=true\"\n  />\n  <img\n    src=\"https://github.com/taikun114/Clip-Hold/blob/dev/docs/images/AppIconLiquidGlassLight@1x.webp?raw=true\"\n    alt=\"Clip Hold Logo\"\n    height=\"128\"\n    width=\"128\"\n  />\n</picture>\n"}
className={`w-html-embed ct4g75r cuyh25w ctgvzkp c1uf8c0t cocsuzz c1m016cw c1dt2aby cqu6eha`} />
</div>
<div
className={`w-element c19si1a0 ct4g75r c1tjbx48 c1jprj79 c9hg2hx c1b6k19k c1y1b6pq c11jmddu`}>
<p
className={`w-element cc0vgw3 c1tr50rt c5eec9w`}>
{"クリップボードの達人になろう"}
</p>
<h3
className={`w-element cab9hk cbepowb cits6ha c1gy61b2 cp2eoky`}>
<Image
src={"/assets/Clip_Hold_Text_7xfjYo61FK2kHd8sMjuo1.webp"}
height={32}
alt={"Clip Hold"}
loading={"lazy"}
width={1844}
className={`w-image ct4g75r cet7ilb cxubj1j c1o6g7w8 ctgvzkp cbj4ab8 c1ehp9ko`} />
</h3>
<p
className={`w-element cg5mfwo c1tr50rt ckagbgx ctv6apc`}>
{"過去のコピー履歴とお好みの定型文を設定して、簡単に呼び出すことができるMac用の仕事効率化アプリ。"}
</p>
</div>
</div>
<Box
className={`w-box c19si1a0 ch32ctd c1h9nl72 c16n9ye3 ct4g75r c13akerz c1mvilga`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"currentColor\" d=\"M384 64C366.3 64 352 78.3 352 96C352 113.7 366.3 128 384 128L466.7 128L265.3 329.4C252.8 341.9 252.8 362.2 265.3 374.7C277.8 387.2 298.1 387.2 310.6 374.7L512 173.3L512 256C512 273.7 526.3 288 544 288C561.7 288 576 273.7 576 256L576 96C576 78.3 561.7 64 544 64L384 64zM144 160C99.8 160 64 195.8 64 240L64 496C64 540.2 99.8 576 144 576L400 576C444.2 576 480 540.2 480 496L480 416C480 398.3 465.7 384 448 384C430.3 384 416 398.3 416 416L416 496C416 504.8 408.8 512 400 512L144 512C135.2 512 128 504.8 128 496L128 240C128 231.2 135.2 224 144 224L224 224C241.7 224 256 209.7 256 192C256 174.3 241.7 160 224 160L144 160z\"/></svg>"}
className={`w-html-embed`} />
</Box>
</div>
</Link>
<Link
href={"https://mocolamma.taikun.design/jp"}
target={"_blank"}
data-umami-event={"mocolamma-link"}
data-umami-event-region={"ja"}
className={`w-element ct4g75r c1ehzuir c1c6hbjj cpqya63 c1tje76w c12kbdwo c1iczteg csu86aj c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v c11h7cy5 cr8uxk4 c1xvoxib c1glxk1h c3ojm4n c9zpm68`}>
<div
className={`w-element crosfk7 c1f1jont ckxqmf8 clap96c c190be04 ct4g75r c3binlp c1p61p2a czvf8rz c11jmddu c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v c1tlrmno cbhth2e cky4y32 cdd73g8 cuft8f1 c1a6qjea`}>
<div
className={`w-element ct4g75r crt9jac c9nulm2 c11jmddu c1w59rtg`}>
<div
className={`w-element c16n9ye3 c1h9nl72 ct4g75r c1tjbx48 c1y1b6pq`}>
<HtmlEmbed
code={"<picture>\n  <source\n    media=\"(prefers-color-scheme: dark)\"\n    srcset=\"https://github.com/taikun114/Mocolamma/blob/main/docs/images/AppIconLiquidGlassDark@1x.webp?raw=true\"\n  />\n  <img\n    src=\"https://github.com/taikun114/Mocolamma/blob/main/docs/images/AppIconLiquidGlassLight@1x.webp?raw=true\"\n    alt=\"Mocolamma Icon\"\n    height=\"128\"\n    width=\"128\"\n  />\n</picture>\n"}
className={`w-html-embed ct4g75r cuyh25w ctgvzkp c1uf8c0t cocsuzz cysmikg cbepowb cnhgshd`} />
<HtmlEmbed
code={"<picture>\n  <source\n    media=\"(prefers-color-scheme: dark)\"\n    srcset=\"https://github.com/taikun114/Mocolamma/blob/main/docs/images/AppIconLiquidGlassDark@1x.webp?raw=true\"\n  />\n  <img\n    src=\"https://github.com/taikun114/Mocolamma/blob/main/docs/images/AppIconLiquidGlassLight@1x.webp?raw=true\"\n    alt=\"Mocolamma Icon\"\n    height=\"128\"\n    width=\"128\"\n  />\n</picture>\n"}
className={`w-html-embed ct4g75r cuyh25w ctgvzkp c1uf8c0t cocsuzz c1m016cw c1dt2aby cqu6eha`} />
</div>
<div
className={`w-element c19si1a0 ct4g75r c1tjbx48 c1jprj79 c9hg2hx c1b6k19k c1y1b6pq c11jmddu`}>
<p
className={`w-element cc0vgw3 c1tr50rt c5eec9w`}>
{"Ollamaマネージャーアプリ"}
</p>
<h3
className={`w-element cab9hk cbepowb c1tr50rt c1gy61b2 cp2eoky`}>
<Image
src={"/assets/Mocolamma_Text_bqbuPYdIKS1n6LFoBAHlp.webp"}
height={140}
alt={"Mocolamma"}
loading={"lazy"}
width={1020}
className={`w-image ct4g75r csgwus8 cxubj1j c1o6g7w8 cbj4ab8 ctgvzkp cb7mqvb`} />
</h3>
<p
className={`w-element cg5mfwo c1tr50rt ckagbgx ctv6apc`}>
{"オープンソースのLLMツール「Ollama」を実行しているサーバーに接続して管理できるMac、iPhone、iPad、Apple Vision Pro用のユーティリティアプリ。"}
</p>
</div>
</div>
<Box
className={`w-box c19si1a0 ch32ctd c1h9nl72 c16n9ye3 ct4g75r c13akerz c1mvilga`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"currentColor\" d=\"M384 64C366.3 64 352 78.3 352 96C352 113.7 366.3 128 384 128L466.7 128L265.3 329.4C252.8 341.9 252.8 362.2 265.3 374.7C277.8 387.2 298.1 387.2 310.6 374.7L512 173.3L512 256C512 273.7 526.3 288 544 288C561.7 288 576 273.7 576 256L576 96C576 78.3 561.7 64 544 64L384 64zM144 160C99.8 160 64 195.8 64 240L64 496C64 540.2 99.8 576 144 576L400 576C444.2 576 480 540.2 480 496L480 416C480 398.3 465.7 384 448 384C430.3 384 416 398.3 416 416L416 496C416 504.8 408.8 512 400 512L144 512C135.2 512 128 504.8 128 496L128 240C128 231.2 135.2 224 144 224L224 224C241.7 224 256 209.7 256 192C256 174.3 241.7 160 224 160L144 160z\"/></svg>"}
className={`w-html-embed`} />
</Box>
</div>
</Link>
<Link
href={"/apps"}
className={`w-element ct4g75r c1ehzuir c1c6hbjj cpqya63 c1tje76w c12kbdwo c1iczteg csu86aj c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v c11h7cy5 cr8uxk4 c1xvoxib c1glxk1h c3ojm4n c9zpm68 ${"button-link"}`}>
<div
className={`w-element crosfk7 c1f1jont c58ziie clap96c c190be04 ct4g75r c3binlp c1p61p2a czvf8rz c11jmddu c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v cocsuzz cbhth2e cky4y32 cdd73g8 cuft8f1 c1a6qjea`}>
<div
className={`w-element ct4g75r crt9jac c9nulm2 c11jmddu cocsuzz c1w59rtg co6j8jp c1nsdxk1`}>
<p
className={`w-element cc0vgw3 c1tr50rt c1ylsvko c1gy61b2`}>
{"すべてのアプリと詳細を見る"}
</p>
</div>
<Box
className={`w-box c19si1a0 c1fhmk8y c1h9nl72 c16n9ye3 ct4g75r c13akerz c1mvilga c1yle5ob c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v ${"button-icon"}`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"currentColor\" d=\"M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z\"/></svg>"}
className={`w-html-embed`} />
</Box>
</div>
<HtmlEmbed
code={"<style>\n  .button-link:hover .button-icon {\n    translate: 8px 0px 0px;\n  }\n</style>"}
executeScriptOnCanvas={true}
className={`w-html-embed`} />
</Link>
</AnimateChildren>
</div>
<div
className={`w-element c11jmddu c1abhfw2 ct4g75r c1tjbx48 c9nulm2 crt9jac`}>
<AnimateChildren
action={{"type":"view","animations":[{"name":"Parallax In","description":"Parallax the element as it scrolls into the view.","keyframes":[{"offset":0,"styles":{"translate":{"type":"tuple","value":[{"type":"unit","unit":"number","value":0},{"type":"unit","unit":"px","value":300}]}}}],"timing":{"easing":"ease","fill":"backwards","duration":{"type":"unit","value":1,"unit":"s"},"rangeStart":["cover",{"type":"unit","value":0,"unit":"%"}],"rangeEnd":["cover",{"type":"unit","value":100,"unit":"%"}]}}],"insetEnd":{"type":"keyword","value":"auto"},"isPinned":true}}>
<div
className={`w-element c1npwdyc c1wckod3 ct4g75r c3if8z9 c1tjbx48 c1p61p2a czvf8rz c11h7cy5 coodrml c1aesd75`}>
<h2
id={"support"}
className={`w-element cc0vgw3 c1tr50rt c1nrkz9b c1qfww1d cab9hk`}>
{"サポート"}
</h2>
<p
className={`w-element cc0vgw3 c1tr50rt c1nrkz9b c1113fza c5eec9w`}>
{"私をサポートしていただけるサービス"}
</p>
</div>
<Link
href={"https://brave.com/ja/tips/"}
target={"_blank"}
data-umami-event={"brave-rewards-link"}
data-umami-event-region={"ja"}
className={`w-element ct4g75r c1ehzuir c1c6hbjj cpqya63 c1tje76w c12kbdwo c1iczteg csu86aj c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v c11h7cy5 cr8uxk4 c1xvoxib c1glxk1h c3ojm4n c9zpm68`}>
<div
className={`w-element crosfk7 c1f1jont c58ziie clap96c c190be04 ct4g75r c3binlp c1p61p2a czvf8rz c11jmddu c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v cbhth2e cky4y32 cdd73g8 cuft8f1 c1a6qjea`}>
<div
className={`w-element ct4g75r crt9jac c9nulm2 c11jmddu c1w59rtg`}>
<div
className={`w-element c16n9ye3 c1h9nl72 ct4g75r c1tjbx48 c1y1b6pq czeu0xd`}>
<Image
src={"/assets/bat-logo_Sj_0irPFGDkSe3UY1cf69.webp"}
width={704}
height={612}
alt={""}
loading={"lazy"}
className={`w-image c1uf8c0t cuyh25w ctgvzkp cysmikg cnhgshd c1hp69fk c13o7fa5 cu0r852`} />
<Image
src={"/assets/bat-logo_Sj_0irPFGDkSe3UY1cf69.webp"}
width={704}
height={612}
alt={""}
loading={"lazy"}
className={`w-image c1uf8c0t cuyh25w ctgvzkp c1m016cw c1dt2aby cqu6eha c1hp69fk c13o7fa5`} />
</div>
<div
className={`w-element c19si1a0 ct4g75r c1tjbx48 c1jprj79 c9hg2hx c1b6k19k c1y1b6pq c11jmddu`}>
<h3
className={`w-element cab9hk cc0vgw3 c1tr50rt c1gy61b2 cp2eoky`}>
{"Brave Rewards"}
</h3>
<p
className={`w-element cg5mfwo c1tr50rt ckagbgx ctv6apc`}>
{"Brave ブラウザをお使いの方は、アドレスバーの横にあるBrave Rewardsのアイコンからチップをお送りいただくことができます。詳しくはこちらをご覧ください。"}
</p>
</div>
</div>
<Box
className={`w-box c19si1a0 ch32ctd c1h9nl72 c16n9ye3 ct4g75r c13akerz c1mvilga`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"currentColor\" d=\"M384 64C366.3 64 352 78.3 352 96C352 113.7 366.3 128 384 128L466.7 128L265.3 329.4C252.8 341.9 252.8 362.2 265.3 374.7C277.8 387.2 298.1 387.2 310.6 374.7L512 173.3L512 256C512 273.7 526.3 288 544 288C561.7 288 576 273.7 576 256L576 96C576 78.3 561.7 64 544 64L384 64zM144 160C99.8 160 64 195.8 64 240L64 496C64 540.2 99.8 576 144 576L400 576C444.2 576 480 540.2 480 496L480 416C480 398.3 465.7 384 448 384C430.3 384 416 398.3 416 416L416 496C416 504.8 408.8 512 400 512L144 512C135.2 512 128 504.8 128 496L128 240C128 231.2 135.2 224 144 224L224 224C241.7 224 256 209.7 256 192C256 174.3 241.7 160 224 160L144 160z\"/></svg>"}
className={`w-html-embed`} />
</Box>
</div>
</Link>
<Link
href={"https://buymeacoffee.com/i_am_taikun"}
target={"_blank"}
data-umami-event={"buy-me-a-coffee-link"}
data-umami-event-region={"ja"}
className={`w-element ct4g75r c1ehzuir c1c6hbjj cpqya63 c1tje76w c12kbdwo c1iczteg csu86aj c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v c11h7cy5 cr8uxk4 c1xvoxib c1glxk1h c3ojm4n c9zpm68`}>
<div
className={`w-element crosfk7 c1f1jont c58ziie clap96c c190be04 ct4g75r c3binlp c1p61p2a czvf8rz c11jmddu c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v cbhth2e cky4y32 cdd73g8 cuft8f1 c1a6qjea`}>
<div
className={`w-element ct4g75r crt9jac c9nulm2 c11jmddu c1w59rtg`}>
<div
className={`w-element c16n9ye3 c1h9nl72 ct4g75r c1tjbx48 c1y1b6pq czeu0xd`}>
<Image
src={"/assets/bmc-logo-yellow_VVu09qXJFLEiRFGkOdX49.webp"}
width={3200}
height={3200}
alt={""}
loading={"lazy"}
className={`w-image c1uf8c0t cuyh25w ctgvzkp cysmikg co7usez c782zb9 c1q3g2hw c1m8fxnl cnhgshd c1hp69fk c13o7fa5 cu0r852`} />
<Image
src={"/assets/bmc-logo-yellow_VVu09qXJFLEiRFGkOdX49.webp"}
width={3200}
height={3200}
alt={""}
loading={"lazy"}
className={`w-image c1uf8c0t cuyh25w ctgvzkp c1m016cw c1dt2aby cqu6eha co7usez c782zb9 c1q3g2hw c1m8fxnl c1hp69fk c13o7fa5`} />
</div>
<div
className={`w-element c19si1a0 ct4g75r c1tjbx48 c1jprj79 c9hg2hx c1b6k19k c1y1b6pq c11jmddu`}>
<h3
className={`w-element cab9hk cc0vgw3 c1tr50rt c1gy61b2 cp2eoky`}>
{"Buy Me a Coffee"}
</h3>
<p
className={`w-element cg5mfwo c1tr50rt ckagbgx ctv6apc`}>
{"Buy Me a Coffeeを使って、緑茶1杯分からサポートしていただくことができます。"}
</p>
</div>
</div>
<Box
className={`w-box c19si1a0 ch32ctd c1h9nl72 c16n9ye3 ct4g75r c13akerz c1mvilga`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"currentColor\" d=\"M384 64C366.3 64 352 78.3 352 96C352 113.7 366.3 128 384 128L466.7 128L265.3 329.4C252.8 341.9 252.8 362.2 265.3 374.7C277.8 387.2 298.1 387.2 310.6 374.7L512 173.3L512 256C512 273.7 526.3 288 544 288C561.7 288 576 273.7 576 256L576 96C576 78.3 561.7 64 544 64L384 64zM144 160C99.8 160 64 195.8 64 240L64 496C64 540.2 99.8 576 144 576L400 576C444.2 576 480 540.2 480 496L480 416C480 398.3 465.7 384 448 384C430.3 384 416 398.3 416 416L416 496C416 504.8 408.8 512 400 512L144 512C135.2 512 128 504.8 128 496L128 240C128 231.2 135.2 224 144 224L224 224C241.7 224 256 209.7 256 192C256 174.3 241.7 160 224 160L144 160z\"/></svg>"}
className={`w-html-embed`} />
</Box>
</div>
</Link>
<Link
href={"https://www.paypal.com/paypalme/taikun114"}
target={"_blank"}
data-umami-event={"paypal-me-link"}
data-umami-event-region={"ja"}
className={`w-element ct4g75r c1ehzuir c1c6hbjj cpqya63 c1tje76w c12kbdwo c1iczteg csu86aj c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v c11h7cy5 cr8uxk4 c1xvoxib c1glxk1h c3ojm4n c9zpm68`}>
<div
className={`w-element crosfk7 c1f1jont c58ziie clap96c c190be04 ct4g75r c3binlp c1p61p2a czvf8rz c11jmddu c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v cbhth2e cky4y32 cdd73g8 cuft8f1 c1a6qjea`}>
<div
className={`w-element ct4g75r crt9jac c9nulm2 c11jmddu c1w59rtg`}>
<div
className={`w-element c16n9ye3 c1h9nl72 ct4g75r c1tjbx48 c1y1b6pq czeu0xd`}>
<HtmlEmbed
code={"<picture>\n  <source\n    media=\"(prefers-color-scheme: dark)\"\n    srcset=\"https://room.taikun.blog/wp-content/uploads/2025/10/pp_v_white.webp\"\n  />\n  <img\n    src=\"https://room.taikun.blog/wp-content/uploads/2025/10/pp_v_rgb.webp\"\n    alt=\"Mocolamma Icon\"\n    height=\"96\"\n    width=\"96\"\n  />\n</picture>\n"}
className={`w-html-embed ct4g75r cuyh25w ctgvzkp c1uf8c0t cocsuzz cysmikg c1y1b6pq cnhgshd cu0r852 c13o7fa5`} />
<HtmlEmbed
code={"<picture>\n  <source\n    media=\"(prefers-color-scheme: dark)\"\n    srcset=\"https://room.taikun.blog/wp-content/uploads/2025/10/pp_v_white.webp\"\n  />\n  <img\n    src=\"https://room.taikun.blog/wp-content/uploads/2025/10/pp_v_rgb.webp\"\n    alt=\"Mocolamma Icon\"\n    height=\"96\"\n    width=\"96\"\n  />\n</picture>\n"}
className={`w-html-embed ct4g75r cuyh25w ctgvzkp c1uf8c0t cocsuzz c1m016cw c1dt2aby cqu6eha c1y1b6pq c13o7fa5`} />
</div>
<div
className={`w-element c19si1a0 ct4g75r c1tjbx48 c1jprj79 c9hg2hx c1b6k19k c1y1b6pq c11jmddu`}>
<h3
className={`w-element cab9hk cc0vgw3 c1tr50rt c1gy61b2 cp2eoky`}>
{"PayPal.Me"}
</h3>
<p
className={`w-element cg5mfwo c1tr50rt ckagbgx ctv6apc`}>
{"PayPalアカウントをお持ちの方は、直接サポートしていただくことができます。"}
</p>
</div>
</div>
<Box
className={`w-box c19si1a0 ch32ctd c1h9nl72 c16n9ye3 ct4g75r c13akerz c1mvilga`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"currentColor\" d=\"M384 64C366.3 64 352 78.3 352 96C352 113.7 366.3 128 384 128L466.7 128L265.3 329.4C252.8 341.9 252.8 362.2 265.3 374.7C277.8 387.2 298.1 387.2 310.6 374.7L512 173.3L512 256C512 273.7 526.3 288 544 288C561.7 288 576 273.7 576 256L576 96C576 78.3 561.7 64 544 64L384 64zM144 160C99.8 160 64 195.8 64 240L64 496C64 540.2 99.8 576 144 576L400 576C444.2 576 480 540.2 480 496L480 416C480 398.3 465.7 384 448 384C430.3 384 416 398.3 416 416L416 496C416 504.8 408.8 512 400 512L144 512C135.2 512 128 504.8 128 496L128 240C128 231.2 135.2 224 144 224L224 224C241.7 224 256 209.7 256 192C256 174.3 241.7 160 224 160L144 160z\"/></svg>"}
className={`w-html-embed`} />
</Box>
</div>
</Link>
</AnimateChildren>
</div>
</div>
<Slot>
<Fragment_1>
<div
className={`w-element c11jmddu c58ziie c1f1jont cjxy5gi c1a34am0 c1dix9sw chqy115 c1n88sfr ct4g75r c1y1b6pq c9jzhbt cs91o3h cw0g6jf c16zcdeq`}>
<div
className={`w-element ct4g75r c1aner8p c11jmddu c90ihpk c1cxr4jp c1j5q0ur`}>
<div
className={`w-element ct4g75r c1tjbx48 c19ld4t3 c11jmddu c9nulm2 crt9jac c1b6k19k czeszkx`}>
<Link
href={"/"}
className={`w-element ct4g75r cwg8145 c16n9ye3 c1h9nl72`}>
<HtmlEmbed
code={"<picture>\n  <source\n    media=\"(prefers-color-scheme: dark)\"\n    srcset=\"https://room.taikun.blog/wp-content/uploads/2025/10/fcd86d232c4ff1fcbdb5e04f1adf76f8.webp\"\n  />\n  <img\n    src=\"https://room.taikun.blog/wp-content/uploads/2025/10/6c9516e8d8bd969f4f89adf39c752f74.webp\"\n    alt=\"TAIKUN.design Logo\"\n    height=\"72\"\n  />\n</picture>\n"}
className={`w-html-embed c1wz3v9x cmzzh0c cj7ktk7`} />
<HtmlEmbed
code={"<picture>\n  <source\n    media=\"(prefers-color-scheme: dark)\"\n    srcset=\"https://room.taikun.blog/wp-content/uploads/2025/10/fcd86d232c4ff1fcbdb5e04f1adf76f8.webp\"\n  />\n  <img\n    src=\"https://room.taikun.blog/wp-content/uploads/2025/10/6c9516e8d8bd969f4f89adf39c752f74.webp\"\n    alt=\"TAIKUN.design Logo\"\n    height=\"48\"\n  />\n</picture>\n"}
className={`w-html-embed chj4q0r c1q58oy7 c1ax93o c11launb`} />
</Link>
<div
className={`w-element ct4g75r crt9jac c9nulm2 c4v2d3m`}>
<Link
href={"https://x.com/i_am_taikun"}
target={"_blank"}
data-umami-event={"x-link"}
data-umami-event-region={"ja"}
aria-label={"Xアカウントへのリンク"}
className={`w-element c1q6nh43 c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v cnhgshd ccf5130 chfz6u3 ca7vie6`}>
<Box
className={`w-box clfakye c1fhmk8y c1h9nl72 c1i4pc3h c15qbz4m`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"currentColor\" d=\"M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z\"/></svg>"}
className={`w-html-embed`} />
</Box>
</Link>
<Link
href={"https://www.youtube.com/@i_am_taikun"}
target={"_blank"}
data-umami-event-region={"ja"}
data-umami-event={"youtube-link"}
aria-label={"YouTubeアカウントへのリンク"}
className={`w-element c1q6nh43 c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v cnhgshd ccf5130 c461zsj ciq9u43`}>
<Box
className={`w-box clfakye c1fhmk8y c1h9nl72 c1i4pc3h c15qbz4m`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"currentColor\" d=\"M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z\"/></svg>"}
className={`w-html-embed c1ci3qaf`} />
</Box>
</Link>
<Link
href={"https://github.com/taikun114"}
target={"_blank"}
data-umami-event={"github-link"}
data-umami-event-region={"ja"}
aria-label={"GitHubアカウントへのリンク"}
className={`w-element c1q6nh43 c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v cnhgshd ccf5130 chfz6u3 ca7vie6`}>
<Box
className={`w-box clfakye c1fhmk8y c1h9nl72 c1i4pc3h c15qbz4m`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"currentColor\" d=\"M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z\"/></svg>"}
className={`w-html-embed`} />
</Box>
</Link>
</div>
</div>
<div
className={`w-element ct4g75r c1tjbx48 c1p61p2a czvf8rz c1crqcom`}>
<h4
className={`w-element cc0vgw3 c1tr50rt`}>
{"ページ"}
</h4>
<Link
href={"/profile"}
className={`w-element ccf5130 c1c6hbjj c1ehzuir c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v c1ry58bl cnhgshd ccqamkh cwzq39h c1cu6z94`}>
{"プロフィール"}
</Link>
<Link
href={"/apps"}
className={`w-element ccf5130 c1c6hbjj c1ehzuir c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v c1ry58bl cnhgshd ccqamkh cwzq39h c1cu6z94`}>
{"アプリ"}
</Link>
<Link
href={"/contact"}
className={`w-element ccf5130 c1c6hbjj c1ehzuir c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v c1ry58bl cnhgshd ccqamkh cwzq39h c1cu6z94`}>
{"お問い合わせ"}
</Link>
<Link
href={"/privacy-policy"}
className={`w-element ccf5130 c1c6hbjj c1ehzuir c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v c1ry58bl cnhgshd ccqamkh cwzq39h c1cu6z94`}>
{"プライバシーポリシー"}
</Link>
</div>
<div
className={`w-element ct4g75r c1tjbx48 c1p61p2a czvf8rz c1crqcom`}>
<h4
className={`w-element cc0vgw3 c1tr50rt`}>
{"サイト"}
</h4>
<Link
href={"https://www.taikun-room.com/"}
target={"_blank"}
data-umami-event={"taikun-room-link"}
data-umami-event-region={"ja"}
className={`w-element ccf5130 c1c6hbjj c1ehzuir c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v c1ry58bl cnhgshd ccqamkh cwzq39h c1cu6z94`}>
{"たいくんの部屋↗︎"}
</Link>
<Link
href={"https://www.taikun-life.com/"}
target={"_blank"}
data-umami-event={"taikun-life-link"}
data-umami-event-region={"ja"}
className={`w-element ccf5130 c1c6hbjj c1ehzuir c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v c1ry58bl cnhgshd ccqamkh cwzq39h c1cu6z94`}>
{"たいくんの生活↗︎"}
</Link>
<Link
href={"https://www.taikun.blog/"}
target={"_blank"}
data-umami-event={"taikun-blog-link"}
data-umami-event-region={"ja"}
className={`w-element ccf5130 c1c6hbjj c1ehzuir c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v c1ry58bl cnhgshd ccqamkh cwzq39h c1cu6z94`}>
{"たいくんの日記↗︎"}
</Link>
<Link
href={"https://shop.taikun.design/"}
target={"_blank"}
data-umami-event={"taikun-shop-link"}
data-umami-event-region={"ja"}
className={`w-element ccf5130 c1c6hbjj c1ehzuir c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v c1ry58bl cnhgshd ccqamkh cwzq39h c1cu6z94`}>
{"たいくんのお店↗︎"}
</Link>
<Link
href={"https://status.taikun.blog/"}
target={"_blank"}
data-umami-event={"taikun-status-link"}
data-umami-event-region={"ja"}
className={`w-element ccf5130 c1c6hbjj c1ehzuir c1kojgtj cjguz9e c150yh7g c10b6v8 c1v1vg3v c1ry58bl cnhgshd ccqamkh cwzq39h c1cu6z94`}>
{"たいくんのウェブサイト状況↗︎"}
</Link>
</div>
</div>
</div>
</Fragment_1>
</Slot>
</div>
</Body>
}


      export { Page }
    