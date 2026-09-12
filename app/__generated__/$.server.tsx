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
    title: "ページが見つかりませんでした" + separator + siteTitle,
    description: "入力されたURLが正しいことをご確認ください。\nサイト内のリンクをクリックした際にこの画面が表示された場合は、間違ったリンクが設定されている可能性がありますので、お問い合わせページからご連絡ください。",
    excludePageFromSearch: true,
    language: "ja-JP",
    socialImageAssetName: "TAIKUN.design_rszH8oMTTBFJmHTkkHGuC.webp",
    socialImageUrl: undefined,
    status: 404,
    redirect: undefined,
    content: undefined,
    custom: [
    ],
  };
};


      type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  params[0] = params["*"]
  delete params["*"]
  return params
}


      export const contactEmail = "contact.taikun@gmail.com";
    