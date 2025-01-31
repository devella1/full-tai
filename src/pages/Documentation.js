import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

function Documentation() {
  return (
    <div className="docs-content">
      <h1>TaiScript Documentation</h1>

      <h2>Overview</h2>
      <p>
        TaiScript is a playful, pseudo-code-inspired programming language that integrates programming concepts with humorous real-world references (like bribes for execution). Its syntax is designed to be simple yet expressive, catering to an audience who wants a light-hearted approach to learning programming.
      </p>

      <hr />

      <h2>Features</h2>
      <ul>
        <li><strong>Flexible Syntax</strong>: Inspired by natural language with a touch of humor.</li>
        <li><strong>Profiles (`parichay`)</strong>: Affects how much "bribe" is required to run code efficiently.</li>
        <li><strong>Bribe Mechanism</strong>: Adds a playful layer of execution cost.</li>
        <li><strong>Loop, Conditionals, and Variables</strong>: Implements basic programming constructs.</li>
        <li><strong>File Operations</strong>: Includes operations like opening, writing to, and closing files.</li>
        <li><strong>Nested Loops</strong>: Supports multiple nested loop scenarios.</li>
        <li><strong>Custom Error Messages</strong>: Errors like insufficient bribes are presented humorously.</li>
      </ul>

      <hr />

      <h2>Language Components</h2>

      <h3>1. Program Structure</h3>
      <p>A program starts with <code>yojna shuru</code> and ends with <code>yojna band</code>.</p>
      <SyntaxHighlighter language="plaintext" style={darcula}>
        {`yojna shuru "ProgramName"
    // Statements
yojna band`}
      </SyntaxHighlighter>

      <h3>2. Profiles (`parichay`)</h3>
      <p>Define your profile at the start of the program. Profiles impact bribe requirements and execution speed.</p>
      <table>
        <thead>
          <tr>
            <th>Profile</th>
            <th>Reduction Factor</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>JANTA</code></td>
            <td>1.0 (No discount)</td>
            <td>Ordinary citizen. Slow execution with maximum bribes.</td>
          </tr>
          <tr>
            <td><code>STUDENT</code></td>
            <td>0.5 (50% discount)</td>
            <td>Students get a discount, but there may still be a delay in execution.</td>
          </tr>
          <tr>
            <td><code>CHACHA VIDHAYAK HAI</code></td>
            <td>0.0 (Free)</td>
            <td>No bribes needed. Instant execution, as "you know someone in power."</td>
          </tr>
          <tr>
            <td><code>BABU SAHEB</code></td>
            <td>0.0 (Free)</td>
            <td>No bribes needed. But equivalent black money will be credited.</td>
          </tr>
          <tr>
            <td><code>NETA JI</code></td>
            <td>0.0 (Free)</td>
            <td>No bribes required, but at the end, an extra print is added praising Neta Ji.</td>
          </tr>
        </tbody>
      </table>
      <SyntaxHighlighter language="plaintext" style={darcula}>
        {`parichay "JANTA"`}
      </SyntaxHighlighter>

      <h3>3. Bribes (`ghoos lo`)</h3>
      <p>Here every operation has a "bribe cost" associated with it. This cost, or "ghoos," must be paid to ensure the smooth execution of your program. Without providing sufficient ghoos, your program execution halts with a humorous error message.</p>
      <p>The <code>ghoos lo</code> statement allows you to <strong>add a specific amount of bribe</strong> to a pool that will be consumed as your program executes.</p>
      <SyntaxHighlighter language="plaintext" style={darcula}>
        {`ghoos lo <amount>`}
      </SyntaxHighlighter>
      <p>Example:</p>
      <SyntaxHighlighter language="plaintext" style={darcula}>
        {`ghoos lo 500`}
      </SyntaxHighlighter>

      <h4>How <code>ghoos</code> Works</h4>
      <p><strong>Base Bribe Amount</strong></p>
      <p>The base bribe amount is calculated based on the <strong>current year</strong> and a starting year (<code>2025</code>). The bribe increases every year due to inflation, calculated as follows:</p>
      <p><strong>Formula</strong>:</p>
      <p>Base Bribe Amount = Initial Amount x (1.5 ^ (Year since 2025))</p>
      <ul>
        <li><strong>Initial Amount</strong>: 500</li>
        <li><strong>Growth Factor</strong>: Bribe increases by 1.5× every year.</li>
      </ul>
      <p><strong>Example Calculations</strong>:</p>
      <ul>
        <li><strong>In 2025</strong>: Base Bribe = 500</li>
        <li><strong>In 2026</strong>: Base Bribe = 500 × 1.5 = 750</li>
        <li><strong>In 2027</strong>: Base Bribe = 750 × 1.5 = 1125</li>
      </ul>

      <h4>Adjusted Bribe Formula</h4>
      <p>Effective Bribe = Base Bribe Amount x Reduction Factor</p>

      <h4>When is <code>ghoos</code> Consumed?</h4>
      <p>Bribe is consumed at key points in the program:</p>
      <ol>
        <li><strong>Variable Declaration (<code>likho</code>)</strong>: A small amount of bribe may be consumed.</li>
        <li><strong>Loops (<code>ginti karo</code>)</strong>: Loops consume a significant bribe depending on the number of loops and nesting.</li>
        <li><strong>Conditionals (<code>agar</code>)</strong>: Minor bribe consumption for executing conditional logic.</li>
        <li><strong>File Operations</strong>: Operations like opening, writing to, or closing a file require bribes.</li>
      </ol>

      <h4>How to Calculate Bribe?</h4>
      <p>To ensure smooth execution of your program, follow these steps:</p>
      <ol>
        <li><strong>Identify Base Bribe</strong>:
          <ul>
            <li>Use the formula for base bribe considering the current year.</li>
            <li>Example: If the year is 2025, the base bribe is 500.</li>
          </ul>
        </li>
        <li><strong>Consider Profile Discount</strong>:
          <ul>
            <li>Adjust the base bribe using the reduction factor for your profile (<code>parichay</code>).</li>
          </ul>
        </li>
        <li><strong>Estimate Complexity</strong>:
          <ul>
            <li>The complexity of your code (e.g., nested loops, large conditionals) will increase the bribe required. (For time complexity 1 - n: ghoos lo is n, for n^2 it is 2 x n, for n^3 it is 3 x n and so on).</li>
            <li><strong>Example</strong>: A simple program may require 500, while nested loops may require 2000+.</li>
          </ul>
        </li>
        <li><strong>Add Sufficient <code>ghoos</code> at Key Points</strong>:
          <ul>
            <li>Add bribe at the beginning (<code>ghoos lo</code>) and before major operations like loops or conditionals.</li>
            <li>Example:</li>
          </ul>
          <SyntaxHighlighter language="plaintext" style={darcula}>
            {`ghoos lo 1000
ginti karo i 1 se 10 tak {
    ginti karo j 1 se i tak {
        ghoshna "*"
    }
    ginti band
    ghoshna ""
}
ginti band`}
          </SyntaxHighlighter>
        </li>
      </ol>

      <h4>Error Handling</h4>
      <p>If sufficient bribe is not provided, the program halts with an error:</p>
      <SyntaxHighlighter language="plaintext" style={darcula}>
        {`Runtime exception: Itne me kya hoga! Thoda aur adjust karo, tabhi file aage badhegi.
Pass <shortfall> more under the table.`}
      </SyntaxHighlighter>
      <p>To avoid errors:</p>
      <ul>
        <li>Calculate bribe requirements in advance.</li>
        <li>Provide bribes before complex operations like loops or file operations.</li>
      </ul>

      <h4>Note</h4>
      <p><code>ghoos lo</code> is not just a fun addition but a core concept in TaiScript that:</p>
      <ul>
        <li>Simulates real-world bureaucracy.</li>
        <li>Adds complexity management to your programs.</li>
        <li>Challenges you to think ahead and calculate requirements.</li>
      </ul>
      <p>Use it wisely to ensure smooth execution of your TaiScript programs!</p>

      <h3>4. Variable Declaration (`likho`)</h3>
      <p>Declare variables using <code>likho</code>.</p>
      <SyntaxHighlighter language="plaintext" style={darcula}>
        {`likho <variableName> <value>`}
      </SyntaxHighlighter>
      <p>Example:</p>
      <SyntaxHighlighter language="plaintext" style={darcula}>
        {`likho n 10`}
      </SyntaxHighlighter>

      <h3>5. Input (`pucho`)</h3>
      <p>Take input from the user and store it in a variable.</p>
      <SyntaxHighlighter language="plaintext" style={darcula}>
        {`pucho <variableName>`}
      </SyntaxHighlighter>
      <p>Example:</p>
      <SyntaxHighlighter language="plaintext" style={darcula}>
        {`pucho c`}
      </SyntaxHighlighter>

      <h3>6. Print (`ghoshna`)</h3>
      <p>Print values to the console. Use <code>lagatar</code> to print without a newline.</p>
      <SyntaxHighlighter language="plaintext" style={darcula}>
        {`ghoshna <expression> [lagatar]`}
      </SyntaxHighlighter>
      <p>Example:</p>
      <SyntaxHighlighter language="plaintext" style={darcula}>
        {`ghoshna "Hello, World!"
ghoshna "*" lagatar`}
      </SyntaxHighlighter>

      <h3>7. Loops (`ginti karo`)</h3>
      <p>Run a loop using <code>ginti karo</code>. Loops require start, end, and optional increment values.</p>
      <SyntaxHighlighter language="plaintext" style={darcula}>
        {`ginti karo <variable> <start> se <end> tak <badhao/ghatao> <increment/decrement value> {
    // Loop body
}
ginti band`}
      </SyntaxHighlighter>
      <p>Example:</p>
      <SyntaxHighlighter language="plaintext" style={darcula}>
        {`ginti karo i 1 se n tak badhao 2 {
    ghoshna i
}
ginti band`}
      </SyntaxHighlighter>

      <h3>8. Conditionals (`agar` and `warna`)</h3>
      <p>Use <code>agar</code> for <code>if</code> conditions and <code>warna</code> for <code>else</code>.</p>
      <SyntaxHighlighter language="plaintext" style={darcula}>
        {`agar <condition> {
    // If block
} warna {
    // Else block
}`}
      </SyntaxHighlighter>
      <p>Example:</p>
      <SyntaxHighlighter language="plaintext" style={darcula}>
        {`agar n barabar hai 10 {
    ghoshna "It's ten!"
} warna {
    ghoshna "Not ten!"
}`}
      </SyntaxHighlighter>

      <h3>9. Arithmetic Operations</h3>
      <p>Perform arithmetic with keywords.</p>
      <table>
        <thead>
          <tr>
            <th>Operator</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>me jodo</code></td>
            <td>Addition</td>
          </tr>
          <tr>
            <td><code>se ghatao</code></td>
            <td>Subtraction</td>
          </tr>
          <tr>
            <td><code>me guna karo</code></td>
            <td>Multiplication</td>
          </tr>
          <tr>
            <td><code>ka bhag karo</code></td>
            <td>Division</td>
          </tr>
          <tr>
            <td><code>ka shesh bhag karo</code></td>
            <td>Modulus</td>
          </tr>
        </tbody>
      </table>
      <p>Example:</p>
      <SyntaxHighlighter language="plaintext" style={darcula}>
        {`likho sum 5 me jodo 10`}
      </SyntaxHighlighter>

      <h3>10. File Operations</h3>
      <p>Perform operations on files.</p>
      <ul>
        <li><strong>Open a file</strong>:</li>
        <SyntaxHighlighter language="plaintext" style={darcula}>
          {`file kholo "<fileName>" aur naam do <alias>`}
        </SyntaxHighlighter>
        <li><strong>Write to a file</strong>:</li>
        <SyntaxHighlighter language="plaintext" style={darcula}>
          {`<alias> me likho <expression>`}
        </SyntaxHighlighter>
        <li><strong>Close a file</strong>:</li>
        <SyntaxHighlighter language="plaintext" style={darcula}>
          {`band karo <alias>`}
        </SyntaxHighlighter>
      </ul>
      <p>Example:</p>
      <SyntaxHighlighter language="plaintext" style={darcula}>
        {`file kholo "report.txt" aur naam do report
report me likho "Final salary is: 5000"
band karo report`}
      </SyntaxHighlighter>

      <h2>Error Handling</h2>
      <p>TaiScript provides humorous error messages when things go wrong:</p>
      <ul>
        <li><strong>Insufficient Bribes</strong>: <code>"Itne me kya hoga! Thoda aur adjust karo."</code></li>
        <li><strong>Syntax Errors</strong>: <code>"Unexpected token: '...'."</code></li>
      </ul>

      <h2>Example Program</h2>
      <SyntaxHighlighter language="plaintext" style={darcula}>
        {`yojna shuru "PatternPrinter"

parichay "JANTA"

ghoos lo 500
likho n 10
ghoshna "Yaaaaayyyyy"

ghoos lo 1000
ginti karo i 1 se n tak {
    ginti karo j 1 se i tak {
        ghoshna "*" lagatar
    }
    ginti band
    ghoshna ""
}
ginti band

yojna band`}
      </SyntaxHighlighter>
      <p><strong>Output</strong>:</p>
      <SyntaxHighlighter language="plaintext" style={darcula}>
        {`Yaaaaayyyyy
*
**
***
****
*****
******
*******
********
*********
**********`}
      </SyntaxHighlighter>

      <h2>Execution Flow</h2>
      <ol>
        <li><strong>Lexing</strong>: Converts TaiScript code into tokens.</li>
        <li><strong>Parsing</strong>: Generates an Abstract Syntax Tree (AST) from tokens.</li>
        <li><strong>Interpreting</strong>: Executes the AST while managing bribes and handling loops, conditionals, etc.</li>
      </ol>

      <h2>Limitations</h2>
      <ul>
        <li>TaiScript is not suitable for large-scale applications.</li>
        <li>Heavy reliance on "bribes" may confuse some users.</li>
      </ul>

      <h2>Future Improvements</h2>
      <ul>
        <li>Better Error Handling</li>
        <li>Add more datatypes (boolean, list/arrays, dictionaries, maps, etc.)</li>
        <li>Add custom data types and functions.</li>
        <li>Built-in library supports (Math, String manipulation, File I/O)</li>
        <li>Enhance file operation capabilities.</li>
        <li>Introduce modular programming to include other scripts or programs.</li>
        <li>Build plugin for VSCode, add syntax highlighting and auto-completion.</li>
        <li>Add some Easter eggs for fun.</li>
      </ul>
    </div>
  );
}

export default Documentation;