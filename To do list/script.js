var showhide = document.querySelector(".hide");
         setTimeout(function(){
            showhide.style.opacity = 1;
        }, 1000)

        setTimeout(function(){
            showhide.style.opacity = 0;
        }, 3000)


        var addBtn = document.querySelector(".screen button");
        var input = document.querySelector(".screen input");
        var taskBox = document.querySelector(".box");

        input.focus();

        addBtn.addEventListener("click", function(){
            if(addBtn.innerText == "Add"){
                        if(input.value == ""){
                        alert("Pls Enter a Task")
                        input.focus();
                    } else {
                        taskBox.innerHTML += `
                                    <div class="eachTask">
                                        <div class="task">${input.value}</div>
                                        <div class="btnBlock">
                                            <button class="edit">Edit</button>
                                            <button class="delete">Delete</button>
                                        </div>
                                    </div>
                    `;
                    input.value = "";
                    input.focus();
                    }


                delBtn = document.querySelectorAll(".delete");
                for(i=0; i < delBtn.length; i++){
                    delBtn[i].addEventListener("click", function(e){
                        val = e.target.parentElement.parentElement;
                        val.remove();
                    })
                }

                editBtn = document.querySelectorAll(".edit");
                for(i=0; i < editBtn.length; i++){
                    editBtn[i].addEventListener("click", function(e){
                        val = e.target.parentElement.previousElementSibling;
                        input.value = val.innerHTML;
                        addBtn.innerText = "Edit";
                        input.focus();
                    })
                }
            } else if(addBtn.innerText == "Edit"){
                val.innerText = input.value;
                addBtn.innerText = "Add";
                input.value = "";
                input.focus();
            }
            
        })