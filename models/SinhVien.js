//Lớp đối tượng sinh viên
// var SinhVien = function () {
//     this.maSinhVien = "";
//     this.tenSinhVien = "";
//     this.email = "";
//     this.diemToan = "";
//     this.diemLy = "";
//     this.diemHoa = "";
//     this.diemRenLuyen = "";
//     this.loaiSinhVien = "";

//     this.diemTrungBinh = function () {
//         return (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) / 3;
//     }
// }

var SinhVien = function(maSV, tenSV, email, dt, dl, dh, drl, loaiSV) {
    this.maSinhVien = maSV;
    this.tenSinhVien = tenSV;
    this.email = email;
    this.diemToan = dt;
    this.diemLy = dl;
    this.diemHoa = dh;
    this.diemRenLuyen = drl;
    this.loaiSinhVien = loaiSV;
    this.xepLoai = function() {
        return 'yếu';
    }

    this.diemTrungBinh = function() {
        return (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) / 3;
    }
}