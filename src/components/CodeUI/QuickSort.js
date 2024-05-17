import React, {Component} from "react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {
  vscDarkPlus,
  coldarkDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

class QuickSort extends Component {
  render() {
    const codeString = `Algorithm quickSort(array, low, high):
    if low < high:
        partitionIndex = partition(array, low, high)
        quickSort(array, low, partitionIndex - 1)
        quickSort(array, partitionIndex + 1, high)

Algorithm partition(array, low, high):
    pivot = array[high]
    i = low - 1
    for j = low to high - 1:
        if array[j] <= pivot:
            i = i + 1
            swap(array[i], array[j])
    swap(array[i + 1], array[high])
    return i + 1

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

export default QuickSort;
