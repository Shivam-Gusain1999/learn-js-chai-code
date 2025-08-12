//// function ke andr this kaam nahi karta hai///
//// this kaa kaam bs object ke andr he hogaa ///


 
const college = {
     emailid :"bgrcampuspauri@gmail.com",
     built : 2014,
     clgName: function(){

        let name = 'hnbgu'
        let password = 4589
        console.log(college.emailid)
        console.log(this.built)
        console.log(name);
        

        
     },
     
}
college.clgName() ///yhn v ho jara hai baahr call dena jruri h

//  console.log(college.emailid)    //// yhn to access ho jaare hai 