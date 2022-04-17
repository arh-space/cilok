function get_captcha(){document.querySelector(".form.login").querySelector("img").src="/captcha?d="+Math.random()}
$(function(){$('#registerConfirm').click(function(){const email=$('input[name=email]');const user=$('input[name=user]');const pwd1=$('input[name=password]');const pwd2=$('input[name=passwordConfirm]');let cap=$('input[name=captcha]')
const msg=$('.msg');msg.textContent=""
let pwdpatrn=/^([a-zA-Z0-9]|[_]){6,18}$/;let usernamepatrn=/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;const datas={email:email.val(),user:user.val(),pwd:pwd1.val(),cap:cap.val()};if(user.val().length===0||pwd1.val().length===0||pwd2.val().length===0){msg.text('Masukkan username dan password!')
return false}else if(pwd1.val()!==pwd2.val()){msg.text('Kata sandi pertama dan kedua tidak cocok!')
return false}else if(!pwdpatrn.exec(pwd1.val())){console.log(pwd1.val())
msg.text("Harus menggunakan 6-18 digit yang berisi huruf, angka, dan kata sandi garis bawah (opsional)!")
return false}else if(!usernamepatrn.exec(user.val())){console.log(user.val())
msg.text("Hanya 5-20 nama pengguna yang diawali dengan huruf dan dapat berisi angka, Yang dapat digunakan")
return false}else{$.ajax({type:'POST',url:'/register',dataType:'json',data:datas,success:function(data){if(data.code>0){$(".asd").text(data.msg)
if(data.msg==="Success"){window.location.href="/dashboard"}}
else
msg.text(data.msg);alert(data.msg)},error:function(error){console.log(error)}})}})})