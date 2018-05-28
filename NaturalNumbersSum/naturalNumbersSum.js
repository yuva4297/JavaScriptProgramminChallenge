function naturalNumbersSum()
{
    var num = parseInt(document.getElementById("number").value);
    if(validate_input(num))
    {
        var result = find_sum(num);
        document.getElementById("result").innerHTML = result;
    }
    else
    {
        clear_values();
        alert("Please Enter a Valid input");
    }
}
function validate_input(num)
{
    if(num<=0)
    {
        return false;
    }
    return true;
}
function find_sum(n)
{

    return (n*(n+1))/2 ;
}
function clear_values()
{
    document.getElementById("number").innerHTML = null;
    document.getElementById("result").innerHTML = null;
}