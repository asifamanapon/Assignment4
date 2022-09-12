function publicBusFare(passengers) {
    var remainingPassengers = 0;
    if (typeof(passengers) == 'number' && passengers >= 111) {
        if (passengers >= 50) {
            remainingPassengers = passengers % 50;
            if (remainingPassengers >= 11) {
                remainingPassengers = remainingPassengers % 11;
                if (remainingPassengers == 0) {
                   
                    return 'We have no passengers the in Public Bus' ;
                }
                
            }
            var theBusFare = remainingPassengers * 250;
            return theBusFare;
        }
       
        
    }
    else {
        return 'Enter a valid number or Passenger greater than 111';
    }

}

var thePicnicparticipants = publicBusFare(112);
console.log(thePicnicparticipants);