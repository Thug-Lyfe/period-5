/**
 * Created by butwhole on 24/10/2016.
 */
{
    function foo () { return 1 }
    console.log(foo() === 1)
    {
        function foo () { return 2 }
        foo() === 2
    }
    console.log(foo() === 1)
}