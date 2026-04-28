// evidence-explorer.mjs — MyST executable plugin for evidence-package navigation.
// Provides the {evidence} directive that injects a JSON-backed evidence card.

const evidenceDirective = {
  name: "evidence",
  doc: "Render an evidence-package card for the given section identifier.",
  arg: { type: String, required: true },
  options: {},
  body: { type: String, required: false },
  run(data) {
    // Wrap children in a `code` node so the MyST container validator accepts
    // the kind='evidence' container (a bare paragraph would be rejected).
    return [
      {
        type: "container",
        kind: "evidence",
        children: [
          {
            type: "code",
            lang: "json",
            value: JSON.stringify({ section: data.arg, body: data.body ?? null }, null, 2)
          },
          {
            type: "caption",
            children: [{ type: "paragraph", children: [{ type: "text", value: data.arg }] }]
          }
        ]
      }
    ];
  }
};

const plugin = {
  name: "evidence-explorer",
  author: "Computational Review Pipeline",
  license: "MIT",
  directives: [evidenceDirective],
  roles: [],
  transforms: []
};

export default plugin;
