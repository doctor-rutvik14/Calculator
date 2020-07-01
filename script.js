var k =0;
var f=0;

function Value(num){
    if(f===1){
        document.forms.ans.value = "";
        f=0;
    }
    k = 0;
    document.forms.Ans.value += num;
}
function ValueS(nu){
    var x = nu;
    if( x==='+' || x==='/' || x==='*' || x==='-' || x==='%' ) {
        // if(k===0){
        // document.forms.Ans.value += x;
        // k = 1;
        // }
        var s= document.forms.Ans.value;
        if(s.charAt(s.length-1)== '+' || s.charAt(s.length-1)== '*' || s.charAt(s.length-1)== '-' || s.charAt(s.length-1)== '/' || s.charAt(s.length-1)== '%'){
            //s.charAt(s.length-1)= x;
            var s = s.replace(s.charAt(s.length-1), x);
            document.forms.Ans.value = s;
        }
        else{
            document.forms.Ans.value += x;
        }
        
    }
    // else if( x==='%')
    // {   var i;
    //     var b=document.forms.Ans.value;
    //     for(i = b.length -1; i >= 0 ; i--)
    //     {
    //         if(b[i]==='+' || b[i]==='-' || b[i]==='-' || b[i]==='/'){
    //             var c= (b.indexOf(b.length + 1))/100;
    //             document.forms.Ans.value = c;
    //         }
    //     }
    // }
}
function equal(){
    var elem = document.forms.ans.value;
    if((elem.charAt(elem.length-1)==='+') ||(elem.charAt(elem.length-1)==='*')||(elem.charAt(elem.length-1)==='-')||(elem.charAt(elem.length-1)==='/'))
    {
        elem =false;
    }
    if(elem){
    document.forms.ans.value = eval(elem);
    f=1;
    }
}
function clearAll(){
    document.forms.ans.value = "";
}
function Bcks(){
    var elem = document.forms.ans.value;
    document.forms.ans.value = elem.substring(0,elem.length - 1);
    k = 0;
    
}
function ValueP()
{
    var an= document.getElementById('ans').value;
    for(i=an.length-1;i>=0;i--)
    {
        if(an[i]==='+' || an[i]==='-' || an[i]==='*' || an[i]==='/')
        {
            indoflnum=i+1;
            break;
        }
    }
    if(i===-1){
        indoflnum =0;
    }
    var lnum="";
    for(i=indoflnum;i<=an.length-1;i++)
    {
        lnum = lnum.concat(an[i]);
    }
    //document.write(`an= ${an}\n`);
    var z= (lnum/100);
    //document.write(`z= ${z}\n`);
    //var g= document.forms.Ans.value;
    //document.write(`g1= ${g}\n`);
    an=an.replace(lnum, z);
   // document.write(`g2= ${g}\n`);
    document.forms.Ans.value = an;
}