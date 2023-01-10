function openProgramMenu(){
    if($('.header_body_program_section').css('display')=='none'){
        $('.header_body_program_section').slideDown();
    }else{
        $('.header_body_program_section').hide();
    }

    if($('.header_body_Excercise_section').is('visible')!='false'){
        $('.header_body_Excercise_section').hide();
    }

}

function openExerciseMenu(){
    if($('.header_body_Excercise_section').css('display')=='none'){
        $('.header_body_Excercise_section').slideDown();
    }else{
        $('.header_body_Excercise_section').hide();
    }

    if($('.header_body_program_section').is('visible')!='false'){
        $('.header_body_program_section').hide();
    }
}