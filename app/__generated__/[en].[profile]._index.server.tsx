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
  let siteTitle = " - TAIKUN.design"
  return {
    title: "Profile" + siteTitle,
    description: "Born on January 14, 2004. I am a person with severe physical disabilities due to the designated intractable disease \"Charcot-Marie-Tooth disease (CMT)\". I usually go by the name \"たいくん (TAIKUN)\" in my activities.\nI am active in a wide range of fields, including as an Apple enthusiast / collector, blogger, app developer, and graphic / web designer.",
    excludePageFromSearch: false,
    language: "en-US",
    socialImageAssetName: "TAIKUN.design_rszH8oMTTBFJmHTkkHGuC.webp",
    socialImageUrl: undefined,
    status: undefined,
    redirect: undefined,
    custom: [
    ],
  };
};


      type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  return params
}


      export const contactEmail = "contact.taikun@gmail.com";
    