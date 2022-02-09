//loader

$(document).ready(function (){
    $(".loader").fadeOut('slow')
})

function todofunction(){
    
    var start = 0;

    $('#addicon').click(() => {
        let input = $('#input').val() //inputis mnishvneloba rac weria shignit
        

        if(input.length > 0){
            let created_paragraph = $("<p></p>");
            created_paragraph.attr('class','list-paragraph');

            $('.list-container').append(created_paragraph)
            
    
            created_paragraph.text(input)
            $('#list-count').text('You have' + ' ' +  parseInt(start + 1)  + ' ' +'panding tasks') 
            
            if($('.list-paragraph').val().length > 0){
                start = 0
            }

            lineOnParagraph();

            ++start

            deleteAfterDbclick(start);
            
        }
    })

    //focusirebuli roca ar ikneba input value carieli rom xdeba


    //clear btn-ze dacheris shemdeg
    $('#clear-button').click(function(){
        $('.list-paragraph').remove()
        $('#list-count').text('Please Add List') 
        $('#input').val('')
        start = 0
    })

    //roca fokusirebulia input
    $('#input').focus(function(){
        $(this).css('border','1px solid #321847')
    })


    $('#input').focusout(function(){
        $(this).css('border','1px solid rgb(187, 186, 186)')
        
    })
    
}

todofunction()


function lineOnParagraph(){
    $('.list-paragraph').click(function(){
        $(this).css('text-decoration','line-through')
    })
}

function deleteAfterDbclick(number){
    $('.list-paragraph').dblclick(function(){
        
        if(number < 0){
            $('#list-count').text('Please Add List')
        }
        console.log(number);
        --number
        $(this).remove()
        $('#list-count').text('You have' + ' ' +  parseInt(number)  + ' ' +'panding tasks') 
    })
}
