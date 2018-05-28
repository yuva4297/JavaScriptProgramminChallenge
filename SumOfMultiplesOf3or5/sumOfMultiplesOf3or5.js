function sumOfMultiplesOf3or5()
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
    var sum = 0;
    for(var i = 1; i < n; i++)
    {
        if(isMultipleOf3or5(i))
        {
            sum += i;
        }
    }
    return sum;
    
}
function clear_values()
{
    document.getElementById("number").innerHTML = null;
    document.getElementById("result").innerHTML = null;
}
function isMultipleOf3or5(num)
{
    if( num % 3 == 0 || num % 5 == 0)
    {
        return true;
    }
    return false;
}