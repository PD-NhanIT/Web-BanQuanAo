// CSS TEXT
const list = document.querySelectorAll('h3');
var index = 0

setInterval((e) => {
  list.forEach((e) => {
    e.classList.remove('change-properties')
  })
  list[index].classList.add('change-properties')
  index++
  if (index == list.length) {
    index = 0
  }
}, 200)


// LUU EMAIL + PASS
window.onload = function() {
	if (localStorage) {
	  document.getElementById('contactForm').addEventListener('submit', function() {
        var name = document.getElementById('txtname').value;
	      var user = document.getElementById('txtemail').value;
        var pass = document.getElementById('txtpass').value;
        // var a = true;
        alert("Đăng ký thành công!!")

        // localStorage.setItem('flag', a);
        localStorage.setItem('txtname', name);
	      localStorage.setItem('txtemail', user);
        localStorage.setItem('txtpass', pass);
	  });
	}
}

var flag = false;

function dangnhap(){
  var email = document.getElementById('txtemail1').value;
  var pass = document.getElementById('txtpass1').value;
  var user = localStorage.getItem('txtemail');
  var pass1 = localStorage.getItem('txtpass');
  var a = true;
    if(email == user && pass == pass1 ){
      // window.location.href = "index.html"
      localStorage.setItem('flag', a);
      alert("Đăng nhập thành công!");
      window.open(
        "index.html"
      )
      return true
    }
    else{
      alert("Sai email hoặc password");
      return false
    }
}




