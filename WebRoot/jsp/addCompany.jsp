<!DOCTYPE html>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib uri="/struts-tags" prefix="s" %>
<head>
    <meta charset="UTF-8">
    <title>addCompany</title>
    <link rel="stylesheet" href="../css/dashboard.css">
    <link rel="stylesheet" href="../css/addCompany.css">
    <link rel="stylesheet" href="../iconfont/iconfont.css">
</head>
<body>
    <header>
                <div align="center">
           <a href="bgindex.jsp"><font size="10" color="black">飞机航空后台管理系统</font></a>
            </div>
    </header>
<div class="container">
    <aside>
        <div class="navbar-header"><span>NAVIGATION</span></div>
        <ul class="nav-bar-container">
            <a href="#" class="nav-a">
                <li class="nav-list"><i class="iconfont">&#xe603;</i><span class="list-title">首页</span></li>
            </a>
            <a href="#user-info" class="nav-a">
                <li class="nav-list"><i class="iconfont">&#xe605;</i><span class="list-title">订票管理系统</span><i
                        class="iconfont float-right">&#xe608;
                </i></li>
            </a>
            <ul class="nav-child-list" id="user-info">
                <li class="nav-list"><i class="iconfont">&#xe609;</i><span>增加客户信息</span></li>
                <li class="nav-list"><i class="iconfont">&#xe609;</i><span>查询客户信息</span></li>
            </ul>

            <a href="#" class="nav-a">
                <li class="nav-list"><i class="iconfont">&#xe601;</i><span class="list-title">航班机票管理</span><i
                        class="iconfont float-right">&#xe608;
                </i></li>
            </a>
            <a href="#" class="nav-a">
                <li class="nav-list"><i class="iconfont">&#xe600;</i><span class="list-title">航班信息管理</span><i
                        class="iconfont float-right">&#xe608;
                </i></li>
            </a>
            <a href="#airCompany-manage" class="nav-a">
                <li class="nav-list"><i class="iconfont">&#xe605;</i><span class="list-title">航空公司管理</span><i
                        class="iconfont float-right">&#xe608;
                </i></li>
            </a>
            <ul class="nav-child-list" id="airCompany-manage">
                <li class="nav-list"><i class="iconfont">&#xe609;</i><span>增加航空公司</span></li>
                <li class="nav-list"><i class="iconfont">&#xe609;</i><span>航空公司信息</span></li>
            </ul>
            <a href="#plantType-manage" class="nav-a">
                <li class="nav-list"><i class="iconfont">&#xe600;</i><span class="list-title">机型管理</span><i
                        class="iconfont float-right">&#xe608;
                </i></li>
            </a>
            <ul class="nav-child-list" id="plantType-manage">
                <li class="nav-list"><i class="iconfont">&#xe609;</i><span>增加机型</span></li>
                <li class="nav-list"><i class="iconfont">&#xe609;</i><span>查询机型信息</span></li>
            </ul>
            <a href="#" class="nav-a">
                <li class="nav-list"><i class="iconfont">&#xe602;</i><span class="list-title">报表打印管理</span><i
                        class="iconfont float-right">&#xe608;
                </i></li>
            </a>
            <a href="#user-manage" class="nav-a">
                <li class="nav-list"><i class="iconfont">&#xe60a;</i><span class="list-title">人员用户管理</span><i
                        class="iconfont float-right">&#xe608;
                </i></li>
            </a>
            <ul class="nav-child-list" id="user-manage">
                <li class="nav-list"><i class="iconfont">&#xe609;</i><span>增加普通管理员</span></li>
                <li class="nav-list"><i class="iconfont">&#xe609;</i><span>查询普通管理员</span></li>
            </ul>
        </ul>
    </aside>
    <form action="addCompanyServer" method="post">
    <div class="content">
        <div class="content-header">
            <i class="iconfont">&#xe607;</i>
            <i class="iconfont">&#xe606;</i>
            <span>增加航空公司</span>
        </div>
        <div class="content-title">
            <div class="flag">
                <i class="iconfont">&#xe604;</i>
            </div>
            <div class="title">
                <h2>添加航空公司</h2>
            </div>
        </div>

        <div class="form-addCompany1">
            <div class="form-header"><span>添加航空公司</span></div>
            <p>
                <label>公司名:</label> <input name="company.companyname" type="text">
            </p>
            <p>
                <label>公司代码:</label> <input name="company.companycode" type="text">
            </p>
            <p>
                <label>公司信息:</label> <input name="company.companyinfo" type="text">
            </p>
            <p>
                <label>公司网址:</label> <input name="company.companyurl" type="text">
            </p>
            <p>
                <label>公司电话:</label> <input name="company.companyphone" type="text">
            </p>
            <div align="center" style="margin: 20px auto;">
                <input type="submit" style="width: 50px;height: 30px;" value="保存">
            </div>
        </div>

        <div class="form-addCompany2">
            <div class="form-header"><span>折扣信息</span></div>
            <p>
                <label>金牌用户:</label> <input name="discount.gloduser" type="text">
            </p>
            <p>
                <label>银牌用户:</label> <input name="discount.silveruser" type="text">
            </p>
            <p>
                <label>儿童:</label> <input name="discount.childen" type="text" placeholder="0.5">
            </p>
        </div>
    </div>
    </form>
</div>
<script src="../js/dashboard.js"></script>
</body>
</html>