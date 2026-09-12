/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System; resources?: Record<string, any> }) => {
  const assets: ResourceRequest = {
    name: "assets",
    control: "system",
    url: "/$resources/assets",
    searchParams: [
    ],
    method: "post",
    headers: [
      { name: "Content-Type", value: "application/json" },
    ],
    body: {
  query: ({
    output: {
        mode: "fields",
        includeMetadata: false,
        fields: [["url"], ["width"], ["height"]],
      },
    content: {
        mode: "none",
      },
    result: "many",
    where: {
        all: [],
      },
    sort: [],
    limit: 20,
    offset: 0,
  }),
},
  }
  const _data = new Map<string, ResourceRequest>([
    ["assets", assets],
  ])
  const _contentData = new Map<string, ResourceRequest>()
  const _action = new Map<string, ResourceRequest>([
  ])
  return { data: _data, action: _action, contentData: _contentData }
}


      export const getPageMeta = ({
  system,
  resources,
}: {
  system: System;
  resources: Record<string, any>;
}): PageMeta => {
  let separator = " - "
  let siteTitle = "TAIKUN.design"
  return {
    title: "プロフィール" + separator + siteTitle,
    description: "2004年1月14日生まれの日本人。生まれつき、指定難病「シャルコー・マリー・トゥース病（CMT）」による重度の身体障害者で、車椅子に乗って生活しています。\nインターネット上では普段「たいくん」として活動しています。\nApple愛好家 / コレクター、ブロガー、アプリデベロッパー、グラフィック / ウェブデザイナーとしてなど、幅広く活動しています。",
    excludePageFromSearch: false,
    language: "ja-JP",
    socialImageAssetName: "TAIKUN.design_rszH8oMTTBFJmHTkkHGuC.webp",
    socialImageUrl: undefined,
    status: undefined,
    redirect: undefined,
    content: undefined,
    custom: [
    ],
  };
};


      type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  return params
}


      export const contactEmail = "contact.taikun@gmail.com";
    