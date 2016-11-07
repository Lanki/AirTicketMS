<!DOCTYPE html>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib uri="/struts-tags" prefix="s" %>
<head>
    <meta charset="UTF-8">
    <title>alreadyPlants</title>
    <link rel="stylesheet" href="../css/dashboard.css">
    <link rel="stylesheet" href="../css/alreadyPlants.css">
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
            <a href="bgindex.jsp" class="nav-a">
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
            <a href="#airSchedul-manage" class="nav-a">
                <li class="nav-list"><i class="iconfont">&#xe600;</i><span class="list-title">航班信息管理</span><i
                        class="iconfont float-right">&#xe608;
                </i></li>
            </a>
            <ul class="nav-child-list" id="airSchedul-manage">
                <a href="#">
                    <li class="nav-list" style="background-color: white;"><i class="iconfont">
                        &#xe609;</i><span>增加航班信息</span></li>
                </a>
                <a href="#">
                    <li class="nav-list" style="background-color: white;"><i class="iconfont">
                        &#xe609;</i><span>航空公司所有航班</span></li>
                </a>
                <a href="#">
                    <li class="nav-list" style="background-color: white;"><i class="iconfont">
                        &#xe609;</i><span>航空公司已有航班</span></li>
                </a>

            </ul>
            <a href="#airCompany-manage" class="nav-a">
                <li class="nav-list"><i class="iconfont">&#xe605;</i><span class="list-title">航空公司管理</span><i
                        class="iconfont float-right">&#xe608;
                </i></li>
            </a>
            <ul class="nav-child-list" id="airCompany-manage">
                <a href="addCompany.jsp" ><li class="nav-list" style="background-color: white;"><i class="iconfont">&#xe609;</i><span>增加航空公司</span></li></a>
                <a href="showCompany" ><li class="nav-list" style="background-color: white;"><i class="iconfont">&#xe609;</i><span>航空公司信息</span></li></a>
                <a href="showCompany?locationurl=companyhaveplane" ><li class="nav-list" style="background-color: white;"><i class="iconfont">&#xe609;</i><span>航空公司已有机型</span></li></a>           		
            </ul>
            <a href="#plantType-manage" class="nav-a">
                <li class="nav-list"><i class="iconfont">&#xe600;</i><span class="list-title">机型管理</span><i
                        class="iconfont float-right">&#xe608;
                </i></li>
            </a>
            <ul class="nav-child-list" id="plantType-manage">
               <a href="showCompanyName"><li class="nav-list" style="background-color: white;"><i class="iconfont">&#xe609;</i><span>增加机型</span></li></a>
               <a href="showAllPlaneModel"><li class="nav-list" style="background-color: white;"><i class="iconfont">&#xe609;</i><span>查询机型信息</span></li></a>
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
    <div class="content">
        <div class="content-header">
            <i class="iconfont">&#xe607;</i>
            <i class="iconfont">&#xe606;</i>
            <span>航空公司已有航班</span>
        </div>
        <div class="content-title alreadyPlants">
            <div class="flag">
                <i class="iconfont">&#xe604;</i>
            </div>

            <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <td><span>出发地:</span></td>
                    <td><span>目的地:</span></td>
                    <td><span>时间:</span></td>
                </tr>
                <tr>
                    <td><input type="text" placeholder="上海"></td>
                    <td><input type="text" placeholder="广州"></td>
                    <td><input type="date"></td>
                </tr>

            </table>
            <input type="submit" value="提交" class="already-submit">
        </div>

        <div class="table-container">
            <div class="table-container-header"><span>已添加的航班</span></div>
            <div class="subtitle">
                <span>show</span>
                <div class="show-select">
                    <select class="select-entries">
                        <option value="10">10</option>
                        <option value="10">9</option>
                        <option value="10">8</option>
                        <option value="10">7</option>
                    </select>
                    <i class="iconfont">&#xe615;</i>
                </div>
                <span>entries</span>

                <div class="search">
                    <label>Search:</label><input type="text">
                </div>
            </div>
            <table class="table-form" border = 0 cellspacing = 0 cellpadding = 0>
                <tr>
                    <td><span>航班号</span></td>
                    <td><span>出发地</span></td>
                    <td><span>目的地</span></td>
                    <td><span>出发时间</span></td>
                    <td><span>到达时间</span></td>
                    <td><span>航空公司</span></td>
                    <td><span>操作</span></td>
                </tr>
                <tr>
                    <td><span>CZ3099</span></td>
                    <td><span>上海</span></td>
                    <td><span>广州</span></td>
                    <td><span>16:30:00</span></td>
                    <td><span>18:55:00</span></td>
                    <td><span>厦门航空</span></td>
                    <td><i class="iconfont">&#xe616;</i></td>
                </tr>
            </table>
            <div class="table-footer">
                <span>Showing 1 to 1 of entries</span>
                <div class="page">
                    <input type="button" value="First">
                    <input type="button" value="Previous">
                    <input class="pageNumber" type="text" placeholder="1">
                    <input type="button" value="Next">
                    <input type="button" value="Last">
                </div>
            </div>
        </div>

        <div class="table-container">
            <div class="table-container-header"><span>可添加的航班</span></div>
            <div class="subtitle">
                <span>show</span>
                <div class="show-select">
                    <select class="select-entries">
                        <option value="10">10</option>
                        <option value="10">9</option>
                        <option value="10">8</option>
                        <option value="10">7</option>
                    </select>
                    <i class="iconfont">&#xe615;</i>
                </div>
                <span>entries</span>

                <div class="search">
                    <label>Search:</label><input type="text">
                </div>
            </div>
            <table class="table-form" border = 0 cellspacing = 0 cellpadding = 0>
                <tr>
                    <td><span>航班号</span></td>
                    <td><span>出发地</span></td>
                    <td><span>目的地</span></td>
                    <td><span>出发时间</span></td>
                    <td><span>到达时间</span></td>
                    <td><span>航空公司</span></td>
                    <td><span>操作</span></td>
                </tr>
                <tr>
                    <td><span>MU5103</span></td>
                    <td><span>上海</span></td>
                    <td><span>广州</span></td>
                    <td><span>10:00:00</span></td>
                    <td><span>13:10:00</span></td>
                    <td><span>东方航空</span></td>
                    <td><i class="iconfont">&#xe616;</i></td>
                </tr>
                <tr>
                    <td><span>MF8301</span></td>
                    <td><span>上海</span></td>
                    <td><span>广州</span></td>
                    <td><span>18:25:16</span></td>
                    <td><span>18:25:19</span></td>
                    <td><span>东方航空</span></td>
                    <td><i class="iconfont">&#xe616;</i></td>
                </tr>
            </table>
            <div class="table-footer">
                <span>Showing 1 to 1 of entries</span>
                <div class="page">
                    <input type="button" value="First">
                    <input type="button" value="Previous">
                    <input class="pageNumber" type="text" placeholder="1">
                    <input type="button" value="Next">
                    <input type="button" value="Last">
                </div>
            </div>
        </div>

    </div>
</div>
<script src="../js/dashboard.js"></script>
</body>
</html>