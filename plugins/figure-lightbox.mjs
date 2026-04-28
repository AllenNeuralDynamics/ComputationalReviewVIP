// figure-lightbox.mjs — MyST executable plugin: click-to-zoom on figures.
// This stub plugin marks figure containers with a CSS class for the front-end lightbox.

function lightboxTransform(tree) {
  // Walk the tree and tag figure nodes with class 'lightbox'.
  function walk(node) {
    if (!node || typeof node !== "object") return;
    if (node.type === "container" && node.kind === "figure") {
      node["class"] = (node["class"] ? node["class"] + " " : "") + "lightbox";
    }
    if (Array.isArray(node.children)) node.children.forEach(walk);
  }
  walk(tree);
}

const plugin = {
  name: "figure-lightbox",
  author: "ComputationalReview Pipeline",
  license: "MIT",
  directives: [],
  roles: [],
  transforms: [
    {
      stage: "document",
      plugin: lightboxTransform
    }
  ]
};

export default plugin;
