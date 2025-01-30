import React from "react";
import Collapsible from "../components/Collapsible";

function Documentation() {
  return (
    <div className="docs-content">
      <h1>Documentation</h1>
      <p>
      TaiScript is a satirical, programming language insiperd by day-to-day life of a citizen of a country that mirrors real-life inefficiencies, taxation burdens, corruptions and bribery. From mandatory bribes for program execution to random power cuts halting loops, TaiScript offers an unparalleled programming experience rooted in dark humor.
      </p>

      <h2>Example Code</h2>
      {/* <p>Follow these steps to install TaiScript on your machine.</p> */}
      <pre className="doc-codeblock">
{`yojna shuru "TaxCompute"

parichay Janta   # Ordinary citizen, heavy bribes required

ghoos lo 1000    # Basic chai-paani for program execution

# Variable Declaration
likho salary 500000
likho tax_rate 30

# Tax Calculation
ghoos lo 3000    # Bribe required for tax calculation
likho tax salary me guna karo (tax_rate ka bhag karo 100)
likho net_salary salary se ghatao tax

# Output
ghoos lo 500     # Printing requires chai-paani
ghoshna "Final salary after tax is: " me jodo net_salary

yojna band`}
      </pre>

      <Collapsible title="Show more">
        <p>
          Code is divided into such 
        </p>
        <pre className="doc-codeblock">
{`plaintext
TaiScript/
│── src/                    # Source code
│   │── utils               # Utility code
│   │   │── token_utils.py  # Utility to help the parser
|   │   │── helper.py       # General helper functions
|   │   │── logger.py       # Logs execution details
|   │   │── time_utils.py   # Handles time-related functions (corruption inflation)
|   │
│   │── __init__.py         # Marks this as a package
│   │── main.py             # Entry point of TaiScript compiler/interpreter
│   │── lexer.py            # Tokenizer to break code into tokens
│   │── parser.py           # Parses tokens into Abstract Syntax Tree
│   │── interpreter.py      # Executes the parsed code (Interpreter)
│   │── compiler.py         # (Future) Convert TaiScript code into bytecode or machine code
│   │── evaluator.py        # Handles expressions & operations (arithmetic, conditions)
│   │── environment.py      # Stores variables & their values
│   │── error_handler.py    # Handles syntax/runtime errors in TaiScript
│   │── stdlib.py           # Built-in functions like \`ghoshna\`, \`file kholo\`
│   │── config.py           # Configuration values like base corruption amount
│
│── tests/                  # Unit tests
│   │── test_lexer.py       # Tests for lexer
│   │── test_parser.py      # Tests for parser
│   │── test_interpreter.py # Tests for interpreter
│
│── examples/               # Example TaiScript programs
|   |── basic_syntax.py     # Example code demonstrating basic syntax of TaiScript
|   |── basic_syntax.py     # Example code to print the pattern using nested loop.
│
│── docs/                   # Documentation
│   │── DOCUMENTATION.md    # Documentation for TaiScript
│   │── ROADMAP.md          # RoadMap for this project
│
│── scripts/                # Utility scripts
│   │── run_taiscript.sh    # Shell script to run TaiScript
│
│── setup.py                # Setup script for packaging TaiScript as a module
|── requirements.txt        # Requirement libraries for the project to run
│── README.md               # Project Overview
│── .gitignore              # Files to ignore in Git
│── LICENSE                 # License for open-source usage
`}
        </pre>
      </Collapsible>

      <h2>Getting Started</h2>
      <p>Below is how you can run it your own pc.. have fun!</p>
      <pre className="doc-codeblock">
{}
      </pre>
    </div>
  );
}

export default Documentation;












// import React from "react";
// import ReactMarkdown from "react-markdown";
// import rehypeHighlight from "rehype-highlight";
// import "highlight.js/styles/github.css"; // Use a highlight.js theme (GitHub style as an example)

// const markdowntext = `
// Documentation, detailed instructions, user guides, 
// installation and any other requirements for running script on your pc
 
// `;

// function Documentation() {
//   return (
//     <section className="docs-pane">
//   <div className="docs-content">
//     <h1>Documentation</h1>
//     <p>Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing elit...</p>

//     <h2>Installation</h2>
//     <p>Steps to install. Blah blah.</p>
//     <pre className="doc-codeblock">
// {`npm install -g taiscript
// taiscript main.tai
// `}
//     </pre>

//     <div className="collapsible">
//       <button className="collapsible-header">Show More Info</button>
//       <div className="collapsible-body">
//         <p>Detailed instructions go here.</p>
//       </div>
//     </div>

//     <h2>Usage Examples</h2>
//     <p>Some usage samples with code blocks, images, or links.</p>
//   </div>
// </section>

//   );
// }

// export default Documentation;



