$(document).ready(function(){

    /* jQuery ui - [checkbox, radio, select] UI 커스텀 */
    $("input[type='checkbox']").checkboxradio();
    $("input[type='radio']").checkboxradio();
    $("select").selectmenu();

    /* Popup Close */
    $("#popup .popup-close").click(function() {
        $(this).parent().fadeOut();
        $(this).parents("#popup").fadeOut();
        $("body").css("overflow", "visible");
    });

    /* input 입력 타입(data-type)이 날짜방식일 경우 형식에 맞게 '-' 생성 */
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

    /* 최신/인기상품 탭 - 메인페이지 전용 */
    $(".section-list").find("> ul").hide();
    $(".section-list").find("> ul[data-index='1']").show();

    $(".section-nav li a").click(function() {
        $(this).parents(".section-nav").find(">li").removeClass("on");
        $(this).parent().addClass("on");

        var click_index = $(this).parent().attr("data-index");
        $(".section-list > ul").fadeOut(300, function() {
            setTimeout(function() {
                $(".section-list > ul[data-index='" + click_index + "']").fadeIn(300);
            }, 300);
        });
        return false;
    })

    /* input 입력 타입(data-type)이 연락처(핸드폰)방식일 경우 형식에 맞게 '-' 생성 */
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

    /* 슬라이드 토글 게시판 - FAQ리스트 전용 */
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

    /* 전체선택이 존재하는 테이블영역에서 전체선택 클릭시 전체 체크박스 전체선택 */
    $("table thead th label.all-check input[type='checkbox']").change(function() {
        if ($(this).prop("checked")) {
            $(this).parents("table").find("tbody th:first-child .ui-checkboxradio-label input[type='checkbox']").prop("checked", true);
            $(this).parents("table").find("tbody th:first-child .ui-checkboxradio-label").addClass("ui-checkboxradio-checked");
            $(this).parents("table").find("tbody th:first-child .ui-checkboxradio-label").addClass("ui-state-active");
            $(this).parents("table").find("tbody th:first-child .ui-checkboxradio-label .ui-checkboxradio-icon").addClass("ui-icon-check");
            $(this).parents("table").find("tbody th:first-child .ui-checkboxradio-label .ui-checkboxradio-icon").addClass("ui-state-checked");
            $(this).parents("table").find("tbody th:first-child .ui-checkboxradio-label .ui-checkboxradio-icon").removeClass("ui-icon-blank");
        } else {
            $(this).parents("table").find("tbody th:first-child .ui-checkboxradio-label input[type='checkbox']").prop("checked", false);
            $(this).parents("table").find("tbody th:first-child .ui-checkboxradio-label").removeClass("ui-checkboxradio-checked");
            $(this).parents("table").find("tbody th:first-child .ui-checkboxradio-label").removeClass("ui-state-active");
            $(this).parents("table").find("tbody th:first-child .ui-checkboxradio-label .ui-checkboxradio-icon").removeClass("ui-icon-check");
            $(this).parents("table").find("tbody th:first-child .ui-checkboxradio-label .ui-checkboxradio-icon").removeClass("ui-state-checked");
            $(this).parents("table").find("tbody th:first-child .ui-checkboxradio-label .ui-checkboxradio-icon").addClass("ui-icon-blank");
        }
    });

    /* 전체선택이 존재하는 테이블영역에서 모든 체크박스영역을 감지하여 하나라도 풀린상태이면 전체체크가 체크 해제, 모두 체크된 상태이면 전체선택도 체크선택 */
    $("table thead th label.all-check").parents("table").find("tbody th:first-child .ui-checkboxradio-label input[type='checkbox']").change(function() {
        for (var i=1; i<=$(this).parents("tbody").find("> tr").length; i++) {
            if ($(this).parents("tbody").find("tr:nth-child(" + i + ") th:first-child .ui-checkboxradio-label input[type='checkbox']").prop("checked")) {
                $(this).parents("table").find("thead th:first-child .all-check input[type='checkbox']").prop("checked", true);
                $(this).parents("table").find("thead th:first-child .all-check").addClass("ui-checkboxradio-checked");
                $(this).parents("table").find("thead th:first-child .all-check").addClass("ui-state-active");
                $(this).parents("table").find("thead th:first-child .all-check .ui-checkboxradio-icon").addClass("ui-icon-check");
                $(this).parents("table").find("thead th:first-child .all-check .ui-checkboxradio-icon").addClass("ui-state-checked");
                $(this).parents("table").find("thead th:first-child .all-check .ui-checkboxradio-icon").removeClass("ui-icon-blank");
            } else {
                $(this).parents("table").find("thead th:first-child .all-check input[type='checkbox']").prop("checked", false);
                $(this).parents("table").find("thead th:first-child .all-check").removeClass("ui-checkboxradio-checked");
                $(this).parents("table").find("thead th:first-child .all-check").removeClass("ui-state-active");
                $(this).parents("table").find("thead th:first-child .all-check .ui-checkboxradio-icon").removeClass("ui-icon-check");
                $(this).parents("table").find("thead th:first-child .all-check .ui-checkboxradio-icon").removeClass("ui-state-checked");
                $(this).parents("table").find("thead th:first-child .all-check .ui-checkboxradio-icon").addClass("ui-icon-blank");
                break;
            }
        }
    });
});

/* 팝업 */
function popup(name) {
    $("#popup").fadeIn();
    $("#popup").find(" > #popup_window_" + name).fadeIn();
    $("body").css("overflow", "hidden");
}