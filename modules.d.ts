declare module "*.md" {
  const attributes: Record<string, any>;
  const react: React.VFC;
  export { attributes, react };
}
