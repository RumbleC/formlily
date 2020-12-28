import extensions from "@formily-editor/extensions";

const schema = {
  "x-component-props": {
    size: "medium",
    labelAlign: "left",
    wrapperCol: 12,
    labelTextAlign: "right",
    labelCol: 7
  },
  type: "object",
  properties: {
    xx: {
      type: "string",
      "x-component": "input",
      "x-component-props": {
        addonTextBefore: "",
        trim: true,
        hasClear: true,
        placeholder: "",
        addonTextAfter: ""
      },
      title: "xx",
      "x-index": 0,
      key: "xx"
    }
  }
};

export const props = {
  schema,
  extensions: Object.values(extensions),
  expression: false,
  initialMode: "EDIT_ONLY"
};
