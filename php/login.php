<?php
  include("MySQLconnexion.php");
  session_start();
?>

<?php

if(isset($_POST['username'])){

    $name=$_POST['username'];
    $password=$_POST['password'];

    $sql="select *
    from login
    where user='".$name."' AND password='".$password."' limit 1";

    $result=mysql_query($sql);

    if(mysql_num_rows($result)==1){
        echo " you have Successfully Logged in";
        exit();
    }
    else{
        echo "you have entered Incorrect Password";
        exit();
    }

}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" type="text/css" href="css/stylelogin.css">
</head>
<body>
    <section>
        <div class="box">
            <div class="form">
                <h2>Login</h2>
                <form method="post" >
                    <div class="inputBx">
                        <input type="text" placeholder="Username">
                        <img src="img/user.png">
                    </div>
                    <div class="inputBx">
                        <input type="password" placeholder="password">
                        <img src="img/password.png">
                    </div>
                    <label class="remember"><input type="checkbox">
                    Remember Me</label>
                    <div class="inputBx">
                        <input type="submit" value="Login">
                    </div>
                </form>
                <p>Forget <a href="#">Password</a></p>
                <p>Need an <a href="#">Account</a></p>
            </div>
        </div>
    </section>
</body>
</html>
