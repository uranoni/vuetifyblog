<template>

    <div class="authentication_page login_form">
        <div class="page_inner">
            <div class="login_left">
                <div class="left_inner">
                    <div class="over_block">
                       
                           <div class="ln-1-content text-center">
	<img src="../assets/images/ln-1-logo.png" alt="logo" class="img-fluid">
	 <form>
    <div class="input-group">
	 <span class="input-group-addon"><i class="fa fa-envelope mr-3"></i></span>   
      <input v-model="email" type="text" class="form-control" name="email" placeholder="Email">
     
    </div>
    <div class="input-group">
	 <span class="input-group-addon"><i class="glyphicon glyphicon-lock mr-3"></i></span>
      <input v-model="password" type="password" class="form-control" name="password" placeholder="Password">
    </div>
  </form>
  <div class="row ln-1-mg">
 
  <div class="col-12 col-sm-6 col-md-6 col-lg-6">  <div class="checkbox checkbox-primary float-left">
            <input id="checkbox2" type="checkbox">
            <label for="checkbox2">
                            Remember me
                        </label>
          </div></div>
  <div class="col-12 col-sm-6 col-md-6 col-lg-6"><a href="forgot-1.html" class="float-right"><span class="fa fa-question-circle forgot"></span>Forgot password?</a></div>
  </div>
<a @click="logout" class="btn ln-1-btn text-center">LOGIN</a>
<p>Don't have an account?<a href="regsiter-1.html" class="ml-3">Register now</a></p>
	</div>
						
						
                    
						
                    </div>
                </div>
            </div>
			
        </div>
		
    </div>

