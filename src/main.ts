import {worksheet} from "@shared/worksheet";
import {calculate} from "./calculate";

const fields=[
  {
    "name": "Bill (cents)",
    "unit": "",
    "initial": 99999,
    "min": 0,
    "max": 2000000,
    "step": 1
  },
  {
    "name": "Share A",
    "unit": "",
    "initial": 2,
    "min": 0,
    "max": 100,
    "step": 1
  },
  {
    "name": "Share B",
    "unit": "",
    "initial": 1,
    "min": 0,
    "max": 100,
    "step": 1
  },
  {
    "name": "Share C",
    "unit": "",
    "initial": 1,
    "min": 0,
    "max": 100,
    "step": 1
  }
];
worksheet({name:"Bill Splitter",fields,calculate,accent:"#39C8B4",motion:{"motif":"stations","color":"#39C8B4","shine":"#CEFCEB"}});
