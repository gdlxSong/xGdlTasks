

/*

    这里用于编写前端和后端交互的数据协议。
    数据交互基于json

*/


var MessageNameSpace = function(){
    //定义一个消息头：
    this.MessageHead = function(id, expectStartTime, expectTime, tags, title, deadTime, precentage) {
        this.id = id;                               //任务的ID
        this.expectStartTime = expectStartTime;     //任务的预计启动时间（排的时间）
        this.expectTime = expectTime;               //任务的预计耗时
        this.tags = tags;                           //任务的标签
        this.title = title;                         //任务的名称
        this.deadTime = deadTime;                   //任务的截止日期
        this.precentage = precentage;               //任务的进度百分比

        //method.
        this.getResidueTime = function() {          //返回从现在到截止时间剩余的时间

        }
        this.getTags = function() {                 //返回tag的解析后的slice，tags中的tag以;分割

        }
    }


    this.Message = function(id, expectStartTime, expectTime, tags, title, deadTime, precentage, simpleDec) {
        this.head = new MessageHead(id, expectStartTime, expectTime, tags, title, deadTime, precentage);
        this.simpleDesc = simpleDec;                //任务的简单描述
    }




    this.MessageDetailsHelper = function() {

        /*
            @func: 按照给定的delimiter来拆分字符串
            @str:  给定的字符串，待处理
            @delimiter: 字符串中的分隔符
            @return：函数返回一个数组
        */
        this.splits = function(str, delemiter) {    
            var slice = str.split(delemiter);
            for(var i = 0; i<slice.length; i++) {
                if(0 == slice[i].length) 
                    delete slice[i];
            }
            return slice;
        }

        this.genPersons = function(str) {
            var slice = splits(str);
            var persons = [];
            for(var i = 0; i<slice.length; i++) {
                personInfo = splits(",");           //人的个字段信息默认以','分割
                //这里保留了，现在没必要解析出来，可以保留到将来需要再处理。
            }
        }


    }

    this.MessageDetails = function(id, expectStartTime, expectTime, tags, title, deadTime, precentage, simpleDec, description, material, dependPerson, processDesc, trace, issues) {
        this.message = new Message(id, expectStartTime, expectTime, tags, title, deadTime, precentage, simpleDec);
        this.description = description;                                          //任务的详细描述
        this.material = MessageDetailsHelper.splits(material);                   //任务所依赖的材料，以字符串传输和在后端存储，需要解析，有固定的分隔符
        this.dependPerson = MessageDetailsHelper.splits(dependPerson);           //任务所依赖的人，以字符串传输和在后端存储，需要解析，有固定的分隔符
        this.processDesc = MessageDetailsHelper.splits(processDesc);             //任务的执行流程，以字符串传输和在后端存储，需要解析，有固定的分隔符
        this.trace = MessageDetailsHelper.splits(trace);                         //任务的进度跟踪，以字符串传输和在后端存储，需要解析，有固定的分隔符
        this.issues = MessageDetailsHelper.splits(issues);                       //任务的问题记录，以字符串传输和在后端存储，需要解析，有固定的分隔符


        //method
        this.getPhoneNumber = function(){}                                       //返回<name,phoneNumber>键值对
        this.getWeChat = function(){}                                            //返回<name,weChat>键值对
    }



}





