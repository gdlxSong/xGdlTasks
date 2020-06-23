

/*

    这里用于编写前端和后端交互的数据协议。
    数据交互基于json

*/



/*            ==========================    定义一些数据模板  =========         */

//Message:
var template_message = `<div class="xGdlTasks_Message" id="00012A">
<div class="xGdlTasks_Message_Head">

    <div class="Message_Head_title">古来圣贤皆寂寞
        <span class="Message_Head_tag" style="margin-left: 10px;">紧急</span>
        <span class="Message_Head_tag">重要</span>
        <span class="Message_Head_id">00012A</span>
        <span class="Message_Head_expect_start_time">2020.12.02</span>
        <span class="Message_Head_expect_span_time">23d07h</span>
    </div>
    <div class="xGdlTasks_Message_Body">
        <div class="Message_status">
            <div class="Message_Task_status">
                <div class="Message_Task_status_child" style="background-color: antiquewhite;" title="截止时间" >2020.06.28</div>
                <span class="Message_Task_status_child" style="background-color: rgb(131, 106, 74);" title="剩余时间">20h15min</span>
                <span class="Message_Task_status_child"  style="background-color: rgb(187, 175, 159);" title="任务进度">85%</span>
            </div>
        </div>
        <div class="Message_Field_Desc">
            <div class="Message_Field_Desc_Title">详细描述：</div>
            <div class="Message_desc_content">
                呼和浩特、西安及郑州社保公积金费用本月预收次月。入职前请提前与前公司确认好社保公积
金减员及缴费截止时间等事宜。凡入职时间晚于本地区当月社保公积金增员截止时间的，公司
将于次月开始为员工缴纳社保公积金。无参保记录的需按照新参流程申请，请提前准备一张电
子版一寸白底彩色证件照（电子版照片要求：该电子照片用于制作社会保障卡，应符合格式要
求：本人近期一寸、正面、免冠、彩色、白底、服装与背景的颜色反差要大的电子照片
            </div>
        </div>
        </div>
        <div class="Message_button">详情点击</div>
    </div>
</div>`;

var template_message_fields = `<div class="Message_Fields_List">
<div class="Message_Field_Content">
    <div class="Message_Field">依赖材料：</div>
    <div class="Message_Field_Text">
        <ol>
            <li>身份证复印件（双面）</li>
            <li>体检报告（三甲；心、肝、肺、肾）</li>
            <li>个人信息收集表（在线）</li>
        </ol>
    </div>
</div>
<div class="Message_Field_Content">
    <div class="Message_Field">依赖人物：</div>
    <div class="Message_Field_Text">
        <ol>
            <li>王二，通信主任，电话：15882927354， 微信：痕迹</li>
            <li>李四，电话：18755910758</li>
        </ol>
    </div>
</div>
<div class="Message_Field_Content">
    <div class="Message_Field">执行流程：</div>
    <div class="Message_Field_Text">
        <ul>
            <li>首先准备身份证复印件</li>
            <li>去医院体检，获取体检报告，需要排号</li>
            <li>填写个人信息登记表</li>
            <li>在2020.6.28-18:25之前将材料递交给鱼薇</li>
        </ul>
    </div>
</div>
<div class="Message_Field_Content">
    <div class="Message_Field">进度跟踪：</div>
    <div class="Message_Field_Text">
        <ul>
            <li>首先准备身份证复印件</li>
            <li>去医院体检，获取体检报告，需要排号</li>
            <li>填写个人信息登记表</li>
            <li>在2020.6.28-18:25之前将材料递交给鱼薇</li>
        </ul>
    </div>
    <div class="Message_Add_Content">
        <textarea class="Message_Add_Content_WriteBox"></textarea>
        <button class="Message_Add_Content_Submit">增加记录</button>
    </div>
</div>

<div class="Message_Field_Content">
    <div class="Message_Field">问题记录：</div>
    <div class="Message_Field_Text">
        <ul>
            <li>你这和和有问题</li>
        </ul>
    </div>
    <div class="Message_Add_Content">
        <div style="text-indent: 2em; font-family: '华文行楷';">开始你的问题记录叭~~~</div>
        <textarea class="Message_Add_Content_WriteBox"></textarea>
        <button class="Message_Add_Content_Submit">增加记录</button>
    </div>
</div>
</div>`;




