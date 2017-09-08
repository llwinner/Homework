<?php 
//点击加一方法，返回插入后的结果，1为成功。
function AddCount(){
    $con = mysqli_connect("localhost","root","");
    $result = 0;
    if (!$con){
        die('Could not connect: ' . mysql_error());
    }else{
        mysqli_select_db($con,"test");
        $sql = "UPDATE `yd` SET `click_count`= `click_count` + 1 WHERE `id` = 1";
        $result = mysqli_query($con, $sql);
    }
    mysqli_close($con);
    return $result;
}

//调用方法
AddCount();
?>