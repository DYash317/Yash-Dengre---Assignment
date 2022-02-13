function validateinputs(){

    var error_present=0;
    var username=document.forms["SignUpForm"]["username"].value;
    var useremail=document.forms["SignUpForm"]["useremail"].value;
    var userpass=document.forms["SignUpForm"]["userpass"].value;
    var usercontact=document.forms["SignUpForm"]["usercontact"].value;
    var userpassconfirm=document.forms["SignUpForm"]["userpassconfirm"].value;

    var message_contact="";
    var message_username="";
    var message_pass="";
    var message_email="";
    var message_pass_confirm="";
    
    if(username.length==0){
        error_present=1;
        message_username="Username should not be empty!<br><br>"
    }
    else{
        if((username[0]>='A' && username[0]<='Z') || (username[0]>='a' && username[0]<='z')){}
        else{
            error_present=1;
            message_username="Username should contain only aphanumeric characters and '_' and first character must be an alphabet!<br><br>"
        }
        for(let i=0;i<username.length;i++){
            if((username[i]>='A' && username[i]<='Z') || (username[i]>='a' && username[i]<='z') || (username[i]=='_') || (username[i]>='0' && username[i]<='9')){}
            else{
                error_present=1;
                message_username="Username should contain only aphanumeric characters and '_' and first character must be an alphabet!<br><br>"
            }
        }
    }

    if(usercontact.length==0){
        error_present=1;
        message_contact="Contact number should not be empty!<br><br>";
    }
    else{
        if(usercontact.length!=10 || usercontact[0]=='0'){
            error_present=1;
            message_contact="Contact number should only contain numeric values - 0 to 9, must be 10 digit long, NOT starting with 0!<br><br>";
        }
        else{
            for(let i=0;i<usercontact.length;i++){
                if((usercontact[i]>='0' && usercontact[i]<='9')){}
                else{
                    error_present=1;
                    message_contact="Contact number should only contain numeric values - 0 to 9, must be 10 digit long, NOT starting with 0!<br><br>";
                }
            }
        }
    }
    
    if(userpass.length==0){
        error_present=1;
        message_pass="Password should not be empty!<br><br>";
    }
    else{
        if(userpass.length<8){
            error_present=1;
            message_pass="Password must be minimum 8 characters long with alphanumeric values and '@, _, !'<br><br>";
        }
        else{
            for(let i=0;i<userpass.length;i++){
                if((userpass[i]>='A' && userpass[i]<='Z') || (userpass[i]>='a' && userpass[i]<='z') || (userpass[i]=='@') || (userpass[i]=='_') || (userpass[i]=='!')){}
                else{
                    error_present=1;
                    message_pass="Password must be minimum 8 characters long with alphanumeric values and '@, _, !'<br><br>";
                }
            }
        }
    } 

    if(useremail.length==0){
        error_present=1;
        message_email="Email should not be empty!<br><br>";
    }
    else{
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(useremail.match(mailformat)){}
        else{
            error_present=1;
            message_email="Wrong Email Format!<br><br>";
        }
    }

    if(userpassconfirm.length==0){
        error_present=1;
        message_pass_confirm="Confirmation password should not be empty!<br><br>";
    }
    else{
        if(userpassconfirm!=userpass){
            error_present=1;
            message_pass_confirm="Confirmation password and password fields DO NOT MATCH!<br><br>";
        }
    }
    
    document.getElementById("span_contact").innerHTML=message_contact;
    document.getElementById("span_username").innerHTML=message_username;
    document.getElementById("span_password").innerHTML=message_pass;
    document.getElementById("span_useremail").innerHTML=message_email;
    document.getElementById("span_password_confirm").innerHTML=message_pass_confirm;

    if(error_present==1){
        return false;
    }
    else{
        alert("All inputs validated correctly!");
        return true;
    }
}