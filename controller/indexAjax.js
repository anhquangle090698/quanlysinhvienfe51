//Nhớ import CDN AXIOS vào HTML

// console.log(axios);

//Tạo 1 object chứa các thông tin backend cung cấp


// Dùng axios gửi yêu cầu đến server

var sinhVienService = new SinhVienService();

var getDataSuccess = function (result) { //Hàm xử lý kết quả trả về thành công
    console.log(result);

    var contentTable = '';

    for (let index = 0; index < result.data.length; index++) {
        const sv = result.data[index];

        var sinhVien = new SinhVien(sv.maSinhVien, sv.tenSinhVien, sv.email, sv.diemToan, sv.diemLy, sv.diemHoa, sv.diemRenLuyen, sv.loaiSinhVien);
        
        
        contentTable += `
            <tr>
                <td>${sinhVien.maSinhVien}</td>
                <td>${sinhVien.tenSinhVien}</td>
                <td>${sinhVien.email}</td>
                <td>${sinhVien.loaiSinhVien}</td>
                <td>${sinhVien.diemTrungBinh().toFixed(2)}</td>
                <td>${sinhVien.diemRenLuyen}</td>
                <td><button class="btn btn-primary" onclick="chinhSuaSinhVien('${sinhVien.maSinhVien}')">Chỉnh sửa</button></td>
                <td><button class="btn btn-danger" onclick="xoaSinhVien('${sinhVien.maSinhVien}')">Xóa</button></td>
            </tr>
        `;
    }

    document.getElementById("tblSinhVien").innerHTML = contentTable;
}

var getDataFail = function (err) {
     console.log(err.response.data);
}

var layThongTinSinhVien = function () {
    var promise = sinhVienService.layDanhSachSinhVien();
    promise.then(getDataSuccess).catch(getDataFail);
}

layThongTinSinhVien();

var xoaSinhVien = function (maSV) {

    var promise = sinhVienService.xoaSinhVien(maSV);
    promise.then(function (result) {
        console.log(result.data);
        layThongTinSinhVien();

    }).catch(function (err) {
        console.log(err.response.data);
    })
}

var chinhSuaSinhVien = function (maSV) {
    var promise = sinhVienService.chinhSuaSinhVien(maSV);
    promise.then(function (result) {
        console.log(result.data);

        var sinhvien = result.data;

        document.getElementById("maSV").value = sinhvien.maSinhVien;
        document.getElementById("tenSV").value = sinhvien.tenSinhVien;
        document.getElementById("email").value = sinhvien.email;
        document.getElementById("diemToan").value = sinhvien.diemToan;
        document.getElementById("diemLy").value = sinhvien.diemLy;
        document.getElementById("diemHoa").value = sinhvien.diemHoa;
        document.getElementById("diemRL").value = sinhvien.diemRenLuyen;
        document.getElementById("loaiSV").value = sinhvien.loaiSinhVien;

    }).catch(function (err) {
        console.log(err.response.data);
    })
}

// var promise = axios({
//     url : "http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien", // Đường dẫn backend cung cấp
//     method : 'GET' //giao thức backend cung cấp 
// });

// .then(callback) : nhận vào 1 hàm có tham số là kết quả trả về thành công từ sever (trả về dữ liệu)
// .catch(callback) : nhận vào 1 hàm có 1 tham số là kết quả trả về từ server (trả lỗi).
// promise.then(getDataSuccess).catch(getDataFail);


// POST: chức năng thêm sinh viên vào server

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

    //Tạo object backend cần.
    // var objectModal = {
    //     "maSinhVien": sinhVien1.maSinhVien,
    //     "tenSinhVien": sinhVien1.tenSinhVien,
    //     "loaiSinhVien": sinhVien1.loaiSinhVien,
    //     "diemToan": sinhVien1.diemToan,
    //     "diemLy": sinhVien1.diemLy,
    //     "diemHoa": sinhVien1.diemHoa,
    //     "diemRenLuyen": sinhVien1.diemRenLuyen,
    //     "email": sinhVien1.email
    // }


    //Gọi API thêm sinh viên từ SinhVienService
    var promise = sinhVienService.themSinhVien(sinhVien1);

    promise.then(function (result) {
        console.log("result",result.data);
        location.reload();

    }).catch(function (err) {
        console.log("error",err.response.data);
    });
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

    //Gọi API từ SinhVienService
    var promise = sinhVienService.capNhatSinhVien(sinhVienUpdate.maSinhVien, sinhVienUpdate);

    promise.then(function (result) {
        console.log(result.data);
        layThongTinSinhVien();

    }).catch(function (err) {
        console.log(err.response.data);
    })
}