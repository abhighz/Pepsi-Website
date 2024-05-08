const pepsi=[
    {
        name:"Pepsi Diet",
        amount:"350 cl",
        amount_per:"8.6%",
        fat:"0g",
        fat_per:"0%",
        soduium:"310mg",
        soduium_per:"1%",
        corbohydrat:"48g",
        corbohydrat_per:"15.3%",
        protien:"0g",
        protien_pre:"0%",
        ml:"250ml",
        poster1:"1 pepsi white.png",
        poster2:"1 Pepsi blue.png",
        main_poster:"pepsi diet.png"
    },
    {
        name:"Pepsi Classic",
        amount:"350 cl",
        amount_per:"7.5%",
        fat:"6g",
        fat_per:".006%",
        soduium:"30mg",
        soduium_per:"1%",
        corbohydrat:"41g",
        corbohydrat_per:"15.3%",
        protien:"0g",
        protien_pre:"0%",
        ml:"330ml",
        poster1:"2 can white.png",
        poster2:"2 can blue.png",
        main_poster:"can.png"
    },
    {
        name:"Pepsi 500 ML",
        amount:"350 cl",
        amount_per:'12%',
        fat:"11g",
        fat_per:".23%",
        soduium:"40mg",
        soduium_per:"2%",
        corbohydrat:"52g",
        corbohydrat_per:"25.3%",
        protien:"0g",
        protien_pre:"0%",
        ml:"500",
        poster1:"3 Pepsi white.png",
        poster2:"3 Pepsi blue.png",
        main_poster:"pepsi .5ltr.png"
    }, 
    {
        name:"Pepsi 1 LTR",
        amount:"510 cl",
        amount_per:'16.6%',
        fat:"19g",
        fat_per:".45%",
        soduium:"49mg",
        soduium_per:"2%",
        corbohydrat:"61g",
        corbohydrat_per:"35.3%",
        protien:"0g",
        protien_pre:"0%",
        ml:"1 ltr",
        poster1:"4 pepsi white.png",
        poster2:"4 Pepsi blue.png",
        main_poster:"pepsi 1ltr.png"
    },
    {
        name:"Pepsi 1.5 LTR",
        amount:"625 cl",
        amount_per:'21.6%',
        fat:"32g",
        fat_per:"0%",
        soduium:"50mg",
        soduium_per:"3%",
        corbohydrat:"66g",
        corbohydrat_per:"30.3%",
        protien:"0g",
        protien_pre:"0%",
        ml:"1.5 LTR",
        poster1:"5 Pepsi white.png",
        poster2:"5 Pepsi blue.png",
        main_poster:"pepsi 1.5ltr.png"
    },
    {
        name:"Pepsi 2LTR",
        amount:"729 cl",
        amount_per:'37.6%',
        fat:"54g",
        fat_per:"0%",
        soduium:"310mg",
        soduium_per:"4%",
        corbohydrat:"57g",
        corbohydrat_per:"41.3%",
        protien:"0g",
        protien_pre:"0%",
        ml:"2 LTR",
        poster1:"6 Pepsi white.png",
        poster2:"6 Pepsi blue.png",
        main_poster:"pepsi 2ltr.png"
    }
]


Array.from(document.getElementsByClassName('card_pepsi')).forEach((element,i) => {
    element.addEventListener('mouseover', () => {
        document.getElementsByClassName('pepsi_hover_image')[i].src = pepsi[i].poster1;
    })
    element.addEventListener('mouseout', () => {
        document.getElementsByClassName('pepsi_hover_image')[i].src = pepsi[i].poster2;
    })
})


Array.from(document.getElementsByClassName('card_pepsi')).forEach((element,i) =>{
    element.addEventListener('click',()=> {
        document.getElementById('main_bottle').src=pepsi[i].main_poster;
        document.getElementById('main_title_h1').innerText=pepsi[i].name;
        document.getElementById('ml_title').innerText=pepsi[i].ml;
        document.getElementById('cal').innerText=pepsi[i].amount;
        document.getElementById('cal2').innerText=pepsi[i].amount_per;
        document.getElementById('fat').innerText=pepsi[i].fat;
        document.getElementById('fat2').innerText=pepsi[i].fat_per;
        document.getElementById('sod').innerText=pepsi[i].soduium;
        document.getElementById('sod2').innerText=pepsi[i].soduium_per;
        document.getElementById('car').innerText=pepsi[i].corbohydrat;
        document.getElementById('car2').innerText=pepsi[i].corbohydrat_per; 
        document.getElementById('pro').innerText=pepsi[i].protien;
        document.getElementById('pro2').innerText=pepsi[i].protien_pre;
    })

})
let index=1;
document.getElementById('left_box_btn').addEventListener('click',()=>{
    index-=1;
    if(index<0){
      index=  pepsi.length; 
    }
    document.getElementById('main_bottle').src=pepsi[index].main_poster;
    document.getElementById('main_title_h1').innerText=pepsi[index].name;
    document.getElementById('ml_title').innerText=pepsi[index].ml;
    document.getElementById('cal').innerText=pepsi[index].amount;
    document.getElementById('cal2').innerText=pepsi[index].amount_per;
    document.getElementById('fat').innerText=pepsi[index].fat;
    document.getElementById('fat2').innerText=pepsi[index].fat_per;
    document.getElementById('sod').innerText=pepsi[index].soduium;
    document.getElementById('sod2').innerText=pepsi[index].soduium_per;
    document.getElementById('car').innerText=pepsi[index].corbohydrat;
    document.getElementById('car2').innerText=pepsi[index].corbohydrat_per; 
    document.getElementById('pro').innerText=pepsi[index].protien;
    document.getElementById('pro2').innerText=pepsi[index].protien_pre;
})

document.getElementById('right_btn_box').addEventListener('click',()=>{
    index++;
    if(index > pepsi.length){
      index= 0; 
    }
    document.getElementById('main_bottle').src=pepsi[index].main_poster;
    document.getElementById('main_title_h1').innerText=pepsi[index].name;
    document.getElementById('ml_title').innerText=pepsi[index].ml;
    document.getElementById('cal').innerText=pepsi[index].amount;
    document.getElementById('cal2').innerText=pepsi[index].amount_per;
    document.getElementById('fat').innerText=pepsi[index].fat;
    document.getElementById('fat2').innerText=pepsi[index].fat_per;
    document.getElementById('sod').innerText=pepsi[index].soduium;
    document.getElementById('sod2').innerText=pepsi[index].soduium_per;
    document.getElementById('car').innerText=pepsi[index].corbohydrat;
    document.getElementById('car2').innerText=pepsi[index].corbohydrat_per; 
    document.getElementById('pro').innerText=pepsi[index].protien;
    document.getElementById('pro2').innerText=pepsi[index].protien_pre;

})