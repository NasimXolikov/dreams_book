$( document ).ready(function() {
    let pop_up=$('.pop_up');
    let btnAddTask=$('.add_task');
    let pop_up_body=$('.pop_up_body');
    let pop_up_content_layer_active=$('.pop_up_content_layer');
    let firstInp=$('.modal-first-input');

btnAddTask.click(function(){
pop_up.removeClass('pop_up').addClass('pop_up_active');
pop_up_body.removeClass('pop_up_body').addClass('pop_up_body_active');
pop_up_content_layer_active.removeClass('pop_up_content_layer').addClass('pop_up_content_layer_active');
firstInp.focus();
})
});