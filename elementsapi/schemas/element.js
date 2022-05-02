export default {
  name: "element",
  title: "Element",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "appearance",
      title: "Appearance",
      type: "string",
    },
    {
      name: "atomicMass",
      title: "Atomic Mass",
      type: "number",
    },
    {
      name: "boil",
      title: "Boil",
      type: "number",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "color",
      title: "Color",
      type: "string",
    },
    {
      name: "density",
      title: "Density",
      type: "string",
    },
    {
      name: "discoveredBy",
      title: "Discovered By",
      type: "string",
    },
    {
      name: "melt",
      title: "Melt",
      type: "string",
    },
    {
      name: "molarHeat",
      title: "Molar Heat",
      type: "string",
    },

    {
      name: "namedBy",
      title: "Named By",
      type: "string",
    },
    {
      name: "number",
      title: "Number",
      type: "number",
    },
    {
      name: "period",
      title: "Period",
      type: "number",
    },
    {
      name: "phase",
      title: "Phase",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "symbol",
      title: "Symbol",
      type: "string",
    },
    {
      name: "xpos",
      title: "Xpos",
      type: "number",
    },
    {
      name: "ypos",
      title: "Ypos",
      type: "number",
    },
    {
      name: "shells",
      title: "Shells",
      type: "array",
      of: [{ type: "number" }],
    },
    {
      name: "electronConfiguration",
      title: "Electron Configuration",
      type: "string",
    },
    {
      name: "electronAffinity",
      title: "Electron Affinity",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
};
