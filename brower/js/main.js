

//---------------------------------------- Object Event---------


function initEvents() {

    //Search Box. add events.---------------------------
    var search = document.getElementById("xGdlTasks_SearchBox");
    //挂载searchBoxObject
    var templete = document.getElementById("templateObject");
    var searchBoxObject = templete.getElementsByClassName("seachBoxObject")[0];
    search.searchObject = searchBoxObject;
    templete.removeChild(searchBoxObject);

    search.flag = "none"; //value = {display | none}
    //on mouse over, let box width 300px 
    search.onmouseenter = function() {
        console.log("mouse over");
        if("display" == search.flag)return;
        search.flag = "display";
        this.style.width = "300px";
        //clear child Nodes
        this.innerHTML = "";
        //ban onmouseout callback
        this.callback_mouseout = this.onmouseout;
        this.onmouseout = function(){}

        //安装searchBoxObject对象
        search.appendChild(search.searchObject);

    }

    //on mouse out, let box width 100px
    search.onmouseleave = function() {
        console.log("mouse out");
        if("none" == this.flag)return;
        this.flag = "none";
        this.style.width = "100px";
        this.innerHTML = "Constraint";

    }

    //Command Box. add events.
    var commandBox = document.getElementById("xGdlTasks_CommandBox");
    var commandObject = templete.getElementsByClassName("xGdlTasks_CommandBox_Object")[0];
    commandBox.commandObject = commandObject;
    templete.removeChild(commandObject);
    commandBox.onmouseenter = function() {
        this.style.width = "500px";
        //clear child Nodes
        this.innerHTML = "";
        //commandObject
        commandBox.appendChild(commandBox.commandObject);
    }
    commandBox.onmouseleave = function() {
        this.style.width = "100px";
        this.innerHTML = "Command";
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
        var click = function(button) {
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
        button.onclick = function() {
            click(this);
        }
    }
}


initEvents();

var helper = new MessageDetailsHelper();
