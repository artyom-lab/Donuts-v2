$(function() {

  $(document).on('click.bs.dropdown.data-api', '.dropdown-menu', function (e) { 
  e.stopPropagation();
  });


  Waves.attach('.btn-donate');
  Waves.attach('.btn',  ['waves-light']);
  Waves.init();

((w, d, u, n) => {
  let opCSlider = {pause: (ms) => new Promise((r) => setTimeout(r, ms)),
  events: {
    click: async (e) => {
      if (e.target.classList.contains(`arrow-left`) &&
          e.target.parentElement.parentElement.classList.contains(
              `module-cascade-slider`)) {
          e.target.parentElement.parentElement.children[1].children[0].classList.add(
              `glide-up-first`);
          await opCSlider.pause(200);
          e.target.parentElement.parentElement.children[1].children[0].classList.remove(
              `glide-up-first`);
          e.target.parentElement.parentElement.children[1].children[0].classList.add(
              `glide-up-last`);
          e.target.parentElement.parentElement.children[1].appendChild(
          e.target.parentElement.parentElement.children[1].children[0]);
          await opCSlider.pause(200);
          e.target.parentElement.parentElement.children[1].lastElementChild.classList.remove(
              `glide-up-last`);}
      if (e.target.classList.contains(`arrow-right`) &&
          e.target.parentElement.parentElement.classList.contains(
              `module-cascade-slider`)) {
          e.target.parentElement.parentElement.children[1].lastElementChild.classList.add(
              `glide-down-last`);
          await opCSlider.pause(200);
          e.target.parentElement.parentElement.children[1].lastElementChild.classList.remove(
              `glide-down-last`);
          e.target.parentElement.parentElement.children[1].lastElementChild.classList.add(
              `glide-up-first`);
          e.target.parentElement.parentElement.children[1].insertBefore(
          e.target.parentElement.parentElement.children[1].lastElementChild,
          e.target.parentElement.parentElement.children[1].children[0]);
          await opCSlider.pause(200);
          e.target.parentElement.parentElement.children[1].children[0].classList.remove(
              `glide-up-first`);}
        }
      }
    };
    d.addEventListener(`click`, opCSlider.events.click);
    w.addEventListener(`beforeunload`, () => {
    d.removeEventListener(`click`, opCSlider.events.click);
    opCSlider = u;});
  })(
    window,
    document,
    undefined,
    null
  );


  var popupTimer;
  function delayPopup(popup) {
    popupTimer = setTimeout(function() { $(popup).popover('hide') }, 4000);
  };
  $('.copy').click(function () {
    clearTimeout(popupTimer);
    $(".popover").popover('hide');
    var $input = $(this).parents('.copy-box').find('.copy-text');
    /* Select the text field */
    $input.select();
    /* Copy the text inside the text field */
    document.execCommand("copy");
    $(this)
      .popover({
        title    : 'Successfully copied!',
        // content  : false,
      })
      .popover('show')
    ;
    // Hide popup after 4 seconds
    delayPopup(this);
  });

$(".scroll-to").mPageScroll2id({
  scrollSpeed: 900,
}); 

autosize();
function autosize(){
    var text = $('.autosize');

    text.each(function(){
        $(this).attr('rows',1);
        resize($(this));
    });

    text.on('input', function(){
        resize($(this));
    });
    
    function resize ($text) {
        $text.css('height', 'auto');
        $text.css('height', $text[0].scrollHeight+'px');
    }
}

});




