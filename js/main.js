// bài 1


document.getElementById("kq1").onclick;
document.getElementById("btnSapXep").onclick = function () {
    var a = document.getElementById("so1").value;
    var b = document.getElementById("so2").value;;
    var c = document.getElementById("so3").value;;

    var n1 = Number(a);
    n2 = Number(b);
    n3 = Number(c);

    var maxNum = n1, minNum = n1, midNum;
    var sum = n1 + n2 + n3;

    if (n2 > maxNum) maxNum = n2;
    if (n3 > maxNum) maxNum = n3;
    if (n2 < minNum) minNum = n2;
    if (n3 < minNum) minNum = n3;

    midNum = sum - minNum - maxNum;
    document.getElementById("kq1").value = minNum + "," + midNum + "," + maxNum;
};


// bài 2:

document.getElementById("kq2").onclick;
document.getElementById("btnFamily").onclick = function () {
    var member = document.getElementById("dropdown_menu").value;
    document.getElementById("kq2").value = "Xin Chào " + member + "!";
};

// bài tập 3:

document.getElementById("kq3").onclick;
document.getElementById("btnDemSo").onclick = function () {
    var n1 = Number(document.getElementById("num1").value);
    var n2 = Number(document.getElementById("num2").value);
    var n3 = Number(document.getElementById("num3").value);
    var le = 0;
    var chan = 0;
    
    if (n1 % 2 == 0) {
        chan++;
    }
    if (n2 % 2 == 0) {
        chan++;
    }

    if (n3 % 2 == 0) {
        chan++;
    }

    le = 3 - chan;
    console.log(chan + " " + le);
    document.getElementById("kq3").value = "Có " + chan + " số chẵn, " + le + " số lẻ";
}

// bài 4:
document.getElementById("kq4").onclick;
document.getElementById("btnTamGiac").onclick = function () {
    var c1 = Number(document.getElementById("canh1").value);
    var c2 = Number(document.getElementById("canh2").value);
    var c3 = Number(document.getElementById("canh3").value);

    var bpc1 = Math.sqrt(Math.pow(c2,2) + Math.pow(c3,2)); 
    var bpc2 = Math.sqrt(Math.pow(c1,2) + Math.pow(c3,2));
    var bpc3 = Math.sqrt(Math.pow(c1,2) + Math.pow(c2,2));
    
    if (c1 == c2 && c2 == c3) {
       document.getElementById("kq4").value = "Tam giác đều";
    } else if (c1 == c2 || c1 == c3 || c2 == c3) { 
        document.getElementById("kq4").value = "Tam giác cân";
    } else if( c1 == bpc1 || c2 == bpc2 || c3 == bpc3) {
        document.getElementById("kq4").value = "Tam giác vuông";
    } else {
        document.getElementById("kq4").value = "Tam giác nào đó";
    }
}