</template>
<script>
import {LOGIN} from "../constants/graphql"
export default {
	data(){
		return{
			email:"",
			password:""
		}
	},
	methods:{
		logout(){
			const {email,password} = this.$data;
			this.$apollo
				.mutate({
					mutation:LOGIN,
					variables:{
						email,
						password
					}
				})
				.then(result=>{
					const {tokens} =result.data.login;
					const token = tokens[tokens.length-1].tokenHash;
					window.localStorage.setItem("authToken",token);
					this.$store.commit("setUser",result.data.login);
					this.$router.push("/Home");
				})
				.catch(err=>{
					console.log(err)
				})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    font-weight: 400;
    overflow-x: hidden;
    background: #fff;
    line-height: 30px;
}

.no-padding{
	padding-right:0;
	padding-left:0;
	margin-right:0;
	margin-left:0;
}

.ln-1-btn{
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

.ln-1-btn:hover
{
    -webkit-transform: scale(1.2);
    transform: scale(1.1);
    z-index: 10;
    position: relative;
}




/*************************      FOR SPLIT SCREEN        **************** ******/




.authentication_page {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background:url(../assets/images/ln-1-bg.png);
    overflow: hidden;
    background-position:  center;
}
.authentication_page .page_inner {
    height: inherit;
    width: inherit;
}

.authentication_page .page_inner .login_left {
    position: absolute;
    left: 0;
    top: 0;
    display:  table;
    height:100%;
    width: 100%;
    z-index: 11;
}
.authentication_page .page_inner .login_left .left_inner {
    height: inherit;
}
.authentication_page .page_inner .login_left .left_inner .over_block {
    position: relative;
    height: inherit;
    background: #0095f3;
    display: table;
    background: transparent;
    background-size: cover;
    text-align: center;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.authentication_page .page_inner .login_left .left_inner .over_block:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
}



.authentication_page .page_inner .login_left .left_inner .over_block .left_top .logo_block a {
    display: block;
}

.authentication_page .page_inner .login_left .left_inner .over_block .left_top h1 {
	color: rgb(40, 56, 126);
	font-weight:  700;
	font-size: 33px;
	margin-top: 37px;
	font-family:'Lato',sans-serif;
}
.authentication_page .page_inner .login_left .left_inner .over_block .left_top h2 {
    line-height: 36px;
    margin-bottom: 29px;
    font-size: 17px;
    margin-top: 29px;
    font-weight: 600;
    color: rgb(40, 56, 126);
    font-family: 'Lato',sans-serif;
}

.authentication_page .page_inner .login_left .left_inner .over_block .top_link_main .top_link .btn:hover,
.authentication_page .page_inner .login_left .left_inner .over_block .top_link_main .top_link .btn:focus{
	background: #d88a16!important;
}





/*************************************************
*****************   login -1   ******************/


.input-group{
	margin: 27px 0;
}
.login-1-content p{
	color: #b8b9b9;
    font-size: 18px;
}

p{
	   color: #858888;
	   font-size: 18px;
	   margin-top: 38px;
	   font-family: 'Open Sans', sans-serif;
}
p a{
	font-size:18px !important;
	color: #34a2f6 !important;
	font-family: 'Open Sans', sans-serif;
}
.ln-1-content{
	padding: 41px 70px;
	margin:0 auto;
	border-radius: 20px;
	border-style: solid;
	border-width: 2px;
	position:  relative;
	border-color:  rgba(239, 239, 239, 74);
	box-sizing: border-box;
	background-color:  #ffffff;
	box-shadow: 19px 34px 56.4px 3.6px rgba(0, 0, 0, 0.24);
	width: 576px;
}
.ln-1-content .img-fluid,
.img-register{
	height: 107px;
	width: 107px;
	margin-top: 23px;
}
a:hover,
a:focus,
a:active{
	text-decoration:none;
}
.form-control:hover,
.form-control:focus,
.form-control:active{
	box-shadow:none;
	border-color: #3593f9;
}
   
.form-control{
	border:none;
	border-bottom: 1px solid #b5d2fd;
	box-shadow:none;
	height:45px;
	border-radius: 0;
	border-radius:  none;
	padding: 0px;
	color: #3593f9 !important;
}
.input-group span{
	background: transparent;
    border: none;
}
.input-group-addon i,
a span{
	font-size:  18px;
	color: #3593f9;
}
a{
	color: #158ae3 !important;
	font-size:  16px;
	margin-top: 2px;
	font-family:  'Open Sans', sans-serif;
	font-style: light;
}
.fa{
	font-size:18px;
}
.ln-1-btn{
	background: -webkit-linear-gradient(0deg, #37a1f6 0%, #3984fb 100%);
	background: -moz-linear-gradient(0deg, #37a1f6 0%, #3984fb 100%);
	background: -o-linear-gradient(0deg, #37a1f6 0%, #3984fb 100%);
	background: -ms-linear-gradient(0deg, #37a1f6 0%, #3984fb 100%);
	background: linear-gradient(90deg, #37a1f6 0%, #3984fb 100%);
	box-shadow: 3px 5px 10px 0px rgba(55, 154, 247, 0.46);
	color: #fff !important;
	font-weight:  700;
	font-size: 18px;
	border-radius: 25px;
	margin: 0 0;
	font-family: 'Lato', sans-serif;
	padding: 10px 42px;
}

input::-webkit-input-placeholder {
    color:#44aeff !important;
    font-size: 14px;
	font-family: 'Roboto',sans-serif;
}
input:-moz-placeholder {
    /* Firefox 18- */
    color:#44aeff !important;
    font-size: 14px;
	font-family: 'Roboto',sans-serif;
}
 input::-moz-placeholder {
    /* Firefox 19+ */
    color: #44aeff !important;
    font-size: 14px;
	font-family: 'Roboto',sans-serif;
}
input:-ms-input-placeholder {
    color:#44aeff !important;
    font-size: 14px;
	font-family: 'Roboto',sans-serif;
}
.checkbox {
  padding-left: 20px;
  margin: 12px 0;
  margin-top:  0;
}

.checkbox label {
  display: inline-block;
  vertical-align: middle;
  position: relative;
  padding-left: 32px;
  margin-top: 0;
  font-family: 'OpenSans',sans-serif;
  color: #158ae3 !important;
  font-size: 16px;
}

.checkbox label::before {
  content: "";
  display: inline-block;
  position: absolute;
  width: 17px;
  height: 17px;
  left: 12px;
  top: 4px;
  margin-left: -20px;
  border: 1px solid #158ae3;
  border-radius: 3px;
  background-color: #158ae3;
  -webkit-transition: border 0.15s ease-in-out, color 0.15s ease-in-out;
  -o-transition: border 0.15s ease-in-out, color 0.15s ease-in-out;
  transition: border 0.15s ease-in-out, color 0.15s ease-in-out;
}

.checkbox label::after {
  display: inline-block;
  position: absolute;
  width: 16px;
  height: 16px;
  left: 11px;
  top: -2px;
  margin-left: -20px;
  padding-left: 3px;
  padding-top: 1px;
  font-size: 11px;
  color: #555555;
}
.checkbox-primary input[type="checkbox"]:checked + label::before {
  background-color: #fff;
  border-color: #158ae3;
}

.checkbox-primary input[type="checkbox"]:checked + label::after {
  color: #3593f9;
}
.checkbox input[type="checkbox"] {
  opacity: 0;
  z-index: 1;
}

.checkbox input[type="checkbox"]:focus + label::before {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}

.checkbox input[type="checkbox"]:checked + label::after {
  font-family: 'FontAwesome';
  content: "\f00c";
}

.checkbox input[type="checkbox"]:disabled + label {
  opacity: 0.65;
}

.checkbox input[type="checkbox"]:disabled + label::before {
  background-color: #eeeeee;
  cursor: not-allowed;
}

form{
	padding:17px 0;
	padding-top: 0;
}
.ln-1-mg{
	margin-bottom: 33px;
	/* width: 462px; */
}
.img-register{
	margin-bottom:-15px;
	margin-top: 9px;
}

/*****************************************
************forgot-1*******************/


.ln-1-content h1{
	color: #3593f9;
	font-weight:  400;
	margin-top: 55px;
	font-family: 'Open Sans', sans-serif;
	font-size: 28px;
}
.ln-1-content h3{
	color: #76b4fb;
	font-weight:  100;
	font-size:17px;
	font-family: 'Open Sans', sans-serif;
	margin-bottom: 49px;
}
.forgot-1 .input-group{
	margin-top: 50px;
	margin-bottom:  50px;
}

.forgot{
	display:none;
}
@media(max-width: 1400px) {
	.authentication_page{
	background-position:bottom;
	background-size:cover;
}
p{
		margin-bottom: 39px;
		margin-top: 33px;
	}
.authentication_page .page_inner .login_left .left_inner .over_block{
	padding-left: 53px;
}

	.ln-1-content{
		padding:0 70px;
	}
		.ln-1-content .img-fluid, .img-register {
    height: 107px;
    width: 107px;
    margin-top: 30px;
    margin-bottom: 0;
}
.input-group {
    margin: 27px 0;
}

.register{
	/* margin-bottom: 64px; */
	margin: 33px 0;
	margin-bottom: 37px;
}
.ln-1-content h1{
	margin-top:47px;
}
.ln-1{
	width:100%;
	height:660px;
}
.authentication_page{
		background-position: bottom;
    background-size: cover;
	}
}
@media(max-width:1199px) {
	
	.authentication_page .page_inner .login_left .left_inner .over_block .left_top{
	width: 61%;
}
.authentication_page .page_inner .login_left .left_inner .over_block{
	padding-left:0;
	display: flex !important;
}
	.ln-1-content{
		padding: 0 70px;
	}
	.ln-1-content .img-fluid, .img-register {
    height: 107px;
    width: 107px;
    margin-top: 23px;
    margin-bottom: 0;
}
.ln-1-mg {
    margin-bottom: 43px;
}
.input-group{
	margin:27px 0;
}
.ln-1{
	width:100%;
	height:660px;
}
}
@media(max-width:991px) {
	.authentication_page .page_inner .login_left .left_inner .over_block .left_top{
	width: 70%;
}
.authentication_page .page_inner .login_left .left_inner .over_block{
	padding-left:0;
	display: flex !important;
}
	.ln-1-content{
		padding:0 70px;
	}
	.ln-1-content .img-fluid {
    height: 90px;
    width: 90px;
    margin-top: 40px;
    margin-bottom: 6px;
}
.input-group{
	margin: 24px 0;
	margin-top: 0;
}
.ln-1-mg{
	margin-bottom: 21px;
	/* width: 111%; */
}
.ln-1-content h1{
	margin-top: 23px;
}
.img-register{
	height: 90px;
	width: 90px;
	margin-top: 29px;
	margin-bottom: 0;
}
.ln-1{
	width:100%;
	height:660px;
}
}
@media(max-width:767px) {
	.authentication_page .page_inner .login_left .left_inner .over_block .left_top{
		width: 86%;
		padding: 16px;
	}
	.authentication_page .page_inner .login_left .left_inner .over_block{
		padding-left: 0;
		display: flex !important;
		margin:  0 auto;
	}
	.ln-1-content {
		width: 68%;
		padding: 18px 9px;
	}
	.checkbox label{
		padding-left: 56px;
	}
	.checkbox label,a{
		font-size: 14px;
	}
	.ln-1-content h3{
		font-size: 13px;
		margin-bottom: 28px;
	}
	
	.ln-1-content .img-fluid {
    height: 75px;
    margin-top: 15px;
    width: 75px;
    margin-bottom: 0px;
}
.input-group{
	width:79%;
	margin:0 auto;
	margin-top: 0;
	margin-bottom: 11px;
}
.ln-1{
	    width: 100%;
    height: 660px;
}
.checkbox label{
	/* margin-top:0; */
}

.checkbox {
    padding-left: 37px;
    margin-bottom: 5px;
    margin-top: -4px;
}
.checkbox label::before{
	height: 13px;
	width: 13px;
	top: 6px;
	left: 40px;
}
.input-group-addon i{
	font-size:14px;
}
a{
	padding-right:15px;
}
p{
	font-size: 14px;
	margin-top: 24px;
	margin-bottom:  20px;
}
.checkbox label::after{
	left: 11px;
}
p a{
	font-size:15px !important;
}
.ln-1-btn{
	padding: 8px 37px;
	font-size: 14px;
}
.ln-1-content h1{
	font-size:23px;
}
.img-register{
	width:75px;
	height:75px;
	margin-top:9px;
	margin-bottom: 5px;
}
.ln-1-content h1 {
    margin-top: 25px;
}
}

@media(max-width:600px) {
	.input-group {
		width: 86%;
	}
	.forgot{
		display: inline-block;
		padding-left: 30px;
		/* margin-top: -15px; */
		padding-right:  22px;
	}
	.ln-1-content .float-right{
	float:left !important;
}
	.ln-1-content {
    width: 86%;}
	.checkbox label{padding-left: 30px;font-size:  14px;margin-top: -8px;}
	.checkbox label::before{left: 14px;}
}
</style>
