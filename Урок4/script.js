$(function() {
    $('#addTask').click(function() {
        var anyTaskName = $("input[name=taskName]").val();
        var anyTaskDesc = $("textarea[name=taskDescription]").val();
      
        var toDoItem = $(`<div class="item">
                    	<div class="item-header">
                    		<h3> ${anyTaskName} </h3><div class="item-delete"></div><div class="flex-1"></div><select class="item-toggle"></select >
                   	 	</div>

                   	 	<div class="item-desc">${anyTaskDesc}</div>	
                    </div>`);
        toDoItem.find('.item-delete').click(function() {
            toDoItem.remove();
        })

        toDoItem.find('.item-toggle').click(function() {
            toDoItem.toggleClass('collapsed')
        })

        if (anyTaskDesc.length == 0) {
            $(popupContainer).show();
        }
        else {
            $('.wrapper').append(toDoItem);

        }
    });

});