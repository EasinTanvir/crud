const {PHASE_DEVELOPMENT_SERVER} =require('next/constants')

module.exports=(phase)=>{

  if(phase===PHASE_DEVELOPMENT_SERVER){

 return {
  env:{
    username:'tanvir',
    password:'tanvir',
    clusters:'cluster0',
    server:'stream'
  }

 }
}

return {
  env:{
    username:'tanvir',
    password:'tanvir',
    clusters:'cluster0',
    server:'Prostream'
  }

 }





}