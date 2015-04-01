define(function (require, exports, module){
	var $ = require("jq"),
		eAjaxData = "";
	function deletebtninit(filter, attrurl, attrid, parameters, callback, frush){
		$(filter).on("click", function(){
			if (!confirm('请再次确定')){
				return false;
			}
			var that = $(this);
			$.extend(parameters, {id: that.attr(attrid)});
			$.post(that.attr(attrurl), parameters, function(data){
				eAjaxData = data;
				var func = callback + "()";
				eval(func);
				if(frush){
					location.reload();
				}
			}, "json");
		});
	}
	exports.deletebtninit = deletebtninit;

	function ajaxbtninit(filter, attrurl, ajaxdata, callback, frush, needconfirm){
		$(filter).on("click", function(){
            if (needconfirm && !confirm('请再次确定')){
                           return false;
            }
			//var t = eval("(" + $(this).attr(ajaxdata) + ")");
			//console.log(t.test);
			var that = $(this),
				ajdata = eval("(" + that.attr(ajaxdata) + ")");
			$.post(that.attr(attrurl), ajdata, function(data){
				eAjaxData = data;
				var func = callback + "()";
				eval(func);
				if(frush){
					location.reload();
				}
			}, "json");
		});
	}
	exports.ajaxbtninit = ajaxbtninit;

	function ajaxradioinit(filter, attrurl, ajaxdata, callback, frush){
		$(filter).on("change", function(){
			var that = $(this),
				ajdata = eval("(" + that.attr(ajaxdata) + ")");
			$.post(that.attr(attrurl), ajdata, function(data){
				eAjaxData = data;
				if(typeof callback == "function"){
					callback();
				}else{
					var func = callback + "()";
					eval(func);
				}
				if(frush){
					location.reload();
				}
			}, "json");
		});
	}
	exports.ajaxradioinit = ajaxradioinit;
	
	function deleteRow(){
		if(eAjaxData.status == 'true'){
			$('#row'+eAjaxData.id).fadeTo("slow",0.01).slideUp("slow");
		}else{
			alert(eAjaxData.status);
		}
	}
	function editRow(){
    	location.reload();
	}
    function unloadRow(){
        location.reload();

    }
});