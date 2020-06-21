

//---------------------------------------- Object Event---------


function initEvents() {

    //Search Box. add events.---------------------------
    var search = document.getElementById("xGdlTasks_SearchBox");
    //on mouse over, let box width 300px 
    search.onmouseover = function() {
        search.style.width = "300px";
        search.innerHTML = "时间点|SearchKey";
    }

    //on mouse out, let box width 100px
    document.getElementById("xGdlTasks_SearchBox").onmouseout = function() {
        search.style.width = "100px";
        search.innerHTML = "Constraint";
    }  


    //设置每一个提交记录按钮的回调函数
    var traceSubmits = document.getElementsByClassName("Message_Add_Content");
    for(var i = 0; i<traceSubmits.length; i++) {
        //遍历每一个按钮.
        let button = traceSubmits[i].getElementsByTagName("button")[0];
        var textareaObj = traceSubmits[i].getElementsByTagName("textarea")[0];
        button.flag = "none";//value = {display | none}
        button.textAreaObject = textareaObj;
        traceSubmits[i].removeChild(textareaObj);
        console.log("执行了traceSubmits[i].removeChild(traceSubmits[i].firstChild);, i=", i);
        //设置按钮的回调函数.
        button.onclick = function() {
            if("none" == button.flag) {
                //insert textAreaObject before button.
                button.parentNode.insertBefore(button.textAreaObject, button);
                button.flag = "display";
                button.textContent = "提交记录";
            } else if("display" == button.flag) {
                //insert textAreaObject before button.
                button.parentNode.removeChild(button.textAreaObject);
                button.flag = "none";
                button.textContent = "增加记录";
            } else {}
        }
    }


}


initEvents();
