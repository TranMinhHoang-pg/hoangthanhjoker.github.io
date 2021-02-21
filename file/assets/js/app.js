function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function nhanqua(idqua) {
    var type = "sung";
    var id = idqua;
    $.ajax({
        type: "GET",
        url: "/ajax/recieve-present.php",
        data: {
            type,
            id
        },
        dataType: "json",
        success: function(res) {
            if (res.success) {
                $("#qua" + idqua).attr('disabled', 'disabled');
                $("#qua" + idqua).text('Đã nhận');
                Swal.fire({
                    title: 'Đã nhận quà thành công!',
                    text: 'Vui lòng kiểm tra lại hộp thư Free Fire sau 5 phút!'
                })
            } else {
                Swal.fire({
                    title: 'Bạn chưa đăng nhập',
                    text: "Vui lòng đăng nhập để tiến hành nhận quà!",
                    icon: 'error',
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Đăng nhập ngay!'
                }).then((result) => {
                    formdangnhap();
                })
            }
        },
        error: function(err) {
            console.log(err);
        }
    });
}
$("#quaysonek").click(function() {
    $(".kimcuongz #quaysonek b").text('Đang quay...');
    $(".khong").removeClass('datrung');
    $(".cardquaysonka").show();
    $(".khong").hide();
    quayso();

    function quayso() {
        var type = "vongquay";
        $.ajax({
            type: "GET",
            url: "/ajax/recieve-present.php",
            data: {
                type
            },
            dataType: "json",
            success: function(res) {
                if (res.success) {
                    $(".kimcuongz #quaysonek b").text('Quay số');
                    $(".cardquaysonka").hide();
                    $(".khong").show();
                    $(".phanqua" + res.success).addClass('datrung');
                    $(".khong").attr('style', 'opacity: 0.5');
                    if (res.success == '1') {
                        var kc = '9.999'
                    }
                    if (res.success == '2') {
                        var kc = '45'
                    }
                    if (res.success == '3') {
                        var kc = '200'
                    }
                    if (res.success == '4') {
                        var kc = '2.375'
                    }
                    if (res.success == '5') {
                        var kc = '950'
                    }
                    if (res.success == '6') {
                        var kc = '90'
                    }
                    if (res.success == '7') {
                        var kc = '135'
                    }
                    if (res.success == '8') {
                        var kc = '9.999'
                    }
                    Swal.fire({
                        title: 'Đã quay thành công ' + kc + ' kim cương!'
                    })
                } else {
                    Swal.fire({
                        title: 'Bạn chưa đăng nhập',
                        text: "Vui lòng đăng nhập để tiến hành nhận quà!",
                        icon: 'error',
                        showCancelButton: false,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Đăng nhập ngay!'
                    }).then((result) => {
                        formdangnhap();
                    })
                }
            },
            error: function(err) {
                console.log(err);
            }
        });
    }
})

function formdangnhap() {
    window.location.href = "./login";
}