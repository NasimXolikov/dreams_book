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
    let asks_type_main_cont = document.querySelectorAll('.asks_type_main');
    let btn_add_spisok = document.querySelector('.btn_add_spisok');




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
        add_task_type_status();

        task_type_modal_cont.removeClass('task_type_modal_cont').addClass('task_type_modal_cont_active');
        zatemnitel.removeClass('zatemnitel').addClass('zatemnitel_active');
    })


    //////function Сравнение и вставление активного статуса в тип задач
    function add_task_type_status() {
        //     alert(asks_type_main_cont[1].textContent.trim())
        // alert(modal_task_type_info.text().trim())

        for (let i = 0; i < asks_type_main_cont.length; i++) {
            if (asks_type_main_cont[i].textContent.trim() == modal_task_type_info.text().trim() && asks_type_main_cont[i].outerHTML.indexOf(`<div class="asks_type_main_icon"> <i class="fa fa-check" aria-hidden="true"></i></div>`) == -1) {
                asks_type_main_cont[i].innerHTML = `${asks_type_main_cont[i].outerHTML} <div class="asks_type_main_icon"> <i class="fa fa-check" aria-hidden="true"></i></div>`

            } else if (asks_type_main_cont[i].textContent.trim() !== modal_task_type_info.text().trim()) {
                let changeHTML = `${asks_type_main_cont[i].outerHTML.replace('<div class="asks_type_main_icon"> <i class="fa fa-check" aria-hidden="true"></i></div>', '')}`;
                asks_type_main_cont[i].innerHTML = `${changeHTML}`
            }

            console.log(asks_type_main_cont[1])
        }

    }


    /////close small modal

    closeSmallModal.click(function () {
        closeSmallModall();
    })


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


    ////Active element of small modal

    asks_type_main_cont.forEach(function (item) {
        item.addEventListener('click', function () {
            // close small modal on click to element
            modal_task_type_info.text(item.textContent)
            closeSmallModall();
        })
    });




    ///// add new spisok
    function getSpisokObj() {
        const spisokItemsObject = {
            0: 'Личный',
            1: 'Работа',
        }
        return spisokItemsObject
    }
    let callObj = getSpisokObj()


    function addSpisok() {

        btn_add_spisok.addEventListener('click', function (event) {
            let countOfObj = Object.keys(callObj).length
            let addSpisokInpVal = document.getElementById('inp_add_spisok').value;
            event.preventDefault();

            if (addSpisokInpVal.trim() != '') {
                callObj[countOfObj] = `${addSpisokInpVal}`;
                document.getElementById('inp_add_spisok').value = '';
                addSpisokItem()
                // alert(Object.keys(callObj).length)
            }

        })

    }
    addSpisok();



    ////add new items of spisok
    let spisokMainCont = document.querySelector('.spisok_main_cont')

    for (let key in callObj) {
        spisokMainCont.innerHTML += ` <div class="spisok_type_main">${callObj[key]}</div>                                                            <div class="under-line"></div>
                                          <div class="under-line"></div>`;
    }

    function addSpisokItem() {
            spisokMainCont.innerHTML += ` <div class="spisok_type_main">${callObj[Object.keys(callObj).length-1]}</div>                                                            <div class="under-line"></div>
                                                <div class="under-line"></div>`;
       
    }


    /////close small modal function

    function closeSmallModall() {
        task_type_modal_cont.removeClass('task_type_modal_cont_active').addClass('task_type_modal_cont');
        zatemnitel.removeClass('zatemnitel_active').addClass('zatemnitel');
    }


});















