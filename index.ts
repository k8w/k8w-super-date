///<reference path="index.d.ts"/>

function repeat(str: string, times: number){
    let output = '';
    for(let i=0; i<times; ++i){
        output += str;
    }
    return output;
}

Date.prototype.format = function (formatString: string = 'yyyy-MM-dd hh:mm:ss') {
    var o: any = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S+": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(formatString)) formatString = formatString.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o as any)
        if (new RegExp("(" + k + ")").test(formatString)) formatString = formatString.replace(RegExp.$1, repeat('0', Math.max(RegExp.$1.length - ('' + o[k]).length, 0)) + o[k]);
    return formatString;
}

Date.today = function () {
    let now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
}