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




    /// add new spisok
    function getSpisokObj() {
        const spisokItemsObject = {
            0: 'Личный',
            1: 'Работа',
            2: 'Учеба',

        }
        return spisokItemsObject
    }
    let callObj = getSpisokObj();



    const arrOfObj = [];
    function arrOfObjs() {
        for (let key in callObj) {
            arrOfObj.push(callObj[key])
        }

    }
    arrOfObjs();


    let spisokMainCont = document.querySelector('.spisok_main_cont')

    for (let key in callObj) {
        spisokMainCont.innerHTML += ` <div class="spisok_type_main">${callObj[key]}</div><div class="under-line"></div>
                                              <div class="under-line"></div>`;
    }

    let modalMainCont = document.querySelector('.asks_type_main_cont');

    for (let key in callObj) {
        modalMainCont.innerHTML += ` <div class="asks_type_main">${callObj[key]}</div><div class="under-line"></div>
                                              <div class="under-line"></div>`;
    }




    // add items


    const render = () => {
        let listContent = document.querySelector('.spisok_main_cont');
        let SmallModalContent = document.querySelector('.asks_type_main_cont');
        listContent.innerHTML = '';
        SmallModalContent.innerHTML = '';



        for (let item of arrOfObj) {
            let div = document.createElement("div");
            let lineDiv = document.createElement("div");
            let div2 = document.createElement("div");
            let lineDiv2 = document.createElement("div");
            div.className = 'spisok_type_main';
            lineDiv.className = 'under-line';

            div2.className = 'asks_type_main';
            lineDiv2.className = 'under-line';

            div.textContent = item;
            div2.textContent = item;
            listContent.append(div);
            listContent.append(lineDiv);

            SmallModalContent.append(div2);
            SmallModalContent.append(lineDiv2);

        }

    };

    const btnAddSpisok = document.querySelector('.btn_add_spisok');

    btnAddSpisok.addEventListener('click', function (event) {
        event.preventDefault();

        let input = document.querySelector('#inp_add_spisok');
        let countOfObj = Object.keys(callObj).length

        if (input.value.length > 0 && !arrOfObj.includes(input.value)) {
            arrOfObj.push(input.value);
            render();
            callObj[countOfObj] = input.value;
            console.log(callObj)
            input.value = '';

        }

    });



    const openSmallModal = document.querySelector('.modal_task_type_info');

    openSmallModal.addEventListener('click', function (event) {
        event.preventDefault();

        let input = document.querySelector('#inp_add_spisok');
        let countOfObj = Object.keys(callObj).length

        if (input.value.length > 0 && !arrOfObj.includes(input.value)) {
            arrOfObj.push(input.value);
            render();
            callObj[countOfObj] = input.value;
            console.log(callObj)
            input.value = '';

        }

    });





    /////Open small modal
    modal_task_type_info.click(function () {
        add_task_type_status();

        task_type_modal_cont.removeClass('task_type_modal_cont').addClass('task_type_modal_cont_active');
        zatemnitel.removeClass('zatemnitel').addClass('zatemnitel_active');
    })



    /////close small modal

    closeSmallModal.click(function () {
        closeSmallModall();
    })





    //////function Сравнение и вставление активного статуса в тип задач


    let asks_type_main_cont = document.querySelectorAll('.asks_type_main');
    console.log(asks_type_main_cont)
    function add_task_type_status() {

        for (let i = 0; i < asks_type_main_cont.length; i++) {
            if (asks_type_main_cont[i].textContent.trim() == modal_task_type_info.text().trim() && asks_type_main_cont[i].outerHTML.indexOf(`<div class="asks_type_main_icon"> <i class="fa fa-check" aria-hidden="true"></i></div>`) == -1) {
                asks_type_main_cont[i].innerHTML = `${asks_type_main_cont[i].outerHTML} <div class="asks_type_main_icon"> <i class="fa fa-check" aria-hidden="true"></i></div>`

            } else if (asks_type_main_cont[i].textContent.trim() !== modal_task_type_info.text().trim()) {
                let changeHTML = `${asks_type_main_cont[i].outerHTML.replace('<div class="asks_type_main_icon"> <i class="fa fa-check" aria-hidden="true"></i></div>', '')}`;
                asks_type_main_cont[i].innerHTML = `${changeHTML}`
            }

        }
        // let SmallModalContent = document.querySelector('.asks_type_main_cont');

        // for (let item of arrOfObj) {
        //     let div2 = document.createElement("div");
        //     let lineDiv2 = document.createElement("div");
        //     div2.className = 'asks_type_main';
        //     lineDiv2.className = 'under-line';
        //     div2.textContent = item;

        //     SmallModalContent.append(div2);
        //     SmallModalContent.append(lineDiv2);
        //     console.log(modal_task_type_info.text().trim())
        //     if (div2.textContent == modal_task_type_info.text().trim()){
        //         console.log(div2)

        //     }

        // }


    }


    ////Active element of small modal

    asks_type_main_cont.forEach(function (item) {
        item.addEventListener('click', function () {
            // close small modal on click to element
            modal_task_type_info.text(item.textContent)
            closeSmallModall();
        })
    });


    ///////////functions  closeSmallModall
    function closeSmallModall() {
        task_type_modal_cont.removeClass('task_type_modal_cont_active').addClass('task_type_modal_cont');
        zatemnitel.removeClass('zatemnitel_active').addClass('zatemnitel');
    }








});




