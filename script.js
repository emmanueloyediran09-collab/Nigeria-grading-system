 function caculate(){
     let grade =document.getElementById('university').value
     let displayArea= document.getElementById('display')



    if (grade< 1.5 || grade > 5 ){
        alert('invalid CGPA')   
    }
    if (grade.length !== 4 && grade.length !== 3) {
        alert('Sorry your CGPA can only be 3 or 2 digits')
    }
    
     if (grade >= 1.50 && grade <= 2.39){
       displayArea.innerHTML=`<p>You are currently in Third class 👀</p>`
    }
    else if ( grade >= 2.40 && grade<=3.49)
    {
        displayArea.innerHTML=`<p>You are currently in Second class lower 😐</p>`
    }

    else if ( grade >= 3.40 && grade<=4.49)
    {
        displayArea.innerHTML=`<p>You are currently in Second class upper 😃</p>`
    }

    else if ( grade >= 4.50 && grade<=5.00)
    {
        displayArea.innerHTML=`<p>You are a First class stdent 😊</p>`
    }
    
}


 function caculate1(){
     let grade1 =document.getElementById('polytechnic').value
     let displayArea1= document.getElementById('display1')



    if (grade1< 1.5 || grade1 > 4.0 ){
        alert('invalid CGPA')   
    }
    if (grade1.length !== 4 && grade1.length !== 3) {
        alert('Sorry your CGPA can only be 3 or 2 digits')
    }
    
     if (grade1 >= 2.0 && grade1 <= 2.49){
       displayArea1.innerHTML=`<p>You passed 👀</p>`
    }
    else if ( grade1 >= 2.50 && grade1<=2.99)
    {
        displayArea1.innerHTML=`<p>Lower Credit 😐</p>`
    }

    else if ( grade1 >= 3.00 && grade1<=3.49)
    {
        displayArea1.innerHTML=`<p> Upper Credit 😃</p>`
    }

    else if ( grade1 >= 3.50 && grade1<=4.00)
    {
        displayArea1.innerHTML=`<p> Distinction 😊 </p>`
    }
}


function caculate2(){
     let grade2 =document.getElementById('secondary').value
     let displayArea2= document.getElementById('display2')



    if (grade2< 0 || grade2 > 100){
        alert('invalid score')   
    }
    if (grade2.length !== 2 && grade2.length !== 3) {
        alert('Sorry your scores can only be 3 or 2 digits')
    }
    
     if (grade2 >= 0 && grade2 <= 39){
       displayArea2.innerHTML=`<p> F    (You failed 👀)</p>`
    }
    else if ( grade2 >= 40 && grade2<=49)
    {
        displayArea2.innerHTML=`<p> E   (poor 😪) </p>`
    }

    else if ( grade2 >= 50 && grade2<=59)
    {
        displayArea2.innerHTML=`<p> D   (fair 😐) </p>`
    }

    else if ( grade2 >=60 && grade2<=69)
    {
        displayArea2.innerHTML=`<p> C   (good😃)</p>`
    }
    
    else if ( grade2 >=70 && grade2<=79)
    {
        displayArea2.innerHTML=`<p> B   (Exellent 🤗)</p>`
    }

    else if ( grade2 >= 80 && grade2<=100)
    {
        displayArea2.innerHTML=`<p> A   (Distinction 😊) </p>`
    }
}