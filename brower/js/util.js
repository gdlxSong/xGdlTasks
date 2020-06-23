




//将字符串解析为dom对象
function LoadXmlText(txt) {

    if (window.DOMParser) {
        //非IE浏览器
        xmlDoc = (new DOMParser()).parseFromString(txt, "text/xml");
    } else {
        //IE浏览器
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");         
        // 或者：xmlDoc = new ActiveXObject("MSXML2.DOMDocument");      

        xmlDoc.async = "false";        //不启用异步，保证加载文件成功之前不会进行下面操作
        xmlDoc.loadXML(txt);
    }
    return xmlDoc;
}

function parseDom(text) {
    var dom = document.createElement("div");
    dom.innerHTML = text;
    return dom.firstChild;
}

//可以解析多个对象，返回childNodes
function parseDom_Z(text) {
    var dom = document.createElement("div");
    dom.innerHTML = text;
    return dom.childNodes;
}