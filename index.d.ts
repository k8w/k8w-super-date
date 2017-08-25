//Extend Date
interface Date{
    format:(formatString?:string)=>string;
}

interface DateConstructor{
    today():number;
}