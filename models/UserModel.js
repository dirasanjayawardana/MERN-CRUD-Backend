// import mongoose from "mongoose";

// const User = mongoose.Schema({
//     name:{
//         type: String,
//         required: true
//     },
//     email:{
//         type: String,
//         required: true
//     },
//     gender:{
//         type: String,
//         required: true
//     }
// });

// export default mongoose.model('Users', User);


import mongoose from "mongoose";

const User = mongoose.Schema({
    tshAll:{
        type: String,
        required: true
    },
    tshGpm:{
        type: String,
        required: true
    },
    haCut:{
        type: String,
        required: true
    },
    haBalance:{
        type: String,
        required: true
    },
    sugarTch:{
        type: String,
        required: true
    },
    sugarRend:{
        type: String,
        required: true
    },
    sugarEst:{
        type: String,
        required: true
    },
    plantCap:{
        type: String,
        required: true
    },
    plantTotal:{
        type: String,
        required: true
    },
    gerRpc:{
        type: String,
        required: true
    },
    gerR1:{
        type: String,
        required: true
    },
    gerR2:{
        type: String,
        required: true
    },
    gerR3:{
        type: String,
        required: true
    },
    gerR4:{
        type: String,
        required: true
    },
    rfGlifosat:{
        type: String,
        required: true
    },
    rfPlough:{
        type: String,
        required: true
    },
    rfPlant:{
        type: String,
        required: true
    },
    rfPre:{
        type: String,
        required: true
    },
    rfFertilize:{
        type: String,
        required: true
    },
    weedsLow:{
        type: String,
        required: true
    },
    weedsMed:{
        type: String,
        required: true
    },
    weedsHigh:{
        type: String,
        required: true
    }
});

export default mongoose.model('Users', User);