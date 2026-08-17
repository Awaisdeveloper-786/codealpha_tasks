let inp=document.getElementById("ipute");
let buttons=document.querySelectorAll("button");
let string = "";
buttons.forEach(button =>
    {
    button.addEventListener("click", (e) =>
    {
        let value = e.target.innerHTML;
        if(value === "=")
        {
            string = eval(string);
            inp.value=string;
        }

        else if(value === "AC")
        {
            string="";
            inp.value=string;
        }
        else if(value === "DEL")
        {
            string= string.slice(0,-1)
            inp.value=string;
        }
        else
        {
            string +=value;
            inp.value=string;
        }
    })
})