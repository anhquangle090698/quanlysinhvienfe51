//File services tương tác với backend.

var SinhVienService = function () {
    //Phương thức giao tiếp backend qua api => lấy thông tin sinh viên từ server.

    //Get all sinh viên
    this.layDanhSachSinhVien = function () {
        var promise = axios({
            url : "http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien", // Đường dẫn backend cung cấp
            method : 'GET' //giao thức backend cung cấp 
        });
        return promise;
    }

    //Add sinh viên
    this.themSinhVien = function (sinhVien) {
        var promise = axios({
            url : 'http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien',
            method : 'POST',
            data : sinhVien // theo dịnh dạng backend yêu cầu
        });

        return promise;
    }

    //Delete sinh viên by MaSV
    this.xoaSinhVien = function (maSV) {
        var promise = axios({
            url : `http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=${maSV}`, // Đường dẫn backend cung cấp
            method : 'DELETE' //giao thức backend cung cấp 
        });
        return promise;
    }

    //Get sinh viên by MaSV
    this.chinhSuaSinhVien = function (maSV) {
        var promise = axios({
            url : `http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=${maSV}`, // Đường dẫn backend cung cấp
            method : 'GET' //giao thức backend cung cấp 
        });
        return promise;
    }

    //Update sinh viên by MaSV
    this.capNhatSinhVien = function (maSV, sinhVienUpdate) {
        var promise = axios({
            url : `http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=${maSV}`, // Đường dẫn backend cung cấp
            method : 'PUT', //giao thức backend cung cấp 
            data : sinhVienUpdate
        });
        return promise;
    }
}