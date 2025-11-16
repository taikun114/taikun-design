/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  const _data = new Map<string, ResourceRequest>([
  ])
  const _action = new Map<string, ResourceRequest>([
  ])
  return { data: _data, action: _action }
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
    