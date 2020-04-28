
var data=[
    {imges:'stone.jpg',links:'p/2.html',title:'أعمال التكسيات - cladding works',type:'Finishing'},
    {imges:'asphalt.jpg',links:'2018/08/Asphalt-from-AtoZ.html',title:'الاسفلت من الألف إلى الياء',type:'LandScape'},
    {imges:'tagled.jpg',links:'2014/06/cladding.works.html',title:'تجليد الحوائط بالواح الأبلاكاج أوالكونتر',type:'Finishing'},
    {imges:'Cracks.jpg',links:'2014/06/Concrete.cracks.html',title:'الشروخ الخرسانية أسبابها وعلاجها',type:'Concrete'},
    {imges:'granet.jpg',links:'2015/12/Install.marble.walls.html',title:'طرق تُبيت الرخام ميكانيكا',type:'Finishing'},
    {imges:'doors.jpg',links:'2011/04/blog-post_23.html',title:'أنواع الأبواب',type:'Finishing'},
    {imges:'timber.jpg',links:'2014/07/industrial-timber.html',title:'انواع الأخشــــــاب الصناعيـــــة',type:'Finishing'},
    {imges:'dictionary.png',links:'2015/11/Shortcuts.documents.site.html',title:'اختصارات مستندات الموقع',type:'Pmp'},
    {imges:'plumper.jpg',links:'2019/08/plumbing-work.html',title:'بيانات ومعلومات هامه عن أعمال السباكة ',type:'Finishing'},
    {imges:'plaster.jpg',links:'p/blog-page.html',title:'اعمال بياض المحاره',type:'Finishing'},
    {imges:'gas.jpg',links:'2020/04/tyre.recyle.html',title:'انتاج مازوت - كربون اسود - من مخلفات الكاوتش المستهلك',type:'Others'},
    {imges:'safty.jpeg',links:'p/blog-page_1.html',title:'مهمـــات الــــوقايـة الشــــخصيـة',type:'Safty'},
    {imges:'23.jpg',links:'2018/04/construction.repair.pdf.html',title:'كتاب الطرق الحديثة لترميم و حماية المنشات الخرسانية',type:'Books'},
    {imges:'330.jpg',links:'2019/07/100.notes.civil.engineering.html',title:'100 معلومة لازم تكون عارفهم كـمهندس #تصميم_إنشائي',type:'Concrete'},
    {imges:'22.jpg',links:'2018/02/road.works.html',title:'معلومات سريعة في تنفيذ الطرق',type:'LandScape'},
    {imges:'contractor.jpg',links:'2018/02/road.works.html',title:'المواصفات الفنيه للاعمال الانشائيه المختلفه - شركة المقاولون العرب',type:'Books'},
    {imges:'shaker.png',links:'2014/12/Shaker.ElBehery.html',title:'تحميل كتاب شاكر البحيري الاهم لكل مهندس مدني',type:'Books'},
    {imges:'OSHA.jpg',links:'p/osh-act-occupationalsafety-health.html',title:'ما هي الأوشا؟ - OSHA',type:'Safty'},
    {imges:'planer.jpg',links:'2015/07/50Planner-Engineer.html',title:'كيف تكون مهندس تخطيط محترف - 50 سؤال وجواب',type:'Pmp'}
    ]
var txt=''
for(i=0;i<data.length;i++)
{
    txt+=`<div class="card5 mx-3" cat='${data[i].type}'>
    <a href="https://qfshatmhnds.blogspot.com/${data[i].links}" target="_blank"><img src="img/${data[i].imges}" alt="">
        <div class="tit"><p>${data[i].title}</p></div>
    </a>
    </div>`
}
document.getElementById("main").innerHTML=txt



// ---------------
$(function(){
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
