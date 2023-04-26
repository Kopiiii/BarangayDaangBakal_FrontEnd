let firstcont = document.getElementById("adminlistcont1");
let secondcont = document.getElementById("adminlistcont2");

secondcont.style.display = "none";
thirdcont.style.display = "none";

function addadmin() {
    openpopup();
}
function openpopup() {
    var x = document.getElementById("popup");
    x.style.top = "5vh";
    x.style.transform = "scale(1)";
    x.style.visibility = "visible";
}
function closepopup() {
    var x = document.getElementById("popup");
    x.style.top = "-20vh";
    x.style.transform = "scale(0.1)";
    x.style.visibility = "hidden";
  }
function deleteadmin() {
    firstcont.style.display = "none";
    secondcont.style.display = "block";
}
function canceldelete() {
    secondcont.style.display = "none";
    firstcont.style.display = "block";
}

function validateadd() {
    let a = document.getElementById("adminusername").value;
    let b = document.getElementById("admincontactnum").value;
    let c = document.getElementById("adminfname").value;
    let d = document.getElementById("adminlname").value;
    let e = document.getElementById("adminpassword").value;
    let f = document.getElementById("confirmadminpassword").value;
    msg = "FILL ALL REQUIRED FIELDS:\n";
    valid = true;
    if (a == "") {
        msg = msg + "\n>>>   Username Field is Empty!";
        valid = false;
    }
    if (b == "") {
        msg = msg + "\n>>>   Contact Number Field is Empty!";
        valid = false;
    }
    if (c == "") {
        msg = msg + "\n>>>   First Name Field is Empty!";
        valid = false;
    }
    if (d == "") {
        msg = msg + "\n>>>   Last Name Field is Empty!";
        valid = false;
    }
    if (e == "") {
        msg = msg + "\n>>>   Password Field is Empty!";
        valid = false;
    }
    if (f == "") {
        msg = msg + "\n>>>   Confirm Password Field is Empty!";
        valid = false;
    }
    if (valid == false) {
        alert(msg);
    }
    return valid;
}
function submitadd() {
    let isfilled = validateadd();
    if (isfilled) {
        window.location.href = "chmaddadmin.html";
    }
}