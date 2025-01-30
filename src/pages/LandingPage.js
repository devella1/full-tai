import React from "react";
import CodeIDE from "./CodeIDE";
import Documentation from "./Documentation";

function LandingPage() {
  return (
    <main className="landing-page">
      {/* Left: hero panel for code editor */}
      <section className="left-hero">
        <div className="editor-card">
          <CodeIDE />
        </div>
      </section>

      {/* Right: you can put documentation here,
          or we’ll just import the same doc component for demo. */}
      <section className="docs-pane">
        <Documentation />
      </section>
    </main>
  );
}

export default LandingPage;
