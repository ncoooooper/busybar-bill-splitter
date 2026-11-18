import type {Result} from "@shared/worksheet";

export function calculate(v:number[]):Result[]{
const [cents,...weights]=v,sum=weights.reduce((a,b)=>a+b,0);
 if(!sum)return [{name:"Split",value:"Set shares",detail:["At least one nonzero share"]}];
 const base=weights.map(w=>Math.floor(cents*w/sum)),order=[0,1,2].sort((a,b)=>(cents*weights[b]%sum)-(cents*weights[a]%sum)||a-b);
 const remainder=cents-base.reduce((a,b)=>a+b,0);for(let i=0;i<remainder;i++)base[order[i]]++;
 return base.map((amount,i)=>({name:"Person "+["A","B","C"][i],value:(amount/100).toFixed(2),detail:["Total "+(cents/100).toFixed(2),"Weight "+weights[i]+" of "+sum],fraction:weights[i]/sum}));
}