//定义一个消息头：
function MessageHead(id, expectStartTime, expectTime, tags, title, deadTime, precentage) {
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


function Message(id, expectStartTime, expectTime, tags, title, deadTime, precentage, simpleDec) {
    this.head = new MessageHead(id, expectStartTime, expectTime, tags, title, deadTime, precentage);
    this.simpleDesc = simpleDec;                //任务的简单描述

    this.getID = function() {
        return head.id;
    }
}


function MessageDetailsHelper(){

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

function MessageDetails(id, expectStartTime, expectTime, tags, title, deadTime, precentage, simpleDec, description, material, dependPerson, processDesc, trace, issues) {
    this.message = new Message(id, expectStartTime, expectTime, tags, title, deadTime, precentage, simpleDec);
    this.description = description;                                          //任务的详细描述
    this.material = MessageDetailsHelper.splits(material);                   //任务所依赖的材料，以字符串传输和在后端存储，需要解析，有固定的分隔符
    this.dependPerson = MessageDetailsHelper.splits(dependPerson);           //任务所依赖的人，以字符串传输和在后端存储，需要解析，有固定的分隔符
    this.processDesc = MessageDetailsHelper.splits(processDesc);             //任务的执行流程，以字符串传输和在后端存储，需要解析，有固定的分隔符
    this.trace = MessageDetailsHelper.splits(trace);                         //任务的进度跟踪，以字符串传输和在后端存储，需要解析，有固定的分隔符
    this.issues = MessageDetailsHelper.splits(issues);                       //任务的问题记录，以字符串传输和在后端存储，需要解析，有固定的分隔符


    //method
    this.getID = function(){return message.getID();}
    this.getPhoneNumber = function(){}                                       //返回<name,phoneNumber>键值对
    this.getWeChat = function(){}                                            //返回<name,weChat>键值对

}



/*
    @messageDOMConstructor
    @kind:      {message | messageDetail}
    @return:    返回一个dom对象
*/
function messageDOMConstructor(kind, msg) {

    var dom = parseDom(template_message);

    this.data = msg;
    dom.hasFields = false;
    //定位message head
    dom.head = dom.getElementsByClassName("xGdlTasks_Message_Head")[0];
    //定位message body
    dom.body = dom.getElementsByClassName("xGdlTasks_Message_Body")[0];

    //initialize message head.



    //给对象装在两个成员函数.
    //create Fields.
    dom.createFields = function() {
        if(this.hasFields)return;
        //创建fields
        this.body.fields = new MessageFields(this.data);
        this.body.appendChild(this.body.fields);
        //display none
        this.body.fields.display(false);
        this.hasFields = true;
    };
    //display Fields.
    dom.displayFields = function(flag) {
        if(false == this.hasFields)return;
        if(false == flag) this.body.fields.display(false);
        else 
            this.body.fields.display(false);
    }
    return dom;
}



function MessageFields(msg) {

    //data
    this.data = msg;
    //dom
    this.dom = parseDom(template_message_fields);
    
    //initializer dom from data.
    var f = dom.getElementsByClassName("Message_Field_Content")[0];

    this.fields = new Map();

    var testAndSet = function(fieldName, dom) {
        //依赖材料
        var field = f.getElementsByName(fieldName);
        if(undefined != field) dom.fields.set(fieldName, field);
    }
    //依赖材料
    testAndSet("dependMaterial", this);
    //依赖人物
    testAndSet("dependPersons", this);
    //执行流程
    testAndSet("processDesc", this);
    //进度跟踪
    testAndSet("trace", this);
    //问题记录
    testAndSet("issues", this);





    //method....
    this.display = function(flag) {
        if(false == flag) this.style.display = "none";
        else 
            this.style.display = "block";
    }
}