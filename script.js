let cout1 = 0;
let cout2=0; 


let counnt1 = document.getElementById("count1")
let counnt2 = document.getElementById("count2")

function imgg1{
    cout1++
    counnt1.innerHTML= cout1
}

function immg2(){
    cout2++
    counnt2.innerHTML= cout2
}


function checkWin(){
    
    if (cout1 > cout2 ){
        document.getElementById("win").innerHTML = "Opeoluwa Won The Election"
    } else {
        document.getElementById("win").innerHTML = "Perl Kadasian Won The Election"
    }
}