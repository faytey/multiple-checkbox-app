const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");

let lastChecked;

    function handleCheck(e){
        let inBetween = false;
        if(e.shiftkey && this.checked){
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
                console.log("Lets begin here");
            }

            if(inBetween){
                checkbox.checked = true;
            }
        });
        }
        lastChecked = this;
    }

    checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));