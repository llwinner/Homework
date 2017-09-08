# 第一周作业
## 说明
> 
> `chromedriver.exe`	e2e测试chrome驱动，在windows server 2008 r2 下测试成功
> 
> `e2e.js`			e2e测试文件，实现连点10次退出
> 
> `index.css`		大拇指的css文件
> 
> `index.html`		首页html，显示了大拇指
> 
> `index.js`		通过`system.js`引入了编译后的`thumb.js（thumb-compile.js）`
> 
> `plugin.js`		jquery插件		
> 
> `thumb.js`		实现大拇指功能的js，es6编写
> 
> `thumb.part.js`		为了单元测试，把方法提取出来放到这个文件
> 
> `thumb.spec.js`		单元测试文件
> 
> `thumb-compile.js`	`thumb.js`的`babel`编译后的文件
> 
# 第二周作业
## 说明
> 
> 这周的作业放到了w2文件夹里边
> 
> `phptest`文件夹里边是作业的第一个要求，通过axios在div的点击事件中进行了post提交，提交到后台的`index.php`
> 
> `public/script` 目录是大拇指点赞的实现，`index.js`是具体实现，里边通过点击时间差进行抽稀
> 
> `mysql.js`是通过axios进行post提交，调用node.js里边设置的路由进行数据库更新
> 
> `test`文件夹是测试文件，包含了`e2e.js`进行点击测试，`index.spec.js`进行了单元测试
> 
> `views`文件夹是服务端渲染的页面，里边的`index.html`是大拇指的具体实现
> 
> `app.js`node.js的启动文件，里边设置了`/index/index`路由进行服务端渲染，设置了`/mysql`路由让前端进行post提交
> 
> mysql数据库中，在test库下边创建了yd表，里边2个列，一个是id自增列，一个是click_count点击更新
## 其他问题
> 
> 是通过两次点击的时间差来判断连点，不知道是否是正确的做法
> 
> 要求的功能除了测试接口之外皆完成，运行成功，不太清楚接口要如何测试，所以只进行了+1方法的单元测试和点击的e2e测试
> 
