// // code your solution here
const record = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    { year: "2012", result: "N/A"},
    { year: "2011", result: "N/A"},
    { year: "2010", result: "N/A"},
    { year: "2009", result: "N/A"},
    { year: "2008", result: "N/A"},]

// let foundItem = record.find(superbowlWin)
//         console.log(foundItem)

function superbowlWin(item) {
    let foundItem = item.find(nothing)
    console.log(foundItem)
    if (!foundItem){
        return undefined
    }
return foundItem.year
}

function nothing(item) {    
    if( item.result === "W")
    {return true}}
foundItem.year