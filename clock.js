//clock setting
let hour= document.getElementsByClassName('hour')[0];
let minute = document.getElementsByClassName('minute')[0];
let second = document.getElementsByClassName('second')[0];

   function setDate() {
      var date = new Date();

      var gethour = date.getHours() * 30;
      var getminute = date.getMinutes() * 6;
      var getsecond = date.getSeconds() * 6;
      

   second.style.transform =`translate(0%, -50%) rotate(270deg) rotate(${getsecond}deg)`;
   minute.style.transform =`translate(0%, -50%) rotate(270deg) rotate(${getminute}deg)`;
   hour.style.transform =`translate(0%, -50%) rotate(270deg) rotate(${gethour}deg)`;
  }

   var time= setInterval(() => {;

            }, 1000);

   //start button
   let start = document.getElementsByClassName('btn-start')[0];
   let stop =document.getElementsByClassName('btn-stop')[0];
   
   start.addEventListener('click', ()=>{
        time= setInterval(() => {
            setDate();
         }, 1000);
          start.classList.toggle("active");
          stop.classList.toggle("active");
   });

   stop.addEventListener('click', ()=>{
      clearInterval(time);
      start.classList.toggle("active");
      stop.classList.toggle("active");
   })

   // change shape

   var shapes = ['shape-one', 'shape-two', 'shape-three', 'shape-four'];
   var shapebtn = document.getElementsByClassName('btn-shape')[0];
   var clock = document.getElementsByClassName('clock-container')[0];

   var cou = 0;
   var del = null;
  
   shapebtn.addEventListener('click', ()=>{
      del = cou - 1;
      clock.classList.add(shapes[cou]);
      clock.classList.remove(shapes[del]);
      cou++;
      if(cou > shapes.length){
        cou = 0;
      }
   });

   //change background

   var another = ['ano-one', 'ano-two', 'ano-three','ano-four', 'ano-five', 'ano-six'];
   var anobtn = document.getElementsByClassName('btn-another')[0];

   var aco = 0;
   var ad = null;
  
   anobtn.addEventListener('click', ()=>{
      ad = aco - 1;
      clock.classList.add(another[aco]);
      clock.classList.remove(another[ad]);
      aco++;
      if(aco > another.length){
        aco = 0;
      }
   });


   //change text color

   var colors = ['one', 'two', 'three','four', 'five'];
   var text = document.getElementsByTagName('body')[0];

   var e = 0;
   var f = null;


   setInterval(() => {
      f = e - 1;
      text.classList.add(colors[e]);
      text.classList.remove(colors[f]);
      e++;
      if(e > colors.length){
        e = 0;
      }
   }, 300);
