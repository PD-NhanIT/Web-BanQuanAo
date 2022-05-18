function kiemTraEmail(){
    let email = document.getElementById("txtemail").value
    let erremail = document.getElementById("erremail")
        if(email.trim()==""){
            erremail.innerHTML = "Email bắt buộc nhập"
        return false
        }

        erremail.innerHTML = "*"
        return true
}

function kiemTraName(){
    let email = document.getElementById("txtname").value
    let erremail = document.getElementById("errname")
        if(email.trim()==""){
            erremail.innerHTML = "Tên bắt buộc nhập"
        return false
        }

        erremail.innerHTML = "*"
        return true
}

function kiemTraEmail1(){
    let email = document.getElementById("txtemail").value
    let erremail = document.getElementById("erremail")
        if(email.trim()==""){
            erremail.innerHTML = "Email bắt buộc nhập"
        return false
        }
  
        erremail.innerHTML = "*"
        return true
  }
function kiemTraEmail1(){
    let email = document.getElementById("txtemail1").value
    let erremail = document.getElementById("erremail1")
        if(email.trim()==""){
            erremail.innerHTML = "Email bắt buộc nhập"
        return false
        }

        erremail.innerHTML = "*"
        return true
}
function kiemTraPass1(){
    let pass = document.getElementById("txtpass1").value
    let errpass = document.getElementById("errpass1")
        if(pass.trim()==""){
            errpass.innerHTML = "Pass bắt buộc nhập"
        return false
        }

        errpass.innerHTML = "*"
        return true
}

function kiemTraPass(){
    let pass = document.getElementById("txtpass").value
    let errpass = document.getElementById("errpass")
        if(pass.trim()==""){
            errpass.innerHTML = "Pass bắt buộc nhập"
        return false
        }

        errpass.innerHTML = "*"
        return true
}

function kiemTraPass2() {
    let pass1 = document.getElementById("txtpass").value
    let pass2 = document.getElementById("txtpass2").value
    let errpass2 = document.getElementById("errpass2")
    if(pass2.trim()==""){
        errpass2.innerHTML = "Pass bắt buộc nhập"
        return false
    }
    if(pass1 != pass2){
        errpass2.innerHTML = "Phải nhập giống mật khẩu trên"
        return false
    }

    errpass2.innerHTML = "*"
    return true
}


function datlaipass(){
    let email = document.getElementById('txtemail').value
    let rs  = localStorage.getItem('txtemail')
    if(email == rs){
    alert("Chúng tôi đã gửi mật khẩu mới về Email của bạn.>_<")
    }
    else {
        alert("Email của bạn chưa được đăng ký")
    }
}
