const userDataDump = [
  "1,Joel Peltonen,1921,Users|Admin|Sudo",
  "2,Joeltest Peltonentest,1921,Users",
  "3,Joeltest Peltonentest,,Users",
  "4,Leoj Nenotlep,,Users|Admin",
  "5,root,,Sudo|System",
  "6,Ryukahr,1901,Users|Admin",
  "7,Adamantium Claws,1332,Users",
  "8,The benevolent malevolence,,Users",
  "9,Jim Carrey,1961,Users|Admin",
  "A,Bela Lugosi,1666,Users",
  "B,Robert Smith,,Users|Admin|Sudo",
  "C,Fsh,,Users",
  "D,Racher Carson,,Users",
  "D,Cheesedude51,1951,Users",
  "E,cron,,System",
];

var getInitials = (string) => {
  var names = string.split(' '),
      initials = names[0].substring(0, 1).toUpperCase();
  
  if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
};

let userDate = (arrayData) => {

  const arrayOfUserData = [];
  for (let i = 0; i < arrayData.length; i++){
  
     arrayOfUserData[i] = arrayData[i].split(",");
}

for (let i = 0; i < arrayOfUserData.length; i++) {

  
  const element = arrayOfUserData[i];

  const objectData = {

id:element[0],
fullName: element[1],
initial:getInitials(element[1]),
birthYear: element[2]?element[2]:"unknown",
departments: element[3].split("|"),



  };

  console.log(objectData);
}



}
userDate(userDataDump)




