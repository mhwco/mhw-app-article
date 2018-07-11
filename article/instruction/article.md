# 准备工作

1. 从mhw-app-article项目中fetch+pull（关于git仓库会在接下来提到）

2. 将根目录下templates文件夹中的article_tpl文件夹复制到根目录下的article文件夹中，并进行重命名。名称应与文章主题有关并且命名文字取值范围为a-z，A-Z，0-9和下划线

   ```
   JavaScript_manual : 可用
   IntroductionOfOffice365 : 可用
   dud99hudsd67vssuh : 可用，但不推荐
   化学与日常生活 : 不可用，超出取值范围
   ```

3. 文章模板文件夹中的文件功能
   article.md : 文章主文件
   manifest.json : 文章信息
   index.html : 向用户显示文章，***不得修改！***
   load.js : 将文章加载到index.html中，***不得修改！*** 

4. manifest.json修改

   manifest.json文件格式如下：

   ```json
   {
   	"author":"作者名",
   	"title":"文章标题",
   	"detail":"文章简介",
   	"date":"日期，yyyy-mm-dd格式",
   	"image":"标题图URL"
   }
   ```

   下面是一个完整的manifest.json文件示例：

     ```json
   {
   	"author":"Crindzebra",
   	"title":"PHP——世界上最好的编程语言",
   	"detail":"PHP 是一种创建动态交互性站点的强有力的服务器端脚本语言。是一种高效率的选项",
   	"date":"2018-7-10",
   	"image":"https://php.net/images/logos/new-php-logo.svg"
   }
     ```
   在修改文件时，请时刻注意：***不要修改任何其他字符！***

   关于JSON的更多信息，可以参阅：

   [JSON官网](https://json.org/)

   [W3CSchool](https://www.w3cschool.cn/json/)

# 文章创作

1. MHW app使用Markdown语法来创作文章。

   ```markdown
   # H1 Title
   ## H2 Title
   > Blockquote
   list:
   1. list
   2. list
   - list
   font style:*Italic*,**Black**and***Italic-Black***
   ```

   关于Markdown的更多信息，可以参阅：
   
   [Markdown官网](https://daringfireball.net/projects/markdown/syntax)

   [W3CSchool](https://www.w3cschool.cn/markdownyfsm/)