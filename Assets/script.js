console.log("Javascript file linked");


$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })