/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import { toWebstudioParams } from "@webstudio-is/react-sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
import type { ResourceRequestGraph } from "@webstudio-is/sdk/runtime";
export const getResources = (_props: { system: System; resources?: Record<string, any> }) => {
  const assets = (documents: ReadonlyMap<string, unknown>): ResourceRequest => {
    return {
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
  }
  const _data: ResourceRequestGraph = {
    resources: [
      { id: "Ku44nj9sCFQlq16Ur2lj3", outputName: "assets", dependencies: [], createRequest: assets, control: "system", bodyFormat: undefined },
    ],
    rootIds: [
    ],
  }
  const _contentData = new Map<string, ResourceRequest>()
  const _action = new Map<string, { id: string; outputName: string }>([
  ])
  return { data: _data, action: _action, contentData: _contentData }
}


      import type { ManagedFormResourceGraph } from "@webstudio-is/sdk/runtime";
import { createFormEmailDataProxy } from "@webstudio-is/sdk";
import { createJsonStringifyProxy } from "@webstudio-is/sdk/to-string";
export const getManagedFormResourceGraph = (formId: string, _managedFormProps: { system: System; formData: unknown; browserInfo: unknown }): ManagedFormResourceGraph | undefined => {
  switch (formId) {
    default: return undefined;
  }
};


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
    title: "お問い合わせ" + separator + siteTitle,
    description: "このページでは、私へ連絡するためのメールアドレスと、私が運営しているすべてのSNSアカウントをまとめています。ここに書かれていないSNSアカウントは基本的に偽物である可能性が高いため、ご注意ください。",
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


      export const getRemixParams = (params: Record<string, string | undefined>) => toWebstudioParams("/contact", params);

      export const getManagedFormSubmissions = () =>
        new Map<string, { action: unknown; resourceIds: (string | null)[] }>(
          []
        );

      /** @deprecated Generated only for saved Webhook Forms. */
      export const contactEmail = "contact.taikun@gmail.com";
    