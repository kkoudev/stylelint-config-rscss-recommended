"use strict"

module.exports = {
  "rules": {

    // Color
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-named": "never",
    "color-no-hex": null,
    "color-no-invalid-hex": true,

    // Font family
    "font-family-name-quotes": "always-unless-keyword",
    "font-family-no-duplicate-names": null,

    // Font weight
    "font-weight-notation": "named-where-possible",

    // Function
    "function-disallowed-list": null,
    "function-calc-no-unspaced-operator": true,
    "function-comma-newline-after": "always-multi-line",
    "function-comma-newline-before": "never-multi-line",
    "function-comma-space-after": "always-single-line",
    "function-comma-space-before": "never",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-max-empty-lines": 0,
    "function-name-case": "lower",
    "function-parentheses-newline-inside": "always-multi-line",
    "function-parentheses-space-inside": "never-single-line",
    "function-url-no-scheme-relative": null,
    "function-url-quotes": "always",
    "function-url-scheme-allowed-list": [
      "http",
      "https",
      "data"
    ],
    "function-allowed-list": null,
    "function-whitespace-after": "always",

    // Number
    "number-leading-zero": "always",
    "number-max-precision": null,
    "number-no-trailing-zeros": true,

    // String
    "string-no-newline": true,
    "string-quotes": null,

    // Length
    "length-zero-no-unit": true,

    // Time
    "time-min-milliseconds": 100,

    // Unit
    "unit-disallowed-list": null,
    "unit-case": "lower",
    "unit-no-unknown": [
      true,
      {
        "ignoreFunctions": ["image-set"]
      }
    ],
    "unit-allowed-list": null,

    // Value
    "value-keyword-case": "lower",
    "value-no-vendor-prefix": [
      true,
      {
        "ignoreValues": [
          "box",
          "inline-box"
        ]
      }
    ],

    // Value list
    "value-list-comma-newline-after": "always-multi-line",
    "value-list-comma-newline-before": "never-multi-line",
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-space-before": "never",
    "value-list-max-empty-lines": 0,

    // Custom property
    "custom-property-empty-line-before": "never",
    "custom-property-pattern": null,

    // Shorthand property
    "shorthand-property-no-redundant-values": true,

    // Property
    "property-disallowed-list": null,
    "property-case": "lower",
    "property-no-unknown": true,
    "property-no-vendor-prefix": null,
    "property-allowed-list": null,

    // Keyframe declaration
    "keyframe-declaration-no-important": true,

    // Declaration
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-colon-newline-after": "always-multi-line",
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
    "declaration-no-important": true,
    "declaration-property-unit-disallowed-list": null,
    "declaration-property-unit-allowed-list": null,
    "declaration-property-value-disallowed-list": null,
    "declaration-property-value-allowed-list": null,

    // Declaration block
    "declaration-block-no-duplicate-properties": null,
    "declaration-block-no-redundant-longhand-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-semicolon-newline-after": null,
    "declaration-block-semicolon-newline-before": null,
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-single-line-max-declarations": null,
    "declaration-block-trailing-semicolon": "always",

    // Block
    "block-closing-brace-empty-line-before": "never",
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always",
    "block-closing-brace-space-after": null,
    "block-closing-brace-space-before": "always-single-line",
    "block-no-empty": null,
    "block-opening-brace-newline-after": "always",
    "block-opening-brace-newline-before": null,
    "block-opening-brace-space-after": "always-single-line",
    "block-opening-brace-space-before": "always",

    // Selector
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-disallowed-list": null,
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-operator-allowed-list": null,
    "selector-attribute-quotes": null,
    "selector-class-pattern": null,
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-descendant-combinator-no-non-space": null,
    "selector-id-pattern": null,
    "selector-max-attribute": null,
    "selector-max-class": null,
    "selector-max-combinators": null,
    "selector-max-compound-selectors": null,
    "selector-max-empty-lines": null,
    "selector-max-id": 0,
    "selector-max-specificity": null,
    "selector-max-type": null,
    "selector-max-universal": null,
    "selector-nested-pattern": null,
    "selector-no-vendor-prefix": null,
    "selector-pseudo-class-disallowed-list": null,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-class-allowed-list": null,
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-element-no-unknown": true,
    "selector-type-case": "lower",
    "selector-type-no-unknown": true,

    // Selector list
    "selector-list-comma-newline-after": "always-multi-line",
    "selector-list-comma-newline-before": "never-multi-line",
    "selector-list-comma-space-after": "always-single-line",
    "selector-list-comma-space-before": "never",

    // Rule
    "rule-empty-line-before": null,

    // Media feature
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-disallowed-list": null,
    "media-feature-name-case": "lower",
    "media-feature-name-no-unknown": true,
    "media-feature-name-no-vendor-prefix": null,
    "media-feature-name-allowed-list": null,
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",

    // Custom media
    "custom-media-pattern": null,

    // Media query list
    "media-query-list-comma-newline-after": "always-multi-line",
    "media-query-list-comma-newline-before": "never-multi-line",
    "media-query-list-comma-space-after": "always-single-line",
    "media-query-list-comma-space-before": "never",

    // At rule
    "at-rule-disallowed-list": null,
    "at-rule-empty-line-before": null,
    "at-rule-name-case": "lower",
    "at-rule-name-newline-after": null,
    "at-rule-name-space-after": "always",
    "at-rule-no-unknown": null,
    "at-rule-no-vendor-prefix": null,
    "at-rule-semicolon-newline-after": null,
    "at-rule-semicolon-space-before": "never",
    "at-rule-allowed-list": null,

    // Comment
    "comment-empty-line-before": null,
    "comment-no-empty": true,
    "comment-whitespace-inside": "always",
    "comment-word-disallowed-list": null,

    // General / Sheet
    "indentation": 2,
    "max-empty-lines": null,
    "max-line-length": null,
    "max-nesting-depth": null,
    "no-descending-specificity": null,
    "no-duplicate-selectors": null,
    "no-empty-source": null,
    "no-eol-whitespace": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": null,
    "no-missing-end-of-source-newline": true,
    "no-unknown-animations": true,

  }
}
