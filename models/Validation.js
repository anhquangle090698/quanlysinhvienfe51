var Validation = function () {
    this.kiemTraRong = function (value,name,selectorError) {
        if(value.trim() === "") {
            document.querySelector(selectorError).innerHTML = `${name} không hợp lệ!`;
            return false;
        }

        document.querySelector(selectorError).innerHTML = ``;
        return true;
    }

    this.kiemTraChu = function (value, name, selectorError) {
        var regexAllLetters = /^[A-Z a-z]+$/;
        if(regexAllLetters.test(value)) {
            document.querySelector(selectorError).innerHTML = ``;
            return true;
        }else {
            document.querySelector(selectorError).innerHTML = `${name} phải là chữ!`;
            return false;
        }
    }

    this.kiemTraEmail = function (value, name, selectorError) {
        var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regexEmail.test(value)) {
            document.querySelector(selectorError).innerHTML = ``;
            return true;
        }else {
            document.querySelector(selectorError).innerHTML = `${name} không hợp lệ!`;
            return false;
        }
    }

    this.kiemTraTatCaCacSo = function (value, name, selectorError) {
        var regexEmail = /^[0-9]+$/;
        if(regexEmail.test(value)) {
            document.querySelector(selectorError).innerHTML = ``;
            return true;
        }else {
            document.querySelector(selectorError).innerHTML = `${name} phải nhập số!`;
            return false;
        }
    }

    this.kiemTraDoDai = function (value, name, selectorError, minLength, maxLength) {
        if(value.trim().length > maxLength || value.trim().length < minLength) {
            document.querySelector(selectorError).innerHTML = `${name} từ ${minLength} đến ${maxLength} ký tự!!`;
            return false;
        }
            document.querySelector(selectorError).innerHTML = ``;
            return true;
    }

    this.kiemTraGiaTri = function (value, name, selectorError, minLength, maxLength) {
        if(Number(value) > maxLength || Number(value) < minLength) {
            document.querySelector(selectorError).innerHTML = `${name} từ ${minLength} đến ${maxLength} ký tự!!`;
            return false;
        }
            document.querySelector(selectorError).innerHTML = ``;
            return true;
    }
}