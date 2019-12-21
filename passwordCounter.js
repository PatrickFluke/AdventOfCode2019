let range = [138307,654504]
let possibilities = [];
var numberOfPossibilities = 0;
for (let x = range[0]; x <= range[1];x++)
{   
    if (x.toString().length = 6)
    {
        let stringCurNum = x.toString().split('');
        var adjChecker = true;
        for (let y = 0; y < stringCurNum.length-1; y++)
        {
            if (stringCurNum[y+1] < stringCurNum[y])
            {
                adjChecker = false;
            }
        }
        if (adjChecker == true)
        {
            adjChecker = false;
            for (let y = 0; y < stringCurNum.length -1; y++)
            {
                if (stringCurNum[y+1] == stringCurNum[y] & stringCurNum[y-1] !== stringCurNum[y] & stringCurNum[y+1] !== stringCurNum[y+2])
                {
                    adjChecker = true;
                    
                }
            }
        }
        if (adjChecker == true)
        {
            numberOfPossibilities++;
            possibilities.push(x);
        }
    }
}
console.log(numberOfPossibilities);
