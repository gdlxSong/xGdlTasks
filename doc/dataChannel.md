## 关于dataChannel的设计

### 设计方案1

&emsp;&emsp;按照结构化数据设计，

```c++
struct Message {
    Head head;
    Body body;
}

struct Head {
    string id;
    string title;
    Tag tags[];
    string timespan;
    string starttime;
    Status status;
}

struct Body{
    Description desc;
    Field field[];
    ...
}

struct Tag {
    ...
}
...
```

结构化可以快速的进行数据解析和处理，但是其拓展性不够。


## 随机搜索，散漫性

```c++
struct Message{
    Head getHead();
    Body getBody();
}

struct Head {
    string getId();
    string getTitle();
    Tag[] getTags();
    ...
}

struct Body{
    Description getDesc();
    Field[] getFields();
    ...
}

```

替换一下就是这样：
```javascript
function Message() {
    this.getter = function(fieldName) {
        //....
    }
    this.setter = function(fieldName, value) {
        //...
    }
}

//field name 可以来自配置文件
```


如上面，只是暴露接口，而不暴露任何细节，而在是实现上可以采取 dom.getElementsByClassName等结合两边（数据源（json/xml）,dom对象）的操作方法进行交互也就没有了约束，易于扩展，但是性能低。

这样在扩展上可以使用如配置文件进行操作，其实js是纯动态的语言，所以可以根绝配置文件来实现方案1中的结构化，但是还可以动态更新。其实java早就这样做了。




其实到最后连配置文件都不需要了，如果按照xml传递的话。

```xml
<Material>
    <Elem>天青色等烟雨</Elem>
    <Elem>而我在等你</Elem>
</Material>

        ||
        ||   从上面到下面做一个映射即可
       \||/
        
<div class="Message_Field_Content" name="dependMaterial">
    <div class="Message_Field">依赖材料：</div>
    <div class="Message_Field_Text">
        <ol>
            <li>天青色等烟雨</li>
            <li>而我在等你</li>
        </ol>
    </div>
</div>

```