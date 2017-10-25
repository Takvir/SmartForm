var userData = {}
if(localStorage.getItem('userData'))
{
	var list = localStorage.getItem('userData');
	userData = JSON.parse(list);

	$("#answer").hide();
	$("#welcome").hide();
	$(".question").hide();
  	$("#"+userData.currentQuestion).show();

	$("#name").val(userData.name);
	$("#exampleInputEmail1").val(userData.email);

	//console.log(userData.html.likes);
	//console.log(userData.strengths.html);

	if(userData.strengths.html!="")
	{
		$('input[name=inlineRadioOptions][id=' + userData.strengths.html +']').attr('checked', true);

	} 
	if( userData.strengths.css!="")
	{
		$('input[name=inlineRadioOptions2][id=' + userData.strengths.css +']').attr('checked', true);

	} 
	if( userData.strengths.js!="")
	{
		$('input[name=inlineRadioOptions3][id=' + userData.strengths.js +']').attr('checked', true); 
	}
	
	

	var l = $("input[name='likesHTML']");
	for(var i=0; i<userData.html.likes.length; i++){

	    $(l[userData.html.likes[i]]).prop('checked', true);
	}

}
else{
	userData = {
    name:"",
    email:"",
    html: {likes: [], dislikes: []},
    css: {likes: [], dislikes: []},
    js: {likes: [], dislikes: []},
    strengths: {html:"", css:"", js:""},
    currentQuestion: "welcome"
  };
  localStorage.setItem('userData', JSON.stringify(userData));
 }

/*
}
  var userData = {
    name:"",
    email:"",
    html: [],
    css: [],
    js: [],
    strengths: {html:"", css:"", js:""},
    currentQuestion: "welcome"
 }
*/

var ques = [false, false, false];

function valiDateName(name){
	var re = /[a-zA-Z][a-zA-Z ]*/;
	return re.test(name);
}

function valiDateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

$("#startButton").click(function()
	{
		//$("#welcome").fadeOut();
		$("#welcome").hide();
		$("#q1").show();
	});


$("#q1next").click(function()
	{
		if(!valiDateName($("#name").val()))
		{
			alert("Please Enter Your Valid Name! try again!!!!!...");
		}
		else if (!valiDateEmail($("#exampleInputEmail1").val()) )
		{
			alert("Please Enter Your Valid Email! try again!!!!!...");
		}
		else 
		{
			userData.name = $("#name").val();
			userData.email = $("#exampleInputEmail1").val();

			$("#anname").append(userData.name);
			$("#anemail").append(userData.email);

			$("#q1").hide();
			$("#q2").show();
			userData.currentQuestion = "q2";

			localStorage.setItem('userData', JSON.stringify(userData));

			//console.log(userData.name + " " + userData.email);

		}
   
		
	});


$("#q2html").click(function()
	{
		$("#q2").hide();
		$("#q2a").show();
	});
$("#q2css").click(function()
	{
		$("#q2").hide();
		$("#q2b").show();
	});
$("#q2js").click(function()
	{
		$("#q2").hide();
		$("#q2c").show();
	});
$("#q2aprevious").click(function()
	{
		$("#q2a").hide();
		$("#q2").show();

	});
$("#q2bprevious").click(function()
	{
		$("#q2b").hide();
		$("#q2").show();

	});
$("#q2cprevious").click(function()
	{
		$("#q2c").hide();
		$("#q2").show();

	});
$("#q2anext").click(function()
{
	
	
	
	if(userData.html.likes.length > 0)
	{
		ques[0] = true;
		
		if(ques[1] == false)
		{
			$("#q2a").hide();
			$("#q2b").show();

		}
		else if(ques[2] == false)
		{
			$("#q2a").hide();
			$("#q2c").show();	

		}
		else
		{

			$("#q2a").hide();
			$("#q3").show();
			userData.currentQuestion = "q3";
			localStorage.setItem('userData', JSON.stringify(userData));

		}
	}
	else
	{
		alert("Please you have to choose atleast one !");
	}
		

});
$("#q2bnext").click(function()
{
	
	if(userData.html.likes.length > 0)
	{
		ques[1] = true;
		
		if(ques[0] == false)
		{
			$("#q2b").hide();
			$("#q2a").show();

		}
		else if(ques[2] == false)
		{
			$("#q2b").hide();
			$("#q2c").show();	

		}
		else
		{
			$("#q2b").hide();
			$("#q3").show();
			userData.currentQuestion = "q3";
			localStorage.setItem('userData', JSON.stringify(userData));

		}
	}
	else
	{
		alert("Please you have to choose atleast one !");
	}

});
$("#q2cnext").click(function()
{
	

	if(userData.html.likes.length > 0)
	{
		ques[2] = true;
		if(ques[0] == false)
		{
			$("#q2c").hide();
			$("#q2a").show();

		}
		else if(ques[1] == false)
		{
			$("#q2c").hide();
			$("#q2b").show();	

		}
		else
		{
			$("#q2c").hide();
			$("#q3").show();
			userData.currentQuestion = "q3";
			localStorage.setItem('userData', JSON.stringify(userData));

		}
	}
	else
	{
		alert("Please you have to choose atleast one !");
	}

});
$("#q3previous").click(function()
	{
		$("#q3").hide();
		$("#q2").show();
	});
