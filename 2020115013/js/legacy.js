
        function display(str){
            let a =document.querySelector(".kkrcontent");
            let b = document.querySelector("#kkr");
            let c =document.querySelector(".cskcontent");
            let d = document.querySelector("#csk");
            let e = document.querySelector(".micontent");
            let f= document.querySelector("#mi");
            if(str=="kkr"){
                e.style.display = "none";
                f.style.backgroundColor = "white";
                f.style.color = "black";
                c.style.display = "none";
                d.style.backgroundColor = "white";
                d.style.color = "black";
                a.style.display = "block";
                b.style.backgroundColor = "black";
                b.style.color = "red";
            }
            else if(str=="csk"){
                e.style.display = "none";
                f.style.backgroundColor = "white";
                f.style.color = "black";
                a.style.display = "none";
                b.style.backgroundColor = "white";
                b.style.color = "black";
                c.style.display = "block";
                d.style.backgroundColor = "black";
                d.style.color = "red";
            }
            else if(str=="mi"){
                c.style.display = "none";
                d.style.backgroundColor = "white";
                d.style.color = "black";
                a.style.display = "none";
                b.style.backgroundColor = "white";
                b.style.color = "black";
                e.style.display = "block";
                f.style.backgroundColor = "black";
                f.style.color = "red";
            }
        }