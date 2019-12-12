$(document).ready(function(){

    /* jQuery ui */
    $("input[type='checkbox']").checkboxradio();
    $("input[type='radio']").checkboxradio();
    $("select").selectmenu();

    /* Popup Close */
    $("#popup .popup-close").click(function() {
        $(this).parent().fadeOut();
        $(this).parents("#popup").fadeOut();
        $("body").css("overflow", "visible");
    });

    /* input 입력 타입이 날짜방식일 경우 형식에 맞게 '-' 생성 */
    $("input[data-type='date']").keyup(function() {
        if( this.value.length > 10){
            this.value = this.value.substr(0, 10);
        }
        var val         = this.value.replace(/\D/g, '');
        var original    = this.value.replace(/\D/g, '').length;
        var conversion  = '';
        for(i=0;i<2;i++){
            if (val.length > 4 && i===0) {
                conversion += val.substr(0, 4) + '-';
                val         = val.substr(4);
            }
            else if(original>6 && val.length > 2 && i===1){
                conversion += val.substr(0, 2) + '-';
                val         = val.substr(2);
            }
        }
        conversion += val;
        this.value = conversion;
    });

    /* input 입력 타입이 연락처(핸드폰)방식일 경우 형식에 맞게 '-' 생성 */
    $("input[data-type='phone']").keyup(function() {
        if( this.value.length > 13){
            this.value = this.value.substr(0, 13);
        }
        var val         = this.value.replace(/\D/g, '');
        var original    = this.value.replace(/\D/g, '').length;
        var conversion  = '';
        for(i=0;i<2;i++){
            if (val.length > 3 && i===0) {
                conversion += val.substr(0, 3) + '-';
                val         = val.substr(3);
            }
            else if(original>7 && val.length > 4 && i===1){
                conversion += val.substr(0, 4) + '-';
                val         = val.substr(4);
            }
        }
        conversion += val;
        this.value = conversion;
    });

    /* ie9 에서 flex를 사용한 경우 */
    $("*").each(function() {
        if ($(this).css("display") == "flex") {

            if ($(this).css("justify-content") == "flex-start") {
                $(this).find(" > *").css("float: left;")
            }
            
            else if ($(this).css("flex-wrap") == "wrap") {

            }
        }
    })

    $(".table-toggle > tbody > tr").click(function() {
        if ($(this).find(".toggle").css("display") != "block") {
            $(".table-toggle > tbody > tr").find(".toggle").slideUp();
            $(".table-toggle > tbody > tr").find("h3").css("font-weight", "normal");
            $(".table-toggle > tbody > tr").find(".toggle-arrow").find(">img").removeClass("flip");

            $(this).find(".toggle").slideDown();
            $(this).find("h3").css("font-weight", "700");
            $(this).find(".toggle-arrow").find(">img").addClass("flip");
        } else {
            $(this).find(".toggle").slideUp();
            $(this).find("h3").css("font-weight", "normal");
            $(this).find(".toggle-arrow").find(">img").removeClass("flip");
        }
    });
});
function popup(name) {
    $("#popup").fadeIn();
    $("#popup").find(" > #popup_window_" + name).fadeIn();
    $("body").css("overflow", "hidden");
}