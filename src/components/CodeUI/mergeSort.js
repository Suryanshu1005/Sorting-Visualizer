import React, {Component} from "react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {
  vscDarkPlus,
  coldarkDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

class MergeSort extends Component {
  render() {
    const codeString = `Algorithm mergeSort(array, low, high):
    if low < high:
        mid = (low + high) / 2
        mergeSort(array, low, mid)
        mergeSort(array, mid+1, high)
        merge(array, low, mid, high)

Algorithm merge(array, low, mid, high):
    n1 = mid - low + 1
    n2 = high - mid
    leftArray[0...n1], rightArray[0...n2]
    for i = 0 to n1-1:
        leftArray[i] = array[low + i]
    for j = 0 to n2-1:
        rightArray[j] = array[mid + 1 + j]
    i = 0
    j = 0
    k = low
    while i < n1 and j < n2:
        if leftArray[i] <= rightArray[j]:
            array[k] = leftArray[i]
            i = i + 1
        else:
            array[k] = rightArray[j]
            j = j + 1
        k = k + 1
    while i < n1:
        array[k] = leftArray[i]
        i = i + 1, k = k + 1
    while j < n2:
        array[k] = rightArray[j]
        j = j + 1
        k = k + 1`;

    return (
      <div style={{fontSize: "20px"}}>
        <SyntaxHighlighter
          language="cpp"
          style={coldarkDark}
          showLineNumbers
          wrapLines
          customStyle={{marginBottom: "0px"}}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default MergeSort;
