//loader

$(document).ready(function (){
    $(".loader").fadeOut('slow')
})

function todofunction(){
    let start = 1;


    $('#addicon').click(() => {
        let input = $('#input').val() //inputis mnishvneloba rac weria shignit

        if(input.length > 0){
            let created_paragraph = $("<p></p>");
            created_paragraph.attr('class','list-paragraph');

            
            $('.list-container').append(created_paragraph)
    
            created_paragraph.text(input)
            $('#list-count').text('You have' + ' ' + start + ' ' +'panding tasks') 

            lineOnParagraph();
            deleteAfterDbclick();

            start++
        }
    })

    deleteAfterDbclick();
    $('#clear-button').click(function(){
        $('.list-paragraph').remove()
        $('#list-count').text('Please Add List') 
        start = 1
    })

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

function deleteAfterDbclick(){
    $('.list-paragraph').dblclick(function(){
        $(this).remove()
    })
}