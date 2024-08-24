class SingUpPage{
    validate(){}
    updateNext(){
        
    }
    updatePrev(){

    }
}
class SingUpPage1 extends SingUpPage{
    constructor(max_circle,labelNum){
        super();
        self.max_circle = max_circle;
        self.labelNum = labelNum;
        let outer_circleStr="outer-circle"
        let lineStr="line";
        let circle_stepStr="circle-step";
        let labelStr="label"
        let u=["first name", "last name"];
        let pick_pict=document.getElementById("pick-picture-part");
        pick_pict.innerHTML="";
        let inputStr="input-form";
        let prev=document.getElementById("previousbutton");
        prev.style.visibility="hidden";
        for(let i=1;i<=max_circle;i++){
            console.log(`${circle_stepStr}${i}`);
            
            let outer_circle=document.getElementById(`${outer_circleStr}${i}`);
            outer_circle.classList.remove(...outer_circle.classList)
            outer_circle.classList.add("outer-circle");
            outer_circle.classList.add("outer-circle-black");
            let circle_step=document.getElementById(`${circle_stepStr}${i}`);
            circle_step.innerHTML=`${i}`
            circle_step.classList.remove(...circle_step.classList)
            circle_step.classList.add("circle-step");
            circle_step.classList.add("circle-step-black");
        }
        for(let i=1;i<=max_circle-1;i++){
            let line=document.getElementById(`${lineStr}${i}`);
            line.classList.remove(...line.classList)
            line.classList.add("line");
            line.classList.add("line-gray");
        }
        for(let i=0;i<labelNum;i++){
           let label=document.getElementById(`${labelStr}${i+1}`); 
           let input=document.getElementById(`${inputStr}${i+1}`);
           label.style.display="inline-block";
           input.style.display="inline-block";
           label.innerText=u[i];
        }
    }
    validate(){
      let inputform1=document.getElementById("input-form1");
      let inputform2=document.getElementById("input-form2");
      let reg=new RegExp("^[a-zA-Z]+$");
      let b1=false,b2=false;
      if(inputform1.value.length==0){
        let error1=document.getElementById("error-input1");
        error1.innerHTML=`&#9888;this field should filled`;
      }
      else if(!reg.test(inputform1.value)){
        let error1=document.getElementById("error-input1");
        error1.innerHTML=`&#9888;this field should only characters`;
      }
      else{
        b1=true;
      }
      if(inputform2.value.length==0){
        let error2=document.getElementById("error-input2");
        error2.innerHTML=`&#9888;this field should filled`;
      }
      else if(!reg.test(inputform2.value)){
        let error2=document.getElementById("error-input2");
        error2.innerHTML=`&#9888;this field should only characters`;
      }
      else{
        b2=true;
      }
      return b1 &&b2;
    }
     updateNext(){
        if(this.validate()){
            return new SingUpPage2(self.max_circle,self.labelNum);
        }
    }
}
class SingUpPage2 extends SingUpPage{
    static pickImage(){
        let file=document.getElementById("file");
        file.click();
        file.addEventListener("change",()=>{
            console.log(file.files[0].name);
        let pick_label=document.getElementById("picture-label");
        pick_label.innerText=file.files[0].name;
       const fr=new FileReader();
       fr.readAsDataURL(file.files[0]);
       fr.addEventListener("load", ()=>{
        const url=fr.result;
        console.log(url);
       });
        });
    }
    constructor(max_circle,labelNum){
        super();
        let outer_circleStr="outer-circle"
        let lineStr="line";
        let circle_stepStr="circle-step";
        let labelStr="label"
        let u=["first name", "last name"];
        let pick_pict=document.getElementById("pick-picture-part");
        pick_pict.innerHTML=`<input type="file" style="visibility: hidden;height: 0;width: 0;"  id="file">
                            <input type="button" value="Pick Picture" class="pick-picture" onclick="SingUpPage2.pickImage()">
                            <span id="picture-label"></span>`;
        let inputStr="input-form";
        let prev=document.getElementById("previousbutton");
        prev.style.visibility="visible";
        for(let i=1;i<=max_circle;i++){
            console.log(`${circle_stepStr}${i}`);
            let outer_circle=document.getElementById(`${outer_circleStr}${i}`);
            outer_circle.classList.remove(...outer_circle.classList)
            outer_circle.classList.add("outer-circle");
            if(i==1){
                outer_circle.classList.add("outer-circle-green");
                let circle_step=document.getElementById(`${circle_stepStr}${i}`);
                circle_step.innerHTML=`&#10004;`
                circle_step.classList.remove(...circle_step.classList)
                circle_step.classList.add("circle-step");
                circle_step.classList.add("circle-step-green"); 
            }
            else{
            outer_circle.classList.add("outer-circle-black");
            let circle_step=document.getElementById(`${circle_stepStr}${i}`);
            circle_step.innerHTML=`${i}`
            circle_step.classList.remove(...circle_step.classList)
            circle_step.classList.add("circle-step");
            circle_step.classList.add("circle-step-black");
            }
            
        }
        for(let i=1;i<=max_circle-1;i++){
            let line=document.getElementById(`${lineStr}${i}`);
            line.classList.remove(...line.classList)
            line.classList.add("line");
            if(i==1){
                line.classList.add("line-red");
            }
            else{
                line.classList.add("line-gray");
            }
        }
        for(let i=0;i<labelNum;i++){
            if(i==0){
            let label=document.getElementById(`${labelStr}${i+1}`); 
           let input=document.getElementById(`${inputStr}${i+1}`);
           label.style.visibility="visible";
           input.style.visibility="visible";
           label.innerText=u[i];
            }
            else{
                console.log("jjjjjjjjjj");
                
            let label=document.getElementById(`${labelStr}${i+1}`); 
           let input=document.getElementById(`${inputStr}${i+1}`);
           label.style.display="none";
           //label.style.height=0;
           //input.style.height=0;
           input.style.display="none";
           //label.innerText=u[i];
            }
        }
    }
    validate(){
       let email=document.getElementById("input-form1");
       console.log(email.value);
       var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
       let b1=false;
       if(email.value.length==0){
         let error1=document.getElementById("error-input1");
         error1.innerHTML=`&#9888;this field should filled`;
       }
       else if(!email.value.match(mailformat)){
         let error1=document.getElementById("error-input1");
         error1.innerHTML=`&#9888;this field should be in email format`;
       }
       else{
        //console.log("kkkktttttttttttttttttttttttttttttttt");
        b1=true;
       }
       return b1;
    }
     updateNext(){
        if(this.validate()){
            return new SingUpPage3(3,2);
        }
    }
    updatePrev(){
        return new SingUpPage1(3,2);   
    }
}
class SingUpPage3 extends SingUpPage{
    constructor(max_circle,labelNum){
        super();
        self.max_circle = max_circle;
        self.labelNum = labelNum;
        let outer_circleStr="outer-circle"
        let lineStr="line";
        let circle_stepStr="circle-step";
        let labelStr="label"
        let u=["password", "re enter password"];
        let pick_pict=document.getElementById("pick-picture-part");
        pick_pict.innerHTML="";
        let inputStr="input-form";
        let prev=document.getElementById("previousbutton");
        prev.style.visibility="hidden";
        for(let i=1;i<=max_circle;i++){
            console.log(`${circle_stepStr}${i}`);
            
            let outer_circle=document.getElementById(`${outer_circleStr}${i}`);
            outer_circle.classList.remove(...outer_circle.classList)
            outer_circle.classList.add("outer-circle");
            if(i==3){
                outer_circle.classList.add("outer-circle-black");
                let circle_step=document.getElementById(`${circle_stepStr}${i}`);
                circle_step.innerHTML=`${i}`
                circle_step.classList.remove(...circle_step.classList)
                circle_step.classList.add("circle-step");
                circle_step.classList.add("circle-step-black");
    
            }
            else{
            outer_circle.classList.add("outer-circle-green");
                let circle_step=document.getElementById(`${circle_stepStr}${i}`);
                circle_step.innerHTML=`&#10004;`
                circle_step.classList.remove(...circle_step.classList)
                circle_step.classList.add("circle-step");
                circle_step.classList.add("circle-step-green"); 
            }
        }
        for(let i=1;i<=max_circle-1;i++){
            let line=document.getElementById(`${lineStr}${i}`);
            line.classList.remove(...line.classList)
            line.classList.add("line");
            line.classList.add("line-red");
        }
        for(let i=0;i<labelNum;i++){
           let label=document.getElementById(`${labelStr}${i+1}`); 
           let input=document.getElementById(`${inputStr}${i+1}`);
           label.style.display="inline-block";
           input.style.display="inline-block";
           label.innerText=u[i];
        }
    }
    validate(){
       // let input=;
    }
    updateNext(){
        this.validate();
    }
}
//let s1=SingUpPage();
//s1.updateValid(SingUpPage1());;
sigup=new SingUpPage1(3,2)
function pressNext(){
    let flage=sigup.updateNext();
    if(flage){
        sigup=flage;
    }
}
function pressPrevious(){
    let flage=sigup.updatePrev();
    if(flage){
        sigup=flage;
    }

}