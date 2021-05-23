function validatetheform(){
    let a = document.forms["signupform"]["first"].value;
    if(a=="")
    {
        let reload=confirm("Please enter your first name");
        if(reload==true || reload==false){
            location.reload();
            return;
        }
    }
    let b=document.forms["signupform"]["last"].value;
    if(b=="")
    {
        let reload=confirm("Please enter your last name");
        if(reload==true || reload==false){
            location.reload();
            return;
        }
    }
    let c=document.forms["signupform"]["age"].value;
    if(c=="")
    {
        let reload=confirm("Please enter your age");
        if(reload==true || reload==false)
        {
            location.reload();
            return;
        }
    }
    let d=document.forms["signupform"]["email"].value;
    if(d=="")
    {
        let reload=confirm("Please enter your email");
        if(reload==true || reload==false)
        {
            location.reload();
            return;
        }
    }
    let e=document.forms["signupform"]["phone"].value;
    if(e=="")
    {
        let reload=confirm("Please enter your phone number");
        if(reload==true || reload==false)
        {
            location.reload();
            return;
        }
    }
    let l = e.length;
    for(i=0;i<l;i++){
        if(e[i]>=0 && e[i]<=9)
        {
            continue;
        }
        else{
            let reload=confirm("Please enter only numbers in phone number field");
        if(reload==true || reload==false)
        {
            location.reload();
            return;
        }    
        }
    }
    if(l!==10){
        let reload=confirm("Please enter a valid phone number");
        if(reload==true || reload==false)
        {
            location.reload();
            return;
        }
    }
    if(Number(c)>100 || Number(c)<0){
        let reload=confirm("Please enter a valid age");
        if(reload==true || reload==false)
        {
            location.reload();
            return;
        }
    }
    alert("Form has been submited successfully");
}