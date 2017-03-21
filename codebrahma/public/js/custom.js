
$(function(){
     var i=0;
     var detailsArr;
     var key1=1;
     var key2=1;
     var first;
     var second;
     var f;
    $(document).ready(function() {
       $('#save1').on('click',function(e){
    e.preventDefault();
        var firstname = $("#firstname").val();
        var f=firstname;
        var lastname = $("#lastname").val();
        var fathername = $("#fathername").val();
        var mothername = $("#mothername").val();
        $.ajax({
            type:"POST",
            url:"http://localhost:8080/Namedetails",
            data:{
                  firstname:firstname,
                  lastname:lastname,
                  fathername:fathername,
                  mothername:mothername
            },
            success:function(newdata){
              i++;
              var url = './secondpage.html';
              window.location.href = url ;
            }
        });
  });
  $('#save2').on('click',function(e){
        e.preventDefault();
        var street1 = $("#street1").val();
        var street2= $("#street2").val();
        var city = $("#city").val();
        var zip = $("#zip").val();
        var pstreet1 = $("#pstreet1").val();
        var pstreet2= $("#pstreet2").val();
        var pcity = $("#pcity").val();
        var pzip = $("#pzip").val();
                $.ajax({
                  type:"POST",
                  url:"http://localhost:8080/Address" ,
                  data:{
                    // "id":i,
                    "street1":street1,
                    "street2":street2,
                    "city":city,
                    "zip":zip,
                    "pstreet1":pstreet1,
                    "pstreet2":pstreet2,
                    "pcity":pcity,
                    "pzip":pzip
                  },
                      success:function(newdata){
                        i++;
                        var url = './thirdpage.html';
                        window.location.href = url ;
                      }
                  });
         });
     $('#ed-add').on('click',function(){
        $('#education').append('<div id="education"> <div class="container third" id="three" style="background:rgba(5,34,247,0.1);border-radius: 5px 5px 5px 5px;">      <form role="form">       <h1>Education Details</h1>          <div class="form-group">            <label for="typeofexam_'+key1+'" class="cols-sm-2 control-label">Type of Exam<span style="color:red;">*</span></label>            <div class="cols-sm-10">              <div class="input-group">                <span class="input-group-addon"><i class="fa fa-book" aria-hidden="true"></i></span>                <select class="form-control" id="typeofexam_'+key1+'">                    <option>10th</option>                    <option>12th</option>                    <option>UG</option>                    <option>PG</option>                </select>              </div>            </div>          </div>          <div class="form-group">            <label for="board_'+key1+'" class="cols-sm-2 control-label">Educational Board<span style="color:red;">*</span></label>            <div class="cols-sm-10">              <div class="input-group">                <span class="input-group-addon"><i class="glyphicon glyphicon-book" aria-hidden="true"></i></span>                <input type="text" class="form-control" id="board_'+key1+'"/>              </div>            </div>          </div>          <div class="form-group">            <label for="percent_'+key1+'" class="cols-sm-2 control-label">Percentage Obtained<span style="color:red;">*</span></label>            <div class="cols-sm-10">              <div class="input-group">                <span class="input-group-addon"><i class="fa fa-percent" aria-hidden="true"></i></span>                <input type="number" class="form-control" id="percent_'+key1+'" max="100" min="1"/>              </div>            </div>          </div>      </form>     </div>  </div>  <div style="margin-top: 30px;margin-left: 1020px;"></div>');
        setTimeout(function(){
        $('#education').ScrollTo({
        duration: 2000,
        easing: 'linear'
              });
          });
        key1++;
      });

     $('#ed-save').on('click', function() {
      var edrow=[];
      var object1={};
      for(var edcounter=0;edcounter<key1;edcounter++){
        var typeofexam= $( "#typeofexam_"+edcounter+" option:selected" ).text();
        var board=$("#board_"+edcounter).val();
        var percent=$("#percent_"+edcounter).val();
        edrow[edcounter]={
              "typeofexam":typeofexam,
              "board":board,
              "percent":percent
            }
      }
      object1["qualification"]=edrow;
          $.ajax({
            type:"POST",
            url:"http://localhost:8080/Education/",
            data: JSON.stringify(object1),
            contentType: "application/json",
            success:function(newdata){
            } 
          }); 
        
        var url = './fourthpage.html?var1='+key1;
        window.location.href = url ;
     });


     $('#ex-add').on('click',function(){  
        $('#experience').append('<div id="experience"> <div class="container fourth" id="four" style="background:rgba(5,34,247,0.1);border-radius: 5px 5px 5px 5px;">      <form role="form">             <h1>Experience Details"</h1>          <div class="form-group">            <label for="company_'+key2+'" class="cols-sm-2 control-label">Company Name<span style="color:red;">*</span></label>            <div class="cols-sm-10">              <div class="input-group">                <span class="input-group-addon"><i class="material-icons md-18" style="font-size: 18px;">&#xe8f9;</i></span>           <input type="text" class="form-control" id="company_'+key2+'"/>              </div>            </div>          </div>          <div class="form-group">            <label for="years_'+key2+'" class="cols-sm-2 control-label">No of Years Worked<span style="color:red;">*</span></label>            <div class="cols-sm-10">               <input type="number" class="form-control" id="years_'+key2+'" max="100" min="1"/>           </div>          </div>      </form>     </div>  </div>  <div style="margin-top: 30px;margin-left: 1020px;"></div>');
        setTimeout(function(){
        $('#experience').ScrollTo({
        duration: 2000,
        easing: 'linear'
              });
          });
        key2++;
      });

      $("#ex-save").on('click',function(){
        function getUrlVars(){
          var vars = [], hash;
          var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
          for(var i = 0; i < hashes.length; i++){
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
          }
          return vars;
        }
      
      var exrow=[];
      var object2={};
      for(var excounter=0;excounter<key2;excounter++){
        var company=$("#company_"+excounter).val();
        var years=$("#years_"+excounter).val();
        exrow[excounter]={
              "company":company,
              "years":years
            }
      }
      object2["companies"]=exrow;
          $.ajax({
            type:"POST",
            url:"http://localhost:8080/Experience/",
            data: JSON.stringify(object2),
            contentType: "application/json",
            success:function(newdata){
            } 
          }); 
        var first= getUrlVars()["var1"];
        var url = './finalpage.html?var1='+first+ '&'+ 'var2='+key2;
        window.location.href = url ;
      });


      $("#editing").on('click',function(){
        function getUrlVars(){
          var vars = [], hash;
          var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
          for(var i = 0; i < hashes.length; i++){
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
          }
          return vars;
        }
        var ed= getUrlVars()["var1"];
        var ex=getUrlVars()["var2"];
        $(":input").attr("readonly", false);
        document.getElementById('edit').innerHTML = '<button class="btn btn-success" id="save" ><span class="glyphicon glyphicon-ok"></span>Save</button>';
        $('#save').on('click',function(){
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var fathername = $("#fathername").val();
        var mothername = $("#mothername").val();
        var present = $("#present").val();
        var permanent = $("#permanent").val();
var t=[];
for (var i = ed; i >= 0; i--) {
 
 var t2={
  "typeofexam":$("#typeofexam_"+i).val(),
  "board":$("#board_"+i).val(),
  "percent":$("#percent_"+i).val()
};
t.push(JSON.stringify(t2));
}
var t3=[];
for (var i = ed; i >= 0; i--) {
 
 var t4={
  "company":$("#company_"+i).val(),
  "years":$("#years_"+i).val()
};
t3.push(JSON.stringify(t4));
}
var obj={
              "firstname":firstname,
              "lastname":lastname,
              "fathername":fathername,
              "mothername":mothername,
              "presentaddress":present,
              "permanentaddress":permanent,
              "qualification":t,
              "experience":t3
            }
            $.ajax({
            type:"POST",
            url: "http://localhost:8080/Entiredata",
            data:obj,
            success:function() {
              $(':input').attr('readonly', 'readonly');
              $('#save').remove();
            }
          });
          return false;
        });        
      }); 
    });
});

