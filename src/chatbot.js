exports.handler = async (event) => {
    let {name, slots} = event.currentIntent
    
    if (!slots.DaysSinceEaten&&
        slots.NumericFeelings <= 5 &&
        slots.NumericFeelings) {

        return {
            dialogAction:{
                type: "ElicitSlot",
                intentName: name,
                slotToElicit: "DaysSinceEaten",
                slots
            }
        }
    }
    if(!slots.MeditationCheck&&
        slots.NumericFeelings > 5){
        return{
            dialogAction:{
                type: "ElicitSlot",
                intentName: name,
                slotToElicit: "MeditationCheck",
                slots
            }
        }

    }
    
    if(!slots.ExerciseCheck&&
        slots.MeditationCheck == 'yes'){
        return{
            dialogAction:{
                type: "ElicitSlot",
                intentName: name,
                slotToElicit: "ExerciseCheck",
                slots
            }
        }
    }

    if(slots.ExerciseCheck=='no'){
        return{
            dialogAction:{
                type: "ElicitIntent",
                "message":{
                    "contentType": "PlainText",
                    "content": "Try and go for a walk today"
                } 
            }
        }
    }
    return{
        dialogAction:{
            type: "Delegate",
            slots
        }
    }
 
};



//"responseCard":{
   // "version": integer-value,
  //  "contentType": "application/vnd.amazonaws.card.generic",
  //  "genericAttachments":[
   //     {
    //        "title": "testimage",
    //        "subTitle": "subtextimage",
   //         "imageUrl": "https://www.facebook.com/Pndejoide0/photos/a.104787814248049/454889565904537/?type=1&theater",
   //         "buttons":[
  //              {
   //                 "text": "testbutton1",
   //                 "value": "6"
  //              }]
 //       }]
//}