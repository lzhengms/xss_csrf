>  ### 运行

1.进入XSS目录，运行node server.js
2.dom型的xss攻击例子--直接访问地址: http://localhost:3000/domxss.html
3.在输入框中输入<script>alert('test')</script>
4.持久型的xss攻击例子--直接访问地址：http://localhost:3000/database.html
5.持久型的xss攻击的预防例子--直接访问地址：http://localhost:3000/database_yufang.html

> ## XSS 攻击

**dom型的攻击预防**

1. 这个案例给的是DOM型的XSS攻击
2. 对用户输入的内容直接展示，没有对用户的输入数据进行过滤，太相信用户数据了
3. 预防措施，就是对用户的输入数据进行特殊字符的一些转义之后，再做展示

**持久型的攻击预防**

  1. 前端数据传递给服务器之前，先检验过滤转义
  2. 服务端接收到数据，在存储到数据库之前，做一次过滤转义
  3. 前端接收到服务端传递过来的数据，在展示到页面前，进行一次过滤转义

