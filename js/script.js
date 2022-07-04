$(document).ready(function () {
    let pop_up = $('.pop_up');
    let btnAddTask = $('.add_task');
    let pop_up_body = $('.pop_up_body');
    let pop_up_content_layer_active = $('.pop_up_content_layer');
    let firstInp = $('.modal_text_title');
    let closeModal = $('.close_modal');
    let pop_up_footer = $('.pop_up_footer');
    let modal_task_type_info = $('.modal_task_type_info');
    let task_type_modal_cont = $('.task_type_modal_cont');
    let zatemnitel = $('.zatemnitel');
    let closeSmallModal = $('.close_small_modal');



    //vanilla js variales
    let changeFirstInp = document.querySelector('.modal_text_title');




    /// open modal code
    btnAddTask.click(function () {
        pop_up.removeClass('pop_up').addClass('pop_up_active');
        pop_up_body.removeClass('pop_up_body').addClass('pop_up_body_active');
        pop_up_content_layer_active.removeClass('pop_up_content_layer').addClass('pop_up_content_layer_active');
        pop_up_footer.removeClass('pop_up_footer').addClass('pop_up_footer_active');
        firstInp.focus();


        /// close modal code
        closeModal.click(function () {
            pop_up.removeClass('pop_up_active').addClass('pop_up');
            pop_up_body.removeClass('pop_up_body_active').addClass('pop_up_body');
            pop_up_content_layer_active.removeClass('pop_up_content_layer_active').addClass('pop_up_content_layer');
        });
    });



    /////Open small modal
    modal_task_type_info.click(function () {
        task_type_modal_cont.removeClass('task_type_modal_cont').addClass('task_type_modal_cont_active');
        zatemnitel.removeClass('zatemnitel').addClass('zatemnitel_active');
    })

    closeSmallModal.click(function () {
        task_type_modal_cont.removeClass('task_type_modal_cont_active').addClass('task_type_modal_cont');
        zatemnitel.removeClass('zatemnitel_active').addClass('zatemnitel');
    })



    /////close small modal



    ////////////ivent on input first title

    changeFirstInp.oninput = function changeModalFooter() {
        let changeFirstInpActive = document.querySelector('.pop_up_footer_active');

        if (changeFirstInp.textContent.trim() == '') {
            changeFirstInpActive.style.color = '#e2dcdc';
            changeFirstInpActive.style.transition = '0s';
            changeFirstInpActive.style.backgroundColor = 'white';

        } else {
            changeFirstInp.setAttribute('disabled', '');
            changeFirstInpActive.style.color = '#084680';
            changeFirstInpActive.style.backgroundColor = '#edeff2';
            changeFirstInpActive.style.transition = '0s';
            changeFirstInpActive.style.fontWeight = 'bold';


        }
    }

});














