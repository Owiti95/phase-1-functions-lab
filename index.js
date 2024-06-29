// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    const distance = Math.abs(pickupLocation - hqLocation);
    return distance;
}

//console.log(distanceFromHqInBlocks(50));


    function distanceFromHqInFeet(pickupLocation) {
    const feetPerBlock = 264;
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feet = blocks * feetPerBlock;
    return feet;
}
//console.log(distanceFromHqInFeet(50));


    function distanceTravelledInFeet(startBlock, endBlock) {
    const feetPerBlock = 264;
    const blocksTravelled = Math.abs(endBlock - startBlock);
    const feetTravelled = blocksTravelled * feetPerBlock;
    return feetTravelled;
}
//console.log(distanceTravelledInFeet(34, 38));





function calculatesFarePrice(start, destination) {
	const feetPerBlock = 264; 
	const distanceInBlocks = Math.abs(destination - start);
	const distanceInFeet = distanceInBlocks * feetPerBlock;
    
if (distanceInFeet <= 400)
{
	return 0;
}
else if (distanceInFeet > 400 && distanceInFeet <= 2000)
{
	return (distanceInFeet - 400) * 0.02;
}
else if (distanceInFeet > 2000 && distanceInFeet <= 2500)
{
	return 25;
}
else 
{
	return 'cannot travel that far';
}
}