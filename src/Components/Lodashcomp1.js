import React from "react";
const lodash = require("lodash");
function Lodashcomp1() {
  const arr1 = ["a", "b", "c", "d"];
  const arr2 = ["d", "e", "f", "g"];
  const arr3 = ["a", "m", "k", 5];
  const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log("array => arr1 ", arr1);
  console.log("array => arr2 ", arr2);
  console.log("array => arr3 ", arr3);
  console.log("array => arr4 ", arr4);
  return (
    <>
      <div>check cosole for output.</div>


      <div>
        <button
          onClick={() => {
            console.log(
              "array => arr1  to chunk with size 2",
              lodash.chunk(arr1, 2)
            );
          }}
        >
          Array arr1 to chunk with size of 2{" "}
        </button>
      </div>


      <div>
        <button
          onClick={() => {
            console.log(
              "array => arr1  to chunk with size 2",
              lodash.chunk(arr1, 1)
            );
          }}
        >
          Array arr1 to chunk with size of 1{" "}
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            console.log(
              "Array arr1 concat with arr2 and other values",
              lodash.concat(arr1, arr2 , {a:12},[[{a:1,b:2},{a:2,b:3}]])
            );
          }}
        >
          Array arr1 concat with arr2 and other values {" "}
        </button>
      </div>


    </>
  );
}

export default Lodashcomp1;
