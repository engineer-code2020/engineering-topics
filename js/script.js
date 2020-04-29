$(function(){
    $.get("../topics.json",function(topics){
        var data=topics
        var txt=''
        for(i=0;i<data.length;i++)
        {
            txt+=`<div class="card5 mx-3" cat='${data[i].type}'>
            <a href="https://qfshatmhnds.blogspot.com/${data[i].links}" target="_blank"><img src="img/${data[i].imges}" alt="">
                <div class="tit"><p>${data[i].title}</p></div>
            </a>
            </div>`
        }
        $('#main').html(txt)
    })
// ---------------

    $(window).scroll(function(){
          
      if($(this).scrollTop() == 0){
          $("#to_up").hide()
  
      }else{$("#to_up").show()
  }})
  $("#to_up").click(function(){
    $("html,body").animate(
        {scrollTop:0},800
    )
  })

  $("#btnMain button").click(function(e){
      for(i=0;i<$("#btnMain button").length;i++)
       {
        $("#btnMain button").eq(i).removeClass('active')
       }
       $(e.target).addClass('active')
// ------------------------------------------------------------------
       let tp=$(e.target).text()
       for(let x=0;x<$('.card5').length;x++){
           if ($('.card5').eq(x).attr("cat")==tp ||tp=='All')
           {
            $('.card5').eq(x).css('display','block')
           }else($('.card5').eq(x).css('display','none'))
       }
  })
  $("#btnMain button").mouseenter(function(el){
    let tp2=$(el.target).text()
    for(let x=0;x<$('.card5').length;x++){
        if ($('.card5').eq(x).attr("cat")==tp2 ||tp2=='All')
        {
         $('.card5').eq(x).animate({opacity:1},100)
        }else($('.card5').eq(x).animate({opacity:.3},100))
    }
  })
  $("#btnMain button").mouseleave(function(){
    for(let z=0;z<$('.card5').length;z++){
        $('.card5').eq(z).animate({opacity:1},100)
    }
  })
})
