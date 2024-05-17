import React, {Component} from "react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {
  vscDarkPlus,
  coldarkDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

class BubbleSort extends Component {
  render() {
    const codeString = `Algorithm bubbleSort(array):
    n = length of array
    for i = 0 to n-1:
        for j = 0 to n-i-1:
            if array[j] > array[j+1]:
                swap(array[j], array[j+1])
Algorithm swap(a, b):
    temp = a
    a = b
    b = temp
`;

    return (
      <div style={{fontSize: "20px"}}>
        <SyntaxHighlighter
          language="cpp"
          style={coldarkDark}
          showLineNumbers
          wrapLines
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default BubbleSort;
