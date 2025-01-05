export const API_KEY = 'AIzaSyAO0JX3ZAxb7Z12VWMALAttjF09dAvC16Q'

export const value_converter=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}