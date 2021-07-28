exports.handler = async (event) => {
    let {name, slots} = event.currentIntent
    
    if (!slots.SelfHelpPrompt&&
        slots.NumericFeelings > 0 &&
        slots.NumericFeelings < 11 &&
        slots.NumericFeelings) {

        return {
            dialogAction:{
                type: "ElicitSlot",
                intentName: name,
                slotToElicit: "SelfHelpPrompt",
                slots
            }
        }
    }


    if(!slots.DisorderCheck&&
        slots.SelfHelpPrompt&&
        slots.SelfHelpPrompt.toLowerCase()== 'no'){
        return{
            dialogAction: {
                type: "ElicitSlot",
                intentName: name,
                slotToElicit: "DisorderCheck",
                slots
            }
        }
    }
    
    if(!slots.DisorderCheck&&
        slots.SelfHelpPrompt&&
        slots.SelfHelpPrompt.toLowerCase()== 'yes'){
            return{
                dialogAction:{
                    type: "ElicitIntent",
                    "message":{
                        "contentType": "PlainText",
                        "content": "Call my friends at 1-800-273-TALK!"
                        
                    }
                }
            }
        }

     //"contentType": "PlainText",
     //"content": "Call my friends at 1-800-273-TALK!"
    
    if(!slots.ExerciseCheck&&
        slots.DisorderCheck == 'yes'){
        return{
            dialogAction:{
                type: "ElicitSlot",
                intentName: name,
                slotToElicit: "ExerciseCheck",
                slots
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