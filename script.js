// For Toggle 
let toggle = document.querySelector('.toggleBars');
let listDiv = document.querySelector('.list');
toggle.addEventListener('click', () => {
    listDiv.classList.toggle('active');
    if(listDiv.classList.contains('active')){
        toggle.textContent='close';
    }
    else{
        toggle.textContent='menu';
    }
});

// This is to scroll Div 
let scrollDiv=document.querySelector('.scrollDiv')
let scrollDown=document.querySelector('.scrollDown');
scrollDown.addEventListener('click', ()=>{
  scrollDiv.scrollTo({
    top:scrollDiv.scrollTop + 100,
    behavior:"smooth"
  });
});

const scrollUp = document.querySelector(".scrollUp");

scrollUp.addEventListener("click", () => {
    scrollDiv.scrollTo({
      top: scrollDiv.scrollTop - 100,
      behavior: "smooth"
    });
  });

//   Image array 
let imageArray=[
  {name:'Iron Man',
    url:'https://bit.ly/3OpW4sg',
    borderCol:'red',
    heroUrl:'https://bit.ly/3pPtLZV',
    p:`Tony Stark is a billionaire inventor, industrialist, and CEO of Stark Industries, a leading technology company. He uses his intellect and cutting-edge technology to become the armored superhero, Iron Man. Stark is known for his wit, charisma, and arrogance, but also has a deep sense of responsibility and guilt after realizing the harm his weapons have caused. He is a founding member of the Avengers and serves as a key strategist and leader.`
  },
    {name:'Captain America',
    url:'https://c4.wallpaperflare.com/wallpaper/817/500/937/captain-america-avengers-infinity-war-5k-steve-rogers-wallpaper-preview.jpg',
    borderCol:'#2192FF',
    heroUrl:'https://bit.ly/3BL4Fhy',
    p:`Steve Rogers is a super-soldier who was transformed from a frail young man into a powerful and patriotic warrior during World War II. He serves as the moral compass of the Avengers, embodying the ideals of honor, courage, and sacrifice. Rogers is known for his unwavering sense of duty, his unwavering loyalty to his friends, and his willingness to put himself in harm's way to save others. He struggles with adapting to the modern world but remains a symbol of American values and a beacon of hope to his fellow Avengers.`
  } ,
      {name:'Thor',
    url:'https://bit.ly/3Ou9C6b',
    borderCol:'#0002A1',
    heroUrl:'https://bit.ly/3OzBztn',
    p:`Thor is the god of thunder and heir to the throne of Asgard, who wields the mighty hammer, Mjolnir. He is a fierce warrior and protector of the Nine Realms, but also learns humility and the value of compassion during his time on Earth. Thor is known for his strength, bravery, and loyaltyto his friends, but also struggles with the weight of his responsibilities as a prince and a hero. He has a complicated relationship with his adoptive brother, Loki, and has faced many personal and physical challenges over the course of his time with the Avengers.`
  } ,
     {name:'HULK',
    url:'https://bit.ly/3WnsoxL',
    borderCol:'#38E54D',
    heroUrl:'https://bit.ly/3pZjZoa',
    p:`Bruce Banner is a brilliant scientist who transforms into a giant, green-skinned, superhuman monster when he becomes angry. He struggles with controlling his rage and often feels like a burden to the people around him. Hulk is known for his incredible strength and durability, but also for his impulsiveness and unpredictability. Banner often works with the Avengers as a scientist and strategist, using his intellect to help solve complex problems and develop new technologies.`
  } ,
      {name:'Spider Man',
    url:'https://bit.ly/41WJzHP',
    borderCol:'#FF1E1E',
    heroUrl:'https://bit.ly/43hFjns',
    p:`Peter Parker is a teenager with spider-like abilities who fights crime in New York City and eventually becomes an ally of the Avengers. He is known for his quips, his youthful energy, and his strong sense ofresponsibility and justice. Spider-Man is a key member of the Avengers in many storylines, bringing a unique perspective and set of abilities to the team. He is known for his intelligence, his resourcefulness, and his unwavering commitment to protecting the people he cares about. Parker has faced many personal and physical challenges over the course of his time with the team, including the loss of his mentor, Tony Stark, and the challenges of balancing his superhero duties with his personal life and responsibilities as a student.`
  } ,
     {name:'Black Widow',
    url:'https://pixelz.cc/wp-content/uploads/2018/05/avengers-infinity-war-black-widow-uhd-8k-wallpaper.jpg',
    borderCol:'#C0DBEA',
    heroUrl:'https://bit.ly/3MneWW3',
    p:`Natasha Romanoff is a former Russian spy and assassin who defected to the United States and became a member of S.H.I.E.L.D. and the Avengers. She has a troubled past but is a skilled martial artist and strategist, and uses her intelligence and cunning to outmaneuver her enemies. Romanoff is known for her loyalty, her bravery, and her ability to adapt to any situation. She has faced many personal and physical challenges over the course of her time with the Avengers, and has developed close relationships with many of her fellow team members.`
  } ,
 
     {name:'Scarlet Witch',
    url:'https://bit.ly/41X7VRu',
    borderCol:'#A10035',
    heroUrl:'https://bit.ly/3Ix02eK',
    p:`Wanda Maximoff is a powerful mutant with reality-warping abilities who has faced a troubled past. She struggles with controlling her powers and often feels like an outsider. Scarlet Witch is known for her strength, her courage, and her fierce loyalty to her brother, Pietro, and later to the Avengers. She has faced many personal and physical challenges over the course of her time with the team, including the loss of her brother and her lover, Vision, but has continued to fight for justice and protect those she cares about.`
  } ,

     {name:'Vision',
    url:'https://bit.ly/3okZlP0',
    borderCol:'#A459D1',
    heroUrl:'https://bit.ly/41Vmu8m',
    p:`Vision is an android created by Ultron who has the ability to phase through objects, shoot energy beams, and manipulate his density. He is often logical and analytical, but also has a strong sense of loyalty to the Avengers. Vision is known for his intelligence, his sense of duty, and his deep understanding of humanity. He has faced many challenges over the course of his time with the team, including grappling with his own identity and mortality, and the loss of his love, Scarlet Witch. He often serves as a key strategist and advisor to the Avengers, using his unique perspective and abilities to help solve complex problems and defeat their enemies.`
  },
   {name:'Falcon',
    url:'https://bit.ly/43yCkan',
    borderCol:'#FE6244',
    heroUrl:'https://bit.ly/3WpR5tB',
    p:`Sam Wilson is a former Air Force pararescueman and friend of Captain America, who uses a winged suit to fly and fight alongside the Avengers. He is a loyal and determined ally who often provides aerial support to the team. Falcon is known for his bravery, his sense of humor, and his unwavering commitment to his friends. He has faced many challenges over the course of his time with the team, including struggling to live up to Captain America's legacy and facing personal demons from his past.`
  },

 {name:'War Machine',
    url:'https://bit.ly/45lprll',
    borderCol:'#F0EB8D',
    heroUrl:'https://bit.ly/45x3S1A',
    p:`James Rhodes is a former Air Force pilot and friend of Tony Stark, who uses a heavily-armed suit of armor similar to Iron Man's. He is a loyal and dependable ally who often provides military expertise to the Avengers. War Machine is known for his courage, his tactical skills, and his sense of humor. He has faced many challenges over the course of his time with the team, including grappling with his own mortality and the loss of his ability to walk.`
  },

 {name:'Ant Man',
    url:'https://bit.ly/3pVick1',
    borderCol:'#DFA67B',
    heroUrl:'https://bit.ly/3pZhmTk',
    p:`Scott Lang is a former thief who uses a suit that allows him to shrink in size but increase in strength. He is often portrayed as a humorous and lighthearted character who provides a unique perspective to the team. Ant-Man is known for his resourcefulness, his quick thinking, and his ability to use his size-changing abilities to gain the upper hand in battles. He has faced many challenges over the course of his time with the team, including the loss of his mentor, Hank Pym, and the struggles of balancing his superhero duties with his responsibilities as a father.`
  },
   {name:'Doctor Strange',
    url:'https://bit.ly/3WmwKVY',
    borderCol:'#FC4F00',
    heroUrl:'https://bit.ly/41RbQzu',
    p:`Stephen Strange is a former neurosurgeon who becomes a master of the mystical arts and protects the world from supernatural threats. He is often portrayed as a serious and detached character who balances the physical strength of the other Avengers with his own magical abilities. Doctor Strange is known for his intelligence, his wisdom, and his ability to see beyond the physical realm. He has faced many challenges over the course of his time with the team, including learning to accept his role as a protector of the realm and dealing with the consequences of his actions.`
  },
   {name:'Black Panther',
    url:'https://bit.ly/3oqAXv9',
    borderCol:'#4D4D4D',
    heroUrl:'https://bit.ly/45lKxjF',
    p:` T'Challa is the king of Wakanda, a technologically advanced African nation, who uses his enhanced strength, agility, and vibranium suit to fight for justice and protect his people. He is often portrayed as a wise and honorable leader and provides a unique perspective to the team as a monarch and diplomat. Black Panther is known for his strength, his intelligence, and his unwavering commitment to his people and the greater good. He has faced many challenges over the course of his time with theteam, including the loss of his father and the struggles of balancing his responsibilities as king with his duties as an Avenger. Black Panther often serves as a key leader and strategist for the team, using his intelligence and diplomatic skills to navigate complex situations and outmaneuver their enemies.`
  },
   {name:'Captain Marvel',
    url:'https://bit.ly/3MLVVy4',
    borderCol:'#F0A04B',
    heroUrl:'https://bit.ly/3Ot6aIQ',
    p:`Carol Danvers is a former Air Force pilot who gains superhuman strength, energy projection powers, and the ability to fly after being exposed to alien technology. She is often portrayed as a confident and assertive character who brings a unique perspective to the team as a military veteran and spacefaring hero. Captain Marvel is known for her strength, her courage, and her unwavering commitment to justice. She has faced many challenges over the course of her time with the team, including grappling with her own identity and the loss of her mentor, Mar-Vell. Captain Marvel often serves as a key asset to the team, using her powers and experience to take on some of the toughest foes and protect the people she cares about.`
  },
  {name:'Hawkey',
  url:'https://bit.ly/3OCdfXs',
  borderCol:'#ACBCFF',
  heroUrl:'https://bit.ly/3MnfbAr',
  p:`Clint Barton is a skilled marksman and former S.H.I.E.L.D. agent who uses his bow and arrowto fight alongside the Avengers. He is a loyal and dedicated team member who often provides a grounded perspective to the group. Barton is known for his sharpshooting skills, his resourcefulness, and his willingness to put himself in harm's way to protect his friends. He has faced personal and physical challenges over the course of his time with the Avengers, including losing his family to the Snap, but has continued to fight for justice and protect the people he cares about.`
} ,



]


