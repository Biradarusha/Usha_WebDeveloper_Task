function selectBox(boxNumber){

    for(let i=1; i<=3; i++ ){
        const box=document.getElementById(`box${i}`);
        const options1=document.getElementById(`options${i*2-1}`);
        const options2=document.getElementById(`options${i*2}`);
         
        if(box) box.classList.remove('active');
        if(options1) options1.style.display='none';
        if(options2) options2.style.display='none';

    } 
    const selectedBox=document.getElementById(`box${boxNumber}`);
    const selectedOptions1=document.getElementById(`options${boxNumber*2-1}`);
    const selectedOptions2=document.getElementById(`options${boxNumber*2}`);
    
    if(selectedBox) selectedBox.classList.add('active');
    if(selectedOptions1) selectedOptions1.style.display='block'
    if(selectedOptions2) selectedOptions2.style.display='block'

    const radioButton=document.getElementById(`unit${boxNumber}`);
    if (radioButton) radioButton.checked=true;
    
}