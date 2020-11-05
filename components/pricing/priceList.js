import React from "react";

function PriceList({ item1, item2, item3, item4, item5 }) {
  return (
    <div>
      <li>
        <ul>
          {item1}
          {item2}
          {item3}

          {item4}
          {item5}
        </ul>
      </li>
    </div>
  );
}

export default PriceList;
