exports.handler = async (event) => {
    let {name, slots} = event.currentIntent
    
    
    if(!slots.PositiveFeelingResponse&&
        slots.FeelingChecker&&
        (slots.FeelingChecker.includes('good') ||
        slots.FeelingChecker.toLowerCase() =='great'||
        slots.FeelingChecker.toLowerCase()=='awesome')){
        return{
            dialogAction:{
                type: "ElicitSlot",
                intentName: name,
                slotToElicit: "PositiveFeelingResponse",
                slots
            }
            
        }
    }
    if(!slots.NegativeFeelingResponse&&
        slots.FeelingChecker&&
        (slots.FeelingChecker.toLowerCase()=='bad'||
        slots.FeelingChecker.toLowerCase()=='awful')){
        return{
            dialogAction:{
                type: "ElicitSlot",
                intentName: name,
                slotToElicit: "NegativeFeelingResponse",
                slots
            }
        }
    }
    //Positive Feeling Response Branch
    
    if(!slots.BasicQuestion&&
       //!slots.FeelingChecker&&
       //slots.PositiveFeelingResponse.toLowerCase()=='yes'&&
        slots.PositiveFeelingResponse&&
        slots.PositiveFeelingResponse.toLowerCase()=='yes'){
        return{
            dialogAction: {
                type: "ElicitSlot",
                intentName: name,
                slotToElicit: "BasicQuestion",
                slots
            }
        }
    }
    
    if(!slots.BasicQuestion&&
       //!slots.FeelingChecker&&
       //slots.PositiveFeelingResponse.toLowerCase()=='yes'&&
        slots.PositiveFeelingResponse&&
        slots.PositiveFeelingResponse.toLowerCase()=='no'){
        return{
            dialogAction: {
                type: "Close",
                "fulfillmentState": "Fulfilled",
                "message":{
                    "contentType": "PlainText",
                    "content": "I see you like tech- work- and fashion, here I found today’s top rated activites workout, relax outside, and group uno game I hope  you find something interesting :) Goodbye"
                }
            }
        }
    }
    
    if(!slots.EvexiaResponse&&
        slots.BasicQuestion){
        return{
            dialogAction: {
                type: "ElicitSlot",
                intentName: name,
                slotToElicit: "EvexiaResponse",
                slots
            }
        }
    }
    
    if(slots.EvexiaResponse){
        return{
            dialogAction:{
                type: "Close",
                "fulfillmentState": "Fulfilled",
                "message":{
                    "contentType": "PlainText",
                    "content": "Keep a personal mood diary to learn more about yourself. Adding activites to your entries will help you identify what’s good for you: workout for 40 mins, walk with a stressball for 10 mins, or play a boardgame for 20 mins. "
                }
            }
        }
    }
    
    
    
    //Negative Feeling Response Branch
    //"content": "Once again I'm sorry to hear that. But always remeber It's going to be ok in the end. If. it's not ok then that means it's not the end!",

    if(!slots.MoodDiary&&
        slots.NegativeFeelingResponse){
        return{
            dialogAction:{
                type: "ElicitSlot",
                intentName: name,
                slotToElicit: "MoodDiary",
                slots,
                //"fulfillmentState": "Fulfilled",
                "message":{
                    "contentType": "PlainText",
                    "content": "Always remeber It's going to be ok in the end. If it's not ok then that means it's not the end! Would you like me to find some activites that will help you take your mind off your situation? (Yes/No)"
                    
                }
            }
        }
    }
    
    if(slots.MoodDiary&&
       slots.MoodDiary.toLowerCase()=='yes'){
        return{
            dialogAction:{
                type: "Close",
                fulfillmentState: "Fulfilled",
                "message":{
                    "contentType": "PlainText",
                    "content": "Maybe keeping a personal mood diary will help. Adding activites to your entries will help you identify what’s good for you: workout for 40 mins, walk with a stressball for 10 mins, or play a boardgame for 20 mins. "
                }
            }
        }
    }
    if(slots.MoodDiary&&
       slots.MoodDiary.toLowerCase()=='no'){
           return{
            dialogAction:{
                type: "Close",
                fulfillmentState: "Fulfilled",
                "message":{
                    "contentType": "PlainText",
                    "content": "Alright then. Remember Evexia will always be here when you need it."
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