imageArray.forEach((elem)=>{
  scrollDiv.innerHTML+=`<div class="HeroImg";"><img src="${elem.url}"/><h3>${elem.name}</h3></div>`;



});


// Here on clicking the Hero Img div the image will feth in the main div.

let heroImg=document.querySelectorAll('.HeroImg');
    heroImg[0].style.opacity=`1`;
    heroImg[0].style.borderLeft='7px solid red';

 let headTxt=document.querySelector('.headTxt');
 let para=document.querySelector('.para');
 let bg=document.querySelector('.background');
 let dash=document.querySelector('.dash');



headTxt.textContent=`${imageArray[0].name}`;
para.textContent=`${imageArray[0].p}`;

let imageInsert=document.querySelector('.imgSection');
heroImg.forEach((elem)=>{

  let heroTxt=elem.querySelector('h3').textContent;
  elem.addEventListener('click', ()=>{
    //   Comparing by finding 
    let takeImg=imageArray.find((elem)=>{
      return elem.name==heroTxt;
      
    });

  bg.style.backgroundImage=`url('${takeImg.url}')`
  dash.style.backgroundColor=`${takeImg.borderCol}`
  imageInsert.style.boxShadow=`inset -11px 13px 39px -19px ${takeImg.borderCol}`
   
//    This is for the taxt and paragraph 
 headTxt.textContent=`${takeImg.name}`;
para.textContent=`${takeImg.p}`;
//    This is to make Other borde none 
    heroImg.forEach((ele)=>{
 
    ele.style.border=`0px`;
    ele.style.opacity=`0.5`;

   elem.style.borderLeft=`7px solid ${takeImg.borderCol}`;
   elem.style.opacity=`1`;
   elem.style.transition = 'border 0.2s ease, opacity 0.5s ease';

    })
    imageInsert.innerHTML=`<img src="${takeImg.heroUrl}"/>`;


  });


});



