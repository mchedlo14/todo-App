function todofunction(){
    let start = 1;

    $('#addicon').click(() => {
        let input = $('#input').val() //inputis mnishvneloba rac weria shignit

        if(input.length > 0){
            let created_paragraph = $("<p></p>")
            created_paragraph.attr('class','list-paragraph')
            
            $('.list-container').append(created_paragraph)
    
            created_paragraph.text(input)
            $('#list-count').text('You have' + ' ' + start + ' ' +'panding tasks') 
            start++
        }
    })

    $('#clear-button').click(function(){
        $('.list-paragraph').hide()
        $('#list-count').text('Please Add List') 
        start = 1
    })

    
}

todofunction()