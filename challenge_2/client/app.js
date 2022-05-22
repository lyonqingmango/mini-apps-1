

$(document).ready(function() {

  $('form').on('submit', function(e){
    e.preventDefault();
    console.log('submit');
    console.log('form'+ $('form').serialize());

    // var formData = new FormData(myForm);
    // console.log(formData)

    $.ajax({
            url: '/upload_json',
            type: 'POST',
            data: $('form').serialize(),
            contentType: false,
            processData: false,
            contentType: 'application/x-www-form-urlencoded',

            success: function(result){
              console.log('result'+result);
              var blob=new Blob([result], {type: 'text/csv'});
              var link=document.createElement('a');

              link.style = "display: none";
              document.body.appendChild(link);

              var url = URL.createObjectURL(blob);
              link.href = url;
              console.log(url);
              link.download="download.csv";
              link.click();
              URL.revokeObjectURL(url);
          },
          error: function(err){
            console.log('err'+err);
          },

    });
  });

})








