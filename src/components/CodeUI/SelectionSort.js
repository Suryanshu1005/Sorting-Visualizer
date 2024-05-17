import React, {Component} from "react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {
  vscDarkPlus,
  coldarkDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

class SelectionSort extends Component {
  render() {
    const codeString = `Algorithm selectionSort(array):
    n = length of array
    for i = 0 to n-1:
        minIndex = i
        for j = i+1 to n-1:
            if array[j] < array[minIndex]:
                minIndex = j
        swap(array[i], array[minIndex])

Algorithm swap(a, b):
    temp = a
    a = b
    b = temp`;

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

export default SelectionSort;
