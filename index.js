module.exports = {
  "extends": "stylelint-config-suitcss",
  "plugins": [
    "stylelint-scss",
    "stylelint-selector-bem-pattern",
  ],
  "rules": {
    "at-rule-empty-line-before": null,
    "block-closing-brace-newline-after": [
      "always",
      { "ignoreAtRules": [ "if", "else" ] },
    ],
    "declaration-block-properties-order": [
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",
      "display",
      "visibility",
      "flex",
      "flex-grow",
      "flex-shrink",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-wrap",
      "align-content",
      "align-items",
      "align-self",
      "justify-content",
      "order",
      "float",
      "clear",
      "overflow",
      "overflow-x",
      "overflow-y",
      "clip",
      "box-sizing",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "min-width",
      "min-height",
      "max-width",
      "max-height",
      "width",
      "height",
      "outline",
      "outline-width",
      "outline-style",
      "outline-color",
      "outline-offset",
      "border",
      "border-spacing",
      "border-collapse",
      "border-width",
      "border-style",
      "border-color",
      "border-top",
      "border-top-width",
      "border-top-style",
      "border-top-color",
      "border-right",
      "border-right-width",
      "border-right-style",
      "border-right-color",
      "border-bottom",
      "border-bottom-width",
      "border-bottom-style",
      "border-bottom-color",
      "border-left",
      "border-left-width",
      "border-left-style",
      "border-left-color",
      "border-radius",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-bottom-right-radius",
      "border-bottom-left-radius",
      "border-image",
      "border-image-source",
      "border-image-slice",
      "border-image-width",
      "border-image-outset",
      "border-image-repeat",
      "border-top-image",
      "border-right-image",
      "border-bottom-image",
      "border-left-image",
      "border-corner-image",
      "border-top-left-image",
      "border-top-right-image",
      "border-bottom-right-image",
      "border-bottom-left-image",
      "background",
      "background-color",
      "background-image",
      "background-attachment",
      "background-position",
      "background-position-x",
      "background-position-y",
      "background-clip",
      "background-origin",
      "background-size",
      "background-repeat",
      "box-decoration-break",
      "box-shadow",
      "color",
      "table-layout",
      "caption-side",
      "empty-cells",
      "list-style",
      "list-style-position",
      "list-style-type",
      "list-style-image",
      "quotes",
      "content",
      "counter-increment",
      "counter-reset",
      "vertical-align",
      "text-align",
      "text-align-last",
      "text-decoration",
      "text-emphasis",
      "text-emphasis-position",
      "text-emphasis-style",
      "text-emphasis-color",
      "text-indent",
      "text-justify",
      "text-outline",
      "text-transform",
      "text-wrap",
      "text-overflow",
      "text-overflow-ellipsis",
      "text-overflow-mode",
      "text-shadow",
      "white-space",
      "word-spacing",
      "word-wrap",
      "word-break",
      "tab-size",
      "hyphens",
      "letter-spacing",
      "font",
      "font-weight",
      "font-style",
      "font-variant",
      "font-size-adjust",
      "font-stretch",
      "font-size",
      "font-family",
      "src",
      "line-height",
      "opacity",
      "filter",
      "resize",
      "cursor",
      "nav-index",
      "nav-up",
      "nav-right",
      "nav-down",
      "nav-left",
      "transition",
      "transition-delay",
      "transition-timing-function",
      "transition-duration",
      "transition-property",
      "transform",
      "transform-origin",
      "animation",
      "animation-name",
      "animation-duration",
      "animation-play-state",
      "animation-timing-function",
      "animation-delay",
      "animation-iteration-count",
      "animation-direction",
      "animation-fill-mode",
      "pointer-events",
      "direction",
      "columns",
      "column-span",
      "column-width",
      "column-count",
      "column-fill",
      "column-gap",
      "column-rule",
      "column-rule-width",
      "column-rule-style",
      "column-rule-color",
      "break-before",
      "break-inside",
      "break-after",
      "page-break-before",
      "page-break-inside",
      "page-break-after",
      "orphans",
      "widows",
      "zoom",
      "max-zoom",
      "min-zoom",
      "user-zoom",
      "orientation",
      "user-select",
      "fill",
      "stroke",
      "backface-visibility",
      "appearance",
      "interpolation-mode",
      "marks",
      "page",
      "set-link-source",
      "unicode-bidi",
      "speak",
    ],
    "number-leading-zero": "always",
    "plugin/selector-bem-pattern": {
      "preset": "suit",
    },
    "rule-nested-empty-line-before": [
      "always-multi-line",
      { except: ["first-nested"] },
      { ignore: ["after-comment"] },
    ],
    "rule-non-nested-empty-line-before": [
      "always-multi-line",
      { except: ["after-single-line-comment"] },
      { ignore: ["after-comment"] },
    ],
    "selector-no-type": null,
  },
}
