import _ from "cradova";
import { css } from "../utils";
type tableProps = Record<string, string[]>;

export const table = (data: tableProps) => {
  const tableName = Object.keys(data);
  const tableValues = Object.values(data);
  css(`
    .styled-table {
      border-collapse: collapse;
      margin: 25px 0;
      font-size: 0.9em;
      font-family: sans-serif;
      min-width: 400px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    }

    .styled-table thead tr {
      background-color: #009879;
      color: #ffffff;
      text-align: left;
    }

    .styled-table th,
    .styled-table td {
      padding: 12px 15px;
    }

    .styled-table tbody tr {
      border-bottom: 1px solid #dddddd;
    }

    .styled-table tbody tr:nth-of-type(even) {
      background-color: #f3f3f3;
    }

    .styled-table tbody tr:last-of-type {
      border-bottom: 2px solid #009879;
    }

    .styled-table tbody tr.active-row {
      font-weight: bold;
      color: #009879;
    }
  `);
  return _(
    "table.styled-table",
    _(
      "thead",
      _(
        "tr",
        {},
        tableName.map((tab) => _("th.border border-slate-300", tab))
      )
    ),
    _(
      "tbody",
      {},
      tableValues.map((values) =>
        _(
          "tr",
          {},
          values.map((v) => _("td.border border-slate-300", v))
        )
      )
    )
  );
};

export function button() {
  css(`
    .box-3 {
      background-color: #66a182;
    }

    .btn {
      line-height: 50px;
      height: 50px;
      text-align: center;
      width: 250px;
      cursor: pointer;
    }

    .btn-three {
      color: #fff;
      transition: all 0.5s;
      position: relative;
    }
    .btn-three::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background-color: rgba(255, 255, 255, 0.1);
      transition: all 0.3s;
    }
    .btn-three:hover::before {
      opacity: 0;
      transform: scale(0.5, 0.5);
    }
    .btn-three::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      opacity: 0;
      transition: all 0.3s;
      border: 1px solid rgba(255, 255, 255, 0.5);
      transform: scale(1.2, 1.2);
    }
    .btn-three:hover::after {
      opacity: 1;
      transform: scale(1, 1);
    }
  `);
  return _(
    "div.box-3",
    _("div.btn btn-three", _("span")({ text: "hello world" }))
  );
}

export function select() {
  css(`
    select {
      /* Reset Select */
      appearance: none;
      outline: 0;
      border: 0;
      box-shadow: none;
      /* Personalize */
      flex: 1;
      padding: 0 1em;
      color: #fff;
      background-color: #2c3e50;
      background-image: none;
      cursor: pointer;
    }
    /* Remove IE arrow */
    select::-ms-expand {
      display: none;
    }
    /* Custom Select wrapper */
    .select {
      position: relative;
      display: flex;
      width: 20em;
      height: 3em;
      border-radius: 0.25em;
      overflow: hidden;
    }
    /* Arrow */
    .select::after {
      content: "select";
      position: absolute;
      top: 0;
      right: 0;
      padding: 0.76em;
      background-color: orange;
      color: whitesmoke;
      font-weight: 900 ;
      transition: 0.25s all ease;
      pointer-events: none;
    }
    /* Transition */
    .select:hover::after {
      color: #f39c12;
    }
    h1 {
      margin: 0 0 0.25em;
    }
    a {
      font-weight: bold;
      color: #34495e;
      text-decoration: none;
      padding: 0.25em;
      border-radius: 0.25em;
      background: white;
    }
  `);
  return _(
    "div.select",
    _(
      "select",
      _(
        "option",
        {
          value: "1",
        },
        "Pure CSS Select"
      ),
      _(
        "option",
        {
          value: "2",
        },
        "No JS"
      ),
      _(
        "option",
        {
          value: "3",
        },
        "Nice!"
      )
    )
  );
}

export const datapicker = () => {
  css(`
    [type="date"] {
  background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)  97% 50% no-repeat ;
}
[type="date"]::-webkit-inner-spin-button {
  display: none;
}
[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0;
}
input {
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background-color: #fff;
  padding: 3px 5px;
  box-shadow: inset 0 3px 6px rgba(0,0,0,0.1);
  width: 190px;
}
    `);
  return _("input", {
    type: "date",
    name: "dateofbirth",
    id: "dateofbirth",
  });
};

export const rangepicker = () => {
  css(`
    #rangeValue {
  position: relative;
  display: block;
  text-align: center;
  font-size: 6em;
  color: #999;
  font-weight: 400;
}
.range {
  width: 400px;
  height: 15px;
  -webkit-appearance: none;
  background: #111;
  outline: none;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 1);
}
.range::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #00fd0a;
  cursor: pointer;
  border: 4px solid #333;
  box-shadow: -407px 0 0 400px #00fd0a;
}

    `);
  return _(
    "div",
    _(
      "span",
      {
        id: "rangeValue",
      },
      "0"
    ),
    _("input", {
      class: "range",
      type: "range",
      name: "",
      value: "0",
      min: "0",
      max: "1000",
      onChange() {
        document.getElementById("rangeValue")!.innerHTML = this.value;
      },
      onmousemove() {
        document.getElementById("rangeValue")!.innerHTML = this.value;
      },
    })
  );
};
