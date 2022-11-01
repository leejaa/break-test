module.exports = {
  root: true,
  extends: ["next", "turbo", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "no-restricted-imports": [
      "error",
      {
        "patterns": ["@mui/*/*/*", "!@mui/material/test-utils/*"]
      }
    ]
  },
};
