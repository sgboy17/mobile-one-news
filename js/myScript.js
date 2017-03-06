/**
 * Created by nghiapv on 28/02/2017.
 */
$(document).ready(function () {
    $("input[name='order']").on("change",function () {
        switch ($("input[name='order']:checked").val()){
            case "date":
                $("input[name='order']").prop("checked",false).checkboxradio("refresh");
                $("input[value='date']").prop("checked",true).checkboxradio("refresh");
                $("#popupOption").popup("close");
                break;
            case "capacity":
                $("input[name='order']").prop("checked",false).checkboxradio("refresh");
                $("input[value='capacity']").prop("checked",true).checkboxradio("refresh");
                $("#popupOption").popup("close");
                break;
            default:
                $("input[name='order']").prop("checked",false).checkboxradio("refresh");
                $("input[value='name']").prop("checked",true).checkboxradio("refresh");
                $("#popupOption").popup("close");
                break;
        }
    })
})