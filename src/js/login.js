function get_captcha(){document.querySelector('.form.login img').src='/captcha?d='+Math.random()}
$(document).ready(function(){$('form').submit(function(e){e.preventDefault()
login()})
$('#confirmLogin').click(login)
function login(){const user=$('input[type=text]')
const pwd=$('input[type=password]')
const cap=$('input[name=cap]')
const msg=$('.msg')
const logindata={user:user.val(),pwd:pwd.val(),cap:cap.val()}
console.log(logindata)
if(user.val().length===0&&pwd.val().length===0){console.log('Nama pengguna tidak boleh kosong')
msg.text('Nama pengguna dan kata sandi tidak boleh kosong')}else{$.ajax({type:'post',url:'/login',dataType:'json',data:logindata,success:function(data){if(data.code===1)window.location.href='/dashboard'
else if(data.msg=='Captcha Invalid')alert('Captcha Invalid!')
else alert('Username atau Password salah!')
msg.text(data.msg)
console.log(data)
get_captcha()},error:function(error){msg.text(error)
console.log(error)
get_captcha()}})}}})