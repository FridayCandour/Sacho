import _, { frag } from "cradova";
import {
  table,
  button,
  select,
  datapicker,
  rangepicker,
} from "./components/tags";

document.body.append(
  frag(
    table({
      state: ["Indiana", "Ohio", "Michigan"],
      city: ["Indianapolis", "Columbus", "Detroit"],
      town: ["Indianapolis", "Columbus", "Detroit"],
    }),
    select,
    button(),
    datapicker,
    rangepicker
  )
);
