gsap.from(".box",{
    y:200,
    duration:1,
    rotate:360,
})

gsap.to(".ext1",{
    x:-750,
    y:-207,
    rotate:360,
    duration:1,
    })

    gsap.to(".ext2",{
        x:750,
        y:-207,
      rotate:360,
        duration:1,
        })
gsap.from(".nav",{
  y:-100,
  duration:1,
  stagger:1
})
       

       gsap.from(".line1",{
        y:-900,
        duration:2,
        opacity:0,
       })
       gsap.from(".line2",{
        y:-900,
        duration:3,
        opacity:0,
       })
       gsap.from("img",{
        y:-900,
    duration:1,
    delay:2,
        opacity:0,

       })

       gsap.from(".line3",{
        y:900,
        duration:2,
        opacity:0,
       })
       gsap.from(".line4",{
        y:900,
        duration:3,
        opacity:0,
       })


       var main=document.querySelector(".main")
       var crsr=document.querySelector(".cursor")

       main.addEventListener("mousemove",function(dets){
        crsr.style.left=dets.x+"px"
        crsr.style.top=dets.y+"px"
       })
       