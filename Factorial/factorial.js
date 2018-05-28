function factorial()
{
    var num = document.getElementById("number").value;
    if(validate_input(num))
    {
        var result = find_fact(num, 1);
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
    if(num<0)
    {
        return false;
    }
    return true;
}
function find_fact(num, result)
{
    if(num == 0)
    {
        return result;
    }
    return find_fact(num-1, num*result);
}
function clear_values()
{
    document.getElementById("number").innerHTML = null;
    document.getElementById("result").innerHTML = null;
}