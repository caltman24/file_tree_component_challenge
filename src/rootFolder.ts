const rootFolder = {
  children: [
    {
      name: "node_modules",
      children: [
        {
          name: "postcss",
          children: [
            {
              name: "postcss/other_module",
              children: [
                {
                  name: "very deep module",
                },
              ],
            },
          ],
        },
        {
          name: ".vite",
        },
      ],
    },
    {
      name: "public",
      children: [
        {
          name: "vite.svg",
        },
      ],
    },
    {
      name: "src",
      children: [
        {
          name: "assets",
          children: [
            {
              name: "react.svg",
            },
          ],
        },
        {
          name: "App.tsx",
        },
      ],
    },
    {
      name: "package.json",
    },
    {
      name: "index.html",
    },
    {
      name: "tsconfig.json",
    },
    {
      name: "vite.config.ts",
    },
  ],
};

export default rootFolder;
