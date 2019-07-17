$(document).ready(function() {
  /**
   * Handle when user click on New employee button
   */
  $(document).on('click','#btn-new', function() {
    // Change action for form
    $('#employee-form').attr("action", "../employee/new")
    $('#_form-title').html('New employee')
    $('#btn-save-update').text('Save')
    // Reset value
    $('#_form').find('#name').val('')
    $('#_form').find('#name').val('')
    $('#_form').find('#department').val('')
    $('#_form').find('#age').val('')
    $('#_form').find('#gender').val(0)
    $('#_form').modal('show')
  })

  /**
   * Handle when user click on Delete employee button
   */
  $(document).on('click','.btn-delete', function() {
    $('#_deleteModal').modal('show');
    let button = $(this)
    let objectId = button.data('id')
    let name = button.data('name')
    $('#_deleteModal').find('.modal-body input').val(objectId)
    $('#_deleteModal').find('#content').html('Are you sure deleting <b>' + name + '</b>?')
  })

  /**
   * Handle when user click on Edit employee button
   */
  $(document).on('click', '.btn-edit', function(){
    // Change action for form
    $('#employee-form').attr("action", "../employee/update")
    $('#_form-title').html('Update employee')
    $('#btn-save-update').text('Update')
    let button = $(this)
    let objectId = button.data('id')
    let tr = $(this).parent().parent()
    let name = tr.children().eq(0).text()
    let department = tr.children().eq(1).text()
    let age = tr.children().eq(2).text()
    let gender = tr.children().eq(3).text()
    // Set value for update
    $('#_form').find('#objectId').val(objectId)
    $('#_form').find('#name').val(name)
    $('#_form').find('#department').val(department)
    $('#_form').find('#age').val(age)
    if (gender == 'Woman') {
      $('#_form').find('#gender').val(0)
    } else {
      $('#_form').find('#gender').val(1)
    }
    $('#_form').modal('show')
    
  })

  // hide error message
  hideTarget('#error');
  // hide error info
  hideTarget('#info');

  /**
   * hide element by target
   * @param target 
   */
  function hideTarget(target: any) {
    let element = $(target);
    if (element.is(":visible")) {
      element.fadeOut(3000);
    }
  }

});