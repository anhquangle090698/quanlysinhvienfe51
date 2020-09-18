//Create array SinhVien
var mangSinhVien = [];
var validate = new Validation();

document.getElementById("btnThemSV").onclick = function () {
    var sinhVien1 = new SinhVien();

    sinhVien1.maSinhVien = document.getElementById("maSV").value;
    sinhVien1.tenSinhVien = document.getElementById("tenSV").value;
    sinhVien1.email = document.getElementById("email").value;
    sinhVien1.diemToan = document.getElementById("diemToan").value;
    sinhVien1.diemLy = document.getElementById("diemLy").value;
    sinhVien1.diemHoa = document.getElementById("diemHoa").value;
    sinhVien1.diemRenLuyen = document.getElementById("diemRL").value;
    sinhVien1.loaiSinhVien = document.getElementById("loaiSV").value;

    var valid = true;

    // //Check validation
    // if(sinhVien1.maSinhVien.trim() === "") {
    //     document.getElementById("id_err_maSV_ktRong").innerHTML = "Mã sinh viên không được bỏ trống!!";
    //     valid = false;
    // }else {
    //     document.getElementById("id_err_maSV_ktRong").innerHTML = "";
    // }

    // if(sinhVien1.tenSinhVien === "") {
    //     document.getElementById("id_err_tenSV_ktRong").innerHTML = "Tên sinh viên không được bỏ trống!!";
    //     valid = false;
    // }else {
    //     document.getElementById("id_err_tenSV_ktRong").innerHTML = "";
    // }

    // if(sinhVien1.email === "") {
    //     document.getElementById("id_err_email_ktRong").innerHTML = "Email không được bỏ trống!!";
    //     valid = false;
    // }else {
    //     document.getElementById("id_err_email_ktRong").innerHTML = "";
    // }

    // if(sinhVien1.diemToan === "") {
    //     document.getElementById("id_err_diemToan_ktRong").innerHTML = "Điểm toán không được bỏ trống!!";
    //     valid = false;
    // }else {
    //     document.getElementById("id_err_diemToan_ktRong").innerHTML = "";
    // }

    // if(sinhVien1.diemLy === "") {
    //     document.getElementById("id_err_diemLy_ktRong").innerHTML = "Điểm lý không được bỏ trống!!";
    //     valid = false;
    // }else {
    //     document.getElementById("id_err_diemLy_ktRong").innerHTML = "";
    // }

    // if(sinhVien1.diemHoa === "") {
    //     document.getElementById("id_err_diemHoa_ktRong").innerHTML = "Điểm hóa không được bỏ trống!!";
    //     valid = false;
    // }else {
    //     document.getElementById("id_err_diemHoa_ktRong").innerHTML = "";
    // }

    // if(sinhVien1.diemRenLuyen === "") {
    //     document.getElementById("id_err_diemRL_ktRong").innerHTML = "Điểm rèn luyện không được bỏ trống!!";
    //     valid = false;
    // }else {
    //     document.getElementById("id_err_diemRL_ktRong").innerHTML = "";
    // }

    // var regexAllLetters = /^[A-Z a-z]+$/ ;
    // if(!regexAllLetters.test(sinhVien1.tenSinhVien)) {
    //     document.getElementById("id_errAllLetters_tenSV").innerHTML = "Tên sinh viên phải nhập chữ!";
    //     valid = false;
    // }else {
    //     document.getElementById("id_errAllLetters_tenSV").innerHTML = "";
    // }

    

    //Regex
    // var regex = /cyberlearn/ig ;
    // var inputString = "dsdscyberlearndsd";
    // console.log(regex.test(inputString));

    //VALIDATION
    //Sử dụng toán tử & để check true, false => & => 1 flag = false => return
    //Check rỗng
    valid &= validate.kiemTraRong(sinhVien1.maSinhVien, "mã sinh viên", "#id_err_maSV_ktRong") 
    & validate.kiemTraRong(sinhVien1.tenSinhVien, "tên sinh viên", "#id_err_tenSV_ktRong") 
    & validate.kiemTraRong(sinhVien1.email, "email", "#id_err_email_ktRong")
    & validate.kiemTraRong(sinhVien1.diemToan, "Điểm toán", "#id_err_diemToan_ktRong")
    & validate.kiemTraRong(sinhVien1.diemLy, "Điểm lý", "#id_err_diemLy_ktRong")
    & validate.kiemTraRong(sinhVien1.diemHoa, "Điểm hóa", "#id_err_diemHoa_ktRong")
    & validate.kiemTraRong(sinhVien1.diemRenLuyen, "Điểm rèn luyện", "#id_err_diemRL_ktRong");

    //Check all letters
    // valid &= validate.kiemTraChu(sinhVien1.maSinhVien, "mã sinh viên", "#id_errAllLetters_maSV");

    valid &= validate.kiemTraEmail(sinhVien1.email, "email", "#id_errEmailRegex_tenSV");
    
    valid &= validate.kiemTraTatCaCacSo(sinhVien1.diemToan, "điểm toán", "#id_errDiemToanRegex") 
    & validate.kiemTraTatCaCacSo(sinhVien1.diemToan, "điểm toán", "#id_errDiemToanRegex") 
    & validate.kiemTraTatCaCacSo(sinhVien1.diemLy, "điểm lý", "#id_errDiemLyRegex") 
    & validate.kiemTraTatCaCacSo(sinhVien1.diemHoa, "điểm hóa", "#id_errDiemHoaRegex") 
    & validate.kiemTraTatCaCacSo(sinhVien1.diemHoa, "điểm rèn luyện", "#id_errDiemRLRegex");

    valid &= validate.kiemTraDoDai(sinhVien1.maSinhVien, "mã sinh viên", "#id_errLength_maSV",10 ,20);

    if(!valid) {
        return ;
    }

    //Push thêm 1 phần tử vào mảng 
    mangSinhVien.push(sinhVien1);
    // console.log("mảng sinh viên", mangSinhVien);

    taoBang(mangSinhVien);
    xoaRong();

    luuLocalStorage();
    // //check data
    // // console.log("sv:", sinhVien1);

    // //Create td => tr => tbody
    // //Create td
    // var tdMaSV = document.createElement("td");
    // var tdTenSV = document.createElement("td");
    // var tdEmail = document.createElement("td");
    // var tdLoaiSV = document.createElement("td");
    // var tdDiemTB = document.createElement("td");
    // var tdDiemRL = document.createElement("td");
    // var tdChucNang = document.createElement("td");
    // var btnXoaSV = document.createElement("button");
    // btnXoaSV.className = "btn btn-danger";
    // btnXoaSV.innerHTML = "Xóa";
    // btnXoaSV.onclick = function () {
    //     //this đại diện cho nut button#btnXoaSV
    //     //parentELement truy xuất ra phần tử cha 
    //     //this = button => parentElement (td) => parentElement (tr) => remove tr
    //     this.parentElement.parentElement.remove(); // Xử lý hướng giao diện
    // }


    // tdMaSV.innerHTML = sinhVien1.maSinhVien;
    // tdTenSV.innerHTML = sinhVien1.tenSinhVien;
    // tdEmail.innerHTML = sinhVien1.email;
    // tdLoaiSV.innerHTML = sinhVien1.loaiSinhVien;
    // tdDiemTB.innerHTML = sinhVien1.diemTrungBinh().toFixed(2);
    // tdDiemRL.innerHTML = sinhVien1.diemRenLuyen;

    // tdChucNang.appendChild(btnXoaSV);

    // //Create tr
    // var trSV = document.createElement("tr");

    // //Add td To tr
    // trSV.appendChild(tdMaSV);
    // trSV.appendChild(tdTenSV);
    // trSV.appendChild(tdEmail);
    // trSV.appendChild(tdLoaiSV);
    // trSV.appendChild(tdDiemTB);
    // trSV.appendChild(tdDiemRL);
    // trSV.appendChild(tdChucNang);

    // //Add tr To tbody
    // var tbodySV = document.getElementById("tblSinhVien");
    // tbodySV.appendChild(trSV);
}