$("#q3next").click(function()
	{
		$("#q3").hide();
		$("#thanks").show();
		//userData.currentQuestion = "thanks";
		localStorage.setItem('userData', JSON.stringify(userData));
	});

$("#viewanswer").click(function()
{
	$("#answer").fadeIn();

});

var line;

$("input[name='likesHTML']").click(function(event){
			if (this.checked) {

				line =  $(this).next('label').text();
				console.log("line: "+line);
				if($("input[name='likesHTML']").index(this)<4)
		    	{
		    		//line = this.value;
		     		$("#anhtmllikes").append(" ++ "+line+" ++ ");
		    	}
		    	else if($("input[name='likesHTML']").index(this)>3 && $("input[name='likesHTML']").index(this)<8)
		    	{
		    		//line = this.value;
		     		$("#anhtmldlikes").append(" ++ "+line+" ++ ");
		    	}
		    	else if($("input[name='likesHTML']").index(this)>7 && $("input[name='likesHTML']").index(this)<11)
		    	{
		    		$("#ancsslikes").append(" ++ "+line+" ++ ");
		    	}
		    	else if($("input[name='likesHTML']").index(this)>10 && $("input[name='likesHTML']").index(this)<15)
		    	{
		    		$("#ancssdlikes").append(" ++ "+line+" ++ ");
		    	}
		    	else if($("input[name='likesHTML']").index(this)>14 && $("input[name='likesHTML']").index(this)<19)
		    	{
		    		$("#anjslikes").append(" ++ "+line+" ++ ");
		    	}
		    	else{
		    		$("#anjsdlikes").append(" ++ "+line+" ++ ");
		    	}

		        console.log($("input[name='likesHTML']").index(this));
		        userData.html.likes.push($("input[name='likesHTML']").index(this));
		        console.log(userData.html);
		        localStorage.setItem('userData', JSON.stringify(userData));
        
		}
});

$("input[name='inlineRadioOptions']").click(function(event){
			if (this.checked) {

				
				$("#anhtmlstr").append(" "+$(this).next('label').text());
		        //console.log($("input[name='likesHTML']").index(this));
		        userData.strengths.html=$(this).attr('id');
		        console.log(userData.strengths.html);
		        localStorage.setItem('userData', JSON.stringify(userData));
        
		}
});

$("input[name='inlineRadioOptions2']").click(function(event){
			if (this.checked) {

				
				$("#ancssstr").append(" "+$(this).next('label').text());
		        //console.log($("input[name='likesHTML']").index(this));
		         userData.strengths.css=$(this).attr('id');
		        console.log(userData.strengths.css);
		        localStorage.setItem('userData', JSON.stringify(userData));
        
		}
});

$("input[name='inlineRadioOptions3']").click(function(event){
			if (this.checked) {

				
				$("#anjsstr").append(" "+$(this).next('label').text());
		        //console.log($("input[name='likesHTML']").index(this));
		        userData.strengths.js=$(this).attr('id');
		        console.log(userData.strengths.js);
		        localStorage.setItem('userData', JSON.stringify(userData));
        
		}
});

$("#delanswer").click(function(event){
  				$("#answer").hide('blind');
			  	$("#welcome").show('blind');
			  delete userData;
			  userData = {
			    name:"",
			    email:"",
			    html: {likes: [], dislikes: []},
			    css: {likes: [], dislikes: []},
			    js: {likes: [], dislikes: []},
			    strengths: {html:"", css:"", js:""},
			    currentQuestion: "welcome"
			  };
			  localStorage.setItem('userData', JSON.stringify(userData));
			  location.reload();

});