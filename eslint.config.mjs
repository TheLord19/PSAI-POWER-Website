import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  // Reference material and design scratch files, not app code.
  { ignores: ["psai-handoff/**", "design/**"] },
  ...nextCoreWebVitals,
];

export default eslintConfig;
