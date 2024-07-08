



$('#leftMenu .icon .openBtn').on('click',function(){
    $('.links').animate( {width:'toggle'} , 1000)
})

$(function(){
    $('.loader').fadeOut(1000,function(){
        $('.loding').slideUp(1000,function(){
            $('body').css('overflow','auto')
        })
    })
})



$('#sliderDown .toggle1').on('click',function(){
    $('.inner1').animate({height:'toggle',padding:'toggle'},1000)
})
$('#sliderDown .toggle2').on('click',function(){
    $('.inner2').animate({height:'toggle',padding:'toggle'},1000)
})
$('#sliderDown .toggle3').on('click',function(){
    $('.inner3').animate({height:'toggle',padding:'toggle'},1000)
})
$('#sliderDown .toggle4').on('click',function(){
    $('.inner4').animate({height:'toggle',padding:'toggle'},1000)
})




function startCountdown() {
    let countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();
    let countdownfunction = setInterval(function () {
      let now = new Date().getTime();
      let distance = countDownDate - now;
  
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);


      $("#card1").text(days + " D");
      $("#card2").text(hours + " H");
      $("#card3").text(minutes + " M");
      $("#card4").text(seconds + " S");

      if (distance < 0) {
        clearInterval(countdownfunction);
        $("#countdown").text("CountDown Done !!!");
      }
    }, 1000);
  }
  $(document).ready(function() {
    startCountdown();
  });



$(function(){
    function updateCharCount(){
        let text=$('#myTextArea').val();
        let countedChars =text.length;
        let remainingCharacters =100-countedChars
        $('#spanNumber').text(remainingCharacters)
        if(countedChars >=100){
            $("#myTextArea").attr("maxlength", 100); 
            $("#spanNumber").text("Maximum characters reached");
        }else{
            $("#myTextArea").removeAttr("maxlength"); 
        }
    }
    $("#myTextArea").on("input", function () {
        updateCharCount();
      });
})