var taoBang = function (arrSV) {
    var tbodySV = document.getElementById("tblSinhVien");

    var contentTable = "";

    for (let index = 0; index < arrSV.length; index++) {
        const sv = arrSV[index];

        //Tạo đối tượng SinhVien mới để gán sinhvien từ localStorage
        // var sinhVien = new SinhVien();
        // sinhVien.maSinhVien = sv.maSinhVien;
        // sinhVien.tenSinhVien = sv.tenSinhVien;
        // sinhVien.email = sv.email;
        // sinhVien.diemToan = sv.diemToan;
        // sinhVien.diemLy = sv.diemLy;
        // sinhVien.diemHoa = sv.diemHoa;
        // sinhVien.diemRenLuyen = sv.diemRenLuyen;
        // sinhVien.loaiSinhVien = sv.loaiSinhVien;
        var sinhVien = new SinhVien(sv.maSinhVien, sv.tenSinhVien, sv.email, sv.diemToan, sv.diemLy, sv.diemHoa, sv.diemRenLuyen, sv.loaiSinhVien);
        
        //Tạo thẻ tr + dồn vào nội dung contentTable
        contentTable += `
            <tr>
                <td>${sinhVien.maSinhVien}</td>
                <td>${sinhVien.tenSinhVien}</td>
                <td>${sinhVien.email}</td>
                <td>${sinhVien.loaiSinhVien}</td>
                <td>${sinhVien.diemTrungBinh()}</td>
                <td>${sinhVien.diemRenLuyen}</td>
                <td><button class="btn btn-primary" onclick="chinhSuaSinhVien('${sinhVien.maSinhVien}')">Chỉnh sửa</button></td>
                <td><button class="btn btn-danger" onclick="xoaSinhVien('${sinhVien.maSinhVien}')">Xóa</button></td>
            </tr>
        `;
    }

    // console.log("contentTable",contentTable);
    tbodySV.innerHTML = contentTable;
}

