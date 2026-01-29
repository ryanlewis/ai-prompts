// @ts-check
import { defineConfig, createNotesQuery } from "./.app/app-config.js";

export default defineConfig({
  title: "AI Prompts by @ryanlewis",
  description: "A collection of AI prompts and documentation",
  lang: "en",
  theme: {
    color: "red",
  },
  editThisNote: {
    url: "https://github.com/ryanlewis/ai-prompts/edit/main/{{file}}",
  },
  staticAssets: {
    paths: { "public/": "/" },
  },
  ignores: ["README.md", ".plans/**"],
  customProperties: {
    properties: [
      {
        name: "author",
      },
      {
        name: "related",
      },
      {
        path: "props",
        options: {
          date: {
            locale: "en-US",
          },
        },
      },
    ],
  },
  sidebar: {
    links: [
      {
        url: "https://github.com/ryanlewis/ai-prompts",
        label: "GitHub",
        icon: "github",
      },
    ],
    sections: [
      {
        label: "Extra",
        groups: [
          {
            query: createNotesQuery({
              pattern: "^/guides/",
              tree: {
                replace: {
                  "^/\\w+": "",
                },
              },
            }),
            label: "Documentation"
          }
        ]
      }
    ],
  },
  tags: {
    map: {
      "dynamic-content": "dynamic content",
    },
  },
});
