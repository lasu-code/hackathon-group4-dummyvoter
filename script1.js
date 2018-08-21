let cout1 = 0;
let cout2=0; 


let counnt1 = document.getElementById("count1")
let counnt2 = document.getElementById("count2")
let wrap1 = document.getElementById("wrapper")
let wrap2 = document.getElementById("win")


function imgg1(){
    cout1++
    counnt1.innerHTML="No of votes: " +cout1
}

function immg2(){
    cout2++
    counnt2.innerHTML= "No of votes: " +cout2
}

function checkWin(){
    
    if (cout1 > cout2 ){
        document.getElementById("win").innerHTML = "Opeoluwa Won The Election"
    } else {
        document.getElementById("win").innerHTML = "Perl Kadasian Won The Vote"
    }
    
    if (wrap1.style.display == "block"){
        wrap1.style.display = "none"

    }
    else{
         wrap1.style.display ="block"
    }
    
    if (wrap2.style.display == "none"){
        wrap2.style.display = "block"

    }
    else{
         wrap2.style.display ="none"
    }
    
}