var xoaSinhVien = function  (maSV) {    
    
    //mangSinhVien la biến toàn cục khai báo phía trên
    //array in JS là arrayList (tạo thì tốn bộ nhớ k tạo thì thôi)
    //Khi xóa element thì nó gán vị trí index của các phần tử lại
    //Xóa hết element trùng mã thì phải duyệt mảng từ cuối -> đầu
    for (let index = mangSinhVien.length - 1; index >= 0; index-- ) {
        const sv = mangSinhVien[index];
        
        if(sv.maSinhVien === maSV) {
            mangSinhVien.splice(index, 1); // hàm delete element in array. index: vị trí xóa, 1 là tại vị trí index xóa 1 phần tử
        }
    }

    //Sau khi xóa thì tạo lại bảng = mảng dữ liệu đã xóa
    taoBang(mangSinhVien);
    luuLocalStorage();
}

var xoaRong = function () {
    document.getElementById("maSV").value = "";
    document.getElementById("tenSV").value = "";
    document.getElementById("email").value = "";
    document.getElementById("diemToan").value = "";
    document.getElementById("diemLy").value = "";
    document.getElementById("diemHoa").value = "";
    document.getElementById("diemRL").value = "";
    document.getElementById("loaiSV").value = "";
    document.getElementById("maSV").focus();
}

var chinhSuaSinhVien = function (maSV) {
    
    document.getElementById("maSV").disabled = true;

    for (let index = 0; index < mangSinhVien.length; index++) {
        const sv = mangSinhVien[index];
        
        if(sv.maSinhVien === maSV) {
            document.getElementById("maSV").value = sv.maSinhVien;
            document.getElementById("tenSV").value = sv.tenSinhVien;
            document.getElementById("email").value = sv.email;
            document.getElementById("diemToan").value = sv.diemToan;
            document.getElementById("diemLy").value = sv.diemLy;
            document.getElementById("diemHoa").value = sv.diemHoa;
            document.getElementById("diemRL").value = sv.diemRenLuyen;
            document.getElementById("loaiSV").value = sv.loaiSinhVien;
        }
    }
}

document.getElementById("btnCapNhatSV").onclick = function () {
    var sinhVienUpdate = new SinhVien();
    
    sinhVienUpdate.maSinhVien = document.getElementById("maSV").value;
    sinhVienUpdate.tenSinhVien = document.getElementById("tenSV").value;
    sinhVienUpdate.email = document.getElementById("email").value;
    sinhVienUpdate.diemToan = document.getElementById("diemToan").value;
    sinhVienUpdate.diemLy = document.getElementById("diemLy").value;
    sinhVienUpdate.diemHoa = document.getElementById("diemHoa").value;
    sinhVienUpdate.diemRenLuyen = document.getElementById("diemRL").value;
    sinhVienUpdate.loaiSinhVien = document.getElementById("loaiSV").value;

    // console.log("sv", sinhVienUpdate);

    for (var index = 0; index < mangSinhVien.length; index++) {
        var sv = mangSinhVien[index];
        
        if(sinhVienUpdate.maSinhVien === sv.maSinhVien) {
            //Trong JS không thể gán đối tượng bằng đối tượng, phải gán từng thuộc tính. (quy tắc JS)
            sv.maSinhVien = sinhVienUpdate.maSinhVien;
            sv.tenSinhVien = sinhVienUpdate.tenSinhVien;
            sv.email = sinhVienUpdate.email;
            sv.diemToan = sinhVienUpdate.diemToan;
            sv.diemLy = sinhVienUpdate.diemLy;
            sv.diemHoa = sinhVienUpdate.diemHoa;
            sv.diemRenLuyen = sinhVienUpdate.diemRenLuyen;
            sv.loaiSinhVien = sinhVienUpdate.loaiSinhVien;
        }
    }

    taoBang(mangSinhVien); 
    luuLocalStorage();

    xoaRong();
    document.getElementById("maSV").disabled = false;
}

var luuLocalStorage = function () {
    //Các bước lưu trữ mảng sinh viên xuống localstroage

    var sMangSinhVien = JSON.stringify(mangSinhVien); // biến mảng sinh viên thành chuỗi

    console.log('sMangSinhVien',sMangSinhVien);
    console.log('MangSinhVien',mangSinhVien);

    localStorage.setItem("mangSinhVien",sMangSinhVien); //lưu localStorage
}

var layDuLieuLocalStroage = function () {
    //Check data is exists

    if(localStorage.getItem("mangSinhVien")) {
        var sMangSinhVien = localStorage.getItem("mangSinhVien"); //get mangSinhVien from localStorage

        //Biến dữ liệu chuỗi json thành mảng gán vào mảng sinh viên
        mangSinhVien = JSON.parse(sMangSinhVien); // gán vào mảng sinh viên khai báo ban đầu.

        console.log(mangSinhVien);

        taoBang(mangSinhVien);
    }
}

//Call layDuLieuLocalStroage on load browser
layDuLieuLocalStroage();